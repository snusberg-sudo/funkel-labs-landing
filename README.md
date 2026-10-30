# Funkel Labs website

Bilingual (English at `/`, Japanese at `/ja/`) landing page for Funkel Labs. Built with Astro, three.js and Tailwind's reset/theme layer; deploys to Vercel as a static site.

## Run it

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run check    # type-check
```

## Environment

Copy `.env.example` to `.env` (and set the same variables in Vercel):

| Variable | What it is |
|---|---|
| `PUBLIC_WEB3FORMS_KEY` | Access key from [web3forms.com](https://web3forms.com), created with the inbox that should receive contact messages. Without it the form shows its error message. |
| `PUBLIC_CONTACT_EMAIL` | The public address shown on the page and in the footer. |

## Content to fill in

All copy lives in [`src/i18n/content.ts`](src/i18n/content.ts), English and Japanese side by side. Search for `TODO`:

- **Apps** (`work.apps`): name, platform, one line, screenshot, store or live link. Put screenshots in `public/work/` and set `image` to `/work/<file>`; the first app is the tall phone slot (1290 × 2796), the other two are browser slots (2880 × 1800). Screenshots keep their full colour.
- **Team** (`about.people`): name, role, one-line bio, square photo in `public/team/`. Photos are printed in the blue drum over the pink screen automatically.
- **Footer** (`footer`): legal company name and registered address.
- **Domain**: `site` in [`astro.config.mjs`](astro.config.mjs) (used for canonical and hreflang links).

Japanese headings break only at phrase boundaries marked with `​` in the copy; add one wherever a new heading should be allowed to wrap.

## Design

The visual direction ("Two-Drum Riso": blue and fluorescent pink inks on bright stock) is recorded in [`PRODUCT.md`](PRODUCT.md) and `.impeccable/`. Tokens are in [`src/styles/global.css`](src/styles/global.css); every colour and font goes through them.
