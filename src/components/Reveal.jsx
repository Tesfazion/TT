/**
 * Reveal — scroll-triggered fade-up wrapper.
 * Forwards className, style, and delay to the root div.
 */

import { useInView } from "../hooks";

export default function Reveal({ children, delay = 0, className = "", style }) {
  const [ref, inView] = useInView(0.12);

  return (
    <div
      ref={ref}
      className={`reveal${inView ? " reveal-visible" : ""} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  );
}
