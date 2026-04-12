export type ExperienceItem = {
  years: string;
  role: string;
  company: string;
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    years: "2023–now",
    role: "Senior Full-Stack Developer",
    company: "Versa Technologies",
    description:
      "Led UI architecture for a B2B SaaS product serving 80k users. Reduced load time by 40% through code splitting and SSR optimization.",
  },
  {
    years: "2021–2023",
    role: "Full-Stack Developer",
    company: "Brightwave Studio",
    description:
      "Built client websites and web apps end-to-end, from React frontends to Node/Express backends and deployment pipelines.",
  },
  {
    years: "2020–2021",
    role: "Junior Web Developer",
    company: "Pixelcraft Agency",
    description:
      "Developed landing pages, WordPress themes, and maintained client codebases in a fast-paced agency environment.",
  },
];
