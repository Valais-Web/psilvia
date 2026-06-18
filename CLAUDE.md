# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**psilvia.com** is the professional website for Silvia Gómez, a Spanish-speaking psychologist and psychotherapist offering private online psychotherapy. It is a carefully positioned digital platform built around trust, legal clarity, cultural relevance, SEO visibility and conversion — not a brochure site.

**Two distinct audiences:**
1. **Patients** — mainly adults and young adults seeking online therapy in Spanish. The site guides them to understand what Silvia offers, how online sessions work, what problems she addresses, and how to book.
2. **Psychologists/psychotherapists** — Spanish-speaking professionals looking for clinical materials (CBT/ACT/DBT templates, worksheets, session resources) that Silvia sells or distributes via `/para-psicologos`.

**Core positioning:** Silvia bridges the gap between the expensive, inaccessible Swiss therapy market (rarely available in Spanish) and the need for structured, evidence-based therapy in Spanish for Latin Americans, migrants and international residents in Switzerland. The service is explicitly private online psychotherapy — not a replacement for Swiss medical or psychiatric care.

## Silvia's Professional Background

- Licensed psychologist in **Mexico**
- Two master's degrees in **Spain**, including postgraduate training in Cognitive Behavioural Psychotherapy
- Currently lives in Switzerland, but **not officially recognised as a Swiss psychotherapist** and **not accredited within the Swiss healthcare system**
- Clinical approach: **CBT/TCC** (primary), **ACT** (Acceptance and Commitment Therapy), **DBT** (Dialectical Behaviour Therapy), behavioural analysis, contextual therapies

This background has direct implications for all copy and legal wording — see the Legal & Compliance section below.

## Commands

```bash
npm run dev        # Start dev server (Vite)
npm run build      # Production build
npm run build:dev  # Development build
npm run lint       # ESLint
npm run preview    # Preview production build locally
```

No test suite is configured. Deployed via **Netlify** with custom domain `psilvia.com`.

## Architecture

**Stack:** React 18 + TypeScript + Vite + Tailwind CSS + shadcn/ui + React Router v6

**Routing** (`src/App.tsx`): All routes are defined here. The app has two layers:
- **Core pages** (`src/pages/`): `Inicio` (home), `Terapia`, `SobreMi`, `ParaPsicologos`, `NotFound`
- **SEO landing pages** (`src/pages/seo/`): Programmatic pages targeting specific Spanish-language search intents. **Not linked from main navigation** — entry points for organic traffic only.

**SEO infrastructure** (`src/components/`):
- `PageSEO.tsx` — lightweight wrapper using `react-helmet-async` for title, description, canonical, OG tags, and JSON-LD schema injection. Used by core pages.
- `SEOPageLayout.tsx` — full-page layout for all SEO landing pages. Renders a fixed structure (hero → pricing → benefits → article body via `children` → FAQ accordion → CTA → trust indicators → legal disclaimer) and auto-generates `FAQPage` and `ProfessionalService` JSON-LD schemas.

**Booking:** `BookingDialog.tsx` wraps a Calendly iframe (`https://calendly.com/silviagomez-psic/tcc`) in a shadcn Dialog. The primary CTA across every page — always use `<BookingDialog>` for booking actions, never a bare link.

**Component library:** Full shadcn/ui set in `src/components/ui/`. Path alias `@/` maps to `src/`.

## Design System & Visual Identity

The brand is built around the psilvia logo, which includes a **cactus illustration**. The palette is warm, soft and calm — it must never feel cold or clinical.

**Token palette** (all colors must be HSL, defined in `src/index.css`):
- `--primary`: olive-green (`67 15% 31%`) — main text and interactive elements
- `--secondary`: warm sand (`40 29% 67%`)
- `--accent`: soft rose/pink (`348 65% 79%`) — highlights and accents
- `--badge` / `--badge-foreground`: olive-green badge used for category labels
- `--background`: warm off-white (`40 40% 98%`)
- `--muted`: soft warm grey for secondary content areas

**Design rules:**
- Never introduce bright or saturated colors outside the existing palette
- Maintain a calm, reassuring aesthetic — warmth and clarity over visual impact
- Rounded corners (0.75rem radius) and soft shadows throughout
- Typography uses `prose` Tailwind classes in article/content sections

## SEO Strategy

The SEO architecture has three tiers. Every SEO page must have unique content adapted to its specific context — never duplicated boilerplate.

### Tier 1 — Pillar pages (broad intent)
| URL | Topic |
|-----|-------|
| `/psicoterapia-online-suiza` | Core service page |
| `/psicologa-en-espanol-suiza` | Language-specific search |
| `/psicologa-psicoterapeuta-suiza` | Professional title searches |

