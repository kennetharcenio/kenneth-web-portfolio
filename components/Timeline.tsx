import { experience } from "@/data/experience";

export default function Timeline() {
  return (
    <section className="mb-16">
      <div className="font-mono text-[11px] uppercase tracking-wider text-[var(--muted)] mb-3">
        // experience
      </div>
      <h2 className="font-[family-name:var(--font-syne)] text-[28px] font-bold mb-8">
        Work History
      </h2>
      <div>
        {experience.map((item, i) => (
          <div
            key={i}
            className={`grid grid-cols-[120px_1fr] gap-5 py-5 ${
              i < experience.length - 1
                ? "border-b border-[var(--border)]"
                : ""
            }`}
          >
            <div className="font-mono text-[12px] text-[var(--muted)] pt-[3px]">
              {item.years}
            </div>
            <div>
              <div className="font-[family-name:var(--font-syne)] font-bold text-[15px] mb-[3px]">
                {item.role}
              </div>
              <div className="text-[13px] text-[var(--accent)] mb-1.5">
                {item.company}
              </div>
              <div className="text-[13px] text-[var(--muted)] leading-[1.6]">
                {item.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
