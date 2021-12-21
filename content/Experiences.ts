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
      'Working with TypeScript, React.js, Next.js, Redux, Node, Express',
    ],
  },
  {
    jobTitle: 'Software Engineer',
    company: 'VouchedFor',
    companyUrl: 'https://vouchedfor.co.uk',
    employmentPeriod: 'November 2018 - March 2021',
    responsibilities: [
      'Work closely with project managers and stakeholders to enhance and implement new features to consumer-facing sites and internal systems.',
      'Utilise a variety of different languages, frameworks and libraries such as JavaScript, React.js, PHP, Symfony 4, Doctrine, MySQL.',
      'Adopt TDD practices within a fast-paced, agile product team.',
      'Maintain and scale various microservices via Docker and AWS.',
    ],
  },
  {
    jobTitle: 'Junior Developer',
    company: 'Adapt Digital',
    companyUrl: 'https://adapt.digital',
    employmentPeriod: 'November 2017 - November 2018',
    responsibilities: [
      'Develop bespoke WordPress and Shopify themes from approved design specs.',
      'Lead core aspects of the project lifecycle including build, manual testing and deployment.',
      'Audit and enhance website performance and accessibility.',
    ],
  },
];