### Tier 2 — Problem/condition pages (high-intent)
| URL | Topic |
|-----|-------|
| `/ansiedad-suiza` | Anxiety |
| `/depresion-suiza` | Depression |
| `/burnout-suiza` | Burnout |
| `/adaptacion-cultural-suiza` | Cultural adaptation / migration grief |

**Planned additions:** `/duelo-migratorio-suiza`, `/estres-laboral-suiza`, `/psicoterapia-expatriados-suiza`

### Tier 3 — City pages (local SEO)
| URL | City |
|-----|------|
| `/psicologa-en-ginebra` | Geneva |
| `/psicologa-en-lausana` | Lausanne |
| `/psicologa-en-zurich` | Zurich |
| `/psicologa-en-berna` | Bern |
| `/psicologa-en-basilea` | Basel |

City pages must have distinct, locally relevant content (e.g. specific challenges of expat life in Geneva vs. Zurich) rather than the same text with the city name swapped.

**Core keyword clusters to keep in mind when writing content:**
- `psicoterapia online suiza`, `psicóloga en español suiza`, `psicóloga hispanohablante suiza`, `psicóloga para latinoamericanos en suiza`
- Problem-based: `ansiedad suiza`, `depresión suiza`, `burnout suiza`, `duelo migratorio suiza`, `estrés laboral suiza`
- City-based: `psicóloga en Ginebra / Lausana / Zúrich / Berna / Basilea`

## Adding SEO Pages

All SEO pages follow a strict pattern — use any file in `src/pages/seo/` as a template:

1. Create `src/pages/seo/NewPage.tsx` using `<SEOPageLayout>` with these required props: `title`, `description`, `heroTitle`, `heroSubtitle`, `canonicalPath`, `faqs`
2. Optional props: `badgeText` (defaults to `"Psicoterapia online"`), `disclaimer` (defaults to the standard Swiss legal text)
3. Content goes as `children` — use `prose` classes for rich text, `not-prose` to break out for custom grid/card layouts
4. Register the route in `App.tsx` above the `*` catch-all
5. Each page needs a unique `<h2>` structure, original body content, and at least 6 FAQs with substantive answers

## Legal & Compliance

This is the most sensitive area of the project. Every piece of copy must respect these constraints:

**Never say or imply:**
- That Silvia is a recognised or accredited Swiss psychotherapist
- That sessions are reimbursed by Swiss health insurance (Krankenkasse)
- That the service is part of the Swiss healthcare system

**Always clarify:**
- Services are **private online psychotherapy**
- Not covered by Swiss insurance
- Professional training obtained in Mexico and Spain
- Sessions are conducted entirely online (video call)

**Standard disclaimer text** (used in `SEOPageLayout` default and on relevant pages):
> *"Nota legal: Los servicios ofrecidos corresponden a psicoterapia privada en modalidad online. No constituyen una prestación reconocida por el sistema sanitario suizo ni están cubiertos por seguros de salud en Suiza. La habilitación profesional corresponde a la formación obtenida en México y España."*

Adapt the wording per page but never remove the substance. The disclaimer must appear on every SEO landing page.

## Pricing & Positioning

- **Standard rate:** 80 CHF / 55-minute session
- **Pack discount:** 10% off for 5+ sessions (72 CHF/session)
- **Positioning logic:** Clearly more accessible than Swiss private therapy rates, but not priced to appear cheap or low-quality. Sits above Latin American online therapy market pricing.
- Future consideration: lower international pricing for clients outside Switzerland (not yet implemented)

Pricing is displayed in `SEOPageLayout`'s built-in pricing section — update the hardcoded values there if rates change.

## Content & Copy Guidelines

All user-facing content is in **Spanish**. When writing or editing copy:

- **Tone:** Warm, clear, professionally reassuring. Avoid clinical coldness and avoid overpromising.
- **Cultural relevance:** Acknowledge the specific emotional reality of living abroad — migration grief (duelo migratorio), cultural adaptation pressure, distance from family, Swiss workplace stress, expat identity challenges.
- **Address objections directly:** Language barriers, confidentiality, online therapy effectiveness, session format, price vs. Swiss alternatives, lack of insurance reimbursement.
- **Therapy framing:** Always ground claims in evidence-based methods. Reference TCC/CBT, ACT, DBT by name where relevant. Avoid vague wellness language.
- **City pages specifically:** Write content adapted to the local context of each Swiss city (e.g. Geneva's international community, Zurich's financial sector stress, Lausanne's university population). Never swap city names into identical copy.

## Planned Roadmap

- Additional condition pages: duelo migratorio, estrés laboral, psicoterapia para expatriados
- Downloadable clinical resources and paid materials for professionals (`/para-psicologos`)
- Potential separate international pricing tier
- Expanded city coverage beyond the current five Swiss cities
