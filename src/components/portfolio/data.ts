export const EMAIL = "danial@websync.studio";

export const EXTERNAL_LINKS = [
  { label: "GitHub", href: "https://github.com/danialtalat" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/danialtalat" },
  { label: "WebSync Studio", href: "https://websync.studio" },
  { label: "Resume (PDF)", href: "/resume.pdf" },
] as const;

export type WorkGroup = "Full-Stack" | "AI & Automation" | "Shopify & WP" | "Systems";

export const FILTERS = [
  "All",
  "Full-Stack",
  "AI & Automation",
  "Shopify & WP",
  "Systems",
] as const;

export type Filter = (typeof FILTERS)[number];

export interface Work {
  title: string;
  description: string;
  tags: string[];
  group: WorkGroup;
}

export const GROUPS: { id: WorkGroup; heading: string }[] = [
  { id: "Full-Stack", heading: "Custom Web Applications & Systems" },
  { id: "AI & Automation", heading: "AI Agents & Custom Automations" },
  { id: "Shopify & WP", heading: "E-Commerce Architecture" },
  { id: "Systems", heading: "Infrastructure & Networking" },
];

export const WORKS: Work[] = [
  {
    title: "Real Estate IDX & Lead Engine",
    description:
      "Luxury real estate web app with live MLS/IDX feed integration, map search, and automated lead routing.",
    tags: ["React", "Node.js", "IDX/MLS", "Tailwind"],
    group: "Full-Stack",
  },
  {
    title: "Tactical-AI Framework for Football (FYP)",
    description:
      "Spatio-temporal Graph Neural Network (GNN) modeling player tracking data for tactical match simulation.",
    tags: ["Python", "PyTorch", "GNNs", "ML"],
    group: "AI & Automation",
  },
  {
    title: "Web3 & Smart Contract Architecture",
    description:
      "Decentralized applications and automated token data-binding on BNB Smart Chain.",
    tags: ["Solidity", "Web3.js", "BSC"],
    group: "Full-Stack",
  },
  {
    title: "Autonomous AI Support & Booking Agents",
    description:
      "Conversational AI agents with RAG pipelines integrated into client platforms.",
    tags: ["LLMs", "RAG", "Python", "Webhooks"],
    group: "AI & Automation",
  },
  {
    title: "Browser Automation Pipelines",
    description:
      "Headless scraping bots and workflow automation scripts for repetitive operational work.",
    tags: ["Playwright", "Selenium", "Python"],
    group: "AI & Automation",
  },
  {
    title: "Automated CRM Workflows",
    description:
      "Backend webhook triggers connecting forms and store checkouts directly to sales pipelines.",
    tags: ["Webhooks", "CRM", "Automation"],
    group: "AI & Automation",
  },
  {
    title: "Bespoke Shopify & Liquid Engineering",
    description:
      "High-converting custom Shopify storefronts with custom Liquid sections and bundle logic.",
    tags: ["Shopify", "Liquid", "JavaScript"],
    group: "Shopify & WP",
  },
  {
    title: "Victoria Mart & Custom WooCommerce Ecosystems",
    description:
      "Full WooCommerce builds with synchronized catalogs and custom localized payment gateways.",
    tags: ["WordPress", "WooCommerce", "PHP"],
    group: "Shopify & WP",
  },
  {
    title: "Low-Latency WireGuard Cloud Routing",
    description:
      "Private VPN infrastructure deployed on Azure with custom routing tables.",
    tags: ["Azure", "Linux", "WireGuard"],
    group: "Systems",
  },
];

export interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  summary: string;
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Founder & Lead Full-Stack Developer",
    org: "WebSync",
    period: "2025 — Present",
    summary:
      "Running an independent studio delivering custom web/mobile apps, Shopify builds, and AI automation systems.",
  },
  {
    role: "Front-End Developer Intern",
    org: "ZenithCraft Ventures",
    period: "Aug 2025 — Nov 2025",
    summary:
      "Built high-performance front-end interfaces and optimized UI render speeds.",
  },
];

export const EDUCATION = {
  degree: "BS in Computer Science",
  school: "COMSATS University Islamabad, Abbottabad Campus",
  period: "2023 — 2027",
  specialization: [
    "Machine Learning",
    "Algorithms",
    "DevOps",
    "Mobile App Development",
    "Database Systems",
  ],
};

export const STACK: { label: string; items: string[] }[] = [
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "C#", "PHP", "Dart", "SQL", "R"],
  },
  {
    label: "Frameworks",
    items: ["React", "Node.js", "ASP.NET Core", "Flutter", "Tailwind CSS"],
  },
  {
    label: "CMS & Stores",
    items: ["Shopify (Liquid)", "WordPress", "WooCommerce"],
  },
  {
    label: "AI & Infra",
    items: ["AI Agents", "RAG", "Playwright", "Azure", "WireGuard", "Docker"],
  },
];
