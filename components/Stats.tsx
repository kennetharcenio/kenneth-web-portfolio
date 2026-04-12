const stats = [
  { num: '25+', label: 'projects shipped' },
  { num: '4yr', label: 'experience' },
  { num: '15+', label: 'happy clients' },
];

export default function Stats() {
  return (
    <div className="grid grid-cols-3 gap-3 mb-16">
      {stats.map((s) => (
        <div
          key={s.label}
          className="text-center p-5 rounded-[14px]"
          style={{
            background: 'var(--card)',
            border: '1px solid var(--border)',
          }}
        >
          <div
            className="font-syne font-extrabold"
            style={{ fontSize: '32px', color: 'var(--accent)' }}
          >
            {s.num}
          </div>
          <div
            className="mt-1 font-mono"
            style={{ fontSize: '12px', color: 'var(--muted)' }}
          >
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
