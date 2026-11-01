# Your Daily Tarot

A single tarot card, once a day. Plain HTML, CSS and JavaScript — no
frameworks and no build step, so the folder can be opened or published
exactly as it is.

## How it works

- Arrive and the card is face-down.
- Click the card or the button to draw one of all 78 cards, each equally
  likely, with a 50% chance of being reversed.
- Your card is saved in the browser for the rest of the day. Coming back
  shows the same card; after midnight in your own time zone it resets.

## The files

| File | What it holds |
|------|---------------|
| `index.html` | The page structure |
| `styles.css` | All the styling, including the card flip |
| `cards.js` | The 78-card deck — pure data, reusable for other spreads |
| `symbols.js` | The gold symbol drawings and the card back |
| `app.js` | The logic: drawing, flipping, the once-a-day rule |
| `assets/` | The Star's artwork and the background stars |

## Testing

Add `?reset` to the address to clear today's card and draw again.

## Credits

Design and build with [Claude Code](https://claude.com/claude-code).
