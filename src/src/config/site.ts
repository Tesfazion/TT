export type NavItem = { label: string; href: string };

export const site = {
  brand: {
    name: "Tesfatseyon Me/h",
    tagline: "Sunshine Tech Solutions Owner • CEO",
    headline: "I build products that scale — and teams that ship.",
    subheadline:
      "I help organizations turn ambiguous ideas into reliable systems, delightful experiences, and measurable growth.",
    location: "Addis Abeba, Ethiopia",
    availability: "Open to consulting • Advisory • Speaking"
  },
  contact: {
    email: "tesfazion428@email.com",
    phoneDisplay: "+251 070 430 0069",
    phoneE164: "+25+251 983 708 869"
  },
  links: {
    linkedin: "https://www.linkedin.com/in/your-handle",
    github: "https://github.com/your-handle",
    x: "https://x.com/your-handle"
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" }
  ] satisfies NavItem[],
  seo: {
    siteUrl: "https://example.com",
    title: "Your Name — Tech Solutions Owner & CEO",
    description:
      "Executive-level portfolio: product strategy, engineering leadership, and delivery of scalable systems."
  },
  analytics: {
    plausibleDomain: ""
  },
  services: [
    {
      title: "Product & Delivery",
      description:
        "From strategy to shipped MVPs: discovery, roadmaps, execution, and measurable outcomes.",
      bullets: ["Product discovery", "Roadmaps & OKRs", "MVP to scale-up delivery"]
    },
    {
      title: "Engineering Leadership",
      description:
        "Build high-performing teams and systems: architecture, hiring, standards, and developer velocity.",
      bullets: ["Architecture reviews", "Team building", "Engineering standards"]
    },
    {
      title: "Tech Solutions",
      description:
        "Modern web apps, APIs, automations, and integrations focused on reliability and speed.",
      bullets: ["Full-stack builds", "Integrations", "Performance & security"]
    }
  ],
  highlights: [
    { label: "Years leading teams", value: "8+" },
    { label: "Products shipped", value: "25+" },
    { label: "Avg. delivery speed-up", value: "2–4×" },
    { label: "Uptime targets met", value: "99.9%" }
  ],
  trust: ["Startups", "SMBs", "Enterprises", "Public sector"],
  testimonials: [
    {
      quote:
        "Exceptional execution and leadership — delivered ahead of schedule with clear communication.",
      name: "Client Name",
      title: "CEO, Company"
    },
    {
      quote:
        "A rare blend of strategy and hands-on delivery. Strong architectural decisions with business impact.",
      name: "Partner Name",
      title: "CTO, Company"
    }
  ]
} as const;
