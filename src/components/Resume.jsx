/**
 * Resume — a compact credential strip (education, focus, availability)
 * with a real download link to this mode's PDF résumé.
 */
import { profile } from "../config";
import { usePortfolio } from "../portfolio-context";
import Reveal from "./Reveal";
import Icon from "./Icon";

export default function Resume() {
  const mode = usePortfolio();

  const rows = [
    { icon: "briefcase", label: "Education",  value: profile.education },
    { icon: "pin",       label: "Based in",   value: profile.location },
    { icon: "zap",       label: "Focus",      value: mode.chips.join(" · ") },
    { icon: "check",     label: "Status",     value: profile.availability },
  ];

  return (
    <section id="resume" className="section section-alt">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-kicker">Résumé</span>
          <h2 className="section-title">
            Credentials at a <span className="gradient-text">glance</span>
          </h2>
          <p className="section-sub">
            One page, no fluff. Download the full version or just ask me for it.
          </p>
        </Reveal>

        <Reveal className="surface-card resume-card">
          <ul className="resume-rows">
            {rows.map((r) => (
              <li className="resume-row" key={r.label}>
                <span className="resume-row-icon" aria-hidden="true">
                  <Icon name={r.icon} size={17} />
                </span>
                <span className="resume-row-text">
                  <span className="resume-row-label">{r.label}</span>
                  <span className="resume-row-value">{r.value}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="resume-actions">
            <a
              href={mode.resumeUrl}
              download={mode.resumeName}
              className="btn btn-primary"
            >
              <Icon name="download" size={16} /> Download résumé
            </a>
            <a
              href={`mailto:${profile.email}?subject=${encodeURIComponent("Résumé request")}`}
              className="text-link"
            >
              or request a tailored version <Icon name="arrowRight" size={14} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
