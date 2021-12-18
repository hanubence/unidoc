export const SITE = {
  title: 'Óbudai egyetem - Jegyzeteim',
  description: 'Markdown jegyzetek',
  defaultLanguage: 'HU',
};

export const OPEN_GRAPH = {
  image: {
    src: 'https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true',
    alt: 'astro logo on a starry expanse of space,' + ' with a purple saturn-like planet floating in the right foreground',
  },
  twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
  Hungarian: 'hu',
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
// export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/blob/main/docs/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
// export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
// export const ALGOLIA = {
//   indexName: 'XXXXXXXXXX',
//   apiKey: 'XXXXXXXXXX',
// }

export const SIDEBAR = {
  hu: [
    { text: '', header: true },
    { text: 'DiMat I.', header: true },
    { text: 'Rekurzió és teljes indukció', link: 'hu/rekurzio' },
    { text: 'Vektor- és koord. geometria I.', link: 'hu/vektorok1' },
    { text: 'Vektor- és koord. geometria II.', link: 'hu/vektorok2' },
  ],
};
