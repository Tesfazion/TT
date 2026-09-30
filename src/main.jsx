/**
 * main.jsx — entry point.
 *
 * Theme is resolved BEFORE React mounts to prevent any flash of
 * wrong colours. Priority: localStorage → OS preference → dark.
 */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// ── Apply theme class synchronously ───────────────────────
(function applyTheme() {
  // Signals that JS is running. The reveal-on-scroll animation hides
  // content until it enters the viewport, so it must only ever apply
  // when JS can switch it back on — otherwise a script failure would
  // leave a blank page.
  document.documentElement.classList.add("js");

  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = saved ?? (prefersDark ? "dark" : "light");
  document.documentElement.classList.add(`theme-${theme}`);
})();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
