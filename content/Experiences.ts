export type Experience = {
  jobTitle: string;
  company: string;
  companyUrl: string;
  employmentPeriod: string;
  responsibilities: string[];
};

export const EXPERIENCE_LIST: Experience[] = [
  {
    jobTitle: 'Web Engineer',
    company: 'Depop',
    companyUrl: 'https://depop.com',
    employmentPeriod: 'March 2021 - Present',
    responsibilities: [
      'Working within the payments team to enhance the buyers experience on web',
      'TypeScript, Next.js, Redux, Node, Express, Cypress',
    ],
  },
  {
    jobTitle: 'Software Engineer',
    company: 'VouchedFor',
    companyUrl: 'https://vouchedfor.co.uk',
    employmentPeriod: 'November 2018 - March 2021',
    responsibilities: [
      'Working with project managers to implement new features to consumer-facing sites and internal systems, building both front end and back end architecture',
      'JavaScript, React.js, PHP, Symfony, Doctrine, MySQL, Docker, AWS',
    ],
  },
  {
    jobTitle: 'Junior Front End Developer',
    company: 'Adapt Digital',
    companyUrl: 'https://adapt.digital',
    employmentPeriod: 'November 2017 - November 2018',
    responsibilities: [
      'Building bespoke WordPress & Shopify themes for a range of businesses across the UK',
      'HTML, CSS (SASS), JavaScript, jQuery, PHP',
    ],
  },
];
