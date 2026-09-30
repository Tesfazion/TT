import { useState } from "react";
import { usePortfolio } from "../portfolio-context";
import Reveal from "./Reveal";
import Icon from "./Icon";

export default function Projects() {
  const mode = usePortfolio();
  const [filter, setFilter] = useState("All");

  const shown = mode.projects.filter(
    (p) => filter === "All" || p.category === filter
  );

  return (
    <section id="work" className="section section-alt">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-kicker">My Work</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">projects</span>
          </h2>
          <p className="section-sub">{mode.workNote}</p>
        </Reveal>

        <Reveal className="filter-bar" role="group" aria-label="Filter projects">
          {mode.projectCategories.map((c) => (
            <button
              key={c}
              className={`filter-btn${filter === c ? " active" : ""}`}
              onClick={() => setFilter(c)}
              aria-pressed={filter === c}
            >
              {c}
            </button>
          ))}
        </Reveal>

        {shown.length === 0 ? (
          <p className="empty-state">No projects in this category yet.</p>
        ) : (
          <div className="projects-grid">
            {shown.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 70} className="surface-card project-card">

                {/* Cover */}
                <div className="project-cover" style={{ background: p.gradient }}>
                  <div className="project-cover-inner">
                    <span className="project-cat">{p.category}</span>
                    <h3>{p.title}</h3>
                  </div>

                  {/* Hover action buttons */}
                  <div className="project-cover-actions">
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${p.title}`}
                        className="cover-btn"
                      >
                        <Icon name="external" size={15} />
                      </a>
                    )}
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${p.title} on GitHub`}
                        className="cover-btn"
                      >
                        <Icon name="github" size={15} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Body */}
                <div className="project-body">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="project-tags">
                    {p.tags.map((t) => (
                      <span key={t} style={{ "--tag": p.accent }}>{t}</span>
                    ))}
                  </div>
                </div>

                {/* Footer links */}
                {(p.link || p.github) && (
                  <div className="project-footer">
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link primary"
                      >
                        <Icon name="external" size={13} /> Live Demo
                      </a>
                    )}
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="project-link"
                      >
                        <Icon name="github" size={13} /> GitHub
                      </a>
                    )}
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
