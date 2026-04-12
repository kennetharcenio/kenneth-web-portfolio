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
    title: 'ShopFlow',
    description:
      'E-commerce platform with real-time inventory, Stripe payments, and a custom CMS for 12k+ SKUs.',
    emoji: '🛒',
    gradient: 'linear-gradient(135deg,#1a1a2e,#16213e)',
    tags: [
      { label: 'Next.js', variant: 'default' },
      { label: 'Stripe', variant: 'default' },
      { label: 'PostgreSQL', variant: 'green' },
    ],
  },
  {
    title: 'Metrix Dashboard',
    description:
      'Analytics SaaS with live data pipelines, custom chart builder, and multi-tenant architecture.',
    emoji: '📊',
    gradient: 'linear-gradient(135deg,#1a1426,#2d1b33)',
    tags: [
      { label: 'React', variant: 'default' },
      { label: 'Redis', variant: 'amber' },
      { label: 'WebSockets', variant: 'default' },
    ],
  },
  {
    title: 'Relay Chat',
    description:
      'Real-time messaging app supporting 10k concurrent users, end-to-end encrypted, with file sharing.',
    emoji: '💬',
    gradient: 'linear-gradient(135deg,#0a1628,#1a2744)',
    tags: [
      { label: 'Socket.io', variant: 'green' },
      { label: 'Node.js', variant: 'default' },
      { label: 'AWS S3', variant: 'default' },
    ],
  },
  {
    title: 'GreenTrack',
    description:
      'Carbon footprint tracker for businesses, with ESG reporting and third-party API integrations.',
    emoji: '🌿',
    gradient: 'linear-gradient(135deg,#1a260a,#1e3a1e)',
    tags: [
      { label: 'TypeScript', variant: 'default' },
      { label: 'Charts.js', variant: 'amber' },
      { label: 'REST API', variant: 'green' },
    ],
  },
];
