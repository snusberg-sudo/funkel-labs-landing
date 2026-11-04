---
name: Funkel Labs
description: Two-Drum Riso. Software printed in two inks, registered by hand, on bright cool stock, told in colour chapters.
colors:
  paper: "oklch(98.7% 0.004 300)"
  paper-2: "oklch(94.6% 0.03 356)"
  paper-3: "oklch(86% 0.1 356)"
  ink: "oklch(40% 0.165 265)"
  ink-3: "oklch(55% 0.135 265)"
  ink-4: "oklch(74% 0.085 265)"
  ink-5: "oklch(87% 0.045 265)"
  muted: "oklch(49% 0.11 265)"
  pink: "oklch(68% 0.235 356)"
  pink-ink: "oklch(22% 0.11 265)"
  focus: "oklch(44% 0.2 265)"
  on-ink: "oklch(98.7% 0.004 300)"
  on-ink-muted: "oklch(88% 0.04 265)"
typography:
  display:
    fontFamily: "Cabinet Grotesk, Dela Gothic One, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(60px, 9vw, 140px)"
    fontWeight: 800
    lineHeight: 0.86
    letterSpacing: "-0.035em"
  heading:
    fontFamily: "Cabinet Grotesk, Dela Gothic One, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(36px, 5.2vw, 84px)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "-0.035em"
  lead:
    fontFamily: "Literata Variable, Zen Kaku Gothic New, ui-serif, Georgia, serif"
    fontSize: "clamp(21px, 2.1vw, 30px)"
    fontWeight: 400
    lineHeight: 1.3
  body:
    fontFamily: "Literata Variable, Zen Kaku Gothic New, ui-serif, Georgia, serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.55
    fontFeature: "\"tnum\" 1"
  small:
    fontFamily: "Literata Variable, Zen Kaku Gothic New, ui-serif, Georgia, serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
rounded:
  sheet: "2px"
spacing:
  gutter: "clamp(16px, 2.2vw, 32px)"
  measure: "1536px"
  section-gap: "clamp(96px, 14vw, 200px)"
  chapter-head: "clamp(96px, 8vw, 120px)"
  chapter-room: "max(360px, 100svh - chapter-head - step-heading - 136px)"
  tile-gap: "8px"
components:
  button-primary:
    backgroundColor: "{colors.pink}"
    textColor: "{colors.pink-ink}"
    rounded: "{rounded.sheet}"
    padding: "14px 26px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.paper-3}"
    textColor: "{colors.pink-ink}"
  button-secondary:
    backgroundColor: "{colors.paper-2}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sheet}"
    padding: "14px 26px"
    height: "52px"
  button-secondary-hover:
    backgroundColor: "{colors.paper-3}"
    textColor: "{colors.ink}"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.pink-ink}"
    rounded: "{rounded.sheet}"
    padding: "14px 16px"
    height: "52px"
  input-hover:
    backgroundColor: "{colors.paper-2}"
  input-invalid:
    backgroundColor: "{colors.paper-3}"
  status-sent:
    backgroundColor: "{colors.pink}"
    textColor: "{colors.pink-ink}"
    rounded: "{rounded.sheet}"
    padding: "4px 10px"
  status-failed:
    backgroundColor: "{colors.paper-2}"
    textColor: "{colors.pink-ink}"
    rounded: "{rounded.sheet}"
    padding: "4px 10px"
  chapter-services:
    backgroundColor: "{colors.paper-3}"
    textColor: "{colors.pink-ink}"
  chapter-press-room:
    backgroundColor: "{colors.pink-ink}"
    textColor: "{colors.on-ink}"
  chapter-about:
    backgroundColor: "{colors.pink}"
    textColor: "{colors.pink-ink}"
  chapter-contact:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-ink}"
  footer-tile:
    backgroundColor: "{colors.paper-2}"
    textColor: "{colors.pink-ink}"
    padding: "24px"
