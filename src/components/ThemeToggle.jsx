/**
 * ThemeToggle — dark/light mode button.
 *
 * Two variants:
 *  • fixed  (default) — floating bottom-right FAB
 *  • inline           — compact button for the navbar
 *
 * Reads/writes:
 *  • localStorage key  "theme"  ("dark" | "light")
 *  • html classList    theme-dark | theme-light
 *
 * The html class is pre-applied by main.jsx on first load so
 * there is zero flash of wrong theme. The <meta name="theme-color">
 * tag is kept in sync so mobile browser chrome matches the theme.
 */

import { useEffect, useState } from "react";

function SunIcon() {
  return (
    <svg
      width={16} height={16}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      width={16} height={16}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
    </svg>
  );
}

export default function ThemeToggle({ inline = false }) {
  /* Derive initial state from the class already on <html> */
  const [dark, setDark] = useState(
    () => !document.documentElement.classList.contains("theme-light")
  );

  useEffect(() => {
    const html = document.documentElement;
    const theme = dark ? "dark" : "light";
    html.classList.remove("theme-light", "theme-dark");
    html.classList.add(`theme-${theme}`);
    html.style.colorScheme = theme;
    localStorage.setItem("theme", theme);

    /* Keep mobile browser chrome (address bar) in step with the theme */
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", dark ? "#090b11" : "#f7f8fc");
  }, [dark]);

  return (
    <button
      type="button"
      className={`theme-toggle${inline ? " theme-toggle--inline" : ""}`}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Light mode" : "Dark mode"}
      onClick={() => setDark((d) => !d)}
    >
      {dark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
