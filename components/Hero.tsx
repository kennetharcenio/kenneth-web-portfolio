export default function Hero() {
  return (
    <section className="py-20 pb-16 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 items-center">
      <div>
        <div
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6 font-mono text-xs"
          style={{
            background: 'rgba(78,204,163,0.1)',
            border: '1px solid rgba(78,204,163,0.2)',
            color: 'var(--green)',
          }}
        >
          <span
            className="w-[7px] h-[7px] rounded-full animate-pulse"
            style={{ background: 'var(--green)' }}
          />
          Available for projects
        </div>
        <h1
          className="font-syne font-extrabold mb-5"
          style={{
            fontSize: '52px',
            lineHeight: 1.05,
            letterSpacing: '-2px',
          }}
        >
          Full-Stack
          <br />
          <span style={{ color: 'var(--accent)' }}>Web Developer</span>
        </h1>
        <p
          className="mb-8"
          style={{
            color: 'var(--muted)',
            fontSize: '16px',
            lineHeight: 1.7,
            maxWidth: '460px',
          }}
        >
          Senior software engineer with 12+ years building scalable microservices and
          high-performance web applications across Angular and .NET Core. I specialize in
          AI-augmented engineering — using LLMs, sub-agent orchestration, and workflow automation
          to ship production-ready systems faster, with stronger code quality.
        </p>
        <div className="flex gap-3 flex-wrap">
          <a
            href="#projects"
            className="px-6 py-3 rounded-[10px] text-sm font-medium transition-all hover:-translate-y-px hover:opacity-90"
            style={{ background: 'var(--accent)', color: '#fff' }}
          >
            View my work
          </a>
          <a
            href="#"
            className="px-6 py-3 rounded-[10px] text-sm font-medium transition-all"
            style={{
              background: 'transparent',
              color: 'var(--text)',
              border: '1px solid var(--border)',
            }}
          >
            Download CV
          </a>
        </div>
      </div>
      <div
        className="relative flex items-center justify-center font-syne font-extrabold text-white flex-shrink-0"
        style={{
          width: '160px',
          height: '160px',
          borderRadius: '24px',
          background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
          fontSize: '56px',
        }}
      >
        KA
        <span
          className="absolute pointer-events-none"
          style={{
            inset: '-3px',
            borderRadius: '26px',
            border: '1px solid rgba(124,110,250,0.3)',
          }}
        />
      </div>
    </section>
  );
}
