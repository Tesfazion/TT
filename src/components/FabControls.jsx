/**
 * FabControls — the single floating action button for the page.
 *
 * Only one control lives in the bottom-right corner: scroll-to-top.
 * The theme toggle lives in the navbar instead, so the two
 * previously-stacked FABs no longer overlap page content.
 */
import { useEffect, useState } from "react";

export default function FabControls() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      className={`fab${visible ? " fab--visible" : ""}`}
      aria-label="Scroll back to top"
      title="Back to top"
      tabIndex={visible ? 0 : -1}
      onClick={() =>
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
    >
      <svg
        width={18} height={18}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <line x1="12" y1="19" x2="12" y2="5" />
        <polyline points="5 12 12 5 19 12" />
      </svg>
    </button>
  );
}
