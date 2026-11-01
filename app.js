/* ============================================================
   app.js — what the page actually DOES
   ------------------------------------------------------------
   The journey:
     1. Arrive            -> card face-down, "Draw a card"
     2. Click             -> 1 second flip, random card revealed
     3. After drawing     -> button dimmed, "Come back tomorrow"
     4. Come back later   -> same card, no flip, "Your card for today"
     5. After midnight    -> back to step 1

   Testing: add ?reset to the address to clear today's card.
   ============================================================ */

/* ---------- settings you might want to change ---------- */

const STORAGE_KEY = "dailyTarot.v1";  // where today's card is remembered
const FLIP_MS = 1000;                  // how long the flip takes

/* ---------- grab the bits of the page we need ---------- */

const el = {
  stage:      document.getElementById("stage"),
  flipper:    document.getElementById("flipper"),
  backArt:    document.getElementById("cardBackArt"),
  face:       document.getElementById("cardFace"),
  prompt:     document.getElementById("prompt"),
  reading:    document.getElementById("reading"),
  cardName:   document.getElementById("cardName"),
  keywords:   document.getElementById("keywords"),
  meaning:    document.getElementById("meaning"),
  todayNote:  document.getElementById("todayNote"),
  drawButton: document.getElementById("drawButton"),
};

/* Does the visitor prefer less animation? */
function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/* ------------------------------------------------------------
   REMEMBERING TODAY'S CARD
   We store a plain date like "2026-10-31" alongside the card.
   Because we build that string from the visitor's own clock, it
   changes at THEIR midnight, in THEIR time zone.

   Every call is wrapped in try/catch: some browsers block storage
   on files opened directly from disk, and the page should still
   work (it just won't remember) rather than break.
   ------------------------------------------------------------ */

function todayKey() {
  const d = new Date();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day   = String(d.getDate()).padStart(2, "0");
  return d.getFullYear() + "-" + month + "-" + day;
}

function loadSaved() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;                 // storage unavailable — carry on
  }
}

function save(cardId, reversed) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      date: todayKey(), id: cardId, reversed: reversed,
    }));
  } catch (e) {
    /* nothing to do — the reading still works for this visit */
  }
}

function clearSaved() {
  try { localStorage.removeItem(STORAGE_KEY); } catch (e) {}
}

/* ------------------------------------------------------------
   DRAWING A CARD
   Math.random() gives a number from 0 up to (but not including) 1.
   Multiplying by 78 and rounding down gives 0-77, each equally
   likely — so every card in the deck has the same chance.
   ------------------------------------------------------------ */

function drawRandom() {
  const card = DECK[Math.floor(Math.random() * DECK.length)];
  const reversed = Math.random() < 0.5;    // a straight coin flip
  return { card: card, reversed: reversed };
}

function findCardById(id) {
  return DECK.find(function (c) { return c.id === id; }) || null;
}

/* ------------------------------------------------------------
   DRAWING THE CARD FACE
   One template for all 78 cards: rank on top, symbol in the
   middle, name at the bottom. The Star is the single exception —
   it keeps the original hand-made artwork.
   ------------------------------------------------------------ */

function starArtwork() {
  return '' +
    '<div class="star-art">' +
      '<img class="sa-glow" src="assets/glow.svg" alt="" aria-hidden="true">' +
      '<img class="sa-ring" src="assets/ring.svg" alt="" aria-hidden="true">' +
      '<img class="sa-star" src="assets/star-eight-pointed.svg" alt="" aria-hidden="true">' +
      '<img class="sa-core" src="assets/star-core.svg" alt="" aria-hidden="true">' +
      '<img class="sa-sp sa-sp1" src="assets/sparkle.svg" alt="" aria-hidden="true">' +
      '<img class="sa-sp sa-sp2" src="assets/sparkle.svg" alt="" aria-hidden="true">' +
      '<img class="sa-sp sa-sp3" src="assets/sparkle.svg" alt="" aria-hidden="true">' +
      '<img class="sa-sp sa-sp4" src="assets/sparkle.svg" alt="" aria-hidden="true">' +
      '<img class="sa-sp sa-sp5" src="assets/sparkle.svg" alt="" aria-hidden="true">' +
    '</div>';
}

