// Content for the Tankrich Social Media AI product pages (/social-ai and /social-ai-pricing).
// Prices are AUD and exclude GST. Kept in one place so the product page, the pricing
// page and the home page promo can never drift apart.

export const setupFee = {
  price: 750,
  // Stripe payment link. Automatic tax is on, so GST is added on top of the $750 at checkout.
  paymentLink: "https://buy.stripe.com/4gM5kF9o7aHl7go1Bt4Ni03",
  name: "Initial consultation and Social AI development",
  description:
    "A one-off engagement fee. We sit down with you, learn how your business talks, build your brand brief, connect your channels and tune the bot until the posts sound like you. Charged once, before your first month.",
  includes: [
    "Discovery session on your business, customers and tone of voice",
    "Your brand brief written up: what you sound like, and the never-say list",
    "Channel setup and connection for every account you want posted to",
    "Bot tuned and tested on your real photos until the output is right",
    "Handover session so you can run it from your phone on day one",
  ],
};

export interface Plan {
  id: string;
  option: string;
  name: string;
  price: number;
  tagline: string;
  images: string;
  videos: string;
  featured?: boolean;
  note?: string;
  /** Stripe payment link. Plans without one fall back to the "talk to us" CTA. */
  paymentLink?: string;
  bullets: string[];
  bestFor: string;
}

export const plans: Plan[] = [
  {
    id: "image-only",
    option: "Option A",
    name: "Image Only",
    price: 199,
    tagline: "Photo in, finished post out. No video.",
    images: "200 image generations",
    videos: "Not included",
    bullets: [
      "200 image generations and posts every month",
      "Captions written from the photo, in your voice",
      "Posts to every connected channel",
      "You approve every post, or switch on auto approval once you trust it",
    ],
    bestFor: "Shops, cafes and trades who post photos and want the writing done for them.",
  },
  {
    id: "image-video",
    option: "Option B",
    name: "Image + Avatar Video",
    price: 499,
    tagline: "Talking-head video plus everything in Image Only.",
    images: "200 image generations",
    videos: "35 avatar videos",
    featured: true,
    bullets: [
      "35 avatar videos and 200 image generations every month",
      "Your script, spoken by your avatar, in your own cloned voice",
      "Two approval points: the words, then the finished video",
      "Posts to every connected channel",
    ],
    bestFor: "Businesses whose customers expect a face: agents, advisers, clinics, coaches.",
  },
  {
    id: "high-volume",
    option: "Option C",
    name: "High Volume",
    price: 699,
    tagline: "For a daily posting habit across several channels.",
    images: "300 image generations",
    videos: "50 avatar videos",
    bullets: [
      "50 avatar videos and 300 image generation credits every month",
      "Everything in Image + Avatar Video, with room to post daily",
      "Comfortable across four or more connected channels",
      "Priority turnaround on renders",
    ],
    bestFor: "Multi-location businesses and teams running a serious content calendar.",
  },
  {
    id: "unlimited",
    option: "Option D",
    name: "Unlimited Generation",
    price: 99,
    tagline: "Bring your own server and API keys. We run the software.",
    images: "Unlimited",
    videos: "Unlimited",
    note: "Bring your own server and API keys",
    bullets: [
      "Unlimited image and video generation",
      "You supply the server and the API keys, and you pay those bills directly",
      "We deploy, operate, monitor and update the software on your infrastructure",
      "Everything stays inside your own accounts",
    ],
    bestFor:
      "Businesses with their own infrastructure and someone technical, who want volume without a per-credit ceiling.",
  },
];

export const steps = [
  {
    number: "01",
    title: "Text your Bot",
    description:
      "Send it from wherever you already are, standing in the shop or sitting in the van. A photo, a short clip, or a couple of lines about what happened today. No app to learn, no desktop, no login.",
  },
  {
    number: "02",
    title: "Your bots build the post",
    description:
      "The caption gets written in your voice, from your brand brief. If it is a video, your script is spoken by your avatar in your own cloned voice. Nothing is invented that you did not supply.",
  },
  {
    number: "03",
    title: "You approve or set for auto approval",
    description:
      "The finished post comes back to you before anyone else sees it. Change the words, or skip it entirely. Once you trust the output you can switch a post type over to auto approval and let it run without you.",
  },
  {
    number: "04",
    title: "One-click post",
    description:
      "One tap and it publishes to every channel you have connected, each one reported back to you separately so you know exactly what went where.",
  },
];

export const channels = [
  { name: "Instagram", note: "Feed posts and reels" },
  { name: "Facebook", note: "Pages and reels" },
  { name: "LinkedIn", note: "Company and personal" },
  { name: "TikTok", note: "Short-form video" },
];

export const guardrails = [
  {
    title: "Your figures are the only figures",
    description:
      "Nothing downstream may invent a price, a date, a discount or a percentage you did not type. If you did not supply it, it does not appear in the post.",
  },
  {
    title: "Approved words are spoken verbatim",
    description:
      "The draft caption or script is a starting point. Whatever you approve is exactly what gets published, or exactly what comes out of the avatar's mouth. Unchanged.",
  },
  {
    title: "Nothing is posted twice",
    description:
      "A publish is never silently retried. A second tap on approve cannot double-post: the first tap claims the job and the second finds it already claimed.",
  },
  {
    title: "Photos are screened before they air",
    description:
      "Screenshots, documents and unusable frames are dropped rather than published, so a stray photo in the roll never becomes a post.",
  },
  {
    title: "One business, one voice",
    description:
      "The video avatar's look can change between takes. The cloned voice never does. It belongs to your chosen person at your business, with your consent.",
  },
  {
    title: "There is no regenerate button",
    description:
      "Every regenerate is another paid render, and people tap it reflexively. Change the words before you approve them, where changes are free.",
  },
];

export const postTypes = [
  {
    tag: "01 · Story",
    title: "Customer or job story",
    description:
      "The job you just finished, the customer you just looked after. You give the details and up to your real photos.",
  },
  {
    tag: "02 · Talk",
    title: "Straight to camera",
    description:
      "A promotion, an update, an opinion. You supply the script, your chosen avatar delivers it, and it posts.",
  },
  {
    tag: "03 · Image",
    title: "Single image post",
    description:
      "One photo, no video. The caption is written for you from the picture and your brand brief.",
  },
];
