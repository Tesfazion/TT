type Theme = "light" | "dark";

function getStoredTheme(): Theme | null {
  try {
    const stored = localStorage.getItem("theme");
    return stored === "light" || stored === "dark" ? stored : null;
  } catch {
    return null;
  }
}

function getPreferredTheme(): Theme {
  return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ? "dark" : "light";
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.classList.toggle("dark", theme === "dark");
}

function getTheme(): Theme {
  return getStoredTheme() ?? getPreferredTheme();
}

function setTheme(theme: Theme) {
  try {
    localStorage.setItem("theme", theme);
  } catch {}
  applyTheme(theme);
  updateThemeToggleLabels();
}

function updateThemeToggleLabels() {
  const theme = getTheme();
  const label = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";
  const toggles = document.querySelectorAll<HTMLButtonElement>("[data-theme-toggle]");
  for (const btn of toggles) {
    btn.type = "button";
    btn.setAttribute("aria-label", label);
    btn.title = label;
    const srOnly = btn.querySelector<HTMLElement>(".sr-only");
    if (srOnly) srOnly.textContent = label;
  }
}

function initOnce() {
  applyTheme(getTheme());
  updateThemeToggleLabels();

  document.addEventListener("click", (event) => {
    const target = event.target as Element | null;
    if (!target) return;

    const themeToggle = target.closest?.("[data-theme-toggle]") as HTMLButtonElement | null;
    if (themeToggle) {
      event.preventDefault();
      setTheme(getTheme() === "dark" ? "light" : "dark");
    }
  });
}

initOnce();
