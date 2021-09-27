export const SITE = {
  title: "Unofficial packwiz Documentation",
  description: "Your website description.",
  defaultLanguage: "en_US",
};

export const OPEN_GRAPH = {
  image: {
    src: "https://github.com/snowpackjs/astro/blob/main/assets/social/banner.png?raw=true",
    alt:
      "astro logo on a starry expanse of space," +
      " with a purple saturn-like planet floating in the right foreground",
  },
  twitter: "astrodotbuild",
};

export const KNOWN_LANGUAGES = {
  English: "en",
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
// export const GITHUB_EDIT_URL = `https://github.com/snowpackjs/astro/blob/main/docs/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
// export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
// export const ALGOLIA = {
//   indexName: 'XXXXXXXXXX',
//   apiKey: 'XXXXXXXXXX',
// }

export interface SideBarElement {
  text: string;
  link?: string;
  header?: boolean;
}

export const SIDEBAR: { en: SideBarElement[] } = {
  en: [
    { text: "Getting Started", header: true },
    { text: "Quick Start", link: "quick-start" },
    { text: "packwiz", link: "packwiz" },
    { text: "packwiz init", link: "packwiz-init" },

    { text: "Modrinth", header: true },
    { text: "packwiz modrinth", link: "packwiz-modrinth" },
    { text: "packwiz modrinth install", link: "packwiz-modrinth-install" },

    { text: "Curse Forge", header: true },
    { text: "packwiz curseforge", link: "packwiz-curseforge" },
    { text: "packwiz curseforge install", link: "packwiz-curseforge-install" },
    { text: "packwiz curseforge detect", link: "packwiz-curseforge-detect" },
    { text: "packwiz curseforge open", link: "packwiz-curseforge-import" },
    { text: "packwiz curseforge import", link: "packwiz-curseforge-export" },
    { text: "packwiz curseforge export", link: "packwiz-curseforge-export" },

    { text: "Extra Commands", header: true },
    { text: "packwiz update", link: "packwiz-update" },
    { text: "packwiz remove", link: "packwiz-remove" },
    { text: "packwiz refresh", link: "packwiz-refresh" },
    { text: "packwiz serve", link: "packwiz-serve" },

    { text: "Utils", header: true },
    { text: "packwiz utils", link: "packwiz-utils" },
    { text: "packwiz utils completion", link: "packwiz-utils-completion" },
    { text: "packwiz utils markdown", link: "packwiz-utils-markdown" },
  ],
};
