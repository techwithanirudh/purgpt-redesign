import Advanced from "./components/features/Advanced";
import Intergration from "./components/features/Intergration.mdx";
import Uptime from "./components/features/Uptime";
import dynamic from "next/dynamic";

const Flexible = dynamic(() => import("./components/features/Flexible"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

export const features = [
  {
    title: "Advanced AI, For Free",
    description:
      "Access the AI power of OpenAI, You.com and Bing for free with our API",
    gridSpan: 1,
    graphic: <Advanced />,
  },
  {
    title: "Easy Integration",
    description: "Integrate PurGPT seamlessly into your applications",
    gridSpan: 2,
    graphic: <Intergration />,
  },
  {
    title: "Flexible Usage",
    description: "Generate text based on your specific needs",
    gridSpan: 2,
    graphic: <Flexible />,
  },
  {
    title: "Uptime",
    description: "Your AI, always there for you",
    gridSpan: 1,
    graphic: <Uptime />,
  },
];

export const donatorPlans = [
  {
    name: "Tier 0",
    cost_eur: "€0",
    benefits: [
      "2k daily Requests",
      "Access to normal Discord channel",
      "10 Requests/10 seconds",
    ],
    tier_int: 0,
  },
  {
    name: "Tier 1",
    cost_eur: "€5",
    benefits: [
      "4k daily Requests",
      "Access to exclusive Discord channel",
      "10 Requests/10 seconds",
      "Prioritized support",
      "Exclusive features",
      "VIP Treatment",
    ],
    tier_int: 1,
  },
  {
    name: "Tier 2",
    cost_eur: "€7",
    benefits: [
      "9k daily Requests",
      "Access to exclusive Discord channel",
      "10 Requests/10 seconds",
      "Prioritized support",
      "Exclusive features",
      "VIP Treatment",
    ],
    tier_int: 2,
  },
  {
    name: "Tier 3",
    cost_eur: "€10",
    benefits: [
      "13k daily Requests",
      "Access to exclusive Discord channel",
      "10 Requests/10 seconds",
      "Prioritized support",
      "Exclusive features",
      "VIP Treatment",
    ],
    tier_int: 3,
  },
  {
    name: "Tier 4",
    cost_eur: "€15",
    benefits: [
      "20k daily Requests",
      "Access to exclusive Discord channel",
      "10 Requests/10 seconds",
      "Prioritized support",
      "Exclusive features",
      "VIP Treatment",
    ],
    tier_int: 4,
  },
];
