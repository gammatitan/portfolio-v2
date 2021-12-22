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
      'Working within the Payments team to enhance the checkout experience on web',
      'TypeScript, React.js, Next.js, Redux, Node, Express',
    ],
  },
  {
    jobTitle: 'Software Engineer',
    company: 'VouchedFor',
    companyUrl: 'https://vouchedfor.co.uk',
    employmentPeriod: 'November 2018 - March 2021',
    responsibilities: [
      'Work closely with stakeholders to implement new features to consumer-facing sites and internal systems',
      'Adopt TDD practices within a fast-paced, agile product team',
      'JavaScript, React.js, PHP, Symfony, Doctrine, MySQL, Docker, AWS',
    ],
  },
  {
    jobTitle: 'Junior Developer',
    company: 'Adapt Digital',
    companyUrl: 'https://adapt.digital',
    employmentPeriod: 'November 2017 - November 2018',
    responsibilities: [
      'Develop bespoke WordPress and Shopify themes for businesses across the UK',
      'Audit and enhance website performance and accessibility',
      'HTML, CSS (SASS), JavaScript, jQuery, PHP',
    ],
  },
];
