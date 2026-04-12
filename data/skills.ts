export type SkillColor = 'accent' | 'accent2' | 'green' | 'amber';

export interface Skill {
  name: string;
  icon: string;
  proficiency: number;
  color: SkillColor;
}

export const skills: Skill[] = [
  { name: 'Angular', icon: '🅰', proficiency: 95, color: 'accent' },
  { name: '.NET Core', icon: '🟣', proficiency: 92, color: 'accent2' },
  { name: 'C#', icon: '♯', proficiency: 92, color: 'accent2' },
  { name: 'TypeScript', icon: '🟨', proficiency: 90, color: 'amber' },
  { name: 'ReactJS', icon: '⚛', proficiency: 82, color: 'accent' },
  { name: 'Node.js', icon: '🟢', proficiency: 80, color: 'green' },
  { name: 'REST APIs', icon: '🔌', proficiency: 92, color: 'green' },
  { name: 'Microservices', icon: '🧩', proficiency: 88, color: 'accent' },
  { name: 'RabbitMQ', icon: '🐇', proficiency: 75, color: 'amber' },
  { name: 'Azure', icon: '☁', proficiency: 78, color: 'accent' },
  { name: 'AWS', icon: '☁', proficiency: 72, color: 'amber' },
  { name: 'Claude Code', icon: '🤝', proficiency: 90, color: 'accent2' },
  { name: 'Prompt Engineering', icon: '✨', proficiency: 88, color: 'accent2' },
  { name: 'n8n Automation', icon: '🔁', proficiency: 80, color: 'green' },
  { name: 'CI/CD', icon: '⚙', proficiency: 80, color: 'green' },
  { name: 'Agile / Scrum', icon: '🌀', proficiency: 90, color: 'amber' },
];
