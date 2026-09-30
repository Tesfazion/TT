/**
 * Hero — two-column desktop layout, single-column on tablet/mobile.
 * One decorative layer only (the dot grid). No orbs, no animated
 * gradient ring, no floating cards.
 */

import { useState } from "react";
import { profile, socials, SOCIAL_KEYS } from "../config";
import { useCountUp, useTypewriter, scrollToId } from "../hooks";
import { usePortfolio } from "../portfolio-context";
import Icon from "./Icon";

function Stat({ stat }) {
  const [value, ref] = useCountUp(stat.value);
  return (
    <div className="stat" ref={ref}>
      <span className="stat-value">{value}{stat.suffix}</span>
      <span className="stat-label">{stat.label}</span>
    </div>
  );
}

export default function Hero() {
  const mode   = usePortfolio();
  const typed  = useTypewriter(mode.roles);
  const [imgOk, setImgOk] = useState(true);

  return (
    <section id="home" className="hero" aria-label="Introduction">
      {/* The single ambient layer */}
      <div className="hero-grid" aria-hidden="true" />

      {/* ── Copy ── */}
      <div className="hero-copy">
        <div className="hero-badge">
          <span className="hero-badge-dot" aria-hidden="true" />
          {profile.availability}
        </div>

        <h1 className="hero-title">
          Hi, I'm <span className="gradient-text">{profile.firstName}</span>
        </h1>

        <div className="hero-role-line">
          <span className="hero-role-prefix">I do</span>
          <span className="hero-typed-text">{typed}</span>
          <span className="hero-caret" aria-hidden="true" />
        </div>

        <p className="hero-sub">{mode.tagline}</p>

        <div className="hero-actions">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => scrollToId("work")}
          >
            View My Work <Icon name="arrowRight" size={16} />
          </button>
          <a
            href={socials.telegram}
            target="_blank"
            rel="noreferrer"
            className="btn btn-glass"
          >
            <Icon name="telegram" size={16} /> Let's Talk
          </a>
          <a href={mode.resumeUrl} className="btn btn-ghost" download>
            <Icon name="download" size={16} /> Résumé
          </a>
        </div>

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

      {/* ── Photo ── */}
      <div className="hero-visual">
        <div className="hero-photo-frame">
          {imgOk ? (
            <img
              src={profile.photo}
              alt={profile.name}
              width="360"
              height="456"
              onError={() => setImgOk(false)}
            />
          ) : (
            <div className="hero-photo-placeholder">
              <span>{profile.initials}</span>
            </div>
          )}
        </div>
      </div>

      {/* ── Stats ── */}
      <div className="hero-stats-bar">
        {mode.stats.map((s) => <Stat key={s.label} stat={s} />)}
      </div>
    </section>
  );
}
