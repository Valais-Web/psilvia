import { defineConfig } from "vite";
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
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
