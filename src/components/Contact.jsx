import { useState } from "react";
import { profile, socials, SOCIAL_KEYS } from "../config";
import { usePortfolio } from "../portfolio-context";
import Reveal from "./Reveal";
import Icon from "./Icon";

export default function Contact() {
  const mode = usePortfolio();
  const [sent,    setSent]    = useState(false);
  const [loading, setLoading] = useState(false);
  const [fields,  setFields]  = useState({
    name: "", email: "", topic: mode.formTopics[0], message: "",
  });

  /* Telegram leads — it is the fastest way to reach me. */
  const channels = [
    {
      icon: "telegram", label: "Telegram",
      value: "@Zizo1616",
      href: socials.telegram,
      external: true,
    },
    {
      icon: "mail", label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      icon: "phone", label: "Phone / WhatsApp",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
    },
    {
      icon: "pin", label: "Location",
      value: profile.location,
    },
  ];

  const onChange = (e) =>
    setFields((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const subject = encodeURIComponent(
      `[Portfolio] ${fields.topic} — from ${fields.name}`
    );
    const body = encodeURIComponent(
      `Name: ${fields.name}\nEmail: ${fields.email}\nTopic: ${fields.topic}\n\n${fields.message}`
    );
    window.location.href =
      `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setTimeout(() => { setLoading(false); setSent(true); }, 800);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-kicker">Contact</span>
          <h2 className="section-title">
            Let's build something{" "}
            <span className="gradient-text">together</span>
          </h2>
          <p className="section-sub">
            Telegram is the fastest way to reach me — or send the form and
            I'll reply by email.
          </p>
        </Reveal>

        <div className="contact-grid">

          {/* ── Info ── */}
          <Reveal className="contact-info">
            {channels.map((c) => {
              const inner = (
                <>
                  <span className="contact-icon" aria-hidden="true">
                    <Icon name={c.icon} size={18} />
                  </span>
                  <span className="contact-channel-text">
                    <span className="contact-label">{c.label}</span>
                    <span className="contact-value">{c.value}</span>
                  </span>
                  {c.external && (
                    <Icon name="external" size={14} className="contact-ext" />
                  )}
                </>
              );

              return c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  className="contact-channel"
                  {...(c.external
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                >
                  {inner}
                </a>
              ) : (
                <div key={c.label} className="contact-channel is-static">
                  {inner}
                </div>
              );
            })}

            <div className="contact-socials">
              <p>Find me online</p>
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
          </Reveal>

          {/* ── Form ── */}
          <Reveal delay={100}>
            {sent ? (
              <div className="form-success" role="status">
                <span className="form-success-icon">
                  <Icon name="check" size={24} />
                </span>
                <h3>Your email client is ready</h3>
                <p>
                  Check the draft that just opened and hit send. I reply to
                  most messages within 24 hours.
                </p>
                <button
                  type="button"
                  className="btn btn-ghost btn-sm"
                  onClick={() => {
                    setSent(false);
                    setFields({
                      name: "", email: "",
                      topic: mode.formTopics[0], message: "",
                    });
                  }}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form
                className="contact-form"
                onSubmit={handleSubmit}
              >
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="cf-name">Name</label>
                    <input
                      id="cf-name" name="name" type="text"
                      placeholder="John Doe"
                      value={fields.name} onChange={onChange}
                      required autoComplete="name"
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="cf-email">Email</label>
                    <input
                      id="cf-email" name="email" type="email"
                      placeholder="john@example.com"
                      value={fields.email} onChange={onChange}
                      required autoComplete="email"
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="cf-topic">What do you need?</label>
                  <select
                    id="cf-topic" name="topic"
                    value={fields.topic} onChange={onChange}
                  >
                    {mode.formTopics.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="cf-message">Message</label>
                  <textarea
                    id="cf-message" name="message" rows="5"
                    placeholder="Tell me about your project or opportunity…"
                    value={fields.message} onChange={onChange}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  disabled={loading}
                >
                  {loading
                    ? "Opening mail client…"
                    : <><Icon name="send" size={16} /> Send Message</>
                  }
                </button>

                <p className="form-hint">
                  Your default email client will open with the message pre-filled.
                </p>
              </form>
            )}
          </Reveal>

        </div>
      </div>
    </section>
  );
}
