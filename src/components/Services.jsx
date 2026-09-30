import { usePortfolio } from "../portfolio-context";
import Reveal from "./Reveal";
import Icon from "./Icon";

export default function Services() {
  const mode = usePortfolio();

  return (
    <section id="services" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-kicker">Services</span>
          <h2 className="section-title">
            What I can <span className="gradient-text">do for you</span>
          </h2>
          <p className="section-sub">
            Clear scope, reliable delivery, and work that's built to last and grow.
          </p>
        </Reveal>

        <div className="services-grid">
          {mode.services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 70} className="surface-card service-card">
              <span className="service-icon">
                <Icon name={s.icon} size={22} />
              </span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="service-num" aria-hidden="true">0{i + 1}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
