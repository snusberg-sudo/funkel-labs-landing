---
name: Funkel Labs
description: Two-Drum Riso. Software printed in two inks, registered by hand, on bright cool stock.
colors:
  paper: "oklch(98.7% 0.004 300)"
  paper-2: "oklch(94.6% 0.03 356)"
  paper-3: "oklch(86% 0.1 356)"
  ink: "oklch(40% 0.165 265)"
  ink-2: "oklch(46% 0.15 265)"
  muted: "oklch(49% 0.11 265)"
  rule: "oklch(85% 0.045 265)"
  pink: "oklch(68% 0.235 356)"
  pink-ink: "oklch(22% 0.11 265)"
  focus: "oklch(44% 0.2 265)"
  on-ink: "oklch(98.7% 0.004 300)"
  on-ink-muted: "oklch(88% 0.04 265)"
typography:
  display:
    fontFamily: "Cabinet Grotesk, Dela Gothic One, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3rem, 7.2vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.92
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Cabinet Grotesk, Dela Gothic One, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 4.4vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Cabinet Grotesk, Dela Gothic One, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 2.4vw, 2rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  lede:
    fontFamily: "Literata Variable, Zen Kaku Gothic New, ui-serif, Georgia, serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Literata Variable, Zen Kaku Gothic New, ui-serif, Georgia, serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "\"tnum\" 1"
  label:
    fontFamily: "Literata Variable, Zen Kaku Gothic New, ui-serif, Georgia, serif"
    fontSize: "0.9375rem"
    fontWeight: 500
    lineHeight: 1.6
rounded:
  sheet: "2px"
spacing:
  gutter: "clamp(16px, 5vw, 80px)"
  measure: "1240px"
  section: "clamp(72px, 11vw, 144px)"
  column-gap: "clamp(32px, 5vw, 72px)"
  sheet-pad: "clamp(24px, 3.5vw, 44px)"
components:
  button-primary:
    backgroundColor: "{colors.pink}"
    textColor: "{colors.pink-ink}"
    rounded: "{rounded.sheet}"
    padding: "14px 26px"
    height: "52px"
    typography: "{typography.title}"
  button-primary-hover:
    backgroundColor: "{colors.paper-3}"
    textColor: "{colors.pink-ink}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.sheet}"
    padding: "14px 26px"
    height: "52px"
  button-secondary-hover:
    backgroundColor: "{colors.paper-2}"
    textColor: "{colors.ink}"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sheet}"
    padding: "12px 14px"
    height: "48px"
  input-hover:
    backgroundColor: "{colors.paper-2}"
  status-sent:
    backgroundColor: "{colors.pink}"
    textColor: "{colors.pink-ink}"
    rounded: "{rounded.sheet}"
    padding: "4px 10px"
  contact-band:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
  form-sheet:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sheet}"
    padding: "{spacing.sheet-pad}"
---

# Design System: Funkel Labs

## Overview

**Creative North Star: "Two-Drum Riso"**

Every surface is a print run on bright, cool, uncoated stock through two drums. A medium blue drum sets every word, rule and icon; a fluorescent pink drum lays every fill. Purple is never mixed: it appears only where the two inks overprint, through `mix-blend-mode: multiply`. There is no black anywhere, and no third ink.

The page is flat paper. Depth comes from overprint and registration, not from light: a hair of misregistration on one hero word, a two-plate footer mast, the spark that drifts out of register and pulls in as the pointer nears, the process told as separations. Paper specks (grain) appear only where ink has been laid, never on bare stock. Corners are almost square (2px), frames are a 1.5px blue rule, dividers are 1px hairlines.

Type is heavy and close-set: Cabinet Grotesk 800 heads over a Literata reading face. Japanese pages keep the same weight logic in Dela Gothic One and Zen Kaku Gothic New, and Latin inside Japanese heads stays in Cabinet 800.

