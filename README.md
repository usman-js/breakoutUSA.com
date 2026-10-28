# Breakout USA Website

Premium B2B marketing site for Breakout USA, built with Next.js (App Router), TypeScript, Tailwind CSS v4, and lucide-react.

## Run locally

```bash
npm install
cp .env.example .env.local   # optional, see "Inquiry delivery" below
npm run dev                  # http://localhost:3000
```

Production check:

```bash
npm run build
npm run start
```

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Homepage: hero, marketplace channels, services, benefits, process, CTA |
| `/about` | About Us (placeholders for details still to confirm) |
| `/services` | Detailed service overview |
| `/brand-partnerships` | Key conversion page: who should apply, process, FAQ, partnership form |
| `/contact` | Contact form and business contact details (when confirmed) |
| `/privacy-policy`, `/terms-of-service` | Draft placeholders, legal review required |
| `/api/inquiries` | POST endpoint that validates and forwards form submissions |

## Where to edit content

All company facts, navigation, services, FAQs, and form options live in `src/lib/site.ts`.
Look for `TODO` comments and bracketed placeholders, and confirm them before launch:

- Business email, phone, and address (`company` object)
- Founding year, location, and history (`/about`)
- Production domain (`metadataBase` in `src/app/layout.tsx`)
- Legal page content (`/privacy-policy`, `/terms-of-service`)
- Replace the illustrative visuals (`src/components/Visual.tsx`) with licensed photography

## Inquiry delivery

Forms are validated in the browser and again on the server (`src/lib/validation.ts`).
Delivery goes through a webhook you control:

1. Create a webhook in your CRM, Zapier/Make, or an email service.
2. Set `INQUIRY_WEBHOOK_URL` in `.env.local` (locally) or in your hosting provider's environment settings (production).

If the variable is not set, the forms show an honest "not configured" message. They never pretend a message was sent.

Never commit `.env.local`.

## Structure

```
src/
  app/            Routes (one folder per page) and the API route
  components/     Reusable UI: header, footer, buttons, sections, forms
  lib/            Site content (site.ts) and shared validation (validation.ts)
```
