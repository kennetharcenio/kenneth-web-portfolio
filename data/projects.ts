export type TagVariant = 'default' | 'green' | 'amber';

export interface ProjectTag {
  label: string;
  variant: TagVariant;
}

export interface Project {
  title: string;
  description: string;
  emoji: string;
  gradient: string;
  tags: ProjectTag[];
}

export const projects: Project[] = [
  {
    title: 'Customer Data Dashboards',
    description:
      'Maintained and enhanced production ASP.NET MVC web applications powering customer-facing data dashboards for a US client, with AI-assisted refactoring and performance tuning of C# backend services.',
    emoji: '📊',
    gradient: 'linear-gradient(135deg,#1a1426,#2d1b33)',
    tags: [
      { label: '.NET MVC', variant: 'default' },
      { label: 'C#', variant: 'default' },
      { label: 'Claude Code', variant: 'amber' },
    ],
  },
  {
    title: 'Loyalty Booking Platform',
    description:
      'Built and maintained loyalty-points booking platforms for hotels, flights, and cars serving multiple international clients, on a microservices architecture with an Angular frontend.',
    emoji: '✈',
    gradient: 'linear-gradient(135deg,#0a1628,#1a2744)',
    tags: [
      { label: 'Angular', variant: 'default' },
      { label: 'Microservices', variant: 'green' },
      { label: 'REST APIs', variant: 'default' },
    ],
  },
  {
    title: 'AI-Assisted Data Workflows',
    description:
      'Architected automated data processing workflows to integrate web-mined data, using sub-agent orchestration and n8n to speed up delivery and reduce manual ops work.',
    emoji: '🤖',
    gradient: 'linear-gradient(135deg,#1a260a,#1e3a1e)',
    tags: [
      { label: 'n8n', variant: 'green' },
      { label: 'Sub-Agents', variant: 'amber' },
      { label: 'Automation', variant: 'default' },
    ],
  },
  {
    title: 'Legacy Desktop-to-Web Migration',
    description:
      'Migrated a legacy desktop application to a modern web app with rich reporting features using Active Reports, preserving business logic while modernizing the user experience.',
    emoji: '🖥',
    gradient: 'linear-gradient(135deg,#1a1a2e,#16213e)',
    tags: [
      { label: '.NET', variant: 'default' },
      { label: 'Active Reports', variant: 'amber' },
      { label: 'Web Migration', variant: 'default' },
    ],
  },
  {
    title: 'Microservice Frontend for Insurance',
    description:
      'Led Angular 2 frontend development integrating with multiple REST API microservices, and contributed to backend API development within the microservice architecture.',
    emoji: '🧩',
    gradient: 'linear-gradient(135deg,#26140a,#3a1e1e)',
    tags: [
      { label: 'Angular 2', variant: 'default' },
      { label: 'REST APIs', variant: 'green' },
      { label: 'Microservices', variant: 'default' },
    ],
  },
  {
    title: 'Telecom Social Integrations',
    description:
      'Developed web applications integrating Facebook and Twitter APIs for a major telecom client, delivering campaign and engagement features on tight release cycles.',
    emoji: '📱',
    gradient: 'linear-gradient(135deg,#0a1e26,#12304a)',
    tags: [
      { label: 'Social APIs', variant: 'default' },
      { label: 'Web Apps', variant: 'default' },
      { label: 'Telecom', variant: 'amber' },
    ],
  },
];
