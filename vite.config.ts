import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

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
    asyncCssPlugin(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