---

# Design System: Funkel Labs

## Overview

**Creative North Star: "Two-Drum Riso"**

Every surface is a print run on bright, cool, uncoated stock through two drums. A medium blue drum sets every word and stroke; a fluorescent pink drum lays every fill. Purple is never mixed: it appears only where the two inks overprint, through `mix-blend-mode: multiply`. There is no black anywhere, and no third ink.

The page is told in colour chapters. Each section is a full-bleed field of one ink or screen, and the next section is a different field: stock meeting the blue drum at a waterline in the hero, the deep pink screen for services, the deepest blue for the press room, stock with a dark-to-light blue accordion for process, full pink for about, full blue for contact, and a board of filled tiles to close. Nothing is outlined. Surfaces are told apart by a tone step and by space, never by a rule or a frame.

The page is flat paper. Depth comes from overprint and registration, not from light: the hero seam rising as the sheet feeds into the drum, the spark's plates pulling into register, the poster plates striking off register and settling, the footer mast's pink plate travelling home. Paper specks (grain) appear only where ink has been laid. Type is heavy and close-set: Cabinet Grotesk 800 over Literata, with Dela Gothic One and Zen Kaku Gothic New on Japanese pages.

**Key Characteristics:**
- Light cool stock, blue ink, pink fill, purple only from multiply overprint, no black.
- Colour chapters: one full-bleed field per section, separated by tone and space.
- No hairlines, no outlined boxes, no shadows; secondary controls are filled tones.
- Grain as background-image specks on ink fields only.
- Five type steps; heavy display (800) over a serif reading face.
- Found pictures in one two-drum duotone, credited on the picture credits page linked from the footer.
- Motion is registration: plates drift and land, sheets feed, parts rise in turn.

## Colors

Two inks on one stock: a medium blue that draws and a fluorescent pink that fills, with screens of each standing in for tints and for every surface step.

### Primary
- **Drum Blue** (ink): headings and running text on stock, every icon and SVG stroke, and the full-blue contact field, the hero's lower sheet, the first accordion pass and the footer mast tile.
- **Blue Screen 3** (ink-3): the second accordion pass, the press-room screen under the video, and the alternating detail rows on the contact field.
- **Blue Screen 4** (ink-4): the third accordion pass, the email footer tile, a portrait tint.
- **Blue Screen 5** (ink-5): the fourth accordion pass, the footer links tile, a work card panel, a portrait tint.
- **Focus Blue** (focus): the default focus outline on stock and pale fields.

### Secondary
- **Fluorescent Pink** (pink): every solid fill. The primary button, the full-pink about field, the footer "start" tile, the sent stamp, the round go button, text selection, link underlines, caret, the pink plate of the spark, the poster and the mast. Also the focus outline on blue fields. Never running text on stock.
- **Pink Screen** (paper-2): the secondary button, input hover, the failed stamp, the default footer tile, a work card panel, a portrait tint.
- **Deep Pink Screen** (paper-3): the services field, every hover of a pink or pink-screen fill, the invalid input, and the screen that found pictures print onto.

### Neutral
- **Cool Stock** (paper): the page, the nav, the process chapter, the footer ground, inputs, the poster sheet, a work card panel. A cool near-white, deliberately not cream.
- **Pink Ink** (pink-ink): text on pink fills and pale screens, and the press-room field. A deep navy from the blue family, not black.
- **Muted Blue** (muted): placeholders and legal meta on stock.
- **On-Ink Stock** (on-ink) and **On-Ink Mist** (on-ink-muted): text, hints and the sending state on blue fields.

### Named Rules
**The Two Drums Rule.** Blue draws (words, strokes, icons); pink fills (buttons, stamps, selection, underlines, plates). A colour doing the other drum's job is a defect.

**The Overprint Purple Rule.** Purple is never a token. It exists only where a pink and a blue layer cross under `mix-blend-mode: multiply`.

