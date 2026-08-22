import { projects } from "@/lib/content";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-t border-border/60">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-sm font-mono text-accent-2">03. Projects</h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent"
            >
              <div>
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-1 text-xs text-muted">
                  {project.company} · {project.period}
                </p>
                <p className="mt-3 text-sm leading-6 text-muted">
                  {project.description}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-background px-3 py-1 font-mono text-xs text-accent-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
