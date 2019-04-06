const users = [{
  caption: 'User1',
  image: '/img/docusaurus.svg',
  infoLink: 'https://www.facebook.com',
  pinned: true,
}];

const siteConfig = {
  title: 'react-apollo-forms',
  tagline: 'A Component Collection for Apollo Mutation',
  url: 'https://envisio.github.io/react-apollo-forms/',
  baseUrl: '/react-apollo-forms/',
  projectName: 'react-apollo-forms',
  organizationName: 'Envisio',
  headerLinks: [{
    doc: 'getting-started',
    label: 'Getting Started',
  }, {
    doc: 'input',
    label: 'Docs',
  }],
  users,
  headerIcon: 'img/docusaurus.svg',
  footerIcon: 'img/docusaurus.svg',
  favicon: 'img/favicon.png',
  colors: {
    primaryColor: '#2E8555',
    secondaryColor: '#205C3B',
  },
  copyright: `Copyright © ${new Date().getFullYear()} Envisio Solution Inc`,
  highlight: { theme: 'default' },
  scripts: ['https://buttons.github.io/buttons.js'],
  onPageNav: 'separate',
  cleanUrl: true,
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',
};

module.exports = siteConfig;