**The No Black Rule.** No `#000`, no neutral greys. The darkest value on the page is pink-ink.

**The Grain-on-Ink Rule.** The grain specks are a `background-image` beside a `background-color` on ink fields (the services, about and contact chapters, the hero drum, pink buttons, the poster, picture plates). Bare stock carries no grain.

**The Ordered Screens Rule.** When fields carry an order, they step through one drum's screens darkest to lightest (ink, ink-3, ink-4, ink-5). Text flips from on-ink to pink-ink at ink-4.

## Typography

**Display Font:** Cabinet Grotesk 800, self-hosted (with Dela Gothic One for Japanese, then ui-sans-serif)
**Body Font:** Literata Variable (with Zen Kaku Gothic New on Japanese pages, then ui-serif, Georgia)
**Japanese:** Dela Gothic One heads, Zen Kaku Gothic New body; ui-sans-serif for Japanese words on English pages.

**Character:** A blunt, ink-heavy grotesk that looks pressed into the stock, over a warm bookish serif that reads like a printed leaflet.

### Hierarchy
- **Display** (800, clamp(60px, 9vw, 140px), 0.86, uppercase on Latin pages): the hero head and the footer mast. 15.5vw on phones (13.5vw JA, line-height 1.02, no uppercase).
- **Heading** (800, clamp(36px, 5.2vw, 84px), 1): section heads, the services list at poster scale, the open accordion pass, the contact detail rows.
- **Lead** (clamp(21px, 2.1vw, 30px), 1.3): hero, work and about ledes held to 26 to 34ch, and in the display face at 800 for card titles, closed accordion tabs, the team heading and the footer start tile.
- **Body** (400, 1.125rem, 1.55, tabular numerals): running text, 36 to 48ch; buttons, stamps and person names in the display face at 800. JA body line-height 1.85.
- **Small** (1rem): form labels (600), roles, hints, footer meta.

Display tracking is -0.035em on Latin pages and -0.01em on Japanese pages. No other sizes: every size on the page is one of the five steps, except the fitted poster plates and the viewport-width display sizes on phones (hero 15.5vw, mast 12vw).

### Named Rules
**The Five Steps Rule.** Type sizes come only from the five step tokens (display, heading, lead, body, small). A new size is a new step or it is a defect.

**The One Weight Rule.** Heads are 800 and only 800. Dela Gothic One has a single weight, so Japanese pages set `font-synthesis-weight: none` and Latin inside Japanese heads stays in Cabinet 800.

**The Phrase Break Rule.** Japanese heads and ledes (`.phrased`) use `word-break: keep-all` and break only at the U+200B phrase marks placed in the copy. Running Japanese text uses `word-break: auto-phrase` with `line-break: strict`.

## Layout

Colour chapters on one tight measure: content sits in a 1536px measure with a narrow gutter (clamp(16px, 2.2vw, 32px)) so large type runs toward the edges, while each chapter's field runs full bleed. Chapters are separated by a change of field and by the section gap (clamp(96px, 14vw, 200px)) as vertical padding, never by a divider. Because a chapter lands at the top edge, every chapter after the hero opens on the shorter chapter head (clamp(96px, 8vw, 120px)) and closes on its full gap, so headings land at one height. A piece that must be seen whole (the process accordion, at most 520px, and the contact poster) is capped to the chapter room left below the heading, and services fills at least one viewport so no neighbour shows beneath it. Splits are asymmetric fractional tracks: 8/4 for service name against sentence on a shared first baseline, 7/5 for head against lede, 5/1/5/1 for the process intro, 6/6 for about and for the form against the poster, a 12-column tile board with 8px gaps in the footer.

The hero is a full-viewport stage (100svh minus the 72px nav) pinned for 175svh on desktop. The press room pins for its own height plus the cards' travel at 1024px and up. On phones and under reduced motion both unpin: the hero is a single screen and the work cards stack (two up from 640px). Every split collapses to one column at 760px; the footer board drops to two columns with 6px gaps, mast and start tile first.