**Key Characteristics:**
- Light cool stock, blue ink, pink fill, purple only from multiply overprint, no black.
- Flat: no shadows anywhere; depth is overprint and misregistration.
- Grain as background-image specks on ink fields only.
- 2px sheet radius, 1.5px blue frame rule, 1px pale hairlines.
- Heavy display (800) over a serif reading face; JA heads break only at marked phrase boundaries.
- Motion is registration: plates drift and land, pressed controls drop 1px.

## Colors

Two inks on one stock: a medium blue that does all the drawing and a fluorescent pink that does all the filling, with tints of each standing in for screens.

### Primary
- **Drum Blue** (ink): every heading, body word, rule, frame, icon and SVG stroke. It is also the only solid band colour (the contact section), where it prints as a full ink field with grain.
- **Soft Drum Blue** (ink-2): secondary body copy (section ledes, card body text, JA hero lede). Still the blue drum, a lighter pass.
- **Focus Blue** (focus): the focus outline only.

### Secondary
- **Fluorescent Pink** (pink): every fill. Primary button, the stamped "sent" status, text selection, link underlines, caret, the pink plate of the spark and misregistered copies. Never used for running text on stock.
- **Pink Screen** (paper-2): a light pink tint. Hover fills for secondary buttons and inputs, the lead service card, photo and screenshot placeholders, the failed status.
- **Deep Pink Screen** (paper-3): the primary button hover, and the screen inside process-plate phones.

### Neutral
- **Cool Stock** (paper): the page, the form sheet, inputs and screenshot frames. A cool near-white, deliberately not cream.
- **Muted Blue** (muted): meta text (roles, platforms, hints, legal address).
- **Pale Rule** (rule): 1px section dividers and the nav hairline.
- **Pink Ink** (pink-ink): text on pink fills. A deep navy from the blue family, not black.
- **On-Ink Stock** (on-ink) and **On-Ink Mist** (on-ink-muted): text on the blue band.

### Named Rules
**The Two Drums Rule.** Blue draws (words, rules, icons, strokes); pink fills (buttons, stamps, selection, underlines, plates). A colour doing the other drum's job is a defect.

**The Overprint Purple Rule.** Purple is never a token. It exists only where a pink and a blue layer cross under `mix-blend-mode: multiply`.

**The No Black Rule.** No `#000`, no neutral greys. The darkest value on the page is the blue family (pink-ink).

**The Grain-on-Ink Rule.** The grain specks are a `background-image` beside a `background-color` on ink fields (pink fills, pink screens, the blue band, placeholders). Bare stock carries no grain.

## Typography

**Display Font:** Cabinet Grotesk 800, self-hosted (with Dela Gothic One for Japanese, then ui-sans-serif)
**Body Font:** Literata Variable (with Zen Kaku Gothic New on Japanese pages, then ui-serif, Georgia)
**Japanese:** Dela Gothic One heads, Zen Kaku Gothic New body; Hiragino Sans / Yu Gothic / Meiryo for Japanese words on English pages.

**Character:** A blunt, ink-heavy grotesk that looks pressed into the stock, over a warm bookish serif that reads like a printed leaflet.

### Hierarchy
- **Display** (800, clamp(3rem, 7.2vw, 6rem), 0.92, -0.03em): the hero head only. Capped at 6rem. JA: clamp(2.5rem, 5.6vw, 4.75rem), line-height 1.12.
- **Headline** (800, clamp(2.25rem, 4.4vw, 3.75rem), 0.98): section heads. The contact head runs larger (up to 4.5rem) on the blue band.
- **Title** (800, about 1.375rem to 2rem, 1.05 to 1.1): service, app, step and person names. The lead service card sets its title up to 3.25rem.
- **Lede** (400, 1.1875rem to 1.5rem): one-sentence section and hero ledes, held to 30 to 40ch.
- **Body** (400, 1.0625rem, 1.6, tabular numerals): running text, max about 44 to 52ch. JA body line-height 1.85.
- **Label** (500, 0.9375rem): form labels, nav links, meta lines.
- **Mast** (wordmark, clamp(3.5rem, 13vw, 11rem), 0.9): the footer mast only.

