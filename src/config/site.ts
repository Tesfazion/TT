export type NavItem = { label: string; href: string };
export type Testimonial = { quote: string; name: string; title: string };

export const site = {
  person: {
    name: "Tesfatseyon Merkineh",
    role: "Founder & CEO",
    headline: "I build modern websites and full-stack apps.",
    subheadline:
      "Software development end-to-end: modern UI, full-stack apps, dashboards, APIs, and automations — with clear delivery and founder-level ownership.",
    skills: [
      "Software development",
      "Full-stack apps",
      "Dashboards",
      "UI/UX design",
      "API development",
      "Automation & integrations"
    ],
    location: "Addis Ababa, Ethiopia",
    availability: "Open to freelance • Full-time • Speaking"
  },
  company: {
    name: "Ethio-Sunshine Tech Solution",
    navLabel: "Ethio-sunshine",
    tagline: "Client work, consulting, and delivery — under one studio."
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
    { label: "Projects", href: "/projects" },
    { label: "Company", href: "/company" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" }
  ] satisfies NavItem[],
  seo: {
    siteUrl: "https://tesfazion.github.io",
    title: "Tesfatseyon Merkineh — Portfolio",
    description:
      "Personal portfolio of Tesfatseyon Merkineh — full-stack developer building modern web experiences and reliable systems."
  },
  analytics: {
    plausibleDomain: ""
  },
  services: [
    {
      icon: "product",
      title: "Web Development",
      description:
        "Fast, responsive websites and web apps with clean UI, solid foundations, and performance in mind.",
      bullets: ["Landing pages & portfolios", "Web apps & dashboards", "Performance & accessibility"]
    },
    {
      icon: "leadership",
      title: "UI/UX + Frontend",
      description:
        "Modern, user-friendly interfaces built with a strong focus on clarity, layout, and mobile-first design.",
      bullets: ["Responsive design", "Design systems", "Animations & micro-interactions"]
    },
    {
      icon: "solutions",
      title: "Automation & Integration",
      description:
        "Automations, integrations, and APIs to save time and connect tools cleanly.",
      bullets: ["API integrations", "Workflow automations", "Security basics"]
    }
  ],
  highlights: [
    { label: "Focus", value: "Full-stack" },
    { label: "Strength", value: "UI + APIs" },
    { label: "Timezone", value: "EAT (UTC+3)" },
    { label: "Mode", value: "Remote / On-site" }
  ],
  trust: ["Startups", "Small businesses", "Teams", "Individuals"],
  testimonials: [] as Testimonial[]
} as const;