### Named Rules
**The Tone-and-Space Rule.** Two surfaces that touch differ by a tone step, or they are held apart by space. If a boundary needs a line to be seen, the tones are too close.

**The Shrinkable Rail Rule.** Any flex child that carries a track, a rail or long text sets `min-width: 0`, so it can shrink inside its parent instead of pushing the page wide.

## Elevation & Depth

The system is flat. There are no box-shadows anywhere. Depth is overprint (layers under `mix-blend-mode: multiply`, so pink under blue reads purple) and registration (a pink plate offset about 0.035em right and 0.03em down). Fields stack by clipping and tone, not lift: the hero's stock and drum sheets are clipped either side of one seam, and the form sits on the blue field as flat stock.

### Named Rules
**The Overprint Depth Rule.** Stack with multiply and offset, never with shadows or glows. If a layer needs to read "above", it overprints.

**The One Hair Off Rule.** Misregistration is a signature and stays rare: the spark's plates, the poster's plates, the footer mast. Body text and controls are always in register.

**The Draw-Once Rule.** Decorative duplicate text (the hero's stock copy of the headline, the poster plates, the mast's pink plate) is drawn from a `data-text` attribute through `::before { content: attr(data-text) }`, so the page carries each text once and assistive tech reads it once.

## Shapes

Near-square and unframed. Buttons, inputs and stamps take the 2px sheet radius; fields, tiles, cards and pictures are square-cut and run to their edges. The only round forms are the go button and the ink-roller picture in the contact rows (50%). There are no borders on any surface or control. The recurring silhouette is the four-point spark (the wordmark glyph), filled solid or printed as pink and blue halftone plates.

## Components

### Buttons
Pressed sheets: heavy display type on a flat block that lands when pressed.
- **Shape:** near-square (2px), min-height 52px (44px in the nav), padding 14px 26px, display face at 800 in the body step.
- **Primary:** pink fill with grain, pink-ink text.
- **Secondary:** a filled pink screen (paper-2) with blue text. No frame.
- **Hover:** both shift to the deep pink screen (paper-3) over 160ms on the ease-out curve (cubic-bezier(0.16, 1, 0.3, 1)).
- **Active:** the button drops 1px down and right (`translate(1px, 1px)`), a sheet landing.
- **Focus:** a 2px focus-blue outline offset 3px, no transition.
- **Disabled:** opacity 0.55, not-allowed cursor; progress cursor while the form sends.

### Links
Inherit the text colour and carry a 2px pink underline offset 0.22em, thickening to 3.5px on hover (3px at rest in the heading-size contact rows).

### Cards / Tiles
- **Corner Style:** square.
- **Background:** filled screens of the two drums at a similar lightness, rotating stock, pink screen and blue screen (work panels, portrait tints, footer tiles).
- **Shadow Strategy:** none (see Elevation & Depth).
- **Border:** none. A card is a picture over a filled panel.
- **Internal Padding:** 28px on work panels (20px stacked), 24px on footer tiles (20px on phones).
- **Screenshots:** product screenshots print in their own full colour, square-cut over a deep pink screen with grain, never duotoned.

### Found Pictures
Found pictures (CC BY, credited on the picture credits page) print in one two-drum duotone: the image at `grayscale(1) contrast(1.15)` multiplied onto the deep pink screen (paper-3), with a Drum Blue layer above under `mix-blend-mode: lighten`, so shadows print blue and lights print pink. Portraits share the treatment. The press-room video is the one single-drum variant: multiplied onto ink-3 with pink-ink lightened in, so it reads as a blue screen behind the cards. Closed accordion passes show a strip of their picture multiplied into their own blue at half opacity.

