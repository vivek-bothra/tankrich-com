export interface Project {
  id: string;
  icon: string;
  name: string;
  description: string;
  tags: string[];
  liveUrl: string;
  repoUrl: string;
}

export const projects: Project[] = [
  {
    id: 'pureveg',
    icon: '🌿',
    name: 'PureVeg.xyz',
    description: 'AI-powered global directory of pure vegetarian Indian restaurants — no mixed kitchens. Covers 100+ cities including Dubai, London, Singapore, New York, and Melbourne. AI analyzes Google reviews to flag non-veg operations. Ad-free, forever free. Co-created with Sonal Daga using Claude and Codex.',
    tags: ['AI', 'Directory', '100+ Cities', 'Google Reviews AI', 'Free', 'Claude + Codex'],
    liveUrl: 'https://www.pureveg.xyz',
    repoUrl: 'https://github.com/vivek-bothra',
  },
  {
    id: 'mywb',
    icon: '💰',
    name: 'My Wealth Base',
    description: 'My Wealth Base calculates your ATO-compliant ESS income and CGT for every vest and sale — automatically. You never have to guess your RSU tax bill again.',
    tags: ['ATO', 'ESS', 'RSU', 'CGT', 'Tax', 'AI-native'],
    liveUrl: 'https://www.mywb.com.au',
    repoUrl: 'https://github.com/vivek-bothra',
  },
  {
    id: 'stock-momentum',
    icon: '📡',
    name: 'Internet Momentum Portfolio',
    description: 'Quantitative strategy that identifies internet and technology stocks with positive MACD momentum on a weekly basis. Fully automated signal generation.',
    tags: ['Python', 'Quantitative', 'MACD', 'Weekly Signals'],
    liveUrl: 'https://vivek-bothra.github.io/StockMomentumTracker',
    repoUrl: 'https://github.com/vivek-bothra/StockMomentumTracker',
  },
  {
    id: 'market-top',
    icon: '🌐',
    name: 'Market Top Signals',
    description: 'Global momentum dashboard showing LONG / WATCH / FLAT signals for 14 major stock market indexes worldwide. Auto-generated every Monday using EMA, MACD, and RSI divergence.',
    tags: ['EMA', 'MACD', 'RSI', '14 Indexes', 'Weekly'],
    liveUrl: 'https://vivek-bothra.github.io/Market-Top-Indicator',
    repoUrl: 'https://github.com/vivek-bothra/Market-Top-Indicator',
  },
  {
    id: 'tankrich-signals',
    icon: '⚡',
    name: 'Tankrich Signals Dashboard',
    description: 'Live auto-generated trading signals for Bitcoin, Gold, and Silver — with recommendations, entry dates, and timeframes. Always current, always actionable.',
    tags: ['Signals', 'Bitcoin', 'Gold', 'Silver', 'Live'],
    liveUrl: 'https://signals.tankrich.com.au',
    repoUrl: 'https://github.com/vivek-bothra/tankrich-signals-site',
  },
  {
    id: 'interactive-dashboard',
    icon: '📂',
    name: 'Fundamental Analysis Dashboard',
    description: 'Upload Excel exports from Screener.in for any company and instantly get a multi-sheet financial dashboard — income statements, quality scores, and ratio analysis.',
    tags: ['JavaScript', 'Screener.in', 'Excel', 'Financial Analysis'],
    liveUrl: 'https://analysis.tankrich.com.au',
    repoUrl: 'https://github.com/vivek-bothra/Tankrich-Interactive-dashboard',
  },
  {
    id: 'mfd-site',
    icon: '💼',
    name: 'Tankrich MFD — Mutual Funds For Life',
    description: 'Full mutual fund advisory landing site. Goal-driven, data-driven investment strategies with team profiles and client onboarding. Built and deployed in days.',
    tags: ['Mutual Funds', 'Advisory', 'Landing Page'],
    liveUrl: 'https://tankrichmfd.xyz',
    repoUrl: 'https://github.com/vivek-bothra/tankrichmfd-site',
  },
];
