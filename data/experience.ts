export type ExperienceItem = {
  years: string;
  role: string;
  company: string;
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    years: "2023–now",
    role: ".NET Developer",
    company: "Booth & Partners Philippines (US client, remote)",
    description:
      "Maintain and enhance production MVC web apps powering customer-facing data dashboards for a US client. Integrated Claude Code and Gemini Pro into the workflow to accelerate legacy refactoring, resolve C# performance bottlenecks, and automate web-mined data processing.",
  },
  {
    years: "2019–2023",
    role: "Senior Software Engineer",
    company: "Ascenda Loyalty PTE LTD (Singapore, remote)",
    description:
      "Built and maintained loyalty-points booking platforms (hotels, flights, cars) for international clients on a microservices architecture. Led frontend development, translated designer specs into production UIs, and ran code reviews across teams for 4 years fully remote.",
  },
  {
    years: "2017–2019",
    role: "Senior Developer",
    company: "Petsure Service Inc",
    description:
      "Led Angular 2 frontend development integrating with multiple REST API microservices, and contributed to backend API development within the microservice architecture.",
  },
  {
    years: "2016–2017",
    role: "Developer",
    company: "Tribal Group Plc (UK)",
    description:
      "Migrated a legacy desktop application to a modern web application with rich reporting features built on Active Reports.",
  },
  {
    years: "2014–2016",
    role: "Software Developer",
    company: "Cybersoft Content Service, Inc.",
    description:
      "Designed system architecture and built proof-of-concept solutions for new projects. Led client presentations and sprint demos in an Agile/Scrum team, and automated business processes to improve operational efficiency.",
  },
  {
    years: "2013",
    role: "Software Developer (Contract)",
    company: "Software Laboratory Inc. — Smart Communications",
    description:
      "Developed web applications integrating Facebook and Twitter APIs for a major telecom client.",
  },
];
