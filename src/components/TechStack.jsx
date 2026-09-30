/**
 * TechStack — one section, two parts:
 *   1. Technology badge grid (coloured dots)
 *   2. Three grouped capability cards (plain lists)
 *
 * Deliberately no self-assigned percentage bars: a precise-looking
 * "92%" is not a real signal and reads as inflation.
 */
import { usePortfolio } from "../portfolio-context";
import Reveal from "./Reveal";
import Icon from "./Icon";

export default function TechStack() {
  const mode = usePortfolio();

  return (
    <section id="skills" className="section section-alt">
      <div className="container">

        <Reveal className="section-head">
          <span className="section-kicker">Skills &amp; Tools</span>
          <h2 className="section-title">
            What I work <span className="gradient-text">with</span>
          </h2>
          <p className="section-sub">{mode.shortBio}</p>
        </Reveal>

        {mode.techStack?.length > 0 && (
          <Reveal className="tech-grid">
            {mode.techStack.map((tech, i) => (
              <span
                key={tech.name}
                className="tech-badge"
                style={{ "--tc": tech.color, animationDelay: `${i * 30}ms` }}
              >
                <span
                  className="tech-dot"
                  style={{ background: tech.color }}
                  aria-hidden="true"
                />
                {tech.name}
              </span>
            ))}
          </Reveal>
        )}

        <div className="skills-grid skills-grid--groups">
          {mode.skills.map((group, i) => (
            <Reveal key={group.title} delay={i * 70} className="surface-card skill-card">
              <div className="skill-card-head">
                <span className="skill-icon" aria-hidden="true">
                  <Icon name={group.icon} size={18} />
                </span>
                <h3>{group.title}</h3>
              </div>
              <ul className="skill-list-plain">
                {group.items.map((item) => (
                  <li key={item}>
                    <Icon name="check" size={13} className="skill-check" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
