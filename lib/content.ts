// Single source of truth for portfolio content, sourced from Farhat Rahmani's CV.

export const profile = {
  name: "Farhat Rahmani",
  role: "Sr. Frontend / Full Stack Developer",
  shortRole: "Full Stack Developer / AI Engineer",
  tagline:
    "10+ years building scalable web applications across React/Next.js, TypeScript, Clojure, and PHP stacks — from enterprise healthcare platforms to cultural heritage systems.",
 // location: "Doha, Qatar",
  email: "farhat.rahmanikhan@gmail.com",
  phones: ["+974-33982793", "+91-8527672070"],
  avatarInitials: "FR",
  socials: {
    github: "",
    linkedin: "",
    twitter: "",
  },
};

export const about = {
  paragraphs: [
    "I'm a results-driven Senior Full Stack Developer / AI Engineer with 10+ years of hands-on experience building scalable web applications across diverse technology stacks. I specialize in React/Next.js, TypeScript, Drupal, Clojure/ClojureScript (Reagent/Re-frame), and PHP frameworks (Laravel).",
    "I've led engineering teams and delivered end-to-end solutions for enterprise clients across healthcare, e-commerce, and cultural sectors — working with Agile/SDLC methodologies, CI/CD pipelines, cloud platforms (Azure, Heroku), and AI API integrations (OpenAI, Cloudflare).",
  ],
  highlights: [
    { label: "Years experience", value: "10+" },
    { label: "Companies", value: "7" },
  ],
};

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Frontend Development",
    items: [
      "React / Next.js",
      "Redux",
      "React Hooks",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "jQuery",
      "Material UI",
      "Reagent",
    ],
  },
  {
    category: "Backend Development",
    items: [
      "Python",
      "Clojure",
      "PHP",
      "Laravel",
      "CodeIgniter",
      "Drupal",
      "Node.js",
      "FastAPI",
      "GraphQL (Apollo Client, Hasura)",
      "REST APIs",
    ],
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB", "Postgres", "SQL Server"],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "Microsoft Azure",
      "Docker",
      "Heroku",
      "Git",
      "GitHub",
      "CI/CD pipelines",
      "Linux",
    ],
  },
  {
    category: "API & Integrations",
    items: [
      "OpenAI API",
      "Cloudflare AI",
      "WooCommerce",
      "Shopify",
      "Magento",
      "Facebook / Google / LinkedIn / Twitter OAuth",
    ],
  },
  {
    category: "Testing & QA",
    items: [
      "Jest",
      "Playwright",
      "SDLC",
      "STLC",
      "Test Planning",
      "Test Design",
      "Defect Tracking",
    ],
  },
];

export const projects: {
  title: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
}[] = [
  {
    title: "Qatar Museums Digital Platforms",
    company: "Qatar Museums (via SquareOne)",
    period: "Apr 2025 — Present",
    description:
      "Full-stack development for cultural and heritage digital platforms, building responsive, accessible UIs and RESTful/GraphQL API services that integrate third-party data sources.",
    tech: ["React", "Next.js", "GraphQL", "REST APIs"],
  },
  {
    title: "Project Symplr — Healthcare Ops Platform",
    company: "Tata Elxsi",
    period: "Sep 2021 — Sep 2023",
    description:
      "Tech Lead on a leading enterprise healthcare operations platform deployed in 9 of 10 U.S. hospitals. Built functional components and backend API services, and translated complex healthcare workflows into production-ready features.",
    tech: ["Clojure", "Reagent", "Re-frame", "Azure DevOps"],
  },
  {
    title: "Kissinger Solutions — ERP Platform",
    company: "Coding Brains Pvt. Ltd.",
    period: "Sep 2019 — Sep 2021",
    description:
      "Developed and maintained modules for an integrated ERP platform serving SMBs, with GraphQL queries via Apollo Client and Hasura for efficient data fetching and caching.",
    tech: ["React", "TypeScript", "GraphQL", "Playwright"],
  },
  {
    title: "AI-Powered Client Products",
    company: "Optimal Virtual Employee",
    period: "Aug 2023 — Apr 2024",
    description:
      "Led architecture and delivery of React.js SPAs with Redux state management, integrating OpenAI and Cloudflare AI APIs to add intelligent, AI-powered features to client products.",
    tech: ["React", "Redux", "OpenAI API", "Cloudflare AI"],
  },
];

