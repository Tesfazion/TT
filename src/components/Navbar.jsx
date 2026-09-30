import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks, profile, socials } from "../config";
import { scrollToId } from "../hooks";
import Icon from "./Icon";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open,     setOpen]     = useState(false);
  const [active,   setActive]   = useState("home");

  /* Scroll progress + frosted glass trigger */
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Active section tracker */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navLinks.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  /* Lock body scroll while drawer is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  /* Close on Escape */
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const goTo = (id) => { setOpen(false); scrollToId(id); };

  return (
    <>
      <header className={`nav${scrolled ? " nav-scrolled" : ""}`} role="banner">
        {/* Reading progress bar */}
        <div
          className="nav-progress"
          style={{ width: `${progress}%` }}
          aria-hidden="true"
        />

        <div className="nav-inner">
          <Link
            to="/"
            className="brand"
            onClick={() => setOpen(false)}
            aria-label="Home"
          >
            <span className="brand-mark">{profile.initials}</span>
            <span className="brand-name">
              {profile.firstName}<em>.</em>
            </span>
          </Link>

          {/* Desktop + mobile drawer nav */}
          <nav
            className={`nav-links${open ? " open" : ""}`}
            id="nav-menu"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                className={active === link.id ? "active" : ""}
                onClick={() => goTo(link.id)}
              >
                {link.label}
              </button>
            ))}

            <Link
              to="/"
              className="nav-cta nav-cta-ghost"
              onClick={() => setOpen(false)}
            >
              <Icon name="menu" size={14} />
              Services
            </Link>

            {/* Theme toggle lives in the drawer on mobile, in the bar on desktop */}
            <div className="nav-drawer-theme">
              <ThemeToggle inline />
            </div>

            <a
              href={socials.telegram}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary nav-cta"
            >
              <Icon name="telegram" size={15} />
              Hire Me
            </a>
          </nav>

          {/* Desktop-only controls */}
          <div className="nav-actions">
            <ThemeToggle inline />
            <button
              className="nav-toggle"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="nav-menu"
              onClick={() => setOpen((o) => !o)}
            >
              <Icon name={open ? "close" : "menu"} size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Dark overlay — tap to close drawer */}
      {open && (
        <div
          className="nav-overlay visible"
          aria-hidden="true"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
