
# Add static prerendering for LLM/AI search discovery

## Goal
Every route in `App.tsx` is emitted as a static `.html` file at build time, with the rendered DOM, all `react-helmet-async` meta tags, and JSON-LD already in the markup. Crawlers that don't execute JS (GPTBot, ClaudeBot, PerplexityBot, most AI answer engines, social previews) see the real page; humans still get the SPA hydration after first paint.

## What changes

1. **Add `vite-plugin-prerender`** (Puppeteer-based, runs only at build time, zero runtime cost).
2. **Configure the route list** in `vite.config.ts` — all 16 routes already declared in `src/App.tsx`:
   - `/`, `/terapia`, `/sobre-mi`, `/para-psicologos`
   - 12 SEO pages under `/pages/seo/*`
3. **Tell React to hydrate** instead of re-render when prerendered markup is present. Small edit in `src/main.tsx` (`hydrateRoot` if `#root` has children, else `createRoot`).
4. **Verify** by building locally, opening `dist/ansiedad-suiza/index.html`, and confirming the `<h1>`, FAQ content, `<title>`, and JSON-LD are all present in the raw HTML.

## Technical details

**`vite.config.ts`** — add the plugin with the route list and a renderer that waits for Helmet to flush:

```ts
import prerender from 'vite-plugin-prerender'
const Renderer = require('vite-plugin-prerender/es6-renderer')

// inside plugins:
prerender({
  staticDir: path.join(__dirname, 'dist'),
  routes: [
    '/', '/terapia', '/sobre-mi', '/para-psicologos',
    '/psicologa-en-espanol-suiza',
    '/psicologa-psicoterapeuta-suiza',
    '/psicoterapia-online-suiza',
    '/ansiedad-suiza', '/depresion-suiza', '/burnout-suiza',
    '/adaptacion-cultural-suiza',
    '/psicologa-en-ginebra', '/psicologa-en-lausana',
    '/psicologa-en-zurich', '/psicologa-en-berna',
    '/psicologa-en-basilea',
  ],
  renderer: new Renderer({
    renderAfterDocumentEvent: 'render-event',
    headless: true,
  }),
})
```

**`src/main.tsx`** — fire the render event after mount and use `hydrateRoot` when prerendered:

```ts
const root = document.getElementById('root')!
const app = <App />
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
document.dispatchEvent(new Event('render-event'))
```

**Hosting**: works as-is on Lovable hosting. The SPA fallback still serves `index.html` for unknown paths; known paths now serve their pre-rendered file directly.

## Trade-offs to know

- Build gets slower (~30–60s extra — Puppeteer spawns once and renders all 16 routes in sequence). Only affects publish, not preview.
- Anything dynamic (Holaelo booking iframe, dialogs) still hydrates client-side — no change in behavior for users.
- If you later add many more SEO pages, the route list lives in one place (`vite.config.ts`) and could be generated from a manifest.

## Out of scope
- No copy or design changes.
- No changes to routing, components, or the booking flow.
- The low-CTR title/description rewrites from the previous turn are separate — happy to do those in a follow-up.
