import { skills } from "@/lib/content";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-border/60">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-sm font-mono text-accent-2">02. Skills</h2>

        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-medium text-foreground">
                {group.category}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
