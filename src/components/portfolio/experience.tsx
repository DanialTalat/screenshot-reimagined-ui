import { EDUCATION, EXPERIENCE } from "./data";
import { Reveal } from "./reveal";
import { SectionHeader, TagPill } from "./primitives";

export function Experience() {
  return (
    <section className="mt-24" id="experience">
      <Reveal>
        <SectionHeader index="02" title="Experience" />
      </Reveal>

      <Reveal delay={0.05}>
        <ol className="mt-2">
          {EXPERIENCE.map((item) => (
            <li
              key={item.org}
              className="grid gap-2 border-b border-border py-6 sm:grid-cols-[11rem,1fr] sm:gap-8"
            >
              <span className="pt-1 font-mono text-xs leading-6 text-muted-foreground">
                {item.period}
              </span>
              <div>
                <h4 className="text-base font-medium tracking-tight">
                  {item.role}
                  <span className="font-serif italic text-muted-foreground">
                    {" "}
                    — {item.org}
                  </span>
                </h4>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {item.summary}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-14 grid gap-4 border border-border rounded-xl p-6 sm:grid-cols-[11rem,1fr] sm:gap-8">
          <span className="font-mono text-xs leading-6 text-muted-foreground">
            {EDUCATION.period}
          </span>
          <div>
            <h4 className="text-base font-medium tracking-tight">
              {EDUCATION.degree}
              <span className="font-serif italic text-muted-foreground">
                {" "}
                — {EDUCATION.school}
              </span>
            </h4>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {EDUCATION.specialization.map((s) => (
                <TagPill key={s}>{s}</TagPill>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
