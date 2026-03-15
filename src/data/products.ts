export interface Product {
  id: number;
  icon: string;
  name: string;
  description: string;
  tags: string[];
  status: 'available' | 'development';
  liveUrl: string | null;
  ctaText: string;
}

export const products: Product[] = [
  {
    id: 1,
    icon: "🤖",
    name: "Autonomous Social Media Management",
    description: "Let AI run your complete social presence — hands-free but human-approved. Supports X (Twitter), Facebook Pages, and Instagram. AI drafts, schedules, and posts. You approve in seconds.",
    tags: ["X / Twitter", "Instagram", "Facebook", "Human-in-loop"],
    status: "available",
    liveUrl: null,
    ctaText: "Enquire Now"
  },
  {
    id: 2,
    icon: "⚙️",
    name: "GPT Minions for Your Workflows",
    description: "Automate the boring 1–2 step business tasks that eat your day. Custom GPT agents built for your exact workflow — from data entry to research summaries to client communications.",
    tags: ["GPT Agents", "Workflow", "Automation", "Solopreneurs"],
    status: "available",
    liveUrl: "https://www.linkedin.com/pulse/all-solopreneurs-needing-help-bas-vivek-bothra-zpzfc/",
    ctaText: "See Example"
  },
  {
    id: 3,
    icon: "📊",
    name: "AI-Driven Business Dashboards",
    description: "Turn your business data into live, intelligent dashboards. From stock momentum trackers to custom analytics — built fast, deployed live, always actionable.",
    tags: ["Analytics", "Real-time", "Data", "Custom Build"],
    status: "available",
    liveUrl: "https://vivek-bothra.github.io/StockMomentumTracker",
    ctaText: "See Live Demo"
  },
  {
    id: 4,
    icon: "🚀",
    name: "Accelerated AI Development",
    description: "Idea to live product in 3 weeks. I build and ship real AI-powered web products at speed — from concept and architecture to deployed MVP. See live examples built this way.",
    tags: ["MVP", "Full-stack", "3-week sprint", "AI-native"],
    status: "available",
    liveUrl: "https://www.mywb.com.au",
    ctaText: "See What's Possible"
  },
  {
    id: 5,
    icon: "🛡️",
    name: "Secure Personal AI Assistants",
    description: "24/7 AI assistants built on open-source frameworks — deployed on WhatsApp, Telegram, and web. Private, secure, and trained on your data. Always on, always helpful.",
    tags: ["WhatsApp", "Telegram", "Open Source", "24/7"],
    status: "available",
    liveUrl: null,
    ctaText: "Enquire Now"
  }
];
