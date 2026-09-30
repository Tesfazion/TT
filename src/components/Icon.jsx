const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  viewBox: "0 0 24 24",
};

const Icons = {
  code: (p) => (
    <svg {...base} {...p}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  server: (p) => (
    <svg {...base} {...p}>
      <rect x="2" y="2" width="20" height="8" rx="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  ),
  video: (p) => (
    <svg {...base} {...p}>
      <rect x="2" y="6" width="14" height="12" rx="2" />
      <polygon points="16,10 22,6 22,18 16,14" />
    </svg>
  ),
  palette: (p) => (
    <svg {...base} {...p}>
      <path d="M12 2a10 10 0 1 0 0 20 2.5 2.5 0 0 0 2.5-2.5c0-.9-.5-1.5-.5-2.5a2.5 2.5 0 0 1 2.5-2.5H17a5 5 0 0 0 5-5c0-4.1-4.5-7.5-10-7.5z" />
      <circle cx="7.5" cy="11.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="9.5" cy="7.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="7.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  layout: (p) => (
    <svg {...base} {...p}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="9" x2="9" y2="21" />
    </svg>
  ),
  sparkle: (p) => (
    <svg {...base} {...p}>
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" />
      <path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15z" />
    </svg>
  ),
  arrowRight: (p) => (
    <svg {...base} {...p}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  arrowDown: (p) => (
    <svg {...base} {...p}>
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="19 12 12 19 5 12" />
    </svg>
  ),
  mail: (p) => (
    <svg {...base} {...p}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  phone: (p) => (
    <svg {...base} {...p}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2.1z" />
    </svg>
  ),
  pin: (p) => (
    <svg {...base} {...p}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  github: (p) => (
    <svg {...base} {...p}>
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.4 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    </svg>
  ),
  linkedin: (p) => (
    <svg {...base} {...p}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V8h4v2a6 6 0 0 1 2-2z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  twitter: (p) => (
    <svg {...base} {...p}>
      <path d="M4 4l7.2 9.3L4.4 20h2.6l5.4-5.3L17 20h3l-7.5-9.7L18.9 4h-2.6l-4.9 4.9L7 4H4z" />
    </svg>
  ),
  instagram: (p) => (
    <svg {...base} {...p}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  telegram: (p) => (
    <svg {...base} {...p} fill="currentColor" stroke="none">
      <path d="M22 2.9L1.7 9.6c-1.7.7-1.7 1.6-.3 2l5.2 1.6 2 6.2c.2.6.7.7 1.2.4l2.9-2.2 5.3 3.9c1 .5 1.7.2 2-1L24 4.2c.3-1.3-.5-2-1.9-1.3zM7.6 13.4l10.2-6.5c.5-.3.9.2.5.6l-8.4 7.6-.3 3.2-2-4.9z" />
    </svg>
  ),
  facebook: (p) => (
    <svg {...base} {...p} fill="currentColor" stroke="none">
      <path d="M13.5 21v-7h2.4l.36-2.9h-2.76V9.3c0-.84.23-1.42 1.45-1.42h1.55V5.3c-.27-.04-1.2-.12-2.28-.12-2.26 0-3.8 1.38-3.8 3.9v2.18H8v2.9h2.42V21h3.08z" />
    </svg>
  ),
  x: (p) => (
    <svg {...base} {...p} fill="currentColor" stroke="none">
      <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23z" />
    </svg>
  ),
  youtube: (p) => (
    <svg {...base} {...p}>
      <path d="M22 12s0-3.3-.4-4.8a2.5 2.5 0 0 0-1.8-1.8C18.3 5 12 5 12 5s-6.3 0-7.8.4a2.5 2.5 0 0 0-1.8 1.8C2 8.7 2 12 2 12s0 3.3.4 4.8a2.5 2.5 0 0 0 1.8 1.8c1.5.4 7.8.4 7.8.4s6.3 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.5.4-4.8.4-4.8z" />
      <polygon points="10,9 15,12 10,15" />
    </svg>
  ),
  behance: (p) => (
    <svg {...base} {...p}>
      <path d="M2 7h6a3 3 0 0 1 0 6H2V7zM2 13h7a3 3 0 0 1 0 6H2v-6z" />
      <path d="M17 8h5M15.5 14a3.5 3.5 0 0 0 7 0v-2h-7" />
    </svg>
  ),
  download: (p) => (
    <svg {...base} {...p}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  ),
  external: (p) => (
    <svg {...base} {...p}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  ),
  menu: (p) => (
    <svg {...base} {...p}>
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  ),
  close: (p) => (
    <svg {...base} {...p}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  check: (p) => (
    <svg {...base} {...p}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  chevronLeft: (p) => (
    <svg {...base} {...p}>
      <polyline points="15 18 9 12 15 6" />
    </svg>
  ),
  chevronRight: (p) => (
    <svg {...base} {...p}>
      <polyline points="9 18 15 12 9 6" />
    </svg>
  ),
  star: (p) => (
    <svg {...base} {...p} fill="currentColor" stroke="none">
      <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.3 6.8L12 17.3 5.9 20.6l1.3-6.8L2.2 9.1l6.9-.8L12 2z" />
    </svg>
  ),
  send: (p) => (
    <svg {...base} {...p}>
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  ),
  briefcase: (p) => (
    <svg {...base} {...p}>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </svg>
  ),
  zap: (p) => (
    <svg {...base} {...p}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  user: (p) => (
    <svg {...base} {...p}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  monitor: (p) => (
    <svg {...base} {...p}>
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
};

export default function Icon({ name, size = 24, className = "", strokeWidth }) {
  const Cmp = Icons[name] || Icons.code;
  return (
    <Cmp
      width={size}
      height={size}
      className={className}
      strokeWidth={strokeWidth || base.strokeWidth}
    />
  );
}
