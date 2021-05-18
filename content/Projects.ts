import Technologies from '../constants/technologies';

export type Project = {
  client: string;
  name: string;
  date: string;
  shortDate: string;
  slug: string;
  url: string;
  overview: string;
  keyPoints: string[];
  keyLearnings: string[];
  technologies: Technologies[];
};

type Projects = {
  [x: string]: Project;
};

const PROJECTS: Projects = {
  // PORTFOLIO_WEBSITE: {
  //   client: 'Personal Project',
  //   name: 'My Portfolio Website V2',
  //   date: 'May 2021',
  //   shortDate: 'May 2021',
  //   slug: '/projects/portfolio-v2',
  //   url: 'https://jake-brown.co.uk',
  //   overview: 'Wanted to play around with styled-components. I like it!',
  //   keyPoints: ['Build over a weekend'],
  //   keyLearnings: [`First project with styled-components`],
  //   technologies: [Technologies.TypeScript, Technologies.NextJS],
  // },
  SHABA_WEBSITE: {
    client: 'SH&BA',
    name: 'New Website',
    date: 'November 2020',
    shortDate: 'Nov 2020',
    slug: '/projects/shaba-website',
    url: 'https://shaba.eu',
    overview:
      'SH&BA (Smart Home & Buildings Association) were looking to launch a new website for 2021.\n\nSo, I designed and built them one. Check it out via the link above.',
    keyPoints: [
      `Designed SH&BA's new website with Figma (an awesome design tool)`,
      'Built a bespoke WordPress theme, with minimal use of plugins',
      'Utilised modern WordPress development technologies such as Roots.io and Webpack',
    ],
    keyLearnings: [`Yep, working with WordPress isn't fun in 2020`],
    technologies: [
      Technologies.PHP,
      Technologies.Sass,
      Technologies.JavaScript,
      Technologies.WordPress,
    ],
  },
  KNOX_CAP_QUIZ: {
    client: 'Knox Pharmaceuticals',
    name: 'The CAP2020 Online Quiz',
    date: 'August 2020',
    shortDate: 'Aug 2020',
    slug: '/projects/knox-cap-2020-quiz',
    url: 'https://pharmaknoxquiz.web.app',
    overview:
      'Knox Pharmaceuticals were looking to add some spice to their online virtual conference by offering a chance to win in-store vouchers via their online quiz. The buzz-feed styled quiz consitsted of 5 rounds, each lasting 30 seconds.\n\nI was responsible for designing and building the quiz. The game logic was abstracted from the UI, which allowed easy customisation of rules (such as points per answer and time constraints), modifying questions etc.\n\nOver 150 people had played the quiz by the end of the conference.',
    keyPoints: [
      'Built an interactive quiz with TypeScript and React.js (utilising Material-UI design framework)',
      `Key features: scoring system, player leaderboards and easily customisable game engine`,
      'Worked with Firebase (a flexible, NoSQL database hosted on Google Cloud Platform) ',
    ],
    keyLearnings: ['Establish knowledge working with TypeScript'],
    technologies: [
      Technologies.TypeScript,
      Technologies.React,
      Technologies.Firebase,
    ],
  },
  CLEAR_H2O_BOOKING: {
    client: 'Clear H2O Window Cleaning Ltd',
    name: 'Online Booking Form',
    date: 'December 2019',
    shortDate: 'Dec 2019',
    slug: '/projects/clear-h2o-booking-form',
    url: 'book-clear-h2o.web.app',
    overview:
      'Clear H2O Window Cleaning Ltd approached me with an idea: they wanted a simple, online booking form so customers could book their services without phone interaction.\n\nAs a result, I designed and a built an online booking system, with automated emails, as well as an admin dashboard for Clear H2O to manage their bookings.',
    keyPoints: [
      'Designed and built an online booking form (utilising Ant Design UI framework)',
      'Key features: dynamic form steps, email notifications, admin dashboard for diary and booking management',
      'JAMStack, serverless architecture, utilising cloud services such as AWS Lambda and Firebase',
    ],
    keyLearnings: [
      'First project working with Ant Design',
      'Establish knoweldge creating Lamba functions',
    ],
    technologies: [
      Technologies.JavaScript,
      Technologies.React,
      Technologies.Node,
      Technologies.Firebase,
      Technologies.Stripe,
      Technologies.AWS,
    ],
  },
  CLEAR_H2O_WEBSITE: {
    client: 'Clear H2O Window Cleaning Ltd',
    name: 'New Website',
    date: 'November 2019',
    shortDate: 'Nov 2019',
    slug: '/projects/clear-h2o-wesbite',
    url: 'https://clearh2owindowcleaning.co.uk',
    overview:
      'With little online presence, Clear H2O Window Cleaning Ltd were looking to get up-to-date with the times and launch a new website which would show of their online booking form.\n\nI designed and built them a website in Gatsby.js, which pulled content from a separate WordPress site - allowing the team at Clear H2O to easily update their website copy.',
    keyPoints: [
      'Designed the new mobile and desktop site with Figma',
      'Built a Gastby.js static site - which pulled website copy from external WordPress website',
    ],
    keyLearnings: [
      'First project working with Gatsby.js',
      'First project working with GraphQL',
    ],
    technologies: [
      Technologies.JavaScript,
      Technologies.Gatsy,
      Technologies.Sass,
      Technologies.WordPress,
      Technologies.GraphQL,
    ],
  },
};

export const PROJECTS_LIST = Object.values(PROJECTS).map((project) => project);

export default PROJECTS;
