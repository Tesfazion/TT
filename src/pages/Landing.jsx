import { useState } from "react";
import { Link } from "react-router-dom";
import { profile, socials, modesList, SOCIAL_KEYS, site } from "../config";
import { scrollToId } from "../hooks";
import Seo from "../components/Seo";
import Icon from "../components/Icon";
import FabControls from "../components/FabControls";
import ThemeToggle from "../components/ThemeToggle";

const NAV_ITEMS = [
  { label: "Services", id: "services" },
  { label: "Contact",  id: "contact"  },
];

export default function Landing() {
  const [imgOk, setImgOk] = useState(true);

  return (
    <div className="landing">
      <Seo title={site.seo.title} description={site.seo.description} path="/" />
      {/* Single decorative layer */}
      <div className="landing-grid" aria-hidden="true" />

      <div className="landing-inner">

        {/* ── Header ─────────────────────────────────── */}
        <header className="landing-header">
          <Link to="/" className="brand" aria-label="Home">
            <span className="brand-mark">{profile.initials}</span>
            <span className="brand-name">{profile.firstName}<em>.</em></span>
          </Link>

          <nav className="landing-nav" aria-label="Page sections">
            {NAV_ITEMS.map((item) => (
              <button key={item.id} type="button" onClick={() => scrollToId(item.id)}>
                {item.label}
              </button>
            ))}
            <ThemeToggle inline />
          </nav>

          <a
            href={socials.telegram}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            <Icon name="telegram" size={15} />
            Hire Me
          </a>
        </header>

        {/* ── Hero ───────────────────────────────────── */}
        <section className="landing-hero">

          <div className="landing-hero-copy">
            <h1 className="landing-title">
              I build sites <em>&amp;</em> edit videos.
            </h1>

            <p className="landing-sub">
              Modern websites that convert visitors into customers — and
              short-form videos people actually watch to the very end.
            </p>

            <div className="landing-hero-actions">
              <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={() => scrollToId("services")}
              >
                See what I do <Icon name="arrowDown" size={16} />
              </button>
              <a
                href={socials.telegram}
                target="_blank"
                rel="noreferrer"
                className="btn btn-glass btn-lg"
              >
                <Icon name="telegram" size={16} /> Let's Talk
              </a>
            </div>

            <div className="landing-socials">
              <span className="landing-socials-label">Find me online</span>
              <div className="hero-socials">
                {SOCIAL_KEYS.map((key) => (
                  <a
                    key={key}
                    href={socials[key]}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={key}
                  >
                    <Icon name={key} size={17} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="landing-media">
            <div className="landing-photo-frame">
              {imgOk ? (
                <img
                  src={profile.photo}
                  alt={profile.name}
                  width="290"
                  height="367"
                  onError={() => setImgOk(false)}
                />
              ) : (
                <div className="landing-photo-placeholder">
                  <span>{profile.initials}</span>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>

      <div className="landing-inner">

        {/* ── Service Cards — the only real content on this page ── */}
        <section id="services" className="landing-pick">
          <div className="landing-pick-head">
            <span className="section-kicker">What do you need?</span>
            <h2 className="section-title">
              Choose a <span className="gradient-text">direction</span>
            </h2>
            <p className="section-sub">
              Two specialisations, one person. Pick the one that matches
              your project.
            </p>
          </div>

          <div className="landing-cards">
            {modesList.map((mode) => (
              <Link
                key={mode.key}
                to={mode.route}
                className="landing-card"
                style={{ "--acc": mode.gradient }}
                aria-label={`Explore ${mode.label}`}
              >
                <div className="landing-card-body">
                  <span className="landing-card-icon" style={{ background: mode.gradient }}>
                    <Icon name={mode.icon} size={20} />
                  </span>


                  <h3>{mode.label}</h3>
                  <p>{mode.tagline}</p>

                  <div className="landing-card-chips">
                    {mode.chips.map((c) => <span key={c}>{c}</span>)}
                  </div>

                  <span className="landing-card-btn">
                    Explore {mode.shortLabel}
                    <Icon name="arrowRight" size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────── */}
        <section id="contact" className="landing-cta">
          <div>
            <span className="section-kicker">Let's work together</span>
            <h2>
              Have a project in mind?{" "}
              <span className="gradient-text">Let's talk.</span>
            </h2>
            <p>{profile.location} · {profile.availability}</p>
            <div className="landing-cta-actions">
              <a
                href={socials.telegram}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-lg"
              >
                <Icon name="telegram" size={16} /> Message on Telegram
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="btn btn-glass btn-lg"
              >
                <Icon name="mail" size={16} /> Email Me
              </a>
            </div>
          </div>
        </section>

        {/* ── Footer ─────────────────────────────────── */}
        <footer className="landing-footer">
          <Link to="/" className="brand" aria-label="Home">
            <span className="brand-mark">{profile.initials}</span>
            <span className="brand-name">{profile.firstName}<em>.</em></span>
          </Link>

          <div className="hero-socials">
            {SOCIAL_KEYS.map((key) => (
              <a
                key={key}
                href={socials[key]}
                target="_blank"
                rel="noreferrer"
                aria-label={key}
              >
                <Icon name={key} size={16} />
              </a>
            ))}
          </div>

          <p>© {new Date().getFullYear()} {profile.name}</p>
        </footer>

      </div>

      <FabControls />
    </div>
  );
}