Display tracking is -0.03em on Latin pages and -0.01em on Japanese pages. Buttons and the stamped form status set in the display face at 800.

### Named Rules
**The One Weight Rule.** Heads are 800 and only 800. Dela Gothic One has a single weight, so Japanese pages set `font-synthesis-weight: none` and Latin inside Japanese heads stays in Cabinet 800 so each head reads as one weight.

**The Phrase Break Rule.** Japanese heads and ledes (`.phrased`) use `word-break: keep-all` and break only at the U+200B phrase marks placed in the copy. Running Japanese text uses `word-break: auto-phrase` with `line-break: strict`.

## Layout

One centred measure of 1240px with a fluid gutter (clamp(16px, 5vw, 80px)). Sections stack with generous vertical padding (clamp(72px, 11vw, 144px)) and are separated by a 1px pale hairline at their top edge. Most sections use an asymmetric two-column split on fractional tracks: 7/5 for the hero, 4/8 for section heads against content, 5/7 for the work grid and contact, 6/6 for about. The section head often sticks (services) or sits as a flex row with its lede aligned to the baseline end (work).

Responsive behaviour collapses every split to a single column between 760px and 960px; the process sheet steps from four columns to two at 960px. On mobile the hero spark moves above the head, capped at min(300px, 70vw). The nav hides its section links below 900px and keeps the language switch plus the pink call to action.

## Elevation & Depth

The system is flat. There are no box-shadows anywhere. Depth is conveyed by overprint: layers set to `mix-blend-mode: multiply` so pink under blue reads purple, and by deliberate misregistration (a pink copy offset by about 0.035em right and 0.03em down). Ink fields sit on stock as flat colour; the form on the blue band is a sheet of stock laid flat on the ink, not lifted.

### Named Rules
**The Overprint Depth Rule.** Stack with multiply and offset, never with shadows or glows. If a layer needs to read "above", it overprints.

**The One Hair Off Rule.** Misregistration is a signature, so it stays rare: one word in the hero head, the two-plate footer mast, and the finished process sheet's residual drift (3px, 2.5px). Body text and controls are always in register.

## Shapes

Near-square sheets: every container, button, input, frame and stamp uses the 2px sheet radius. Frames and primary dividers are a 1.5px blue rule (screenshot frames, the services list top, the footer top, inputs, secondary buttons); quieter dividers and process plate frames are 1px. The recurring silhouette is the four-point spark (the wordmark glyph), drawn as a blue outline or as pink and blue halftone plates. Process plates crop like full-bleed prints, running off their frame.

## Components

### Buttons
Pressed sheets: heavy display type on a flat block that lands when pressed.
- **Shape:** near-square (2px), min-height 52px (44px in the nav), padding 14px 26px.
- **Primary:** pink fill with grain, pink-ink text, a 1.5px border in the same pink, display face at 800, 1.125rem.
- **Hover:** primary shifts to the deep pink screen (paper-3); secondary fills with the pink screen (paper-2). Transitions are 160ms on the ease-out curve (cubic-bezier(0.16, 1, 0.3, 1)).
- **Active:** the button drops 1px down and right (`translate(1px, 1px)`), a sheet landing.
- **Focus:** a 2px focus-blue outline offset 3px, no transition.
- **Secondary:** transparent on stock with a 1.5px blue frame and blue text.
- **Disabled:** opacity 0.55, not-allowed cursor.

### Links
Inherit the text colour and carry a 2px pink underline offset 0.22em, thickening to 3.5px on hover. Nav links have no underline at rest and gain the 2px pink underline on hover.

