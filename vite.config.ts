import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import prerender from "@prerenderer/rollup-plugin";

const PRERENDER_ROUTES = [
  "/",
  "/terapia",
  "/sobre-mi",
  "/para-psicologos",
  "/psicologa-en-espanol-suiza",
  "/psicologa-psicoterapeuta-suiza",
  "/psicoterapia-online-suiza",
  "/ansiedad-suiza",
  "/depresion-suiza",
  "/burnout-suiza",
  "/adaptacion-cultural-suiza",
  "/psicologa-en-ginebra",
  "/psicologa-en-lausana",
  "/psicologa-en-zurich",
  "/psicologa-en-berna",
  "/psicologa-en-basilea",
];

// Converts Vite-injected <link rel="stylesheet"> tags to async (non-render-blocking) loading.
// Safe for a CSR SPA: the HTML shell has no visible content anyway, so CSS and JS race to
// load in parallel and the stylesheet is applied before React's first meaningful paint.
function asyncCssPlugin(): Plugin {
  return {
    name: "async-css",
    apply: "build",
    transformIndexHtml: {
      order: "post",
      handler(html) {
        return html.replace(
          /<link rel="stylesheet" (crossorigin )?href="([^"]+)">/g,
          (_, crossorigin, href) => {
            const co = crossorigin ?? "";
            return (
              `<link rel="preload" as="style" ${co}href="${href}" onload="this.onload=null;this.rel='stylesheet'">` +
              `<noscript><link rel="stylesheet" href="${href}"></noscript>`
            );
          }
        );
      },
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "production" &&
      prerender({
        routes: PRERENDER_ROUTES,
        renderer: "@prerenderer/renderer-puppeteer",
        rendererOptions: {
          renderAfterDocumentEvent: "render-event",
          maxConcurrentRoutes: 4,
          headless: true,
          launchOptions: {
            args: ["--no-sandbox", "--disable-setuid-sandbox"],
          },
        },
      }),
    asyncCssPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
