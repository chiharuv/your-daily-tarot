/* ============================================================
   cards.js — the full 78-card tarot deck
   ------------------------------------------------------------
   This file is PURE DATA. It contains no page logic at all,
   so you can reuse it for other readings later (relationship,
   career, three-card spreads) just by including this one file.

   Each card looks like this:

     id        a unique string, e.g. "major-00" or "cups-queen"
     name      the card's full name, e.g. "Ace of Cups"
     rank      what prints at the TOP of the card ("XVII", "ACE")
     arcana    "major" or "minor"
     suit      null for Majors; otherwise wands/cups/swords/pentacles
     symbol    which drawing to use (see symbols.js)
     upright   { keywords: [3 words], meaning: "2-3 sentences" }
     reversed  { keywords: [3 words], meaning: "2-3 sentences" }

   To change any wording, just edit the text between the quotes.
   ============================================================ */

const DECK = [

  /* ---------------- MAJOR ARCANA (22 cards) ---------------- */

  {
    id: "major-00", name: "The Fool", rank: "0", arcana: "major", suit: null, symbol: "fool",
    upright: {
      keywords: ["beginnings", "innocence", "a leap of faith"],
      meaning: "Something new is asking you to begin before you feel ready. Step forward with an open heart — not knowing the whole path is part of the gift."
    },
    reversed: {
      keywords: ["hesitation", "recklessness", "poor timing"],
      meaning: "You may be hovering at the edge, or leaping without looking down. Pause long enough to check the ground beneath you, then move with care."
    }
  },
  {
    id: "major-01", name: "The Magician", rank: "I", arcana: "major", suit: null, symbol: "magician",
    upright: {
      keywords: ["focus", "capability", "making it real"],
      meaning: "You have more tools in your hands than you have been giving yourself credit for. Name clearly what you want, and begin shaping it today."
    },
    reversed: {
      keywords: ["scattered energy", "self-doubt", "untapped skill"],
      meaning: "Your energy is spread thin across too many directions at once. Gather it back to a single intention before you spend any more of it."
    }
  },
  {
    id: "major-02", name: "The High Priestess", rank: "II", arcana: "major", suit: null, symbol: "priestess",
    upright: {
      keywords: ["intuition", "stillness", "inner knowing"],
      meaning: "The answer is already forming quietly inside you. Give it stillness rather than more opinions, and it will come to the surface on its own."
    },
    reversed: {
      keywords: ["noise", "ignored instinct", "secrets"],
      meaning: "You have been talking over your own intuition for a while now. Step away from the noise and listen again, gently, without arguing back."
    }
  },
  {
    id: "major-03", name: "The Empress", rank: "III", arcana: "major", suit: null, symbol: "empress",
    upright: {
      keywords: ["nurture", "abundance", "growth"],
      meaning: "Something in your life is ready to be tended rather than pushed. Offer it warmth, patience and good soil, and it will grow at its own pace."
    },
    reversed: {
      keywords: ["depletion", "self-neglect", "smothering"],
      meaning: "You have been pouring care outward and leaving very little for yourself. Let yourself be nourished too — that is not selfishness, it is maintenance."
    }
  },
  {
    id: "major-04", name: "The Emperor", rank: "IV", arcana: "major", suit: null, symbol: "emperor",
    upright: {
      keywords: ["structure", "boundaries", "steady authority"],
      meaning: "Structure is your friend right now, not your enemy. One clear boundary or a simple written plan will steady everything that currently feels loose."
    },
    reversed: {
      keywords: ["rigidity", "control", "resisting help"],
      meaning: "Control has started to feel like a cage, whether it is yours or someone else's. Loosen your grip a little and let the situation breathe."
    }
  },
  {
    id: "major-05", name: "The Hierophant", rank: "V", arcana: "major", suit: null, symbol: "hierophant",
    upright: {
      keywords: ["guidance", "tradition", "learning"],
      meaning: "There is real wisdom in the tried and tested today. Lean on a mentor, a teaching, or a practice that has held other people safely before you."
    },
    reversed: {
      keywords: ["outgrown rules", "questioning", "own path"],
      meaning: "A rule you inherited no longer fits the person you have become. You are allowed to keep the kindness in it and leave the rest behind."
    }
  },
  {
    id: "major-06", name: "The Lovers", rank: "VI", arcana: "major", suit: null, symbol: "lovers",
    upright: {
      keywords: ["connection", "choice", "alignment"],
      meaning: "A choice is asking you to be honest about what you genuinely value. Choose from love rather than from fear and the rest will arrange itself."
    },
    reversed: {
      keywords: ["misalignment", "avoidance", "divided heart"],
      meaning: "Something is out of step between what you say and what you actually want. Name the truth gently — first to yourself, then to anyone else."
    }
  },
  {
    id: "major-07", name: "The Chariot", rank: "VII", arcana: "major", suit: null, symbol: "chariot",
    upright: {
      keywords: ["momentum", "willpower", "direction"],
      meaning: "You are further along than you think, and the momentum belongs to you. Hold your direction steady and keep going without looking sideways."
    },
    reversed: {
      keywords: ["pulled apart", "stalling", "lost direction"],
      meaning: "You are pulling in two directions at once and tiring yourself out in the middle. Decide which road is truly yours, then commit to it properly."
    }
  },
  {
    id: "major-08", name: "Strength", rank: "VIII", arcana: "major", suit: null, symbol: "strength",
    upright: {
      keywords: ["gentle courage", "patience", "quiet power"],
      meaning: "Your gentleness is the real strength here, not your force. Meet the difficult thing with patience and you will feel it begin to soften."
    },
    reversed: {
      keywords: ["self-criticism", "doubt", "forcing it"],
      meaning: "You are being harder on yourself than this situation deserves. Try speaking to yourself the way you would speak to someone you love."
    }
  },
  {
    id: "major-09", name: "The Hermit", rank: "IX", arcana: "major", suit: null, symbol: "hermit",
    upright: {
      keywords: ["solitude", "reflection", "inner light"],
      meaning: "Solitude is not loneliness today — it is where your clarity happens to live. Give yourself one genuinely quiet hour and the answer will arrive."
    },
    reversed: {
      keywords: ["isolation", "withdrawal", "reaching out"],
      meaning: "You have withdrawn further than you actually meant to. One small reach outward will warm things more quickly than you expect it to."
    }
  },
  {
    id: "major-10", name: "Wheel of Fortune", rank: "X", arcana: "major", suit: null, symbol: "wheel",
    upright: {
      keywords: ["turning point", "cycles", "good fortune"],
      meaning: "The season is turning whether or not you push it along. Trust the movement — what has left is making room for whatever arrives next."
    },
    reversed: {
      keywords: ["resistance", "stuck cycle", "bad timing"],
      meaning: "You are resisting a change that has, in truth, already happened. Letting go is the only part of this still genuinely in your hands."
    }
  },
  {
    id: "major-11", name: "Justice", rank: "XI", arcana: "major", suit: null, symbol: "justice",
    upright: {
      keywords: ["fairness", "honesty", "consequence"],
      meaning: "Honesty will settle this far more quickly than cleverness would. Look at the facts plainly and respond in proportion to what is actually there."
    },
    reversed: {
      keywords: ["imbalance", "avoided truth", "unfairness"],
      meaning: "Something here is uneven and you can feel the tilt of it. Name the imbalance out loud rather than quietly carrying it for everyone."
    }
  },
  {
    id: "major-12", name: "The Hanged Man", rank: "XII", arcana: "major", suit: null, symbol: "hanged",
    upright: {
      keywords: ["pause", "new perspective", "surrender"],
      meaning: "The pause you are in is doing useful work, even though it feels like nothing. Let the view change before you decide anything at all."
    },
    reversed: {
      keywords: ["stalling", "delay", "time to move"],
      meaning: "You are waiting for a sign that has already quietly arrived. The stillness has served its purpose — it is time to move again."
    }
  },
  {
    id: "major-13", name: "Death", rank: "XIII", arcana: "major", suit: null, symbol: "death",
    upright: {
      keywords: ["ending", "transition", "making room"],
      meaning: "Something has genuinely ended, and that is not a failure on your part. Let it close properly so the next thing has somewhere to begin."
    },
    reversed: {
      keywords: ["clinging", "fear of change", "slow ending"],
      meaning: "You are holding the door shut on a change that very much wants to happen. It will be gentler on you once you stop bracing against it."
    }
  },
  {
    id: "major-14", name: "Temperance", rank: "XIV", arcana: "major", suit: null, symbol: "temperance",
    upright: {
      keywords: ["balance", "patience", "the middle way"],
      meaning: "The answer is somewhere in the middle, mixed slowly and without drama. Small steady measures will carry you further than any grand gesture."
    },
    reversed: {
      keywords: ["excess", "impatience", "out of balance"],
      meaning: "Things have tipped — too much of one thing and too little of another. Adjust in small amounts rather than swinging all the way back."
    }
  },
  {
    id: "major-15", name: "The Devil", rank: "XV", arcana: "major", suit: null, symbol: "devil",
    upright: {
      keywords: ["old habits", "attachment", "honest look"],
      meaning: "Notice what you keep returning to that reliably leaves you smaller. The chain is looser than it looks once you actually examine it."
    },
    reversed: {
      keywords: ["breaking free", "awareness", "first steps"],
      meaning: "You are beginning to see the pattern clearly, and that is the hardest part already done. Step out of it one ordinary choice at a time."
    }
  },
  {
    id: "major-16", name: "The Tower", rank: "XVI", arcana: "major", suit: null, symbol: "tower",
    upright: {
      keywords: ["sudden change", "revelation", "clearing"],
      meaning: "Something built on shaky ground is coming down, and the relief may surprise you. Whatever is still standing afterwards will be truer."
    },
    reversed: {
      keywords: ["bracing", "delayed fall", "averted crisis"],
      meaning: "You can feel the pressure building and you are bracing for the impact. Release what is already cracked instead of holding it up alone."
    }
  },
  {
    id: "major-17", name: "The Star", rank: "XVII", arcana: "major", suit: null, symbol: "star",
    upright: {
      keywords: ["hope", "renewal", "calm"],
      meaning: "Hope returns after a long season of doubt. Trust the quiet guidance you feel tonight — the healing has already begun."
    },
    reversed: {
      keywords: ["doubt", "discouragement", "disconnection"],
      meaning: "Hope feels far off tonight and the sky seems closed. Be gentle with yourself — the light has not gone out, only slipped behind cloud."
    }
  },
  {
    id: "major-18", name: "The Moon", rank: "XVIII", arcana: "major", suit: null, symbol: "moon",
    upright: {
      keywords: ["uncertainty", "instinct", "dreams"],
      meaning: "Not everything is clear yet, and it does not need to be tonight. Move slowly, trust your senses, and let the path show itself."
    },
    reversed: {
      keywords: ["clearing fog", "released fear", "truth surfacing"],
      meaning: "The fog is lifting and a worry is turning out to be smaller than it looked. Let the clarity settle fully before you act on it."
    }
  },
  {
    id: "major-19", name: "The Sun", rank: "XIX", arcana: "major", suit: null, symbol: "sun",
    upright: {
      keywords: ["warmth", "clarity", "simple joy"],
      meaning: "Warmth is available to you today, simply and without complication. Let yourself enjoy it rather than waiting until you feel you have earned it."
    },
    reversed: {
      keywords: ["dimmed joy", "postponed rest", "clouded"],
      meaning: "The light is there but something inside is dimming it. Look for the small pleasure you keep putting off until later."
    }
  },
  {
    id: "major-20", name: "Judgement", rank: "XX", arcana: "major", suit: null, symbol: "judgement",
    upright: {
      keywords: ["reckoning", "forgiveness", "a calling"],
      meaning: "You are being asked to answer something honestly, perhaps only by your own conscience. Forgive what needs forgiving and step into the next chapter."
    },
    reversed: {
      keywords: ["self-judgement", "doubt", "unfinished business"],
      meaning: "You are judging an older version of yourself by everything you know now. Set the verdict down — you already learned what it came to teach."
    }
  },
  {
    id: "major-21", name: "The World", rank: "XXI", arcana: "major", suit: null, symbol: "world",
    upright: {
      keywords: ["completion", "wholeness", "arrival"],
      meaning: "A long circle is closing and you can feel the completeness of it. Mark the moment properly before you rush off into whatever comes next."
    },
    reversed: {
      keywords: ["almost there", "loose ends", "delayed closure"],
      meaning: "You are nearly there and tempted to call it finished early. Give the last small part the same care you gave the very beginning."
    }
  },

  /* ---------------- WANDS (fire: energy, action, creativity) ---------------- */

  {
    id: "wands-ace", name: "Ace of Wands", rank: "ACE", arcana: "minor", suit: "wands", symbol: "wand",
    upright: {
      keywords: ["spark", "inspiration", "a beginning"],
      meaning: "A spark of real energy has arrived — an idea, an invitation, an urge to start. Say yes to it while it is still warm."
    },
    reversed: {
      keywords: ["false start", "hesitation", "held back"],
      meaning: "The spark is genuinely there but has nowhere to go just yet. Protect it quietly rather than forcing it out into the open too soon."
    }
  },
  {
    id: "wands-02", name: "Two of Wands", rank: "II", arcana: "minor", suit: "wands", symbol: "wand",
    upright: {
      keywords: ["planning", "vision", "choosing"],
      meaning: "You are standing with a plan in your hands and the world laid out in front of you. Choose one direction rather than admiring all of them."
    },
    reversed: {
      keywords: ["overthinking", "delay", "playing safe"],
      meaning: "Planning has quietly become a way of postponing. One small committed step will teach you more than another month of thinking."
    }
  },
  {
    id: "wands-03", name: "Three of Wands", rank: "III", arcana: "minor", suit: "wands", symbol: "wand",
    upright: {
      keywords: ["expansion", "foresight", "news coming"],
      meaning: "What you set in motion is beginning to travel beyond your sight. Keep watching the horizon — word of it is already on its way back."
    },
    reversed: {
      keywords: ["delays", "short view", "slow progress"],
      meaning: "Progress feels slower than you were promised it would be. Nothing has failed; the distance is simply longer than the map suggested."
    }
  },
  {
    id: "wands-04", name: "Four of Wands", rank: "IV", arcana: "minor", suit: "wands", symbol: "wand",
    upright: {
      keywords: ["celebration", "belonging", "homecoming"],
      meaning: "There is something here worth celebrating, and it deserves marking properly. Let yourself rest inside the good thing you have built."
    },
    reversed: {
      keywords: ["unsettled", "postponed joy", "finding home"],
      meaning: "The welcome you are looking for may not be where you expected to find it. Build the sense of home yourself and people will come to it."
    }
  },
  {
    id: "wands-05", name: "Five of Wands", rank: "V", arcana: "minor", suit: "wands", symbol: "wand",
    upright: {
      keywords: ["friction", "competition", "lively disagreement"],
      meaning: "Friction has crept in, though most of it is lively rather than harmful. Let the differences sharpen the work instead of the mood."
    },
    reversed: {
      keywords: ["stepping back", "truce", "tired of fighting"],
      meaning: "You are tired of competing and quietly ready to stop. Stepping out of the scramble is a perfectly legitimate way to win."
    }
  },
  {
    id: "wands-06", name: "Six of Wands", rank: "VI", arcana: "minor", suit: "wands", symbol: "wand",
    upright: {
      keywords: ["recognition", "success", "confidence"],
      meaning: "Recognition is coming your way and you are allowed to enjoy it. Accept the credit simply and without deflecting — you did the work."
    },
    reversed: {
      keywords: ["unseen effort", "self-doubt", "waiting for praise"],
      meaning: "You are measuring yourself against applause that has not arrived. The effort was real whether or not anybody happened to notice."
    }
  },
  {
    id: "wands-07", name: "Seven of Wands", rank: "VII", arcana: "minor", suit: "wands", symbol: "wand",
    upright: {
      keywords: ["standing firm", "conviction", "defence"],
      meaning: "You are defending something that is genuinely worth defending. Stand your ground calmly — you are in the higher position here."
    },
    reversed: {
      keywords: ["worn down", "overwhelmed", "letting go"],
      meaning: "This fight is costing more than the ground is actually worth. Ask honestly whether this is even yours to hold."
    }
  },
  {
    id: "wands-08", name: "Eight of Wands", rank: "VIII", arcana: "minor", suit: "wands", symbol: "wand",
    upright: {
      keywords: ["speed", "movement", "news"],
      meaning: "Things are moving quickly now, and that is good news rather than alarming. Keep up with the pace instead of second-guessing it."
    },
    reversed: {
      keywords: ["delays", "scattered", "slow down"],
      meaning: "Everything feels delayed and slightly out of order at the moment. Slow down on purpose rather than being slowed down by circumstance."
    }
  },
  {
    id: "wands-09", name: "Nine of Wands", rank: "IX", arcana: "minor", suit: "wands", symbol: "wand",
    upright: {
      keywords: ["resilience", "nearly there", "guarded"],
      meaning: "You are tired and still standing, and that counts for a great deal. Rest where you are without abandoning the post entirely."
    },
    reversed: {
      keywords: ["exhaustion", "old defences", "safe now"],
      meaning: "You are guarding against a danger that has, in fact, already passed. It is safe to lower your shoulders and breathe out."
    }
  },
  {
    id: "wands-10", name: "Ten of Wands", rank: "X", arcana: "minor", suit: "wands", symbol: "wand",
    upright: {
      keywords: ["burden", "overload", "put it down"],
      meaning: "You are carrying considerably more than your share and it is beginning to show. Put something down — nothing important will break."
    },
    reversed: {
      keywords: ["release", "delegating", "relief"],
      meaning: "You are beginning to release what was never really yours to carry. Let the relief in rather than filling the space straight away."
    }
  },
  {
    id: "wands-page", name: "Page of Wands", rank: "PAGE", arcana: "minor", suit: "wands", symbol: "wand",
    upright: {
      keywords: ["curiosity", "play", "fresh enthusiasm"],
      meaning: "A fresh curiosity is tugging at your sleeve. Follow it playfully, with no requirement at all that it become serious."
    },
    reversed: {
      keywords: ["false starts", "distraction", "unfinished"],
      meaning: "Enthusiasm keeps starting and then stopping again. Choose one small thing and finish it purely for the pleasure of finishing."
    }
  },
  {
    id: "wands-knight", name: "Knight of Wands", rank: "KNIGHT", arcana: "minor", suit: "wands", symbol: "wand",
    upright: {
      keywords: ["boldness", "adventure", "drive"],
      meaning: "Your energy is high and ready to be spent on something bold. Take a moment to aim carefully before you ride."
    },
    reversed: {
      keywords: ["haste", "burnout", "reckless"],
      meaning: "Haste is beginning to outrun your judgement. A short pause now will save you a long correction later on."
    }
  },
  {
    id: "wands-queen", name: "Queen of Wands", rank: "QUEEN", arcana: "minor", suit: "wands", symbol: "wand",
    upright: {
      keywords: ["warmth", "confidence", "magnetism"],
      meaning: "Your warmth draws people in and your confidence is well earned. Lead with both of them today and trust the effect."
    },
    reversed: {
      keywords: ["depleted", "self-doubt", "giving too much"],
      meaning: "You are giving out considerably more spark than you are getting back. Tend your own fire first; the rest can wait."
    }
  },
  {
    id: "wands-king", name: "King of Wands", rank: "KING", arcana: "minor", suit: "wands", symbol: "wand",
    upright: {
      keywords: ["vision", "leadership", "earned authority"],
      meaning: "You can see the whole field and you know what to do with it. Act with the authority you have quietly been building."
    },
    reversed: {
      keywords: ["forcing it", "impatience", "domineering"],
      meaning: "Pushing harder has stopped helping and started costing. Lead through steadiness rather than through force."
    }
  },

  /* ---------------- CUPS (water: feeling, relationship, intuition) ---------------- */

  {
    id: "cups-ace", name: "Ace of Cups", rank: "ACE", arcana: "minor", suit: "cups", symbol: "cup",
    upright: {
      keywords: ["open heart", "new feeling", "tenderness"],
      meaning: "Feeling is returning to something that had gone a little numb. Let it fill you up before you start analysing what it means."
    },
    reversed: {
      keywords: ["held back", "guarded", "unspoken"],
      meaning: "You are holding a feeling just beneath the surface where nobody can see it. It will be lighter once you let it actually be felt."
    }
  },
  {
    id: "cups-02", name: "Two of Cups", rank: "II", arcana: "minor", suit: "cups", symbol: "cup",
    upright: {
      keywords: ["connection", "mutual care", "partnership"],
      meaning: "A genuine meeting is possible — in friendship, in love, or in work. Meet it with an open hand rather than a careful one."
    },
    reversed: {
      keywords: ["out of step", "tension", "repair"],
      meaning: "Something between you is slightly out of step at the moment. One small honest conversation will do far more than distance will."
    }
  },
  {
    id: "cups-03", name: "Three of Cups", rank: "III", arcana: "minor", suit: "cups", symbol: "cup",
    upright: {
      keywords: ["friendship", "celebration", "community"],
      meaning: "Your people are closer than you have been letting yourself believe. Let yourself be among them rather than politely beside them."
    },
    reversed: {
      keywords: ["performing", "crowded", "true friends"],
      meaning: "Company has started to feel a little like performance. Choose the one or two people who need no performance at all."
    }
  },
  {
    id: "cups-04", name: "Four of Cups", rank: "IV", arcana: "minor", suit: "cups", symbol: "cup",
    upright: {
      keywords: ["restlessness", "missed offer", "look up"],
      meaning: "Something good is being offered and you have not quite looked up to see it. Lift your eyes — the gift is real and it is for you."
    },
    reversed: {
      keywords: ["renewed interest", "saying yes", "waking up"],
      meaning: "Interest is returning after a flat stretch. Say yes to the first small thing that genuinely stirs you."
    }
  },
  {
    id: "cups-05", name: "Five of Cups", rank: "V", arcana: "minor", suit: "cups", symbol: "cup",
    upright: {
      keywords: ["grief", "loss", "what remains"],
      meaning: "Yes, something has been lost, and the grief about it is entirely fair. When you are ready, turn around — not everything was spilled."
    },
    reversed: {
      keywords: ["acceptance", "moving on", "self-forgiveness"],
      meaning: "You are beginning to look forward again, carefully. Carry the lesson gently with you and leave the blame where it fell."
    }
  },
  {
    id: "cups-06", name: "Six of Cups", rank: "VI", arcana: "minor", suit: "cups", symbol: "cup",
    upright: {
      keywords: ["memory", "nostalgia", "kindness"],
      meaning: "A memory is visiting you kindly today rather than painfully. Let it warm you without asking you to move back into it."
    },
    reversed: {
      keywords: ["stuck in the past", "idealising", "present day"],
      meaning: "The past has been taking up more of your attention than the present has. Today is where your actual life is happening."
    }
  },
  {
    id: "cups-07", name: "Seven of Cups", rank: "VII", arcana: "minor", suit: "cups", symbol: "cup",
    upright: {
      keywords: ["many options", "imagination", "illusion"],
      meaning: "There are many appealing options in front of you and not all of them are real. Test each one against what you genuinely want."
    },
    reversed: {
      keywords: ["clarity", "decision", "focus"],
      meaning: "The fog is clearing and one choice is quietly becoming obvious. Trust the simplicity of it rather than looking for complexity."
    }
  },
  {
    id: "cups-08", name: "Eight of Cups", rank: "VIII", arcana: "minor", suit: "cups", symbol: "cup",
    upright: {
      keywords: ["walking away", "honesty", "seeking more"],
      meaning: "Something that was once right has quietly stopped being right. Walking away is allowed, and it does not have to be dramatic."
    },
    reversed: {
      keywords: ["wavering", "fear of leaving", "deciding"],
      meaning: "You are deciding whether to stay or go, and the not-deciding is the heaviest part of it. Give yourself a kind deadline."
    }
  },
  {
    id: "cups-09", name: "Nine of Cups", rank: "IX", arcana: "minor", suit: "cups", symbol: "cup",
    upright: {
      keywords: ["contentment", "wish granted", "enjoyment"],
      meaning: "Something you quietly hoped for is within reach. Enjoy the having of it, not only the wanting that got you here."
    },
    reversed: {
      keywords: ["hollow win", "looking deeper", "real needs"],
      meaning: "The thing you wanted has not filled the space you expected it to. Ask what you were actually hungry for underneath."
    }
  },
  {
    id: "cups-10", name: "Ten of Cups", rank: "X", arcana: "minor", suit: "cups", symbol: "cup",
    upright: {
      keywords: ["belonging", "harmony", "enough"],
      meaning: "There is real contentment available in what you already have. Look around you properly before you go looking any further."
    },
    reversed: {
      keywords: ["appearances", "strain", "honest repair"],
      meaning: "The picture looks right from outside but feels thin from within. Repair the real thing rather than the appearance of it."
    }
  },
  {
    id: "cups-page", name: "Page of Cups", rank: "PAGE", arcana: "minor", suit: "cups", symbol: "cup",
    upright: {
      keywords: ["tenderness", "creativity", "openness"],
      meaning: "A tender feeling or small creative urge is surfacing. Treat it with curiosity rather than with judgement."
    },
    reversed: {
      keywords: ["self-editing", "shyness", "doubt"],
      meaning: "You are second-guessing a feeling before it has even finished arriving. Let it speak fully before you start editing it."
    }
  },
  {
    id: "cups-knight", name: "Knight of Cups", rank: "KNIGHT", arcana: "minor", suit: "cups", symbol: "cup",
    upright: {
      keywords: ["romance", "sincerity", "following the heart"],
      meaning: "Follow the thing that genuinely moves you — a person, an invitation, an idea. Romance and sincerity are the same gesture today."
    },
    reversed: {
      keywords: ["all feeling no plan", "moodiness", "grounding"],
      meaning: "The feeling is entirely real but the plan behind it is not yet. Let your heart lead and let your calendar follow after."
    }
  },
  {
    id: "cups-queen", name: "Queen of Cups", rank: "QUEEN", arcana: "minor", suit: "cups", symbol: "cup",
    upright: {
      keywords: ["compassion", "intuition", "emotional depth"],
      meaning: "Your compassion is a form of intelligence today, not a softness. Trust what you sense about people — you are rarely wrong."
    },
    reversed: {
      keywords: ["absorbing others", "no boundaries", "overwhelm"],
      meaning: "You have absorbed other people's weather as though it were your own. Put the edges back around yourself, gently but clearly."
    }
  },
  {
    id: "cups-king", name: "King of Cups", rank: "KING", arcana: "minor", suit: "cups", symbol: "cup",
    upright: {
      keywords: ["steady heart", "calm", "emotional maturity"],
      meaning: "You can hold strong feelings without being swept away by them. Be the calm in the room and others will settle too."
    },
    reversed: {
      keywords: ["bottled up", "withdrawn", "let it move"],
      meaning: "Something is being held in rather than genuinely handled. Let it move somewhere safe before it hardens."
    }
  },

  /* ---------------- SWORDS (air: mind, truth, conflict) ---------------- */

  {
    id: "swords-ace", name: "Ace of Swords", rank: "ACE", arcana: "minor", suit: "swords", symbol: "sword",
    upright: {
      keywords: ["clarity", "truth", "breakthrough"],
      meaning: "A clear thought is cutting straight through the confusion. Write it down before it softens back into vagueness."
    },
    reversed: {
      keywords: ["confusion", "too soon", "muddled"],
      meaning: "You are reaching for clarity while the ground is still moving underneath. Wait for the dust to settle, then decide."
    }
  },
  {
    id: "swords-02", name: "Two of Swords", rank: "II", arcana: "minor", suit: "swords", symbol: "sword",
    upright: {
      keywords: ["stalemate", "avoidance", "a choice"],
      meaning: "You are avoiding a decision by carefully not looking at it. Take the blindfold off — you already know more than you admit."
    },
    reversed: {
      keywords: ["deciding", "clarity returning", "movement"],
      meaning: "The stalemate is breaking and the choice is becoming visible. Move on it before you talk yourself back into stillness."
    }
  },
  {
    id: "swords-03", name: "Three of Swords", rank: "III", arcana: "minor", suit: "swords", symbol: "sword",
    upright: {
      keywords: ["heartache", "hard truth", "grief"],
      meaning: "Something true has hurt, and pretending otherwise will not shorten it. Let the grief have its hour — it genuinely does pass."
    },
    reversed: {
      keywords: ["healing", "release", "forgiveness"],
      meaning: "The ache is easing and you are ready to set it down. The forgiveness here is mostly for your own benefit."
    }
  },
  {
    id: "swords-04", name: "Four of Swords", rank: "IV", arcana: "minor", suit: "swords", symbol: "sword",
    upright: {
      keywords: ["rest", "pause", "recovery"],
      meaning: "Rest is the actual work today. Stop properly before the decision rather than collapsing after it."
    },
    reversed: {
      keywords: ["restlessness", "returning", "gentle restart"],
      meaning: "You are being nudged back into motion after a quiet stretch. Return gradually rather than all at once."
    }
  },
  {
    id: "swords-05", name: "Five of Swords", rank: "V", arcana: "minor", suit: "swords", symbol: "sword",
    upright: {
      keywords: ["hollow victory", "conflict", "cost"],
      meaning: "Winning this one may cost more than losing it would have. Ask whether being right is worth the distance it will create."
    },
    reversed: {
      keywords: ["making amends", "repair", "moving on"],
      meaning: "There is a chance to repair something after sharper words than you meant. Go first, and keep it simple."
    }
  },
  {
    id: "swords-06", name: "Six of Swords", rank: "VI", arcana: "minor", suit: "swords", symbol: "sword",
    upright: {
      keywords: ["transition", "calmer water", "moving on"],
      meaning: "You are moving toward calmer water, even if the leaving itself is sad. The crossing is already well underway."
    },
    reversed: {
      keywords: ["lingering", "half-left", "patience"],
      meaning: "Part of you has moved on and part of you has not. Be patient — the two will arrive in the same place eventually."
    }
  },
  {
    id: "swords-07", name: "Seven of Swords", rank: "VII", arcana: "minor", suit: "swords", symbol: "sword",
    upright: {
      keywords: ["half-truths", "strategy", "straight talk"],
      meaning: "Something is not being said plainly here, and it may be by you. Choose the straightforward route — it is far less tiring."
    },
    reversed: {
      keywords: ["coming clean", "honesty", "relief"],
      meaning: "You are ready to come clean, or at least to see clearly. Honesty will cost considerably less than you are afraid it will."
    }
  },
  {
    id: "swords-08", name: "Eight of Swords", rank: "VIII", arcana: "minor", suit: "swords", symbol: "sword",
    upright: {
      keywords: ["feeling trapped", "assumptions", "a way out"],
      meaning: "The situation feels trapping, but look closely at the walls. Several of them are assumptions you can simply step past."
    },
    reversed: {
      keywords: ["freedom", "loosening", "new options"],
      meaning: "A restriction is genuinely loosening. Test your freedom in small ways before you trust it with everything."
    }
  },
  {
    id: "swords-09", name: "Nine of Swords", rank: "IX", arcana: "minor", suit: "swords", symbol: "sword",
    upright: {
      keywords: ["worry", "sleepless nights", "fear"],
      meaning: "The worry is loudest at night and considerably larger than the facts. Name it out loud and watch it begin to shrink."
    },
    reversed: {
      keywords: ["easing", "speaking it", "daylight"],
      meaning: "The fear is beginning to lose its grip on you. Say it to someone — most of it will not survive the daylight."
    }
  },
  {
    id: "swords-10", name: "Ten of Swords", rank: "X", arcana: "minor", suit: "swords", symbol: "sword",
    upright: {
      keywords: ["rock bottom", "ending", "relief"],
      meaning: "This chapter has ended completely, and there is relief hidden inside that. Nothing more can be taken, so the climb back is gentle."
    },
    reversed: {
      keywords: ["recovery", "getting up", "slow return"],
      meaning: "You are getting up again after something genuinely difficult. Go slowly and let recovery take exactly as long as it takes."
    }
  },
  {
    id: "swords-page", name: "Page of Swords", rank: "PAGE", arcana: "minor", suit: "swords", symbol: "sword",
    upright: {
      keywords: ["curiosity", "questions", "learning"],
      meaning: "Your curiosity is sharp today — ask the question you have been circling. Learning is the point here, not winning."
    },
    reversed: {
      keywords: ["suspicion", "guessing", "ask directly"],
      meaning: "Thinking has tipped over into watching for threats. Ask the person directly instead of guessing at their meaning."
    }
  },
  {
    id: "swords-knight", name: "Knight of Swords", rank: "KNIGHT", arcana: "minor", suit: "swords", symbol: "sword",
    upright: {
      keywords: ["decisiveness", "speed", "conviction"],
      meaning: "You are moving quickly with a clear idea in mind. Keep the pace, but check who happens to be in your path."
    },
    reversed: {
      keywords: ["abruptness", "hurry", "softening"],
      meaning: "Urgency is making you brittle around the edges. Slow the words down — this argument does not need winning today."
    }
  },
  {
    id: "swords-queen", name: "Queen of Swords", rank: "QUEEN", arcana: "minor", suit: "swords", symbol: "sword",
    upright: {
      keywords: ["clear sight", "honesty", "independence"],
      meaning: "You can see this situation clearly and without flattery. Say the honest thing kindly — both halves of that matter."
    },
    reversed: {
      keywords: ["coldness", "harshness", "warmth"],
      meaning: "Clear sight has sharpened into something closer to coldness. Let a little warmth back into the judgement."
    }
  },
  {
    id: "swords-king", name: "King of Swords", rank: "KING", arcana: "minor", suit: "swords", symbol: "sword",
    upright: {
      keywords: ["reason", "fairness", "clear leadership"],
      meaning: "Lead with reason and fairness and others will follow willingly. Your clarity is a service here, not a weapon."
    },
    reversed: {
      keywords: ["cold logic", "being right", "soften"],
      meaning: "Being right has become more important than being useful. Soften the delivery and keep the truth intact."
    }
  },

  /* ---------------- PENTACLES (earth: work, money, body, home) ---------------- */

  {
    id: "pentacles-ace", name: "Ace of Pentacles", rank: "ACE", arcana: "minor", suit: "pentacles", symbol: "pentacle",
    upright: {
      keywords: ["opportunity", "a seed", "practical start"],
      meaning: "A practical opportunity is taking shape — modest, real, and worth having. Plant it properly rather than in a hurry."
    },
    reversed: {
      keywords: ["wrong timing", "not yet", "preparation"],
      meaning: "The chance is there but the timing around it is not. Prepare the ground instead of trying to force the season."
    }
  },
  {
    id: "pentacles-02", name: "Two of Pentacles", rank: "II", arcana: "minor", suit: "pentacles", symbol: "pentacle",
    upright: {
      keywords: ["juggling", "adaptability", "rhythm"],
      meaning: "You are juggling well, though it is taking constant attention to do it. Keep the rhythm going and drop nothing that matters."
    },
    reversed: {
      keywords: ["overcommitted", "dropping things", "simplify"],
      meaning: "Too many things are in the air at the same time. Set one down deliberately before it falls on its own."
    }
  },
  {
    id: "pentacles-03", name: "Three of Pentacles", rank: "III", arcana: "minor", suit: "pentacles", symbol: "pentacle",
    upright: {
      keywords: ["collaboration", "craft", "good work"],
      meaning: "Good work is happening, and other people's help is part of it. Ask for the input you need — collaboration is the point."
    },
    reversed: {
      keywords: ["unclear roles", "unseen work", "speak up"],
      meaning: "Effort is being duplicated, or quietly going unnoticed. Clarify who is doing what before resentment has time to set."
    }
  },
  {
    id: "pentacles-04", name: "Four of Pentacles", rank: "IV", arcana: "minor", suit: "pentacles", symbol: "pentacle",
    upright: {
      keywords: ["saving", "security", "holding on"],
      meaning: "Holding on tightly has kept you safe, and it still can. Just check that safety has not quietly turned into smallness."
    },
    reversed: {
      keywords: ["letting go", "generosity", "loosening"],
      meaning: "Your grip is loosening, and that is a healthy thing. Spend a little of what you have been so carefully guarding."
    }
  },
  {
    id: "pentacles-05", name: "Five of Pentacles", rank: "V", arcana: "minor", suit: "pentacles", symbol: "pentacle",
    upright: {
      keywords: ["scarcity", "hard stretch", "ask for help"],
      meaning: "Things feel thin right now — in money, in warmth, or in company. Help is nearer than it looks, but you will have to ask."
    },
    reversed: {
      keywords: ["recovery", "support", "warmth returning"],
      meaning: "The hard stretch is beginning to ease. Let support actually reach you instead of proving you can manage alone."
    }
  },
  {
    id: "pentacles-06", name: "Six of Pentacles", rank: "VI", arcana: "minor", suit: "pentacles", symbol: "pentacle",
    upright: {
      keywords: ["generosity", "fair exchange", "receiving"],
      meaning: "Giving and receiving are flowing well between you and others. Accept help as gracefully as you tend to offer it."
    },
    reversed: {
      keywords: ["uneven", "strings attached", "rebalance"],
      meaning: "Something in the exchange has become uneven. Rebalance it before it quietly turns into a debt neither of you named."
    }
  },
  {
    id: "pentacles-07", name: "Seven of Pentacles", rank: "VII", arcana: "minor", suit: "pentacles", symbol: "pentacle",
    upright: {
      keywords: ["patience", "waiting", "taking stock"],
      meaning: "You have planted well and now the work is waiting. Assess honestly, then let it grow a while longer."
    },
    reversed: {
      keywords: ["impatience", "doubt", "review the plan"],
      meaning: "You are wondering whether all this effort has been worth it. Review the plan rather than abandoning the crop."
    }
  },
  {
    id: "pentacles-08", name: "Eight of Pentacles", rank: "VIII", arcana: "minor", suit: "pentacles", symbol: "pentacle",
    upright: {
      keywords: ["practice", "craft", "steady skill"],
      meaning: "Patient, repeated practice is quietly building real skill. Enjoy the craft of it rather than only the result."
    },
    reversed: {
      keywords: ["going through motions", "boredom", "reconnect"],
      meaning: "The work has become mechanical and a little joyless. Reconnect with why you started, or change the method entirely."
    }
  },
  {
    id: "pentacles-09", name: "Nine of Pentacles", rank: "IX", arcana: "minor", suit: "pentacles", symbol: "pentacle",
    upright: {
      keywords: ["self-sufficiency", "comfort", "earned ease"],
      meaning: "You have made something comfortable through your own steady effort. Stand inside it and enjoy your own company."
    },
    reversed: {
      keywords: ["not feeling it", "restless", "trust it"],
      meaning: "The security is there but you have not let yourself feel it yet. Trust the ground you have actually built."
    }
  },
  {
    id: "pentacles-10", name: "Ten of Pentacles", rank: "X", arcana: "minor", suit: "pentacles", symbol: "pentacle",
    upright: {
      keywords: ["legacy", "family", "lasting security"],
      meaning: "Something lasting is taking shape — for your home, your people, or your future self. Tend it with the long view in mind."
    },
    reversed: {
      keywords: ["instability", "family strain", "look deeper"],
      meaning: "A question about security or family is asking for attention. Look at the structure underneath rather than the symptom on top."
    }
  },
  {
    id: "pentacles-page", name: "Page of Pentacles", rank: "PAGE", arcana: "minor", suit: "pentacles", symbol: "pentacle",
    upright: {
      keywords: ["study", "beginnings", "practical steps"],
      meaning: "A practical new beginning is worth taking seriously. Study it, learn slowly, and start smaller than feels impressive."
    },
    reversed: {
      keywords: ["procrastination", "all planning", "one step"],
      meaning: "Plans keep remaining plans and never quite become anything. Choose one concrete step and actually do it this week."
    }
  },
  {
    id: "pentacles-knight", name: "Knight of Pentacles", rank: "KNIGHT", arcana: "minor", suit: "pentacles", symbol: "pentacle",
    upright: {
      keywords: ["reliability", "routine", "steady progress"],
      meaning: "Steady, unglamorous progress is exactly the right speed. Keep the routine — it is quietly carrying you."
    },
    reversed: {
      keywords: ["stuck", "stubbornness", "change the method"],
      meaning: "Things have stalled into something closer to stubbornness. Change one part of the method and the motion will return."
    }
  },
  {
    id: "pentacles-queen", name: "Queen of Pentacles", rank: "QUEEN", arcana: "minor", suit: "pentacles", symbol: "pentacle",
    upright: {
      keywords: ["practical care", "nurture", "capability"],
      meaning: "You are good at making both people and things thrive. Make sure you are included somewhere in that care today."
    },
    reversed: {
      keywords: ["self-neglect", "overstretched", "own ground"],
      meaning: "You have been practical on everyone's behalf except your own. Tend your own ground first — the rest will hold."
    }
  },
  {
    id: "pentacles-king", name: "King of Pentacles", rank: "KING", arcana: "minor", suit: "pentacles", symbol: "pentacle",
    upright: {
      keywords: ["abundance", "stability", "generosity"],
      meaning: "You have built something solid and can afford to be generous with it. Steady hands, open door."
    },
    reversed: {
      keywords: ["hoarding", "anxiety", "loosen the grip"],
      meaning: "Success has narrowed into worry about keeping hold of it. Loosen your grip — the ground beneath you is firm."
    }
  }

];

/* How many cards are in the deck. Should always print 78. */
const DECK_SIZE = DECK.length;