### Inputs / Fields
- **Style:** filled stock, no border, 2px radius, 14px 16px padding, min-height 52px (120px for the textarea), pink-ink text, muted placeholder.
- **Hover:** fills with the pink screen.
- **Focus:** on the blue field, a 3px pink outline offset 2px; background returns to stock.
- **Error:** on `:user-invalid` the field takes the deep pink screen.

### Form Status
States print as stamped lines in the display face at 800, never toasts. Sending is on-ink mist text; sent is a pink stamp, failed a pink-screen stamp, both pink-ink text at 4px 10px. A result lands like a rubber stamp: from scale 1.12 and -2deg to square over 260ms (an opacity-only fade under reduced motion).

### Navigation
A plain sticky bar on stock, 72px tall (60px below 480px): the wordmark at the lead step, the language switch, one compact pink primary button. No divider below it. It slides up out of view while scrolling down past the hero's print run (never before 120px), and returns on scroll up or on focus (320ms). It holds through the hero because the hero stage is pinned below it. Section links live in the footer. The nav holds still across the language switch's cross-document view transition (260ms crossfade).

### Scrolling
On fine-pointer devices, a wheel gesture jumps to the next chapter stop with a GSAP ScrollTo transition that moves at once and lands softly (power4.out, 700ms plus 350ms per viewport travelled, at most 1100ms). Tall chapters add reading stops within them so the hero print run, work rail and lower content remain reachable; a pinned stage's last stop is where it releases. A chapter lands flush with the top edge going down (the nav has stepped aside) and just below the nav going up, and pinned stages redraw in the same frame as each tweened scroll step. A jump's own trackpad momentum is ignored; reversing turns back at once, and a fresh push in the same direction chains to the next stop once the jump is halfway through. Touch, keyboard, scrollbar dragging and reduced-motion scrolling stay native. Section links scroll smoothly with the 96px scroll offset.

### Print Run Hero (signature)
Two sheets meet at a seam: stock above, the blue drum with grain below. The headline is set twice in the same place (blue on stock, pink on the drum), each clipped to its own side, so the seam cuts through the second line. On desktop the hero pins and the seam rises from 56% to the top as the sheet feeds into the drum, while the three.js spark (pink plate screened at 15°, blue at 75°, multiplied) pulls into register, squares up and turns a quarter turn. On load each headline line rises from behind its own mask (900ms, 110ms stagger) and the lede fades up. A static two-ink SVG of the spark is the fallback for reduced motion and no WebGL.

### Services Ink Roller
The service list runs as a press run on desktop with motion allowed. The line in hand is set in blue; a pink plate of its own letters (drawn from `data-text`, offset 0.035em / 0.03em, multiplied, so it prints purple over the blue) rolls on from the left at a constant pace, and the roll is the timer: when the plate covers the line, the next line takes the press. The printed line keeps its full plate as it leaves, and the plate lifts away to 0.16em / 0.12em off register while it fades (420ms) as the letters drop back to navy, so the hand-off reads as one sheet leaving and the next arriving. The sentences share one panel across the last five columns, set at the lead step and centred against the list; the new sentence strikes in 0.4em / 0.25em off register and settles (520ms), the previous one fading out (200ms). The heading holds the first beat (3s) with nothing beside it; the four services then loop at 4.5s each. Hovering the list with a moving mouse or focusing a name pauses the roll, and hovering a name picks it; clicking a name prints it fully and stops the run until the reader leaves the chapter. It runs only while the chapter fills at least half the screen and the tab is visible. Names become real buttons only when the run is armed; on phones, under reduced motion and without script every line and sentence stays printed.

### Press Room Showcase (signature)
The deepest-blue chapter. A press-run video loops behind the cards in its blue screen, playing only while on screen and never under reduced motion. On desktop the stage pins and scroll carries the work cards right to left across it; a card's caption prints only once the whole card is inside the margins.

### Process Accordion (signature)
Four passes of the run, darkest to lightest in the blue screens. Every pass is a real button. On desktop the open pass takes 4.2 times the flex of the others (450ms), closed passes show their rotated name and a picture strip. Hover or click selects a pass. On phones they stack. Without script all four stay readable.

