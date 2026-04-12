import { skills, type SkillColor } from '@/data/skills';

const colorVar: Record<SkillColor, string> = {
  accent: 'var(--accent)',
  accent2: 'var(--accent2)',
  green: 'var(--green)',
  amber: 'var(--amber)',
};

export default function Skills() {
  return (
    <section id="skills" className="mb-16">
      <div
        className="font-mono mb-4 uppercase"
        style={{
          fontSize: '11px',
          color: 'var(--accent)',
          letterSpacing: '2px',
        }}
      >
        // expertise
      </div>
      <h2
        className="font-syne font-extrabold mb-8"
        style={{ fontSize: '32px', letterSpacing: '-1px' }}
      >
        Skills &amp; Tools
      </h2>
      <div
        className="grid gap-2.5"
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))' }}
      >
        {skills.map((s) => (
          <div
            key={s.name}
            className="skill-chip flex flex-col gap-1.5 px-3.5 py-3 rounded-[10px] border transition-colors hover:border-[var(--accent)]"
            style={{
              background: 'var(--card)',
              borderColor: 'var(--border)',
            }}
          >
            <span style={{ fontSize: '20px', width: '20px', height: '20px' }}>
              {s.icon}
            </span>
            <span
              style={{
                fontSize: '12px',
                fontWeight: 500,
                color: 'var(--text)',
              }}
            >
              {s.name}
            </span>
            <div
              style={{
                height: '3px',
                background: 'var(--border)',
                borderRadius: '2px',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  height: '100%',
                  borderRadius: '2px',
                  width: `${s.proficiency}%`,
                  background: colorVar[s.color],
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
