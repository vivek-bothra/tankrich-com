export interface Product {
  id: number;
  icon: string;
  name: string;
  description: string;
  bullets?: string[];
  gallery?: { url: string; alt: string }[];
  tags: string[];
  status: 'available' | 'development';
  liveUrl: string | null;
  ctaText: string;
  modalType?: 'iframe' | 'info';
  modalExtra?: 'rag-comparison';
}

export const products: Product[] = [
  {
    id: 1,
    icon: "🤖",
    name: "Autonomous Social Media Management",
    description: "Let AI run your complete social presence — hands-free but human-approved. Supports X (Twitter), Facebook Pages, and Instagram. AI drafts, schedules, and posts. You approve in seconds.",
    bullets: [
      "AI studies your brand voice and drafts platform-native content",
      "Supports X / Twitter, Instagram, and Facebook Pages simultaneously",
      "Human-in-the-loop: you review and approve before anything goes live",
      "Automated scheduling — posts go out at the optimal time",
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=700&q=75",
        alt: "Social media management dashboard"
      },
      {
        url: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=700&q=75",
        alt: "Social media on mobile"
      }
    ],
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
    bullets: [
      "Custom GPT agents built around your exact workflow",
      "Handles data entry, research, drafting, and summarisation",
      "The BAS Creator GPT automates your BAS preparation end-to-end",
      "Built for solopreneurs and small business operators",
    ],
    tags: ["GPT Agents", "Workflow", "Automation", "Solopreneurs"],
    status: "available",
    liveUrl: "https://chatgpt.com/g/g-69b34f8651a881918f2c891db7758fd0-bas-creator",
    ctaText: "Try the GPT",
    modalType: "info"
  },
  {
    id: 3,
    icon: "📊",
    name: "AI-Driven Business Dashboards",
    description: "Turn your business data into live, intelligent dashboards. From stock momentum trackers to custom analytics — built fast, deployed live, always actionable.",
    bullets: [
      "Custom dashboards built on your actual data sources",
      "Live signals, momentum trackers, and KPI views",
      "From idea to deployed dashboard in days, not months",
      "Always actionable — no more stale spreadsheets",
    ],
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
    bullets: [
      "Concept to deployed MVP in 3 weeks",
      "Full-stack AI-native architecture from day one",
      "Real examples live and in production — not demos",
      "Designed to scale — not throwaway prototypes",
    ],
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
    bullets: [
      "Deployed on WhatsApp, Telegram, or your website",
      "Trained on your documents, FAQs, and internal data",
      "Open-source stack — your data stays yours, never shared",
      "Always available, always consistent — zero downtime",
    ],
    tags: ["WhatsApp", "Telegram", "Open Source", "24/7"],
    status: "available",
    liveUrl: null,
    ctaText: "Enquire Now"
  },
  {
    id: 6,
    icon: "🧠",
    name: "Leverage RAG for Business Decisions",
    description: "Stop relying on LLMs that hallucinate or use outdated information. Retrieval Augmented Generation (RAG) grounds AI answers in your verified, authoritative business knowledge — making every response accurate, current, and context-aware.",
    bullets: [
      "Eliminates hallucinations — every answer grounded in your verified sources",
      "Always up-to-date — retrieves from your latest documents, not stale training data",
      "Context-aware — understands your business terminology precisely",
      "Try the live demo: My Wealth Buddy Australia, a RAG-powered financial assistant",
    ],
    tags: ["RAG", "LLM", "Knowledge Base", "Custom GPT", "Business Intelligence"],
    status: "available",
    liveUrl: "https://chatgpt.com/g/g-68357c0b993c8191ae98916a3351d7c4-my-wealth-buddy-australia",
    ctaText: "See RAG in Action",
    modalType: "info",
    modalExtra: "rag-comparison"
  }
];
