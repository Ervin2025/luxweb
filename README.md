# Luxaura

Luxaura is a Next.js B2B website for wholesale fabrics, custom curtains, soft furnishings, trimmings, blind solutions, tracks and project support in Sydney.

## Stack

- Next.js 15 App Router
- React 18
- TypeScript
- Tailwind CSS

## Local Preview

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
node node_modules/next/dist/bin/next dev
```

Open [http://localhost:3000](http://localhost:3000).

The direct `node .../next` command is recommended in this repo because local `.bin` executables may not have execute permissions in some environments.

## Main Routes

- `/`
- `/wholesale-fabrics`
- `/custom-curtains-sheers`
- `/cushions-soft-furnishings`
- `/trimmings`
- `/blinds-solutions`
- `/tracks-motorisation`
- `/outdoor-solutions`
- `/trade-projects`
- `/quote`
- `/about`
- `/contact`
- `/faq`
- `/thank-you`
- `/trade/login`

Legacy routes such as `/collections`, `/services`, `/mastery-workshop`, `/trade`, `/blinds`, `/curtains-sheers` and `/motorisation` now redirect to the formal route structure.

## Project Structure

```text
app/
  page.tsx                     Homepage
  wholesale-fabrics/           Wholesale fabrics page
  custom-curtains-sheers/      Curtains and sheers page
  cushions-soft-furnishings/   Soft furnishings page
  trimmings/                   Trimmings page
  blinds-solutions/            Blinds page
  tracks-motorisation/         Tracks and motorisation page
  outdoor-solutions/           Outdoor page
  trade-projects/              Trade, catalogue and project workflow page
  quote/                       Standalone quote page
  about/                       About page
  contact/                     Contact page
  faq/                         FAQ page
  thank-you/                   Post-submit success page
components/
  BusinessPageTemplate.tsx     Shared business-page renderer
  CatalogExplorer.tsx          Filterable catalogue with zoom view
  TradeForm.tsx                Trade/projects multi-intent form
  QuoteForm.tsx                Quote form
  ContactSection.tsx           Contact form and support blocks
  Navigation.tsx               Two-row desktop navigation + mobile menu
  Footer.tsx                   Footer with category and support links
lib/
  site-data.ts                 Typed local content model and page config
  business-pages.ts            Business page metadata helpers
  faq-schema.ts                FAQ JSON-LD helper
  breadcrumb-schema.ts         Breadcrumb JSON-LD helper
```

## Content Model

This site is intentionally local-data driven for this phase. Navigation, business page content, FAQ groups, form intents and thank-you states are all defined in `lib/site-data.ts`.

There is no CMS, database or CRM integration in this version.

## Forms

The current form flow uses Web3Forms on the client side.

- Trade & Projects: `/thank-you?form=trade-projects`
- Quote: `/thank-you?form=quote`
- Contact: `/thank-you?form=contact`

`Trade & Projects` also supports intent-based entry such as:

```text
/trade-projects?intent=catalogue-request
```

ABN checksum validation remains in the trade-access flow.

## Validation

Use these commands before release:

```bash
node node_modules/typescript/bin/tsc --noEmit
node node_modules/next/dist/bin/next lint
node node_modules/next/dist/bin/next build
```
