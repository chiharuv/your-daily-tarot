/* ============================================================
   symbols.js — the little gold drawings on each card
   ------------------------------------------------------------
   Each entry is a small SVG picture, 100x100 units.

   They use stroke="currentColor", which means "use whatever
   text colour the surrounding CSS says". That's why one CSS
   rule can make every symbol gold at once.

   To change a drawing, edit its shapes below. To add a new one,
   add a new line here and point a card's `symbol` at its name.
   ============================================================ */

/* Shorthand so we don't repeat the same <svg> opening 26 times. */
function svg(contents) {
  return '<svg viewBox="0 0 100 100" fill="none" stroke="currentColor" ' +
         'stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" ' +
         'aria-hidden="true" focusable="false">' + contents + '</svg>';
}

const SYMBOLS = {

  /* ---------- Major Arcana ---------- */

  // The Fool — a sun above a cliff edge
  fool: svg('<circle cx="68" cy="28" r="10"/>' +
            '<path d="M68 10v5M68 41v5M86 28h5M45 28h5M81 15l3-3M81 41l3 3"/>' +
            '<path d="M10 74h34l14 16"/><circle cx="30" cy="66" r="3.5" fill="currentColor"/>'),

  // The Magician — the infinity loop
  magician: svg('<ellipse cx="34" cy="50" rx="16" ry="13"/>' +
                '<ellipse cx="66" cy="50" rx="16" ry="13"/>'),

  // The High Priestess — a crescent between two pillars
  priestess: svg('<path d="M56 26a24 24 0 100 48 19 19 0 110-48z" fill="currentColor" stroke="none"/>' +
                 '<path d="M16 24v52M84 24v52"/>'),

  // The Empress — a sheaf of wheat
  empress: svg('<path d="M50 88V30"/>' +
               '<ellipse cx="40" cy="40" rx="5" ry="9"/><ellipse cx="60" cy="40" rx="5" ry="9"/>' +
               '<ellipse cx="40" cy="56" rx="5" ry="9"/><ellipse cx="60" cy="56" rx="5" ry="9"/>' +
               '<ellipse cx="50" cy="26" rx="5" ry="9"/>'),

  // The Emperor — a crown
  emperor: svg('<path d="M22 66V38l14 11 14-19 14 19 14-11v28z"/><path d="M22 74h56"/>'),

  // The Hierophant — two crossed keys
  hierophant: svg('<circle cx="32" cy="30" r="8"/><path d="M36 37l14 38"/><path d="M44 62l8 4M40 70l8 4"/>' +
                  '<circle cx="68" cy="30" r="8"/><path d="M64 37L50 75"/><path d="M56 62l-8 4M60 70l-8 4"/>'),

  // The Lovers — two interlocking rings
  lovers: svg('<circle cx="39" cy="50" r="19"/><circle cx="61" cy="50" r="19"/>'),

  // The Chariot — a wheel beneath a canopy
  chariot: svg('<path d="M24 32h52"/><path d="M32 32v8M68 32v8"/>' +
               '<circle cx="50" cy="64" r="20"/><circle cx="50" cy="64" r="4" fill="currentColor" stroke="none"/>' +
               '<path d="M50 44v40M30 64h40M36 50l28 28M64 50L36 78"/>'),

  // Strength — a steady flame within a circle
  strength: svg('<circle cx="50" cy="50" r="25"/>' +
                '<path d="M50 34c9 11 7 20 0 28-7-8-9-17 0-28z" fill="currentColor" stroke="none"/>'),

  // The Hermit — a lantern
  hermit: svg('<path d="M36 42h28l3 34H33z"/><path d="M41 42l4-9h10l4 9"/>' +
              '<path d="M50 33V22"/><path d="M42 22a8 8 0 0116 0"/>' +
              '<circle cx="50" cy="60" r="6" fill="currentColor" stroke="none"/>'),

  // Wheel of Fortune — a spoked wheel
  wheel: svg('<circle cx="50" cy="50" r="27"/><circle cx="50" cy="50" r="9"/>' +
             '<path d="M50 23v-0M50 14v9M50 77v9M14 50h9M77 50h9M24 24l7 7M69 69l7 7M76 24l-7 7M31 69l-7 7"/>' +
             '<path d="M50 32v36M32 50h36M38 38l24 24M62 38L38 62"/>'),

  // Justice — a set of scales
  justice: svg('<path d="M50 28v50M38 80h24"/><path d="M20 38h60"/>' +
               '<path d="M20 38v6M80 38v6"/>' +
               '<path d="M10 44q10 16 20 0M70 44q10 16 20 0"/>'),

  // The Hanged Man — suspended, seeing it upside down
  hanged: svg('<path d="M50 16v20"/><path d="M28 36h44L50 82z"/>'),

  // Death — a scythe, the clean ending
  death: svg('<path d="M38 24l16 62"/><path d="M38 28q36 0 36 26"/>'),

  // Temperance — pouring between two cups
  temperance: svg('<path d="M20 34h20l-4 18H24z"/><path d="M60 54h20l-4 18H64z"/>' +
                  '<path d="M34 50c12 6 20 10 32 14"/>'),

  // The Devil — the thing we keep returning to
  devil: svg('<circle cx="50" cy="56" r="21"/>' +
             '<path d="M33 40c-5-12 1-19 8-15M67 40c5-12-1-19-8-15"/>' +
             '<path d="M39 50h22L50 68z" fill="currentColor" stroke="none"/>'),

  // The Tower — the sudden clearing
  tower: svg('<path d="M34 86V48h32v38"/><path d="M31 48l19-15 19 15"/><path d="M46 86V68h8v18"/>' +
             '<path d="M62 12l-9 17h9l-11 16"/>'),

  // The Star — hope (the page uses your original artwork for this one)
  star: svg('<path d="M50 16 55.2 37.4 74 26 62.6 44.8 84 50 62.6 55.2 74 74 55.2 62.6 50 84 ' +
            '44.8 62.6 26 74 37.4 55.2 16 50 37.4 44.8 26 26 44.8 37.4z" ' +
            'fill="currentColor" stroke="none"/>'),

  // The Moon — uncertainty, instinct
  moon: svg('<path d="M62 18a32 32 0 100 64 25 25 0 110-64z" fill="currentColor" stroke="none"/>'),

  // The Sun — plain warmth
  sun: svg('<circle cx="50" cy="50" r="17" fill="currentColor" stroke="none"/>' +
           '<path d="M50 20V10M50 90V80M20 50H10M90 50H80M28 28l-7-7M79 79l-7-7M72 28l7-7M21 79l7-7"/>'),

  // Judgement — a sun rising over the horizon
  judgement: svg('<path d="M16 72h68"/><path d="M32 72a18 18 0 0136 0"/>' +
                 '<path d="M50 34V22M30 42l-7-7M70 42l7-7"/>'),

  // The World — a laurel wreath closing the circle
  world: svg('<path d="M50 18C26 28 26 72 50 82"/><path d="M50 18c24 10 24 54 0 64"/>' +
             '<circle cx="50" cy="50" r="9"/>'),

  /* ---------- Minor Arcana suits ---------- */

  // Wands — a staff with new growth
  wand: svg('<path d="M50 88V24"/>' +
            '<path d="M50 42c-11-3-13-14-3-15M50 52c11-3 13-14 3-15"/>'),

  // Cups — a chalice
  cup: svg('<path d="M28 30h44c0 19-9 28-22 28s-22-9-22-28z"/>' +
           '<path d="M50 58v18M32 80h36"/>'),

  // Swords — a blade, point upward
  sword: svg('<path d="M50 12v50"/><path d="M30 62h40"/><path d="M50 62v20"/>' +
             '<circle cx="50" cy="86" r="4.5"/>'),

  // Pentacles — a star within a circle
  pentacle: svg('<circle cx="50" cy="50" r="26"/>' +
                '<path d="M50 32 54.1 44.4 67.1 44.4 56.6 52.1 60.6 64.6 50 56.9 ' +
                '39.4 64.6 43.4 52.1 32.9 44.4 45.9 44.4z"/>'),
};