### Print Your Idea Poster (signature)
The one live thing on the page. A sheet of stock with grain beside the contact form: the visitor's typed idea is set in two plates (pink, and blue multiplied over it) drawn from `data-text`, fitted as large as the sheet allows. On each keystroke the plates strike off register by 6 to 14px and settle to a residual 2.5px / 2px over 520ms. The visitor's name prints in the credit line. Until the visitor starts, the press demonstrates itself while the poster is on screen: four sample ideas (the bakery first) are set one letter at a time at a typist's uneven pace (about 70ms a letter), each letter striking the plates off register, at a size fitted to the whole line first so the letters never resize; the line holds 2.6s, then the sheet lifts 14px and fades (420ms) and the next idea is set, the field's placeholder following each one. Any focus or typing in the form stops it for good; under reduced motion the first idea simply stands.

### Footer Board (signature)
A board of filled tiles on stock with 8px gaps: statement, links, place and live Tokyo time, email with its envelope, the mast and a pink start tile with an arrow that moves on hover. The mast prints the wordmark in stock colour on the blue drum over a pink plate; on a scroll-driven view timeline the pink plate travels from 0.2em / 0.16em into its 0.035em / 0.03em register. The email tile carries an envelope above the address, printed in the two drums like the rest of the board: the pink drum lays its fill (with grain), and its key line, in the start arrow's stroke and size, is multiplied over it 1.5 units out of register, leaving a pink edge at the bottom and right. The links tile ends with the picture credits page, which credits every found picture with a thumbnail.

### Section Entrances
The parts of each chapter (marked `data-rise`) rise 28px and fade in turn, staggered 80ms, the first time the chapter enters view. The hiding is armed only once the script adds `.motion` to the root, so the page reads fully without it.

## Do's and Don'ts

### Do:
- **Do** draw every word and stroke in the blue drum and lay every fill in the pink drum or a screen of either.
- **Do** make purple only by overprinting pink and blue layers with `mix-blend-mode: multiply`.
- **Do** give each section one full-bleed field and separate chapters by a change of field and the section gap.
- **Do** tell touching surfaces apart by a tone step; make a quieter control a filled screen (paper-2), not an outline.
- **Do** put grain on ink fields as `background-image: var(--grain)` beside a `background-color`, never the `background` shorthand.
- **Do** take every type size from the five step tokens and set heads in Cabinet Grotesk 800 (Dela Gothic One on JA) with `font-synthesis-weight: none` on Japanese pages.
- **Do** mark Japanese head and lede phrase breaks with U+200B and keep them under `word-break: keep-all`.
- **Do** draw decorative duplicate text from `data-text` pseudo-elements so the page carries each text once.
- **Do** set `min-width: 0` on flex rails and tracks.
- **Do** print found pictures in the two-drum duotone and credit each on the picture credits page (`/credits/`, `/ja/credits/`), linked from the footer.
- **Do** keep spatial motion inside a `prefers-reduced-motion: no-preference` query, and ship a static two-ink print for any WebGL piece.
- **Do** print form and system states as stamped lines.

### Don't:
- **Don't** draw hairline rules, dividers, or outlined boxes, on surfaces or on controls.
- **Don't** use black, neutral grey, or a cream or warm-white stock.
- **Don't** add box-shadows or glows; depth is overprint.
- **Don't** introduce a third ink or a purple token.
- **Don't** put grain on bare stock.
- **Don't** misregister body text or controls.
- **Don't** duplicate text in the DOM for a decorative plate.
- **Don't** show found pictures in their own colour.
- **Don't** use toasts for form state.
- **Don't** set display type at weights other than 800 or let the browser synthesise bold.
- **Don't** add Tailwind utility classes; Tailwind supplies only preflight and the theme tokens, and components style themselves in scoped styles.
