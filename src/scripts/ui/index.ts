type Theme = "light" | "dark";

function getStoredTheme(): Theme | null {
  const stored = localStorage.getItem("theme");
  return stored === "light" || stored === "dark" ? stored : null;
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
  localStorage.setItem("theme", theme);
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

function toggleMobileMenu(button: HTMLButtonElement) {
  const targetId = button.getAttribute("aria-controls");
  if (!targetId) return;

  const target = document.getElementById(targetId);
  if (!target) return;

  const open = button.getAttribute("aria-expanded") === "true";
  button.setAttribute("aria-expanded", open ? "false" : "true");
  target.toggleAttribute("hidden", open);
}

function handleContactFormSubmit(form: HTMLFormElement) {
  const data = new FormData(form);
  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const company = String(data.get("company") ?? "").trim();
  const message = String(data.get("message") ?? "").trim();

  const to = String(form.dataset.to ?? "").trim();
  if (!to) return;

  const subject = encodeURIComponent(`Portfolio inquiry${company ? ` — ${company}` : ""}`);
  const body = encodeURIComponent(
    [
      `Name: ${name || "-"}`,
      `Email: ${email || "-"}`,
      `Company: ${company || "-"}`,
      "",
      message || "-"
    ].join("\n")
  );

  window.location.href = `mailto:${encodeURIComponent(to)}?subject=${subject}&body=${body}`;
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
      return;
    }

    const menuToggle = target.closest?.("[data-menu-toggle]") as HTMLButtonElement | null;
    if (menuToggle) {
      event.preventDefault();
      toggleMobileMenu(menuToggle);
    }
  });

  document.addEventListener("submit", (event) => {
    const target = event.target as Element | null;
    if (!target) return;
    const form = (target.closest?.("[data-contact-form]") ?? null) as HTMLFormElement | null;
    if (!form) return;
    event.preventDefault();
    handleContactFormSubmit(form);
  });

  document.addEventListener("astro:after-swap", () => {
    applyTheme(getTheme());
    updateThemeToggleLabels();
  });

  document.addEventListener("astro:page-load", () => {
    updateThemeToggleLabels();
  });
}

initOnce();