/* ------------------------------------------------------------
   The back of the card — one picture, fully symmetrical.
   A repeating diamond lattice, faded out in the middle so the
   medallion has room to breathe.
   ------------------------------------------------------------ */
const CARD_BACK_SVG =
  '<svg viewBox="0 0 264 429" fill="none" aria-hidden="true" focusable="false">' +
    '<defs>' +
      /* one diamond, tiled across the whole card */
      '<pattern id="lattice" width="34.65" height="34.65" patternUnits="userSpaceOnUse" ' +
        /* the offset centres the grid on the card, so it stays symmetrical */
        'patternTransform="translate(10.725 23.925)">' +
        '<path d="M17.325 11.325 23.325 17.325 17.325 23.325 11.325 17.325z" ' +
          'fill="currentColor" opacity="0.28"/>' +
      '</pattern>' +
      /* a soft hole in the middle of the lattice */
      '<radialGradient id="clearing" cx="50%" cy="50%" r="50%">' +
        '<stop offset="0%" stop-color="#2a1550" stop-opacity="1"/>' +
        '<stop offset="55%" stop-color="#2a1550" stop-opacity="0.9"/>' +
        '<stop offset="100%" stop-color="#2a1550" stop-opacity="0"/>' +
      '</radialGradient>' +
      '<radialGradient id="backglow" cx="50%" cy="50%" r="50%">' +
        '<stop offset="0%" stop-color="currentColor" stop-opacity="0.22"/>' +
        '<stop offset="100%" stop-color="currentColor" stop-opacity="0"/>' +
      '</radialGradient>' +
    '</defs>' +
    '<rect x="12" y="12" width="240" height="405" fill="url(#lattice)"/>' +
    '<ellipse cx="132" cy="214" rx="86" ry="86" fill="url(#clearing)"/>' +
    '<ellipse cx="132" cy="214" rx="78" ry="78" fill="url(#backglow)"/>' +
    /* the medallion */
    '<circle cx="132" cy="214" r="48" stroke="currentColor" stroke-width="1.5" opacity="0.75"/>' +
    '<circle cx="132" cy="214" r="39" stroke="currentColor" stroke-width="1" opacity="0.4"/>' +
    '<path d="M132 189 136.6 204.3 150 196.6 143.4 210.4 158 214 143.4 217.6 150 231.4 ' +
      '136.6 223.7 132 239 127.4 223.7 114 231.4 120.6 217.6 106 214 120.6 210.4 114 196.6 ' +
      '127.4 204.3z" fill="currentColor"/>' +
    '<circle cx="132" cy="214" r="4.5" fill="#f7ebbc"/>' +
  '</svg>';