function renderFace(card) {
  const isStar = card.symbol === "star";

  // The middle of the card: either the original Star art, or the
  // shared symbol for this card.
  const middle = isStar
    ? '<div class="card-art"></div>'
    : '<div class="card-art"><div class="card-symbol">' + SYMBOLS[card.symbol] + '</div></div>';

  el.face.innerHTML =
    '<p class="card-rank">' + card.rank + '</p>' +
    middle +
    '<div class="card-divider"></div>' +
    '<p class="card-face-name">' + card.name.toUpperCase() + '</p>';

  // The Star's artwork sits across the whole card, so it goes on
  // the side itself rather than inside the template.
  const side = el.face.parentElement;
  const old = side.querySelector(".star-art");
  if (old) old.remove();
  if (isStar) side.insertAdjacentHTML("beforeend", starArtwork());
}

/* ------------------------------------------------------------
   THE WORDS BELOW THE CARD
   ------------------------------------------------------------ */

function renderReading(card, reversed) {
  const side = reversed ? card.reversed : card.upright;
  el.cardName.textContent = card.name + (reversed ? ", Reversed" : "");
  el.keywords.textContent = side.keywords.join(" · ");
  el.meaning.textContent  = side.meaning;
}

/* ------------------------------------------------------------
   THE TWO STATES OF THE PAGE
   ------------------------------------------------------------ */

/* Before drawing — frame 01 */
function showFaceDown() {
  el.flipper.classList.remove("is-revealed", "is-reversed");
  el.prompt.hidden = false;
  el.reading.hidden = true;
  el.todayNote.hidden = true;
  el.stage.disabled = false;
  el.stage.setAttribute("aria-label", "Draw a card");
  el.drawButton.disabled = false;
  el.drawButton.textContent = "Draw a card";
}

/* After drawing — frames 02 and 03.
   `animate` is false when the visitor is simply coming back:
   their card is already decided, so it shouldn't flip again. */
function showRevealed(card, reversed, animate, isReturnVisit) {
  renderFace(card);
  renderReading(card, reversed);

  if (reversed) el.flipper.classList.add("is-reversed");

  if (animate) {
    // Give the browser one moment to notice the new face before
    // we start turning the card, otherwise there's nothing to see.
    requestAnimationFrame(function () {
      el.flipper.classList.add("is-revealed");
    });
  } else {
    // Switch instantly with no flip at all.
    el.flipper.style.transition = "none";
    el.flipper.classList.add("is-revealed");
    void el.flipper.offsetWidth;          // forces the change to apply now
    el.flipper.style.transition = "";
  }

  el.prompt.hidden = true;
  el.todayNote.hidden = !isReturnVisit;

  const revealWords = function () {
    el.reading.hidden = false;
  };
  if (animate) {
    window.setTimeout(revealWords, FLIP_MS * 0.55);   // as it turns face-on
  } else {
    revealWords();
  }

  el.stage.disabled = true;
  el.stage.setAttribute("aria-label", card.name + (reversed ? ", reversed" : ""));
  el.drawButton.disabled = true;
  el.drawButton.textContent = "Come back tomorrow";
}

/* ------------------------------------------------------------
   WHAT HAPPENS WHEN YOU CLICK
   ------------------------------------------------------------ */

let drawing = false;      // stops a very fast double-click drawing twice

function handleDraw() {
  if (drawing || el.drawButton.disabled) return;
  drawing = true;

  const result = drawRandom();
  save(result.card.id, result.reversed);
  showRevealed(result.card, result.reversed, !prefersReducedMotion(), false);

  window.setTimeout(function () { drawing = false; }, FLIP_MS);
}

el.drawButton.addEventListener("click", handleDraw);
el.stage.addEventListener("click", handleDraw);

/* ------------------------------------------------------------
   WHEN THE PAGE FIRST OPENS
   ------------------------------------------------------------ */

function start() {
  // The card back is the same picture every time.
  el.backArt.innerHTML = CARD_BACK_SVG;

  // ?reset in the address clears today's card (for testing).
  if (window.location.search.indexOf("reset") !== -1) {
    clearSaved();
    // Tidy the address bar so a refresh doesn't reset it again.
    if (window.history.replaceState) {
      window.history.replaceState({}, "", window.location.pathname);
    }
    showFaceDown();
    return;
  }

  const saved = loadSaved();
  const card = saved ? findCardById(saved.id) : null;

  // Only reuse it if it was saved TODAY and the card still exists.
  if (saved && saved.date === todayKey() && card) {
    showRevealed(card, !!saved.reversed, false, true);
  } else {
    showFaceDown();
  }
}

start();
