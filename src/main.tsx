import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root")!;

if (container.hasChildNodes()) {
  hydrateRoot(container, <App />);
} else {
  createRoot(container).render(<App />);
}

// Signal to the prerenderer that the app has mounted and meta tags are flushed.
// react-helmet-async writes to the head synchronously during render, so a
// microtask after mount is enough.
requestAnimationFrame(() => {
  document.dispatchEvent(new Event("render-event"));
});