### Cards / Containers
- **Corner Style:** 2px.
- **Background:** stock for frames; the pink screen (paper-2) with grain for the lead service card and for placeholders.
- **Shadow Strategy:** none (see Elevation & Depth).
- **Border:** 1.5px blue frame for screenshots; services rows divide with 1px hairlines under a 1.5px blue top rule.
- **Internal Padding:** clamp(24px, 3vw, 40px) on the lead card.
- **Imagery:** product screenshots print in their own full colour on the stock, never duotoned. Portraits print in both drums: grayscale multiplied over the pink screen with blue lightened in.

### Inputs / Fields
- **Style:** stock fill, 1.5px blue frame, 2px radius, 12px 14px padding, min-height 48px (140px for the textarea).
- **Hover:** fills with the pink screen.
- **Focus:** 2px focus-blue outline offset 2px, background returns to stock.
- **Error:** on `:user-invalid` the frame turns pink and the field takes the pink screen.

### Form Status
States print as stamped lines in the display face at 800, never toasts. Sending is muted blue text; sent is a pink stamp with pink-ink text (4px 10px); failed is a pink-screen stamp with a 1.5px blue frame.

### Navigation
Sticky bar at 76px (64px below 900px) on translucent stock with a 1px pale hairline below. Wordmark left (spark glyph plus "funkel labs" in Cabinet 800); section links in the body face at 500, 1rem; language switch and a compact pink primary button right.

### Spark Plates (signature)
The hero's three.js spark is two halftone plates, pink screened at 15° and blue at 75°, multiplied so purple prints where they cross. The plates drift out of register and pull into register as the pointer comes close, with a capped tilt toward the pointer. A static two-ink SVG print of the same plates is the fallback for reduced motion, no WebGL, data-saver and low-memory devices; the canvas fades in over it only once live.

### Process Separations (signature)
"How we work" is one sheet shown pass by pass: a dashed blue sketch, the blue plate, the pink plate, then the registered sheet. The final sheet slides from (12px, 10px) to a residual (3px, 2.5px) drift once when it scrolls into view (900ms ease-out), and stays still under reduced motion.

### Footer Mast (signature)
The wordmark printed twice at mast scale: a pink plate offset 0.035em / 0.03em under a multiplied blue plate, over a 1.5px blue rule.

## Do's and Don'ts

### Do:
- **Do** draw every word, rule, frame and icon in the blue drum (ink, ink-2, muted) and lay every fill in the pink drum (pink, paper-2, paper-3).
- **Do** make purple only by overprinting pink and blue layers with `mix-blend-mode: multiply`.
- **Do** put grain on ink fields as `background-image: var(--grain)` beside a `background-color`, never the `background` shorthand.
- **Do** use the 2px sheet radius, a 1.5px blue frame for primary frames and controls, and 1px hairlines for dividers.
- **Do** set heads in Cabinet Grotesk 800 (Dela Gothic One on JA) with `font-synthesis-weight: none` on Japanese pages.
- **Do** mark Japanese head and lede phrase breaks with U+200B and keep them under `word-break: keep-all`.
- **Do** give pressed controls a 1px down-right drop and focus a 2px focus-blue outline offset 3px.
- **Do** ship a static two-ink print for any WebGL or motion piece, shown under reduced motion and when WebGL is unavailable.
- **Do** print form and system states as stamped lines on the sheet.

### Don't:
- **Don't** use black, neutral grey, or a cream or warm-white stock.
- **Don't** add box-shadows or glows; depth is overprint.
- **Don't** introduce a third ink or a purple token.
- **Don't** put grain on bare stock.
- **Don't** misregister body text, controls or more than one word per head; the offset is a signature, used sparingly.
- **Don't** duotone product screenshots; they print in full colour inside a blue frame.
- **Don't** use toasts for form state.
- **Don't** set display type at weights other than 800 or let the browser synthesise bold.
- **Don't** add Tailwind utility classes; Tailwind supplies only preflight and the theme tokens, and components style themselves in scoped styles.
