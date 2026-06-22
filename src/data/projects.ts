export interface CaseStudy {
  id: string;
  client: string;
  sector: string;
  icon: string;
  title: string;
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
  tags: string[];
  region: string;
  liveUrl: string | null;
}

// Client work, told as case studies. Each one runs challenge → approach →
// outcome. Outcomes are described qualitatively, what changed for the
// client, not unverified metrics.
export const caseStudies: CaseStudy[] = [
  {
    id: 'patrolx',
    client: 'PatrolX Tech',
    sector: 'Field Operations & Workforce Management',
    icon: '📍',
    title: 'Every field team on the map, in real time',
    summary:
      'A mobile-first platform that puts distributed field teams on a live map, with GPS-verified site visits, shift logging, incident reporting and proof of work across iOS, Android and web.',
    challenge:
      'Operations managers running security patrols, logistics, cleaning, facilities, aged care, construction and events were flying blind. The workforce was out in the field, but visibility lived in spreadsheets and phone calls, leaving managers unable to prove where teams had been or that the work was actually done, and clients waiting on answers.',
    approach:
      'We built a single source of truth across native iOS and Android apps and a web admin dashboard, all sharing one synchronized data layer. Teams are tracked on a live map, with GPS-verified site visits, shift timing logged to the second, automatic distance calculation between stops, photo-and-text daily reports, and incident logging tagged with priority and location. Multi-tenant administration lets one operator oversee many partners, and push notifications keep the right people informed. The apps shipped to the App Store and Google Play.',
    outcome:
      'Field work is now fully accounted for. Managers watch teams move on a live map, hold GPS-verified proof of every site visit, and have retired spreadsheet tracking for good, closing the client-verification gap and erasing the operational blind spots the business used to run on.',
    tags: ['iOS', 'Android', 'Web Dashboard', 'Real-time GPS', 'Multi-tenant', 'Push Notifications'],
    region: 'Australia',
    liveUrl: 'https://patrolxtech.com',
  },
  {
    id: 'uniqweave',
    client: 'Uniqweave',
    sector: 'Manufacturing · Factory Process Automation',
    icon: '🧵',
    title: 'An entire garment factory, run from a phone',
    summary:
      'A mobile-first PWA that digitises an Indian ethnic-wear workshop from the bolt of cloth to the carton at dispatch: 18 modules, role-based access, built-in financial controls and an AI copilot.',
    challenge:
      'A thriving ethnic-wear workshop was still run on paper and memory. Fabric stock, costing, material issue, production, dispatch and returns lived in disconnected ledgers: error-prone, impossible to audit, and invisible in real time, with every rupee changing hands across many people on a busy shop floor.',
    approach:
      'We put the whole operation on the device everyone already carries. The PWA spans 18 modules, from fabric receipt, designs and cost sheets through orders, material issue, production, QC and packing, to dispatch and returns, with four role-based permission groups so each person sees exactly their part. Critically, the controls live in the database, not just the screen: stock can never go negative, production stages can never be skipped, and dispatch always carries a billing reference. We layered in Shopify order sync, on-the-floor camera capture for fabric, and an AI copilot with alerts grounded in a live snapshot of the workshop.',
    outcome:
      'The full production journey now runs from a phone on the floor: fabric in, design and cost, order, material issue, produce, dispatch and returns, with every number, status and permission enforced automatically. For the first time the owner has an auditable, real-time view of the business, and the team operates it with no training at all.',
    tags: ['PWA', 'Manufacturing ERP', 'Role-based Access', 'AI Copilot', 'Shopify', 'India'],
    region: 'India',
    liveUrl: 'https://www.fpoapp.com',
  },
  {
    id: 'numberandwords',
    client: 'Number & Words',
    sector: 'EdTech · Adaptive Learning',
    icon: '📝',
    title: 'A national exam-prep platform, built by AI',
    summary:
      'An adaptive NAPLAN practice platform for Australian students with 10,000+ AI-generated questions across every domain, instant explanations and realistic timed test simulations.',
    challenge:
      'Families preparing children for Australia’s NAPLAN assessments, Years 3, 5, 7 and 9, were stuck with thin, static worksheets and almost no adaptive feedback to target where a student was actually struggling.',
    approach:
      'We used AI to generate and quality-assure more than 10,000 questions spanning numeracy, reading, language conventions and writing, then wrapped them in an experience that teaches: interactive practice with instant, plain-language explanations, plus full timed simulations that mirror real exam conditions.',
    outcome:
      'Sparse, one-size-fits-all prep became a deep, always-available, curriculum-aligned platform, giving every student a vast adaptive question bank, immediate feedback, and realistic practice whenever they’re ready.',
    tags: ['EdTech', 'Adaptive Learning', 'NAPLAN', 'Content Generation', 'Australia'],
    region: 'Australia',
    liveUrl: 'https://numberandwords.xyz',
  },
  {
    id: 'mywealthbase',
    client: 'My Wealth Base',
    sector: 'FinTech · Tax Automation',
    icon: '💰',
    title: 'Never guess an equity tax bill again',
    summary:
      'An AI-native tool that automatically calculates ATO-compliant ESS income and capital gains for every RSU vest and sale, turning a dreaded spreadsheet exercise into a single, reliable answer.',
    challenge:
      'Australians paid in company equity faced one of the messiest corners of the tax code. Working out ATO Employee Share Scheme income and Capital Gains Tax across dozens of vests and sales was manual, error-prone, and something almost no one could get right with confidence.',
    approach:
      'We built an AI-native application that takes in every vesting and sale event and computes ATO-compliant ESS income and CGT automatically, presenting a clear, defensible position for each event rather than a tangle of formulas.',
    outcome:
      'The guesswork is gone. Users get an automatic, ATO-aligned view of their equity tax position for every vest and sale, replacing fragile spreadsheets and year-end anxiety with a number they can actually trust.',
    tags: ['FinTech', 'ATO', 'ESS', 'RSU', 'CGT', 'AI-native'],
    region: 'Australia',
    liveUrl: 'https://www.mywb.com.au',
  },
  {
    id: 'pureveg',
    client: 'PureVeg',
    sector: 'Consumer · AI Directory',
    icon: '🌿',
    title: 'A pure-vegetarian dining guide diners can trust',
    summary:
      'A global, ad-free directory of pure-vegetarian restaurants across 100+ cities, using AI to read public reviews and flag mixed kitchens, so the listing actually means what it says.',
    challenge:
      'Strictly vegetarian diners travelling the world had no reliable way to find genuinely pure-vegetarian restaurants. Mainstream directories quietly mixed in places with non-veg kitchens, turning every search into a gamble.',
    approach:
      'We built coverage across 100+ cities (Dubai, London, Singapore, New York, Melbourne and more), then pointed AI at the public review record to detect and flag likely non-veg operations. The whole product shipped ad-free, by design.',
    outcome:
      'An unreliable search became a trusted, global resource: an AI-curated, ad-free guide that screens out mixed kitchens across more than a hundred cities, so diners can choose with confidence.',
    tags: ['AI', 'Consumer', 'Review Analysis', '100+ Cities', 'Directory'],
    region: 'Global',
    liveUrl: 'https://www.pureveg.xyz',
  },
  {
    id: 'tankrich-mfd',
    client: 'Tankrich MFD',
    sector: 'Financial Services · Advisory PWA',
    icon: '💼',
    title: 'A modern advisory practice, delivered in days',
    summary:
      'An installable advisory platform for a mutual-fund practice: goal-driven investment journeys, client onboarding, team profiles and real-time push, with no app store in sight.',
    challenge:
      'A mutual-fund practice wanted to feel modern to its clients: goal-based guidance, smooth onboarding and timely nudges. But it couldn’t justify the cost, time and friction of building native mobile apps to get there.',
    approach:
      'We delivered it as a Progressive Web App: goal-driven investment strategies, client onboarding, team profiles, and a real-time push-notification layer that lands nudges straight on the client’s home screen. It installs like a native app, opens instantly, and needs no app store.',
    outcome:
      'The practice now runs on one installable platform that onboards clients, communicates strategy and re-engages people through direct push, stood up in days, not the months a native build would have demanded.',
    tags: ['PWA', 'Financial Advisory', 'Push Notifications', 'Onboarding', 'Installable'],
    region: 'India',
    liveUrl: 'https://tankrichmfd.xyz',
  },
  {
    id: 'reels-engine',
    client: 'Automated Reels Engine',
    sector: 'Marketing · Content & Media Automation',
    icon: '🎬',
    title: 'A week of social video, produced without a studio',
    summary:
      'An end-to-end pipeline that researches, scripts and produces a full week of Instagram and Facebook Reels for finance content, with a human approving in seconds from their phone.',
    challenge:
      'Publishing short-form video consistently is brutal: someone has to find timely topics, write tight scripts, produce the clips and ship them every single week. For a finance content operation, that meant a recurring time sink that quietly fell behind whenever the week got busy, and inconsistency is fatal to social growth.',
    approach:
      'We built an automated production line that runs itself on a schedule. It discovers trending topics from multiple sources (Reddit, search trends, YouTube and RSS), then uses Claude to draft a full batch of platform-native scripts and hashtag sets. The batch is pushed to Telegram for a human to review and approve in seconds, keeping editorial judgment in the loop, before the approved clips are produced and published as Reels to Instagram and Facebook. No video desk, no weekly scramble.',
    outcome:
      'A reliable, hands-off content engine: every week the pipeline surfaces topics, writes the scripts, waits for a one-tap approval, and ships finished Reels to both platforms, turning a draining manual chore into consistent output that runs whether or not anyone has time for it.',
    tags: ['Content Automation', 'Claude', 'Instagram', 'Facebook Reels', 'Human-in-the-loop'],
    region: 'Global',
    liveUrl: null,
  },
  {
    id: 'social-autopilot',
    client: 'Autonomous Social Engine',
    sector: 'Social Media · Autonomous AI',
    icon: '✍️',
    title: 'A social account that grows itself, end to end',
    summary:
      'A fully autonomous X / Twitter engine that generates, scores and publishes original posts multiple times a day, with no human in the loop and no database, running entirely on scheduled automation.',
    challenge:
      'Growing a social account demands a steady stream of genuinely good posts, not filler. Doing that by hand is relentless, and most automation just spams low-quality output that erodes the very audience it’s meant to build.',
    approach:
      'We built an in-house demonstrator that closes the loop completely. On a schedule it picks from a library of themes, generates a batch of candidate posts with an LLM, then scores each one on hook strength, structure, shareability and quality (explicitly filtering out clichés, bait and fake statistics) before publishing only the strongest candidate and logging the result. It runs three times a day, with no human approval step and no external infrastructure to maintain.',
    outcome:
      'A living proof of what disciplined autonomous social AI looks like: original, quality-filtered posts published consistently and unattended, at negligible running cost. The same engine can be adapted, with human-in-the-loop controls, to a brand’s own voice.',
    tags: ['Autonomous AI', 'X / Twitter', 'LLM Scoring', 'Content Generation', 'Demonstrator'],
    region: 'Global',
    liveUrl: 'https://x.com/onewiseidiot',
  },
  {
    id: 'market-intelligence',
    client: 'Market Intelligence Suite',
    sector: 'Capital Markets · Quantitative Analytics',
    icon: '📡',
    title: 'Systematic market signals, fully automated',
    summary:
      'A suite of automated quantitative dashboards (momentum portfolios, global index signals, live commodity calls and on-demand fundamental analysis) that turn raw market data into decisions.',
    challenge:
      'Investors and analysts wanted disciplined, repeatable market signals but were trapped stitching together spreadsheets and eyeballing charts, and that analysis was stale the moment it was finished.',
    approach:
      'We built a family of always-current dashboards: a weekly internet and technology momentum portfolio driven by MACD; a global view issuing LONG / WATCH / FLAT calls across 14 major markets using EMA, MACD and RSI divergence; live Bitcoin, gold and silver signals with entries and timeframes; and a tool that turns raw company exports into multi-sheet fundamental dashboards on demand. Signal generation runs itself and refreshes on schedule.',
    outcome:
      'Stale spreadsheets and ad-hoc chart-reading gave way to automated, always-current market intelligence across asset classes: repeatable, systematic signals decision-makers can actually act on.',
    tags: ['Quantitative', 'Python', 'MACD / EMA / RSI', 'Dashboards', 'Automation'],
    region: 'Global',
    liveUrl: 'https://signals.tankrich.com.au',
  },
];
