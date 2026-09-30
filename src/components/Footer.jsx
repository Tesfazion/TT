import { Link } from "react-router-dom";
import { navLinks, profile, socials, SOCIAL_KEYS } from "../config";
import { scrollToId } from "../hooks";
import Icon from "./Icon";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <Link to="/" className="brand" aria-label="Home">
            <span className="brand-mark">{profile.initials}</span>
            <span className="brand-name">
              {profile.firstName}<em>.</em>
            </span>
          </Link>

          <nav className="footer-nav" aria-label="Footer navigation">
            {navLinks
              .filter((l) => l.id !== "home")
              .map((l) => (
                <button
                  key={l.id}
                  type="button"
                  onClick={() => scrollToId(l.id)}
                >
                  {l.label}
                </button>
              ))}
          </nav>

          <a
            href={socials.telegram}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost btn-sm"
          >
            <Icon name="telegram" size={14} /> Hire Me
          </a>
        </div>

        <div className="footer-credit">
          <div className="container">
            <p>
              © {year} {profile.name} · Built with React &amp; Vite
            </p>
            <div className="hero-socials">
              {SOCIAL_KEYS.map((key) => (
                <a
                  key={key}
                  href={socials[key]}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={key}
                >
                  <Icon name={key} size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
