export type SkillColor = 'accent' | 'accent2' | 'green' | 'amber';

export interface Skill {
  name: string;
  icon: string;
  proficiency: number;
  color: SkillColor;
}

export const skills: Skill[] = [
  { name: 'React', icon: '⚛', proficiency: 95, color: 'accent' },
  { name: 'Next.js', icon: '▲', proficiency: 92, color: 'accent' },
  { name: 'TypeScript', icon: '🟨', proficiency: 90, color: 'amber' },
  { name: 'Node.js', icon: '🟢', proficiency: 85, color: 'green' },
  { name: 'PostgreSQL', icon: '🐘', proficiency: 80, color: 'green' },
  { name: 'Tailwind', icon: '🎨', proficiency: 92, color: 'accent2' },
  { name: 'Docker', icon: '🐳', proficiency: 72, color: 'accent' },
  { name: 'AWS', icon: '☁', proficiency: 70, color: 'amber' },
];
