import Technologies from '../constants/technologies';

export type Project = {
  client: string;
  name: string;
  keyTechnology: string;
  date: string;
  shortDate: string;
  slug: string;
  url: string;
  images?: Array<{
    src: string;
    thumbnailSrc: string;
  }>;
  imagePreviewSrc?: string;
  overview: string;
  keyPoints: string[];
  keyLearnings: string[];
  technologies: Technologies[];
};

type Projects = {
  [x: string]: Project;
};

const PROJECTS: Projects = {
  MB_VIDEOGRAPHY: {
    client: 'MB Videography',
    name: 'New Website',
    keyTechnology: 'Next.js',
    date: 'December 2020',
    shortDate: 'Dec 2020',
    slug: '/projects/mb-videography',
    url: 'https://mb-videography.vercel.app',
    overview:
      'A simple, static site built with Next.js and Styled Components.\n\nCheck it out via the link above.',
    keyPoints: [],
    keyLearnings: ['More Styled Components practice'],
    technologies: [Technologies.TypeScript, Technologies.NextJS],
  },
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
    keyTechnology: 'WordPress',
    date: 'November 2020',
    shortDate: 'Nov 2020',
    slug: '/projects/shaba-website',
    url: 'https://shaba.eu',
    overview:
      'SH&BA (Smart Home & Buildings Association) wanted a fresh website going into 2021.\n\nCheck it out via the link above.',
    keyPoints: [
      'Built a bespoke WP theme with minimal use of plugins',
      'Utilized modern WP development technologies such as Roots.io and Webpack',
      `Website designed in Figma`,
    ],
    keyLearnings: [`Yep, working with WordPress isn't fun in 2020`],
    technologies: [
      Technologies.PHP,
      Technologies.Sass,
      Technologies.JavaScript,
      Technologies.WordPress,
    ],
    images: [
      {
        thumbnailSrc: '/images/project-preview/shaba-new-website-thumbnail.jpg',
        src: '/images/project-preview/shaba-new-website.png',
      },
    ],
  },
  // KNOX_CAP_QUIZ: {
  //   client: 'Knox Pharmaceuticals',
  //   name: 'The CAP2020 Online Quiz',
  //   date: 'August 2020',
  //   shortDate: 'Aug 2020',
  //   slug: '/projects/knox-cap-2020-quiz',
  //   url: 'https://pharmaknoxquiz.web.app',
  //   overview:
  //     'Knox Pharmaceuticals were looking to add some spice to their online virtual conference by offering a chance to win in-store vouchers via their online quiz. The buzz-feed styled quiz consitsted of 5 rounds, each lasting 30 seconds.\n\nI was responsible for designing and building the quiz. The game logic was abstracted from the UI, which allowed easy customisation of rules (such as points per answer and time constraints), modifying questions etc.\n\nOver 150 people had played the quiz by the end of the conference.',
  //   keyPoints: [
  //     'Built an interactive quiz with TypeScript and React.js (utilising Material-UI design framework)',
  //     `Key features: scoring system, player leaderboards and easily customisable game engine`,
  //     'Worked with Firebase (a flexible, NoSQL database hosted on Google Cloud Platform) ',
  //   ],
  //   keyLearnings: ['Establish knowledge working with TypeScript'],
  //   technologies: [
  //     Technologies.TypeScript,
  //     Technologies.React,
  //     Technologies.Firebase,
  //   ],
  // },
  // CLEAR_H2O_BOOKING: {
  //   client: 'Clear H2O Window Cleaning Ltd',
  //   name: 'Online Booking Form',
  //   date: 'December 2019',
  //   shortDate: 'Dec 2019',
  //   slug: '/projects/clear-h2o-booking-form',
  //   url: 'https://book-clear-h2o.web.app',
  //   overview:
  //     'Clear H2O Window Cleaning Ltd approached me with an idea: they wanted a simple, online booking form so customers could book their services without phone interaction.\n\nAs a result, I designed and a built an online booking system, with automated emails, as well as an admin dashboard for Clear H2O to manage their bookings.',
  //   keyPoints: [
  //     'Designed and built an online booking form (utilising Ant Design UI framework)',
  //     'Key features: dynamic form steps, email notifications, admin dashboard for diary and booking management',
  //     'JAMStack, serverless architecture, utilising cloud services such as AWS Lambda and Firebase',
  //   ],
  //   keyLearnings: [
  //     'First project working with Ant Design',
  //     'Establish knoweldge creating Lamba functions',
  //   ],
  //   technologies: [
  //     Technologies.JavaScript,
  //     Technologies.React,
  //     Technologies.Node,
  //     Technologies.Firebase,
  //     Technologies.Stripe,
  //     Technologies.AWS,
  //   ],
  // },
  CLEAR_H2O_WEBSITE: {
    client: 'Clear H2O Window Cleaning Ltd',
    name: 'New Website',
    keyTechnology: 'Gatsby.js',
    date: 'November 2019',
    shortDate: 'Nov 2019',
    slug: '/projects/clear-h2o-wesbite',
    url: 'https://clearh2owindowcleaning.co.uk',
    overview:
      'Designed and built a new website for Clear H2O in Gatsby.js.\n\nCheck it out via the link above.',
    keyPoints: [
      'Website copy was hosted in a Google Sheet and pulled-in during the build step of deployment',
      'Designed in Figma',
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
    images: [
      {
        thumbnailSrc:
          '/images/project-preview/clear-h2o-new-website-thumbnail.jpg',
        src: '/images/project-preview/clear-h2o-new-website.png',
      },
    ],
  },
};

export const PROJECTS_LIST = Object.values(PROJECTS).map((project) => project);

export default PROJECTS;
