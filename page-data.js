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

export const awesomePeople = [
  {
    name: "Tay",
    pronouns: "they/them",
    avatar: "/about/the-team/tay.png",
    description: "Project Lead/Founder",
    socials: [
      {
        name: "GitHub",
        identifier: "tayron1",
        icon: "/about/the-team/github.svg",
        link: "https://github.com/tayron1",
      },
      {
        name: "Instagram",
        identifier: "notfoundsh531",
        icon: "/about/the-team/insta.svg",
        link: "https://www.instagram.com/notfoundsh531",
      },
      {
        name: "Spotify",
        identifier: "Tayron",
        icon: "/about/the-team/spotify.svg",
        link: "https://open.spotify.com/user/idrijanyc",
      },
    ],
  },
  {
    name: "Mozza",
    pronouns: "he/him",
    avatar: "/about/the-team/mozza.png",
    banner: "/about/the-team/mozza-banner.png",
    description: "Developer/Admin/God",
    socials: null,
  },
  {
    name: "SpaceDev",
    pronouns: "Any :)",
    avatar: "/about/the-team/spacedev.png",
    banner: "/about/the-team/spacedev-banner.png",
    description: "Developer/Admin/Exists",
    socials: [
      {
        name: "GitHub",
        identifier: "thespacedev",
        icon: "/about/the-team/github.svg",
        link: "https://github.com/thespacedev",
      },
    ],
  },
  {
    name: "Tolgchu",
    pronouns: "he/cat",
    avatar: "/about/the-team/tolgchu.png",
    banner: "/about/the-team/tolgchu-banner.gif",
    description: "Co Owner/Developer/Local Cat",
    sponsor: "https://github.com/sponsors/Tolga1452?frequency=recurring",
    socials: [
      {
        name: "GitHub",
        identifier: "Tolga1452",
        icon: "/about/the-team/github.svg",
        link: "https://github.com/Tolga1452",
      },
      {
        name: "Reddit",
        identifier: "Tolgchu",
        icon: "/about/the-team/reddit.svg",
        link: "https://www.reddit.com/u/Tolgchu",
      },
      {
        name: "Spotify",
        identifier: "✨Tolgchu✨",
        icon: "/about/the-team/spotify.svg",
        link: "https://open.spotify.com/user/31eejvbgzd2td5cxvxwglws2il6m",
      },
      {
        name: "Twitter",
        identifier: "Tolgchu",
        icon: "/about/the-team/twitter.svg",
        link: "https://twitter.com/Tolgchu",
      },
      {
        name: "Twitter",
        identifier: "discordexphub",
        icon: "/about/the-team/twitter.svg",
        link: "https://twitter.com/discordexphub",
      },
      {
        name: "YouTube",
        identifier: "✨Tolgchu✨",
        icon: "/about/the-team/youtube.svg",
        link: "https://www.youtube.com/channel/UCnG9fe6RdQSIvO98475CNOw",
      },
    ],
  },
  {
    name: "Oliver",
    pronouns: "he/him/it/its",
    avatar: "/about/the-team/oliver.png",
    banner: null,
    description: "Comedic Relief",
    socials: [
      {
        name: "Spotify",
        identifier: "Andy",
        icon: "/about/the-team/spotify.svg",
        link: "https://open.spotify.com/user/7hhedgzwofpf53f2e6ncsgblg",
      },
      {
        name: "Instagram",
        identifier: "oliver___online",
        icon: "/about/the-team/insta.svg",
        link: "https://www.instagram.com/oliver___online",
      },
    ],
  },
  {
    name: "Sidd_",
    pronouns: "she/he/they",
    avatar: "/about/the-team/look-its-the-incredible-sidd!.png",
    banner: null,
    description: "Developer/Fullstack",
    socials: [
      {
        name: "GitHub",
        identifier: "Sidd-underscore",
        icon: "/about/the-team/github.svg",
        link: "https://github.com/Sidd-underscore",
      },
      {
        name: "YouTube",
        identifier: "Sidd_",
        icon: "/about/the-team/youtube.svg",
        link: "https://www.youtube.com/channel/UCCciO19Sm1Vc88geV4d4YKg",
      },
      {
        name: "Twitter",
        identifier: "sidd_underscore",
        icon: "/about/the-team/twitter.svg",
        link: "https://twitter.com/sidd_underscore",
      },
    ],
  },
];

export const framerAnimations = {
  theTeam: {
    container: {
      hidden: { opacity: 1, scale: 0 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          delayChildren: 0.3,
          staggerChildren: 0.2,
        },
      },
    },

    item: {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
      },
    },
  },
};

export const featureCategories = {
  general: {
    color: "text-gray-400",
    border: "border-gray-400",
    text: "General",
    link: "/docs",
  },
  documentAnalysis: {
    color: "text-fuchsia-500",
    border: "border-fuchsia-400",
    text: "Document Analysis",
    link: "/docs/document-analysis",
  },
  completions: {
    color: "text-indigo-500",
    border: "border-indigo-400",
    text: "Completions",
    link: "/docs/completions",
  },
  chatCompletions: {
    color: "text-violet-500",
    border: "border-violet-400",
    text: "Chat Completions",
    link: "/docs/chat-completions",
  },
  imageGen: {
    color: "text-pink-500",
    border: "border-pink-400",
    text: "Image Generation",
    link: "/docs/image-generation",
  },
};
