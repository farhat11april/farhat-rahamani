import { ArrowRight, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/icons";
import { profile } from "@/lib/content";

export default function Contact() {
  const hasSocials =
    profile.socials.github || profile.socials.linkedin || profile.socials.twitter;

  return (
    <section id="contact" className="scroll-mt-20 border-t border-border/60">
      <div className="mx-auto max-w-5xl px-6 py-24 text-center">
        <h2 className="text-sm font-mono text-accent-2">04. Contact</h2>

        <h3 className="mx-auto mt-6 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
          Let&apos;s build something together.
        </h3>

        <p className="mx-auto mt-4 max-w-md text-muted">
          I&apos;m always open to discussing new projects or opportunities.
          Reach out and I&apos;ll get back to you.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-accent-2"
        >
          Say hello
          <ArrowRight size={16} />
        </a>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-muted">
          {profile.phones.map((phone) => (
            <a
              key={phone}
              href={`tel:${phone.replace(/[^+\d]/g, "")}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <Phone size={14} />
              {phone}
            </a>
          ))}
        </div>

        {hasSocials && (
          <div className="mt-10 flex items-center justify-center gap-6 text-muted">
            {profile.socials.github && (
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transition-colors hover:text-foreground"
              >
                <GithubIcon size={20} />
              </a>
            )}
            {profile.socials.linkedin && (
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition-colors hover:text-foreground"
              >
                <LinkedinIcon size={20} />
              </a>
            )}
            {profile.socials.twitter && (
              <a
                href={profile.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="transition-colors hover:text-foreground"
              >
                <XIcon size={20} />
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
