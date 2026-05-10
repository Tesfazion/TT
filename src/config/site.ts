export type NavItem = { label: string; href: string };
export type Testimonial = { quote: string; name: string; title: string };

export const site = {
  brand: {
    companyName: "Sunshine Tech solution",
    name: "Tesfatseyon Merkineh",
    role: "Owner & CEO",
    headline: "I build reliable products — and help teams deliver faster.",
    subheadline:
      "I help organizations turn ideas into secure, scalable systems and modern digital experiences.",
    location: "Addis Abeba, Ethiopia",
    availability: "Open to consulting • Advisory • Speaking"
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
    { label: "Projects", href: "/projects" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" }
  ] satisfies NavItem[],
  seo: {
    siteUrl: "https://tesfazion.github.io",
    title: "Sunshine Tech solution — Portfolio",
    description:
      "Portfolio for Sunshine Tech solution: modern web, automation, and secure systems — delivered with CEO-level clarity."
  },
  analytics: {
    plausibleDomain: ""
  },
  services: [
    {
      icon: "product",
      title: "Product & Delivery",
      description:
        "From strategy to shipped MVPs: discovery, roadmaps, execution, and measurable outcomes.",
      bullets: ["Product discovery", "Roadmaps & OKRs", "MVP to scale-up delivery"]
    },
    {
      icon: "leadership",
      title: "Engineering Leadership",
      description:
        "Build high-performing teams and systems: architecture, hiring, standards, and developer velocity.",
      bullets: ["Architecture reviews", "Team building", "Engineering standards"]
    },
    {
      icon: "solutions",
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
  testimonials: [] as Testimonial[]
} as const;
