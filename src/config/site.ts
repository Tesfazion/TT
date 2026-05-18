export type NavItem = { label: string; href: string };
export type Testimonial = { quote: string; name: string; title: string };

export const site = {
  person: {
    name: "Tesfatseyon Merkineh",
    role: "Computer Science Student",
    affiliation: "Dilla University",
    age: 23,
    education: "CS Student at Dilla University in Ethiopia",
    headline: "I build clean, fast websites — and I’m always learning.",
    subheadline:
      "I’m a Computer Science student at Dilla University (Ethiopia). I like building simple, responsive websites and small web tools with Astro, TypeScript, and Tailwind.",
    skills: [
      "HTML & CSS",
      "JavaScript / TypeScript",
      "Astro",
      "Tailwind CSS",
      "Node.js (basics)",
      "Git & GitHub",
      "REST APIs (basics)"
    ],
    location: "Dilla, Ethiopia",
    availability: "Open for internships • small freelance work"
  },
  company: {
    name: "Ethio-Sunshine Tech Solution",
    navLabel: "Ethio-sunshine",
    tagline: "Web & software solutions for businesses and organizations."
  },
  contact: {
    companyEmail: "sunshinetechsolution4@gmail.com",
    personalEmail: "tesfazion428@email.com",
    phoneDisplay: "+251 983 708 869",
    phoneE164: "+251983708869",
    whatsappDisplay: "+251 704 300 069",
    whatsappE164: "+251704300069"
  },
  links: {
    linkedin: "https://www.linkedin.com/in/tesfatseyon-merkinh-becho-a38626402",
    github: "https://github.com/Tesfazion",
    telegram: "https://t.me/Zizo1616",
    facebook: "https://web.facebook.com/tesfatseyon.merkinh",
    instagram: "https://www.instagram.com/nani161669/",
    x: "https://x.com/tesfatseyo35302"
  },
  assets: {
    headshot: "/brand/headshot.jpg",
    logo: "/brand/logo.png",
    logoMark: "/brand/logo-256.png"
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Company", href: "/company" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" }
  ] satisfies NavItem[],
  seo: {
    siteUrl: "https://tesfazion.github.io",
    title: "Tesfatseyon Merkineh — CS Student & Web Builder",
    description:
      "Computer Science student at Dilla University (Ethiopia). I build clean, responsive websites and small web apps with Astro, TypeScript, and Tailwind."
  },
  analytics: {
    plausibleDomain: ""
  },
  certifications: [
    {
      title: "Modern Web Development",
      issuer: "Tesfatseyon Merkineh",
      year: "2026",
      image: "/images/certifications/modern-web.svg",
      bullets: ["Astro + TypeScript", "Tailwind CSS", "Accessibility + performance"]
    },
    {
      title: "System Design & Architecture",
      issuer: "Tesfatseyon Merkineh",
      year: "2026",
      image: "/images/certifications/system-design.svg",
      bullets: ["API design", "Scalability patterns", "Modernization approaches"]
    },
    {
      title: "Product Strategy Fundamentals",
      issuer: "Tesfatseyon Merkineh",
      year: "2025",
      image: "/images/certifications/product-strategy.svg",
      bullets: ["Discovery & framing", "Outcome roadmaps", "Stakeholder alignment"]
    },
    {
      title: "Delivery Systems & Execution",
      issuer: "Tesfatseyon Merkineh",
      year: "2026",
      image: "/images/certifications/delivery-systems.svg",
      bullets: ["Planning & estimation", "Quality gates & CI", "Release coordination"]
    },
    {
      title: "Executive Communication & Alignment",
      issuer: "Tesfatseyon Merkineh",
      year: "2026",
      image: "/images/certifications/executive-communication.svg",
      bullets: ["Decision-ready updates", "Stakeholder alignment", "Trade-offs & risk"]
    },
    {
      title: "Security & Risk Basics",
      issuer: "Tesfatseyon Merkineh",
      year: "2025",
      image: "/images/certifications/security-risk.svg",
      bullets: ["OWASP awareness", "Threat modeling basics", "Secure delivery habits"]
    }
  ],
  services: [
    {
      icon: "product",
      title: "Frontend Web Development",
      description:
        "Landing pages, portfolios, and responsive UI — focused on speed and a clean look.",
      bullets: ["Astro + Tailwind", "Responsive layouts", "Basic accessibility"]
    },
    {
      icon: "solutions",
      title: "Backend & APIs (Basics)",
      description:
        "Simple Node.js APIs for learning projects and prototypes.",
      bullets: ["Node.js", "REST basics", "Auth concepts"]
    },
    {
      icon: "leadership",
      title: "Problem Solving",
      description:
        "I enjoy debugging and turning messy problems into clear steps.",
      bullets: ["Debugging", "Clean code habits", "CS fundamentals"]
    }
  ],
  highlights: [
    { label: "Age", value: "23" },
    { label: "University", value: "Dilla University" },
    { label: "Focus", value: "Frontend + Full-stack" },
    { label: "Timezone", value: "EAT (UTC+3)" }
  ],
  trust: ["Startups", "Small businesses", "Organizations", "Teams"],
  testimonials: [] as Testimonial[]
} as const;
