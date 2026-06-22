export interface Service {
  id: number;
  icon: string;
  name: string;
  description: string;
  bullets?: string[];
  tags: string[];
}

// Core AI consulting capabilities offered by Tankrich AI Consulting.
export const services: Service[] = [
  {
    id: 1,
    icon: "🧭",
    name: "AI Strategy & Advisory",
    description:
      "We help leaders cut through the AI noise and identify where artificial intelligence creates real, measurable value. From opportunity mapping to a prioritised, ROI-led roadmap, grounded in what your business actually does.",
    bullets: [
      "AI opportunity assessment across your operations and value chain",
      "Prioritised, ROI-led roadmap: highest-leverage opportunities first",
      "Build-vs-buy, model selection, and architecture guidance",
      "Responsible, secure, and pragmatic adoption from day one",
    ],
    tags: ["Strategy", "Roadmap", "Advisory", "ROI"],
  },
  {
    id: 2,
    icon: "🚀",
    name: "Accelerated AI Product Development",
    description:
      "Concept to production-ready product in weeks, not quarters. We design, build and ship full-stack, AI-native applications: real systems running in production, not demos.",
    bullets: [
      "Concept to deployed product in weeks, not months",
      "Full-stack, AI-native architecture from day one",
      "Web, mobile (iOS / Android) and installable PWA delivery",
      "Built to scale and operate, not throwaway prototypes",
    ],
    tags: ["Product", "Full-stack", "Rapid Delivery", "AI-native"],
  },
  {
    id: 3,
    icon: "🧠",
    name: "RAG & Knowledge Systems",
    description:
      "Stop relying on models that hallucinate or work from stale data. Retrieval-Augmented Generation grounds every answer in your verified, authoritative knowledge: accurate, current, and context-aware.",
    bullets: [
      "Answers grounded in your verified sources, not guesswork",
      "Always current: retrieves from your latest documents",
      "Understands your business terminology and context",
      "Secure knowledge bases that keep your data yours",
    ],
    tags: ["RAG", "Knowledge Base", "LLM", "Grounded AI"],
  },
  {
    id: 4,
    icon: "🤖",
    name: "Intelligent Agents & Automation",
    description:
      "Automate the high-volume, repetitive work that drains your team. We build custom AI agents and copilots tuned to your exact workflows, from research and drafting to operational data entry and reporting.",
    bullets: [
      "Custom agents and copilots built around your workflows",
      "Document processing, research, drafting and summarisation",
      "Human-in-the-loop controls where judgment matters",
      "Designed for solo operators through to growing teams",
    ],
    tags: ["Agents", "Copilots", "Automation", "Workflow"],
  },
  {
    id: 5,
    icon: "💬",
    name: "Conversational & Customer AI",
    description:
      "Always-on AI assistants deployed where your customers already are: web, WhatsApp and Telegram. Trained on your data, built on open frameworks, and consistent every time.",
    bullets: [
      "Deployed on your website, WhatsApp, or Telegram",
      "Trained on your documents, FAQs and internal knowledge",
      "Open frameworks: your data stays yours, never resold",
      "Consistent, available 24/7, with zero downtime",
    ],
    tags: ["WhatsApp", "Telegram", "Assistants", "24/7"],
  },
  {
    id: 6,
    icon: "📊",
    name: "Data, Analytics & Decision Intelligence",
    description:
      "Turn your data into live, intelligent dashboards and signals that drive decisions. From operational KPIs to quantitative market intelligence, built on your real data sources, always current.",
    bullets: [
      "Live dashboards built on your actual data sources",
      "Automated signals, KPI views and decision intelligence",
      "From idea to deployed dashboard in days",
      "Always actionable, no more stale spreadsheets",
    ],
    tags: ["Analytics", "Dashboards", "Decision Intelligence", "Real-time"],
  },
];
