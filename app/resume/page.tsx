import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import PrintButton from "@/components/PrintButton";
import { profile, experience, education, skills } from "@/lib/content";

export const metadata: Metadata = {
  title: `Resume — ${profile.name}`,
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{profile.name}</h1>
          <p className="mt-1 text-accent-2">{profile.role}</p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
            <span className="inline-flex items-center gap-1.5">
              <Mail size={14} />
              {profile.email}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} />
              /* {profile.location} */
            </span>
            {profile.phones.map((phone) => (
              <span key={phone} className="inline-flex items-center gap-1.5">
                <Phone size={14} />
                {phone}
              </span>
            ))}
          </div>
        </div>
        <PrintButton />
      </div>

      <section className="mt-12">
        <h2 className="text-sm font-mono text-accent-2">Experience</h2>
        <div className="mt-4 space-y-8">
          {experience.map((job) => (
            <div key={`${job.company}-${job.role}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="font-semibold">
                  {job.role} · {job.company}
                </h3>
                <span className="text-sm text-muted">{job.period}</span>
              </div>
              <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-sm font-mono text-accent-2">Education</h2>
        <div className="mt-4 space-y-4">
          {education.map((edu) => (
            <div
              key={edu.school}
              className="flex flex-wrap items-baseline justify-between gap-x-4"
            >
              <h3 className="font-semibold">{edu.degree}</h3>
              {edu.period && (
                <span className="text-sm text-muted">{edu.period}</span>
              )}
              <p className="w-full text-sm text-muted">{edu.school}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-sm font-mono text-accent-2">Skills</h2>
        <div className="mt-4 space-y-3">
          {skills.map((group) => (
            <div key={group.category} className="text-sm">
              <span className="font-semibold">{group.category}: </span>
              <span className="text-muted">{group.items.join(", ")}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
