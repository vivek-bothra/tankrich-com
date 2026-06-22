export interface CaseStudy {
  id: string;
  client: string;
  sector: string;
  icon: string;
  title: string;
  summary: string;
  situation: string;
  task: string;
  action: string;
  result: string;
  tags: string[];
  region: string;
  liveUrl: string;
}

// All client work is presented as STAR case studies
// (Situation · Task · Action · Result). Results are described
// qualitatively — outcomes delivered, not unverified metrics.
export const caseStudies: CaseStudy[] = [
  {
    id: 'patrolx',
    client: 'PatrolX Tech',
    sector: 'Field Operations & Workforce Management',
    icon: '📍',
    title: 'Real-time visibility for distributed field teams',
    summary:
      'A mobile-first platform that puts every field team on the map in real time — GPS-verified site visits, shift logging, incident reporting, and proof of work across iOS, Android and web.',
    situation:
      'Operations managers across security patrols, logistics, commercial cleaning, facilities, aged care, construction and events had no reliable view of their mobile workforce. Tracking ran on spreadsheets and phone calls, creating operational blind spots and delays in verifying work for clients.',
    task:
      'Deliver a single platform that gives managers instant, trustworthy visibility into where teams are, how long they spend on site, and proof that work was completed — usable in the field and in the back office.',
    action:
      'We designed and shipped native iOS and Android apps plus a web admin dashboard with a synchronized data layer. Capabilities include live map tracking, GPS-verified site visits with timestamps, shift timing logged to the second, automated kilometre calculation between events, daily reports with photos and text, incident logging with priority and location, multi-tenant administration for managing multiple partners, and push notifications to stakeholders. Apps were published to the App Store and Google Play.',
    result:
      'Field work is now accounted for end to end. Managers see teams on a live map, hold GPS-verified proof of every site visit, and have replaced spreadsheet tracking with synchronized mobile-and-web data — closing the client verification gap and eliminating operational blind spots.',
    tags: ['iOS', 'Android', 'Web Dashboard', 'Real-time GPS', 'Multi-tenant', 'Push Notifications'],
    region: 'Australia',
    liveUrl: 'https://patrolxtech.com',
  },
  {
    id: 'uniqweave',
    client: 'Uniqweave',
    sector: 'Manufacturing · Factory Process Automation',
    icon: '🧵',
    title: 'Running an ethnic-wear workshop end to end from a phone',
    summary:
      'A mobile-first PWA that digitises an Indian ethnic-wear and fabric workshop from the bolt of cloth to the carton at dispatch — 18 modules, role-based access, database-enforced controls, and an AI copilot.',
    situation:
      'An ethnic-wear manufacturing workshop ran production on paper and memory. Fabric inventory, costing, material issue, production tracking, dispatch and returns were disconnected and error-prone, with no auditable, real-time picture of the floor — and everything measured in rupees across many hands.',
    task:
      'Digitise the entire workshop end to end on a device people already carry, with strict financial and stock controls, clear role separation, and no specialist training required to operate it.',
    action:
      'We built a mobile-first PWA spanning 18 modules across setup & catalog, orders & floor, ship & returns, and admin/AI. It enforces four role-based permission groups (Admin, Workshop, Stores, Sales) and database-level guardrails — stock can never go negative, production stages cannot be skipped, dispatch requires a billing reference. The build integrates Shopify order sync, camera-based fabric capture on the shop floor, and an AI copilot with alerts (Gemini gateway) grounded in a live snapshot of workshop data.',
    result:
      'The full production journey — fabric in → design & cost → order → material issue → produce, QC, pack → dispatch & billing → returns — now runs from a phone on the floor. Every number, status and permission is enforced by the database, giving the owner an auditable, real-time view of the business that staff can use with no training.',
    tags: ['PWA', 'Manufacturing ERP', 'Role-based Access', 'AI Copilot', 'Shopify', 'India'],
    region: 'India',
    liveUrl: 'https://www.fpoapp.com',
  },
  {
    id: 'numberandwords',
    client: 'Number & Words',
    sector: 'EdTech · Adaptive Learning',
    icon: '📝',
    title: 'An adaptive NAPLAN practice platform at national scale',
    summary:
      'An AI-built adaptive practice platform for Australian students with 10,000+ generated questions across numeracy, reading, language conventions and writing — instant explanations and timed test simulations.',
    situation:
      'Families preparing students for Australia’s NAPLAN assessments (Years 3, 5, 7 and 9) faced thin, static practice material and little adaptive feedback to target weak areas.',
    task:
      'Create a curriculum-aligned practice platform that scales to thousands of high-quality questions and adapts to each student, with explanations that actually teach.',
    action:
      'We used AI to generate and quality-assure 10,000+ questions across all NAPLAN domains, then built interactive practice with instant explanations and timed full-test simulations on a fast, modern web stack.',
    result:
      'Students get a deep, adaptive question bank with immediate feedback and realistic timed practice — turning sparse preparation into a continuously available, curriculum-aligned learning experience.',
    tags: ['EdTech', 'Adaptive Learning', 'NAPLAN', 'Content Generation', 'Australia'],
    region: 'Australia',
    liveUrl: 'https://numberandwords.xyz',
  },
  {
    id: 'mywealthbase',
    client: 'My Wealth Base',
    sector: 'FinTech · Tax Automation',
    icon: '💰',
    title: 'Automating ATO-compliant equity tax for every vest and sale',
    summary:
      'An AI-native tool that calculates ATO-compliant ESS income and capital gains for every RSU vest and sale automatically — so employees never have to guess their equity tax bill.',
    situation:
      'Australian employees with equity compensation struggled to compute their ATO Employee Share Scheme (ESS) income and Capital Gains Tax across many vests and sales — a manual, error-prone process few could get right.',
    task:
      'Remove the guesswork by automating ESS income and CGT calculation for every vest and sale, in line with ATO rules.',
    action:
      'We built an AI-native application that ingests vesting and sale events and computes ATO-compliant ESS income and CGT automatically, presenting a clear, defensible position for each event.',
    result:
      'Users get an automatic, ATO-aligned view of their equity tax position for every vest and sale — replacing spreadsheets and uncertainty with a calculation they can rely on.',
    tags: ['FinTech', 'ATO', 'ESS', 'RSU', 'CGT', 'AI-native'],
    region: 'Australia',
    liveUrl: 'https://www.mywb.com.au',
  },
  {
    id: 'pureveg',
    client: 'PureVeg',
    sector: 'Consumer · AI Directory',
    icon: '🌿',
    title: 'An AI-curated global directory of pure-vegetarian dining',
    summary:
      'A global, ad-free directory of pure-vegetarian Indian restaurants across 100+ cities, using AI to analyse public reviews and flag mixed kitchens — so diners can trust the listing.',
    situation:
      'Strictly vegetarian diners travelling globally had no trustworthy way to find genuinely pure-vegetarian restaurants — most directories mixed in establishments with non-veg kitchens.',
    task:
      'Build a directory diners can trust, spanning major cities worldwide, that distinguishes truly pure-vegetarian operations from mixed kitchens.',
    action:
      'We assembled coverage across 100+ cities including Dubai, London, Singapore, New York and Melbourne, and applied AI to analyse Google reviews and flag likely non-veg operations. The product was shipped ad-free.',
    result:
      'Diners get an AI-curated, ad-free directory that screens for mixed kitchens across 100+ cities — turning an unreliable search into a trusted, global resource.',
    tags: ['AI', 'Consumer', 'Review Analysis', '100+ Cities', 'Directory'],
    region: 'Global',
    liveUrl: 'https://www.pureveg.xyz',
  },
  {
    id: 'tankrich-mfd',
    client: 'Tankrich MFD',
    sector: 'Financial Services · Advisory PWA',
    icon: '💼',
    title: 'A full mutual-fund advisory platform with push at its core',
    summary:
      'An installable advisory platform for a mutual-fund practice — goal-driven investment journeys, client onboarding, team profiles, and real-time push notifications, with no app store required.',
    situation:
      'A mutual-fund distribution practice needed a modern client-facing platform — goal-based guidance, onboarding and timely nudges — without the cost and friction of native app development.',
    task:
      'Deliver a fast, installable advisory experience that keeps clients engaged and reaches them directly, built and deployed quickly.',
    action:
      'We built a Progressive Web App with goal-driven investment strategies, client onboarding, team profiles, and a real-time push-notification layer that lands nudges on the client’s home screen. It installs like a native app, works instantly, and needs no app store.',
    result:
      'The practice runs on a single installable platform that onboards clients, communicates strategy, and re-engages clients through direct push — delivered in days rather than the months a native build would require.',
    tags: ['PWA', 'Financial Advisory', 'Push Notifications', 'Onboarding', 'Installable'],
    region: 'India',
    liveUrl: 'https://tankrichmfd.xyz',
  },
  {
    id: 'market-intelligence',
    client: 'Market Intelligence Suite',
    sector: 'Capital Markets · Quantitative Analytics',
    icon: '📡',
    title: 'Automated market-signal dashboards for systematic decisions',
    summary:
      'A suite of automated quantitative dashboards — momentum portfolios, global index signals, live commodity signals, and on-demand fundamental analysis — that turn raw market data into actionable views.',
    situation:
      'Investors and analysts wanted disciplined, systematic market signals but were stuck stitching together spreadsheets and manual chart reviews that went stale the moment they were built.',
    task:
      'Replace manual analysis with automated, always-current dashboards that generate clear signals across equities, global indexes and commodities.',
    action:
      'We built a family of dashboards: a weekly internet/technology momentum portfolio (MACD), a global index dashboard issuing LONG / WATCH / FLAT signals across 14 markets (EMA, MACD, RSI divergence), live Bitcoin/gold/silver signals with entries and timeframes, and a fundamental-analysis tool that turns Screener.in exports into multi-sheet financial dashboards. Signal generation is fully automated and refreshes on schedule.',
    result:
      'Decision-makers get automated, always-current market intelligence across asset classes — replacing stale spreadsheets and ad-hoc chart reading with repeatable, systematic signals.',
    tags: ['Quantitative', 'Python', 'MACD / EMA / RSI', 'Dashboards', 'Automation'],
    region: 'Global',
    liveUrl: 'https://signals.tankrich.com.au',
  },
];
