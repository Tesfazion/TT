/* ============================================================
   PORTFOLIO CONFIGURATION — single source of truth
   All content pulled from CV + GitHub @Tesfazion
   ============================================================ */

export const site = {
  url:         "https://tesfatseyon.dev",
  themeColor:  "#090b11",
  seo: {
    title: "Tesfatseyon Merkinh — Full-Stack Developer & Video Editor",
    description:
      "Tesfatseyon Merkinh — full-stack web developer and short-form video editor based in Ethiopia. I build fast, modern websites and edit scroll-stopping short-form video.",
  },
};

// ── Profile ────────────────────────────────────────────────
export const profile = {
  name:         "Tesfatseyon Merkinh",
  firstName:    "Tesfatseyon",
  brand:        "Tesfatseyon",
  initials:     "TM",
  location:     "Wolaita-Sodo, South Ethiopia",
  email:        "tesfatseyon16@gmail.com",
  phone:        "+251983708869",
  availability: "Available for freelance & full-time",
  photo:        "/me.jpg",
  github:       "https://github.com/Tesfazion",
  linkedin:     "https://www.linkedin.com/in/tesfatseyon-merkinh-becho-a38626402",
  education:    "BSc Computer Science · Dilla University (graduating 2027)",
};

// ── Social links ───────────────────────────────────────────
export const socials = {
  telegram:  "https://t.me/Zizo1616",
  linkedin:  "https://www.linkedin.com/in/tesfatseyon-merkinh-becho-a38626402",
  github:    "https://github.com/Tesfazion",
  instagram: "https://www.instagram.com/nani161669/",
  x:         "https://x.com/tesfatseyo35302",
};

export const SOCIAL_KEYS = ["telegram", "linkedin", "github", "instagram", "x"];

// ── Nav links ──────────────────────────────────────────────
export const navLinks = [
  { label: "Home",     id: "home"     },
  { label: "About",    id: "about"    },
  { label: "Skills",   id: "skills"   },
  { label: "Services", id: "services" },
  { label: "Work",     id: "work"     },
  { label: "Resume",   id: "resume"   },
  { label: "Contact",  id: "contact"  },
];

