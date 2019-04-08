const users = [{
  caption: 'User1',
  image: '/img/wpforms-brands.svg',
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
    doc: 'quick-start',
    label: 'Getting Started',
  }, {
    doc: 'input',
    label: 'Docs',
  }],
  users,
  headerIcon: 'img/wpforms-brands.svg',
  footerIcon: 'img/wpforms-brands.svg',
  favicon: 'img/wpforms-brands.png',
  colors: {
    primaryColor: '#cc0000',
    secondaryColor: '#205C3B',
  },
  copyright: `Copyright © ${new Date().getFullYear()} Envisio Solution Inc`,
  highlight: { theme: 'default' },
  scripts: ['https://buttons.github.io/buttons.js'],
  onPageNav: 'separate',
  cleanUrl: true,
  ogImage: 'img/wpforms-brands.png',
  twitterImage: 'img/wpforms-brands.png',
};

module.exports = siteConfig;
