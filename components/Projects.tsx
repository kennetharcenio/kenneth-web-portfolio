import { projects, type TagVariant } from '@/data/projects';

const tagStyle: Record<TagVariant, React.CSSProperties> = {
  default: {
    background: 'rgba(124,110,250,0.1)',
    border: '1px solid rgba(124,110,250,0.2)',
    color: 'var(--accent)',
  },
  green: {
    background: 'rgba(78,204,163,0.08)',
    border: '1px solid rgba(78,204,163,0.2)',
    color: 'var(--green)',
  },
  amber: {
    background: 'rgba(255,186,73,0.08)',
    border: '1px solid rgba(255,186,73,0.2)',
    color: 'var(--amber)',
  },
};

export default function Projects() {
  return (
    <section id="projects" className="mb-16">
      <div
        className="font-mono mb-4 uppercase"
        style={{
          fontSize: '11px',
          color: 'var(--accent)',
          letterSpacing: '2px',
        }}
      >
        // selected work
      </div>
      <h2
        className="font-syne font-extrabold mb-8"
        style={{ fontSize: '32px', letterSpacing: '-1px' }}
      >
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((p) => (
          <article
            key={p.title}
            className="overflow-hidden rounded-2xl border transition-all hover:-translate-y-[3px] hover:border-[var(--accent)]"
            style={{
              background: 'var(--card)',
              borderColor: 'var(--border)',
            }}
          >
            <div
              className="flex items-center justify-center"
              style={{
                height: '140px',
                fontSize: '48px',
                background: p.gradient,
              }}
            >
              {p.emoji}
            </div>
            <div className="p-4">
              <div
                className="font-syne font-bold mb-1.5"
                style={{ fontSize: '16px' }}
              >
                {p.title}
              </div>
              <div
                className="mb-3"
                style={{
                  fontSize: '13px',
                  color: 'var(--muted)',
                  lineHeight: 1.6,
                }}
              >
                {p.description}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t.label}
                    className="font-mono"
                    style={{
                      ...tagStyle[t.variant],
                      fontSize: '10px',
                      padding: '3px 8px',
                      borderRadius: '5px',
                    }}
                  >
                    {t.label}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
