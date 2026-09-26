# TheTwelveTable website

Static website for TheTwelveTable (Advocates, Solicitors & Legal Consultants, Delhi).
Built with Next.js (static export), React and Tailwind CSS, and hosted on Cloudflare Pages.

The site is built to turn visitors into **phone calls and WhatsApp chats**.

## Where to change things

| What | File |
| --- | --- |
| Phone, WhatsApp number, email, hours, address, social links | `src/config/contact.ts` |
| Practice areas (text, images, URLs) | `src/data/practiceAreas.ts` |
| Menu links | `src/config/nav.ts` |
| Page title, description, structured data | `src/app/layout.tsx` |

## Develop

```sh
npm install
npm run dev        # http://localhost:3000
npm run build      # writes the static site to out/
npm run preview    # serves out/ locally
```

Optional environment variable (set in Cloudflare, or in `.env.local` for local builds):

```
NEXT_PUBLIC_SITE_URL=https://your-domain   # used for sitemap, canonical URLs and share previews
```

## Deploy on Cloudflare Pages

- Framework preset: **None** (plain static)
- Build command: `npm run build`
- Build output directory: `out`
- Environment variables: `NEXT_PUBLIC_SITE_URL` and `NODE_VERSION=22`

`public/_headers` sets security and cache headers. Cloudflare serves `404.html` for unknown URLs automatically.

## Leads

- Every call link has `data-lead="call"`, every WhatsApp link `data-lead="whatsapp"`, and the form button
  `data-lead="form"`. Each also carries `data-lead-source` (hero, navbar, card-bail, mobile-bar, …).
  Use these as click triggers in Cloudflare Zaraz to send events to Google Analytics.
- The enquiry form has no backend: it opens WhatsApp with the visitor's name, phone, type of matter
  and message filled in. Nothing is stored on the website.

## Click tracking with Cloudflare Zaraz (no code needed)

1. Cloudflare dashboard → your domain → **Zaraz** → Tools → add **Google Analytics 4** (paste the Measurement ID).
2. Zaraz → **Triggers** → create three triggers, rule type *Click listener*, type *CSS selector*:
   - `call_click` → `[data-lead="call"]`
   - `whatsapp_click` → `[data-lead="whatsapp"]`
   - `form_submit` → `[data-lead="form"]`
3. In the GA4 tool add an **Action** per trigger (event name = trigger name).
