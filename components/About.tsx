import { about } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border/60">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-sm font-mono text-accent-2">01. About</h2>

        <div className="mt-8 grid gap-12 sm:grid-cols-3">
          <div className="sm:col-span-2 space-y-4 text-muted">
            {about.paragraphs.map((p) => (
              <p key={p} className="leading-7">
                {p}
              </p>
            ))}
          </div>

          <dl className="grid grid-cols-3 gap-4 sm:grid-cols-1">
            {about.highlights.map((h) => (
              <div key={h.label} className="rounded-2xl border border-border bg-surface p-4">
                <dt className="text-xs text-muted">{h.label}</dt>
                <dd className="mt-1 text-2xl font-semibold gradient-text">
                  {h.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
