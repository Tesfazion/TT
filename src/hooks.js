import { useEffect, useRef, useState } from "react";

export function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function useTypewriter(words, typeSpeed = 70, deleteSpeed = 35, pause = 1700) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let timeout;

    if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setText(word.substring(0, text.length + (deleting ? -1 : 1)));
      }, deleting ? deleteSpeed : typeSpeed);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

export function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Without IntersectionObserver the content would stay at opacity 0,
    // so show it immediately rather than hiding it forever.
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, inView];
}

export function useCountUp(target, duration = 2000) {
  const [value, setValue] = useState(0);
  const [ref, inView] = useInView(0.5);

  useEffect(() => {
    if (!inView) return;
    let frame;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.floor(target * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target, duration]);

  return [value, ref];
}
