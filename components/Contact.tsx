import { contact } from "@/data/contact";

export default function Contact() {
  return (
    <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-10 text-center mb-12">
      <div className="font-mono text-[11px] uppercase tracking-wider text-[var(--muted)] mb-3">
        // let&apos;s connect
      </div>
      <h2 className="font-[family-name:var(--font-syne)] text-[36px] font-bold mb-3">
        Open to Work
      </h2>
      <p className="text-[var(--muted)] text-[15px] mb-7">
        I&apos;m currently available for freelance projects and full-time roles.
        Let&apos;s build something great.
      </p>
      <div className="flex justify-center gap-3 flex-wrap">
        {contact.map((item, i) => (
          <a
            key={i}
            href={item.href}
            className="inline-flex items-center gap-2 bg-[var(--surface)] border border-[var(--border)] px-5 py-2.5 rounded-lg text-[13px] font-medium transition-colors hover:border-[var(--accent)]"
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