// ── Modes ──────────────────────────────────────────────────
export const modes = {

  /* ──────────────────────────────────────────────────────────
     WEB DEVELOPER MODE
  ────────────────────────────────────────────────────────── */
  web: {
    key:        "web",
    label:      "Web Developer",
    shortLabel: "Web Development",
    route:      "/web",
    icon:       "code",
    gradient:   "linear-gradient(135deg,#6366f1,#8b5cf6)",
    resumeUrl:  "/resume-web.pdf",
    resumeName: "Tesfatseyon Merkinh - Web Developer Resume.pdf",
    seo: {
      title: "Web Developer — Tesfatseyon Merkinh",
      description:
        "Full-stack web developer building fast, modern websites and AI-powered apps with React, Next.js, Python, and Tailwind CSS. Available for freelance and full-time work.",
    },
    chips:      ["React & Next.js", "Full-Stack", "UI/UX Design", "SEO & Speed"],
    tagline:    "I build modern, fast, full-stack web apps — from pixel-perfect UI to scalable backend logic.",
    roles:      ["Full-Stack Developer", "Frontend Developer", "UI/UX Designer"],
    shortBio:   "Full-stack developer turning ideas into clean, high-performance products.",
    about: [
      "I'm a freelance full-stack web developer and Computer Science student (graduating 2027) with hands-on experience building responsive websites, AI-powered applications, and scalable project structures. Skilled in React, Next.js, Python, and modern UI/UX design.",
      "I focus on clean modular code and professional branding — making sure every project is fast, maintainable, and built to grow.",
    ],
    highlights: [
      "React / Next.js / Vite",
      "Full-stack & REST APIs",
      "UI/UX & Figma design",
      "Python & AI/ML projects",
      "Git & CI/CD deployment",
      "Database design (SQL/NoSQL)",
      "SEO & performance tuning",
      "Responsive mobile-first",
    ],
    stats: [
      { value: 2,  suffix: "+", label: "Years Building"  },
      { value: 12, suffix: "+", label: "Projects Shipped" },
      { value: 8,  suffix: "+", label: "Happy Clients"    },
      { value: 7,  suffix: "",  label: "Core Technologies" },
    ],
    techStack: [
      { name: "React",       color: "#61dafb" },
      { name: "Next.js",      color: "#94a3b8" },
      { name: "TypeScript",   color: "#3178c6" },
      { name: "JavaScript",   color: "#eab308" },
      { name: "Python",       color: "#3776ab" },
      { name: "Tailwind",     color: "#38bdf8" },
      { name: "Node.js",      color: "#68a063" },
      { name: "Prisma",       color: "#5a67d8" },
      { name: "Supabase",     color: "#3ecf8e" },
      { name: "Figma",        color: "#f24e1e" },
      { name: "Git",          color: "#f05032" },
      { name: "Vite",         color: "#bd34fe" },
    ],
    skills: [
      {
        title: "Frontend",
        icon:  "code",
        items: [
          "React, Next.js, Vite",
          "HTML5, CSS3, Tailwind",
          "JavaScript, TypeScript",
        ],
      },
      {
        title: "Backend & Data",
        icon:  "server",
        items: [
          "Node.js, REST APIs",
          "Python, FastAPI",
          "SQL & NoSQL, Prisma, Supabase",
        ],
      },
      {
        title: "Design & Delivery",
        icon:  "layout",
        items: [
          "UI/UX design in Figma",
          "SEO & performance",
          "Git, CI/CD, Vercel",
        ],
      },
    ],
    services: [
      {
        icon:  "code",
        title: "Website Design & Development",
        desc:  "Business sites, portfolios, and landing pages — fast, responsive, and perfectly on-brand.",
      },
      {
        icon:  "monitor",
        title: "Full-Stack Web Apps",
        desc:  "End-to-end applications with a React/Next.js frontend and Node or Python backend, built to scale.",
      },
      {
        icon:  "palette",
        title: "UI/UX & Site Redesign",
        desc:  "Modernise an existing site with a fresher look, better layout, and higher conversion.",
      },
      {
        icon:  "zap",
        title: "SEO & Performance",
        desc:  "Speed, structure, and metadata tuned so your site ranks and loads in a blink.",
      },
    ],
    projectCategories: ["All", "AI & SaaS", "Full-Stack", "Websites"],
    workNote: "A curated selection of work I'm proud of. Every project is built with care.",
    projects: [
      {
        category: "AI & SaaS",
        title:    "LeadForge AI",
        desc:     "AI-powered automation platform that discovers leads, sends personalised outreach, chats with prospects, and auto-deploys websites.",
        tags:     ["Next.js", "AI", "Automation", "Supabase"],
        gradient: "linear-gradient(135deg,#6366f1,#818cf8)",
        accent:   "#6366f1",
        link:     "https://github.com/Tesfazion/LeadForge-AI",
        github:   "https://github.com/Tesfazion/LeadForge-AI",
      },
      {
        category: "Full-Stack",
        title:    "Network Management Suite",
        desc:     "Network monitoring and management system with real-time dashboards, device tracking, and alert management.",
        tags:     ["JavaScript", "Dashboard", "Real-time"],
        gradient: "linear-gradient(135deg,#0ea5e9,#6366f1)",
        accent:   "#0ea5e9",
        link:     null,
        github:   "https://github.com/Tesfazion/network-management-suite",
      },
      {
        category: "Full-Stack",
        title:    "Hospital Management System",
        desc:     "Patients, appointments, staff, and medical records managed from one clean dashboard.",
        tags:     ["JavaScript", "Full-Stack", "Database"],
        gradient: "linear-gradient(135deg,#06b6d4,#3b82f6)",
        accent:   "#06b6d4",
        link:     null,
        github:   "https://github.com/Tesfazion/Hospital-Management-system",
      },
      {
        category: "Websites",
        title:    "Ethio-Sunshine Tech Solution",
        desc:     "Corporate website for a tech company — modern design, built with TypeScript and Next.js, deployed on Vercel.",
        tags:     ["TypeScript", "Next.js", "Vercel"],
        gradient: "linear-gradient(135deg,#f59e0b,#ef4444)",
        accent:   "#f59e0b",
        link:     "https://sunshinetechsolution.vercel.app",
        github:   "https://github.com/Tesfazion/Ethio-Sunshine-Tech-Solution",
      },
      {
        category: "Websites",
        title:    "Abol Garden Café",
        desc:     "Website for a garden café — menu, gallery, reservations, and a warm on-brand design.",
        tags:     ["TypeScript", "Full-Stack", "UI Design"],
        gradient: "linear-gradient(135deg,#10b981,#84cc16)",
        accent:   "#10b981",
        link:     null,
        github:   "https://github.com/Tesfazion/Abol-garden-cafe",
      },
      {
        category: "AI & SaaS",
        title:    "SignalPulse AI",
        desc:     "Real-time AI trading alerts and market intelligence delivered to a dashboard, automating signal distribution.",
        tags:     ["AI", "Trading", "Automation"],
        gradient: "linear-gradient(135deg,#8b5cf6,#ec4899)",
        accent:   "#8b5cf6",
        link:     null,
        github:   "https://github.com/Tesfazion/SignalPulse-AI",
      },
      {
        category: "Full-Stack",
        title:    "Wolaita-Sodo Water Monitor",
        desc:     "GIS-based water point monitoring for the city — coverage, quality, and maintenance status.",
        tags:     ["JavaScript", "GIS", "Civic Tech"],
        gradient: "linear-gradient(135deg,#06b6d4,#0ea5e9)",
        accent:   "#06b6d4",
        link:     null,
        github:   "https://github.com/Tesfazion/Wolaita-Sodo-Water-Point-Monitoring-System",
      },
      {
        category: "Websites",
        title:    "DU EvaSUE Fellowship",
        desc:     "Responsive site for the Dilla University Christian student fellowship — schedules, programmes, and gallery.",
        tags:     ["CSS", "HTML", "Responsive"],
        gradient: "linear-gradient(135deg,#f43f5e,#fb923c)",
        accent:   "#f43f5e",
        link:     "https://tesfazion.github.io/Du-EvaSUE-Fellowship",
        github:   "https://github.com/Tesfazion/Du-EvaSUE-Fellowship",
      },
    ],
    formTopics: [
      "Website design",
      "Full-stack web app",
      "Site redesign",
      "UI/UX help",
      "SEO & performance",
      "Something else",
    ],
  },

  /* ──────────────────────────────────────────────────────────
     VIDEO EDITOR MODE
  ────────────────────────────────────────────────────────── */
  video: {
    key:        "video",
    label:      "Video Editor",
    shortLabel: "Video Editing",
    route:      "/video",
    icon:       "video",
    gradient:   "linear-gradient(135deg,#f43f5e,#fb923c)",
    resumeUrl:  "/resume-video.pdf",
    resumeName: "Tesfatseyon Merkinh - Video Editor Resume.pdf",
    seo: {
      title: "Video Editor — Tesfatseyon Merkinh",
      description:
        "Short-form video editor for TikTok, Instagram Reels, and YouTube Shorts. Hook writing, tight pacing, captions, sound design, and colour grading in CapCut and DaVinci Resolve.",
    },
    chips:      ["Short-Form & Reels", "Hook Writing", "Color Grading", "CapCut & DaVinci"],
    tagline:    "I edit short-form videos that hook viewers in the first 3 seconds and keep them watching to the very end.",
    roles:      [
      "Short-Form Video Editor",
      "YouTube Shorts Editor",
      "Reels & TikTok Editor",
      "Color Grading & Sound Design",
    ],
    shortBio:   "Video editor focused on high-retention short-form content for TikTok, Reels, and YouTube Shorts.",
    about: [
      "I edit short-form, high-retention content for TikTok, Instagram Reels, and YouTube Shorts, with an eye for pacing, hooks, and story structure that keep viewers watching to the end.",
      "I work end-to-end in CapCut and DaVinci Resolve — from raw footage through colour, sound, captions, and export-ready delivery. My background in software development means fast tool adoption, organised project files, and a methodical approach to testing what actually improves watch time.",
    ],
    highlights: [
      "Short-form editing (TikTok / Reels / Shorts)",
      "Hook writing & retention pacing",
      "CapCut & DaVinci Resolve",
      "Color correction & grading",
      "Sound design, music sync & captions",
      "Repurposing long-form into shorts",
      "Platform-algorithm awareness",
      "Fast turnaround & communication",
    ],
    stats: [
      { value: 2,   suffix: "+", label: "Years Editing"    },
      { value: 30,  suffix: "+", label: "Videos Edited"    },
      { value: 8,   suffix: "+", label: "Happy Creators"   },
      { value: 6,   suffix: "",  label: "Core Tools"       },
    ],
    techStack: [
      { name: "CapCut",          color: "#e2e8f0" },
      { name: "DaVinci Resolve", color: "#f97316" },
      { name: "Premiere Pro",    color: "#818cf8" },
      { name: "After Effects",   color: "#a78bfa" },
      { name: "Photoshop",       color: "#31a8ff" },
      { name: "Audition",        color: "#2dd4bf" },
    ],
    skills: [
      {
        title: "Editing",
        icon:  "video",
        items: [
          "CapCut, DaVinci Resolve, Premiere Pro",
          "Retention-first cutting & pacing",
          "Repurposing long-form into shorts",
        ],
      },
      {
        title: "Motion & Captions",
        icon:  "sparkle",
        items: [
          "After Effects motion graphics",
          "Animated captions, on-screen text",
          "Transitions, B-roll, hook writing",
        ],
      },
      {
        title: "Sound & Color",
        icon:  "palette",
        items: [
          "Color correction & grading",
          "Sound design & music sync",
          "Audio cleanup, platform-ready export",
        ],
      },
    ],
    services: [
      {
        icon:  "video",
        title: "Short-Form Video Editing",
        desc:  "TikTok, Reels, and YouTube Shorts cut for retention — strong hooks, tight pacing, scroll-stopping visuals.",
      },
      {
        icon:  "zap",
        title: "Hook Writing & Structure",
        desc:  "Every edit is built around a hook that grabs in three seconds and a structure that earns the watch-through.",
      },
      {
        icon:  "sparkle",
        title: "Captions & Motion Elements",
        desc:  "Animated captions, on-screen text, and motion graphics that boost accessibility and viewer engagement.",
      },
      {
        icon:  "palette",
        title: "Color Grading & Sound Design",
        desc:  "Cinematic colour and clean, balanced audio — from rough cut to polished, platform-ready export.",
      },
    ],
    projectCategories: ["All", "Shorts", "Reels", "Grading"],
    workNote: "The kinds of edits I deliver day to day. Recent client work, samples, and rates are available on request — message me on Telegram.",
    projects: [
      {
        category: "Shorts",
        title:    "Shorts Batch — Hooks, Captions & B-Roll",
        desc:     "A consistent monthly batch of short-form edits: strong opening hooks, animated captions, b-roll cutaways, and sound design.",
        tags:     ["Retention Editing", "Captions", "Sound Design"],
        gradient: "linear-gradient(135deg,#f43f5e,#fb923c)",
        accent:   "#f43f5e",
        link:     null,
        github:   null,
      },
      {
        category: "Reels",
        title:    "Cinematic Travel Cut — Graded for Reels",
        desc:     "Cinematic short-form travel clips repurposed from longer footage, colour graded and re-cut for vertical viewing.",
        tags:     ["Color Grading", "Repurposing", "Reels"],
        gradient: "linear-gradient(135deg,#06b6d4,#3b82f6)",
        accent:   "#06b6d4",
        link:     null,
        github:   null,
      },
      {
        category: "Grading",
        title:    "Launch Promo — 45s",
        desc:     "High-energy launch short with animated text, punchy cuts, and music sync delivered to a music-beat map.",
        tags:     ["After Effects", "Music Sync", "Fast Turnaround"],
        gradient: "linear-gradient(135deg,#8b5cf6,#ec4899)",
        accent:   "#8b5cf6",
        link:     null,
        github:   null,
      },
      {
        category: "Shorts",
        title:    "Repeatable Short-Form Workflow",
        desc:     "A repeatable editing workflow: trending hooks, tight cuts, animated captions, and a template library built for consistent output.",
        tags:     ["CapCut", "Trend Hooks", "Batch Editing"],
        gradient: "linear-gradient(135deg,#f59e0b,#ef4444)",
        accent:   "#f59e0b",
        link:     null,
        github:   null,
      },
    ],
    formTopics: [
      "Short-form video editing",
      "Reels / TikTok / YouTube Shorts",
      "Hook writing & structure",
      "Color grading & sound",
      "Batch editing package",
      "Something else",
    ],
  },
};

export const modesList = [modes.web, modes.video];
