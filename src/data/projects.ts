export interface Project {
  id: string;
  icon: string;
  name: string;
  description: string;
  tags: string[];
  liveUrl: string;
  repoUrl: string;
  group: 'finance' | 'tools';
}

export const projectGroups = [
  {
    id: 'finance',
    label: 'Finance & Markets',
    icon: '📈',
    description: 'Quantitative tools and live signal dashboards for traders and investors',
  },
  {
    id: 'tools',
    label: 'Business Tools & Web',
    icon: '🛠️',
    description: 'Deployed web products and business automation tools',
  },
] as const;

export const projects: Project[] = [
  // --- Finance & Markets ---
  {
    id: 'stock-momentum',
    icon: '📡',
    name: 'Internet Momentum Portfolio',
    description: 'Quantitative strategy that identifies internet and technology stocks with positive MACD momentum on a weekly basis. Fully automated signal generation.',
    tags: ['Python', 'Quantitative', 'MACD', 'Weekly Signals'],
    liveUrl: 'https://vivek-bothra.github.io/StockMomentumTracker',
    repoUrl: 'https://github.com/vivek-bothra/StockMomentumTracker',
    group: 'finance',
  },
  {
    id: 'market-top',
    icon: '🌐',
    name: 'Market Top Signals',
    description: 'Global momentum dashboard showing LONG / WATCH / FLAT signals for 14 major stock market indexes worldwide. Auto-generated every Monday using EMA, MACD, and RSI divergence.',
    tags: ['HTML', 'EMA', 'MACD', 'RSI', '14 Indexes'],
    liveUrl: 'https://vivek-bothra.github.io/Market-Top-Indicator',
    repoUrl: 'https://github.com/vivek-bothra/Market-Top-Indicator',
    group: 'finance',
  },
  {
    id: 'tankrich-signals',
    icon: '⚡',
    name: 'Tankrich Signals Dashboard',
    description: 'Live auto-generated trading signals for Bitcoin, Gold, and Silver — with recommendations, entry dates, and timeframes. Always current, always actionable.',
    tags: ['Signals', 'Bitcoin', 'Gold', 'Silver', 'Live'],
    liveUrl: 'https://signals.tankrich.com.au',
    repoUrl: 'https://github.com/vivek-bothra/tankrich-signals-site',
    group: 'finance',
  },
  // --- Business Tools & Web ---
  {
    id: 'pureveg',
    icon: '🌿',
    name: 'PureVeg.xyz — Pure Veg Indian Food, Wherever You Are',
    description: 'AI-powered global directory of pure vegetarian Indian restaurants — no mixed kitchens. Covers 100+ cities including Dubai, London, Singapore, New York and Melbourne. AI analyzes Google reviews to flag non-veg operations. Ad-free, forever free. Co-created with Sonal Daga.',
    tags: ['AI', 'Directory', '100+ Cities', 'Google Reviews AI', 'Free', 'OpenAI + Anthropic'],
    liveUrl: 'https://www.pureveg.xyz',
    repoUrl: 'https://github.com/vivek-bothra',
    group: 'tools',
  },
  {
    id: 'interactive-dashboard',
    icon: '📂',
    name: 'Fundamental Analysis Dashboard',
    description: 'Upload Excel exports from Screener.in for any company and instantly get a multi-sheet financial dashboard — income statements, quality scores, and ratio analysis.',
    tags: ['JavaScript', 'Screener.in', 'Excel', 'Financial Analysis'],
    liveUrl: 'https://analysis.tankrich.com.au',
    repoUrl: 'https://github.com/vivek-bothra/Tankrich-Interactive-dashboard',
    group: 'tools',
  },
  {
    id: 'mfd-site',
    icon: '💼',
    name: 'Tankrich MFD — Mutual Funds For Life',
    description: 'Full mutual fund advisory landing site. Goal-driven, data-driven investment strategies with team profiles and client onboarding. Built and deployed in days.',
    tags: ['HTML', 'Mutual Funds', 'Advisory', 'Landing Page'],
    liveUrl: 'https://tankrichmfd.xyz',
    repoUrl: 'https://github.com/vivek-bothra/tankrichmfd-site',
    group: 'tools',
  },
  {
    id: 'mywb',
    icon: '🚀',
    name: 'MyWB — AI-Native Web Product',
    description: 'A live AI-powered web product built from idea to deployment in under 3 weeks. A real example of the accelerated AI development approach in action.',
    tags: ['AI-native', 'Full-stack', 'MVP', '3-week sprint'],
    liveUrl: 'https://www.mywb.com.au',
    repoUrl: 'https://github.com/vivek-bothra',
    group: 'tools',
  },
];
