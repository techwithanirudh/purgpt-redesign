import { useRouter } from "next/router";
import type { DocsThemeConfig } from "nextra-theme-docs";
import { useConfig } from "nextra-theme-docs";

const logo = (
  <span className="flex font-bold py-4 items-center">
    <img src="/purgpt-logo-no-bg.png" />
    <h1 className="text-3xl ml-2">PurGPT</h1>
    <style jsx>{`
      span {
        mask-image: linear-gradient(
          60deg,
          black 25%,
          rgba(0, 0, 0, 0.2) 50%,
          black 75%
        );
        mask-size: 400%;
        mask-position: 0%;
        --tw-space-x-reverse: 0;
      }

      img {
        width: 45px;
        border-radius: 50%;
      }

      span:hover {
        mask-position: 100%;
        transition: mask-position 0.5s ease, -webkit-mask-position 0.5s ease;
      }
    `}</style>
  </span>
);

const config: DocsThemeConfig = {
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath != "/") {
      return {
        titleTemplate: "%s – PurGPT",
      };
    }
  },
  logo,
  head: function useHead() {
    const { title } = useConfig();
    const { route } = useRouter();
    const socialCard = "/purgpt-social-card.png";

    return (
      <>
        <meta name="msapplication-TileColor" content="#7e22ce" />
        <meta name="theme-color" content="#7e22ce" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="Unleashing the Power of Free AI Innovation"
        />
        <meta
          name="og:description"
          content="Unleashing the Power of Free AI Innovation"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="purgpt.xyz" />
        <meta name="twitter:url" content="https://purgpt.xyz" />
        <meta
          name="og:title"
          content={title ? title : "PurGPT"}
        />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="PurGPT" />
        <link rel="icon" href="/purgpt-logo-no-bg.png" type="image/png" />
      </>
    );
  },
  banner: {
    key: "New website release!",
    text: (
      <a href="https://discord.gg/9PU85As8Pd" target="_blank" rel="noreferrer">
        🎉 New website release! Review on the Discord →
      </a>
    ),
  },
  docsRepositoryBase: "https://github.com/Sidd-underscore/purgpt-redesign/tree/main",
  feedback: {
    content: "Question? Give us feedback →",
    labels: "feedback docs",
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === "separator") {
        return <span className="cursor-default">{title}</span>;
      }
      return <>{title}</>;
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  primaryHue: 310,
  project: {
    link: "https://github.com/Sidd-underscore/purgpt-redesign",
  },
  chat: {
    link: "https://discord.gg/9PU85As8Pd",
  },
  footer: {
    text: (
      <div className="w-full">
        <p className="mt-4 text-xs text-center">
          © {new Date().getFullYear()} TayM. Solutions | Service by NotFound (@notfound.sh)
          <br className="mt-2"/>
          Website designed by{" "}
          <a
            href="https://sidd.is-a.dev"
            className="underline hover:no-underline"
            target="_blank"
            rel="noreferrer"
          >
            Sidd_
          </a>
        </p>
      </div>
    ),
  },
};

export default config;
