/**
 * About — two columns: profile card left, bio + highlights right.
 * Data comes from PortfolioContext (web / video mode).
 */
import { useState } from "react";
import { profile, socials } from "../config";
import { scrollToId } from "../hooks";
import { usePortfolio } from "../portfolio-context";
import Reveal from "./Reveal";
import Icon from "./Icon";

export default function About() {
  const mode = usePortfolio();
  const [imgOk, setImgOk] = useState(true);

  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-kicker">About</span>
          <h2 className="section-title">
            The person behind <span className="gradient-text">the work</span>
          </h2>
          <p className="section-sub">
            {mode.key === "web"
              ? "Full-stack developer and CS student building for the web from Wolaita-Sodo, Ethiopia."
              : "Short-form video editor cutting high-retention content from Wolaita-Sodo, Ethiopia."}
          </p>
        </Reveal>

        <div className="about-grid">
          {/* ── Profile card ── */}
          <Reveal className="about-visual">
            <div className="about-card">
              <div className="about-card-top">
                <span className="about-avatar" aria-hidden="true">
                  {imgOk ? (
                    <img
                      src={profile.photo}
                      alt=""
                      loading="lazy"
                      onError={() => setImgOk(false)}
                    />
                  ) : (
                    profile.initials
                  )}
                </span>
                <div className="about-card-meta">
                  <h3>{profile.name}</h3>
                  <p>{mode.label} · {profile.location}</p>
                  <span className="about-status">
                    <span className="about-status-dot" aria-hidden="true" />
                    {profile.availability}
                  </span>
                </div>
              </div>

              <ul className="about-card-badges">
                {mode.highlights.slice(0, 3).map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              <dl className="about-card-stats">
                {mode.stats.slice(1, 3).map((s) => (
                  <div key={s.label}>
                    <dt>{s.label}</dt>
                    <dd>{s.value}{s.suffix}</dd>
                  </div>
                ))}
              </dl>

              <div className="about-card-foot">
                <span className="about-card-edu">
                  <Icon name="briefcase" size={14} />
                  {profile.education}
                </span>
                <div className="about-social-row">
                  {["github", "linkedin", "telegram"].map((key) => (
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
          </Reveal>

          {/* ── Bio + highlights ── */}
          <div className="about-text">
            <Reveal>
              {mode.about.map((para, i) => (
                <p key={i} className={i === 0 ? "lead" : ""}>{para}</p>
              ))}
            </Reveal>

            <Reveal delay={70}>
              <ul className="about-highlights">
                {mode.highlights.map((h) => (
                  <li key={h}>
                    <span className="check-badge" aria-hidden="true">
                      <Icon name="check" size={11} />
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={130}>
              <div className="about-actions">
                <a href={`mailto:${profile.email}`} className="btn btn-primary">
                  <Icon name="mail" size={16} /> Email Me
                </a>
                <button
                  type="button"
                  className="text-link"
                  onClick={() => scrollToId("work")}
                >
                  See my work <Icon name="arrowRight" size={14} />
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
