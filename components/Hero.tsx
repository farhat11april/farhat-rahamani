import Link from "next/link";
import { ArrowRight, FileDown } from "lucide-react";
import { profile } from "@/lib/content";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
      />

      <div className="relative mx-auto flex max-w-5xl flex-col gap-6 px-6 py-28 sm:py-36">
        {/* <p className="font-mono text-sm text-accent-2">{profile.location}</p> */}

        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
          Hi, I&apos;m {profile.name}.{" "}
          <span className="gradient-text">{profile.shortRole}.</span>
        </h1>

        <p className="max-w-xl text-lg leading-8 text-muted">
          {profile.tagline}
        </p>

        <div className="mt-4 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/#projects"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-accent-2"
          >
            View Projects
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/resume"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            <FileDown size={16} />
            Resume
          </Link>
        </div>
      </div>
    </section>
  );
}
