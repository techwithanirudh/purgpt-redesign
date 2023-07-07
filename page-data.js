import Advanced from "./components/features/Advanced";
import Intergration from "./components/features/Intergration.mdx";
import Flexible from "./components/features/Flexible";
import Uptime from "./components/features/Uptime";

export const features = [
  {
    title: "Advanced AI, For Free",
    description: "Access the AI power of OpenAI, You.com and Bing for free with our API",
    gridSpan: 1,
    graphic: <Advanced />
},
  {
    title: "Easy Integration",
    description: "Integrate PurGPT seamlessly into your applications",
    gridSpan: 2,
    graphic: <Intergration />
  },
  {
    title: "Flexible Usage",
    description: "Generate text based on your specific needs",
    gridSpan: 2,
    graphic: <Flexible />
  },
  {
    title: "Uptime",
    description: "Your AI, always there for you",
    gridSpan: 1,
    graphic: <Uptime />,
  },
];
