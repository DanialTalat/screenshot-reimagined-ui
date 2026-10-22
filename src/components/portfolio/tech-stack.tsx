import { STACK } from "./data";
import { Reveal } from "./reveal";
import { SectionHeader } from "./primitives";

export function TechStack() {
  return (
    <section className="mt-24" id="stack">
      <Reveal>
        <SectionHeader index="03" title="Tech Stack" />
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 md:grid-cols-4">
          {STACK.map((category) => (
            <div key={category.label}>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {category.label}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="inline-flex items-center rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground transition-all duration-200 hover:scale-105 hover:border-foreground/20 hover:text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
