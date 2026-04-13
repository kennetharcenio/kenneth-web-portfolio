import type { ProjectTag } from './projects';

export interface SideProject {
  title: string;
  description: string;
  repo: string;
  url: string;
  emoji: string;
  gradient: string;
  tags: ProjectTag[];
}

export const sideProjects: SideProject[] = [
  {
    title: 'Kanban Flow',
    repo: 'kennetharcenio/kanban-flow',
    url: 'https://kennetharcenio.github.io/kanban-flow/',
    description:
      'Drag-and-drop kanban board for lightweight task management, built to explore modern React patterns and local-first state.',
    emoji: '🗂',
    gradient: 'linear-gradient(135deg,#1a1a2e,#16213e)',
    tags: [
      { label: 'React', variant: 'default' },
      { label: 'TypeScript', variant: 'amber' },
      { label: 'DnD', variant: 'default' },
    ],
  },
  {
    title: 'Calendar App v2',
    repo: 'kennetharcenio/calendar-app-v2',
    url: 'https://kennetharcenio.github.io/calendar-app-v2/',
    description:
      'Second iteration of a calendar/scheduling app with recurring events and a refined month/week view interaction model.',
    emoji: '📅',
    gradient: 'linear-gradient(135deg,#0a1628,#1a2744)',
    tags: [
      { label: 'React', variant: 'default' },
      { label: 'Scheduling', variant: 'green' },
      { label: 'UI/UX', variant: 'default' },
    ],
  },
];