export const experience: {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}[] = [
  {
    role: "Full Stack Engineer",
    company: "Qatar Museums (via SquareOne)",
    period: "Apr 2025 — Present",
    bullets: [
      "Lead full-stack development for cultural and heritage digital platforms, collaborating with cross-functional teams to deliver responsive, accessible UIs.",
      "Develop and maintain RESTful and GraphQL API services; integrate third-party data sources.",
      "Champion code quality through peer reviews, automated testing (Jest, Playwright), and CI/CD best practices.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Infogain (via Esquare)",
    period: "Aug 2024 — Apr 2025",
    bullets: [
      "Contributed to enterprise-grade software solutions within an Agile squad, delivering features on schedule across multiple concurrent workstreams.",
      "Wrote comprehensive unit and integration tests, reducing production defect rate.",
      "Participated actively in sprint planning, retrospectives, and cross-team technical reviews.",
    ],
  },
  {
    role: "React Developer / Lead Engineer",
    company: "Optimal Virtual Employee",
    period: "Aug 2023 — Apr 2024",
    bullets: [
      "Served as Lead Engineer, guiding a team of developers on architecture decisions and delivery timelines for client projects.",
      "Delivered React.js SPAs with Redux state management and RESTful API integration.",
      "Integrated OpenAI and Cloudflare AI APIs to add intelligent, AI-powered features to client products.",
      "Mentored junior engineers through code reviews and pair programming sessions.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Tata Elxsi — Project: Symplr",
    period: "Sep 2021 — Sep 2023",
    bullets: [
      "Tech Lead on Project Symplr — a leading enterprise healthcare operations platform deployed in 9 of 10 U.S. hospitals.",
      "Developed functional components and backend API services using Clojure and Reagent/Re-frame framework.",
      "Implemented CI/CD pipelines (Azure DevOps) and event-driven architectures with Re-frame subscriptions.",
      "Collaborated with U.S.-based stakeholders to translate complex healthcare workflow requirements into production-ready features.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Coding Brains Pvt. Ltd. — Project: Kissinger Solutions (ERP)",
    period: "Sep 2019 — Sep 2021",
    bullets: [
      "Developed and maintained modules for an integrated ERP platform serving SMBs, built with React.js, TypeScript, and GraphQL.",
      "Wrote GraphQL queries with Apollo Client and Hasura for efficient data fetching and caching.",
      "Authored automated tests using Jest and Playwright; enforced coding standards through reviews.",
    ],
  },
  {
    role: "Software Developer",
    company: "Haxtax India — Project: Billing application, Fastco",
    period: "May 2016 — Jun 2019",
    bullets: [
      "Built and maintained a Laravel + React.js application, delivering features from requirements through deployment.",
      "Integrated multiple courier and shipment APIs (WooCommerce, Shopify, Zajil, Magento) and social login providers (Facebook, Google, LinkedIn).",
      "Authored MySQL stored procedures and optimized database queries for performance.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Unyscape Infocom — Project: IEC College Website",
    period: "Jan 2014 — Sep 2015",
    bullets: [
      "Developed dynamic, CMS-driven websites using WordPress, PHP, HTML, CSS, and jQuery.",
      "Built and customized WordPress plugins for IEC College's institutional website.",
      "Delivered client requirements on schedule under the guidance of senior engineers.",
    ],
  },
];

export const education: {
  degree: string;
  school: string;
  period?: string;
}[] = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Jamia Hamdard University, New Delhi",
  },
  {
    degree: "12th Standard",
    school: "Board of High School & Intermediate Education, Allahabad, U.P.",
  },
  {
    degree: "10th Standard",
    school: "Board of High School & Intermediate Education, Allahabad, U.P.",
  },
];
