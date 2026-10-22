import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { FILTERS, GROUPS, WORKS, type Filter, type Work } from "./data";
import { Reveal } from "./reveal";
import { SectionHeader } from "./primitives";

const SPRING = { type: "spring" as const, stiffness: 420, damping: 34 };

function WorkRow({ work, index }: { work: Work; index: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ layout: SPRING, duration: 0.3, delay: index * 0.045 }}
      className="glow-hover group relative -mx-4 rounded-xl px-4 py-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-xs text-muted-foreground/70">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h4 className="text-base font-medium tracking-tight transition-transform duration-200 group-hover:scale-[1.01]">
              {work.title}
            </h4>
          </div>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
            {work.description}
          </p>
        </div>
        <ArrowUpRight className="mt-1 size-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
      </div>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {work.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border px-2 py-0.5 font-mono text-[11px] text-muted-foreground transition-colors group-hover:border-foreground/15"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export function Works() {
  const [filter, setFilter] = useState<Filter>("All");
  const groups = filter === "All" ? GROUPS : GROUPS.filter((g) => g.id === filter);

  return (
    <section className="mt-24" id="works">
      <Reveal>
        <SectionHeader
          index="01"
          title="Selected Works"
          note={`${String(WORKS.length).padStart(2, "0")} projects`}
        />
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-6 flex w-fit flex-wrap gap-1 rounded-full border border-border bg-secondary/50 p-1">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className="relative rounded-full px-3.5 py-1.5 font-mono text-xs transition-colors"
            >
              {filter === f && (
                <motion.span
                  layoutId="works-filter-pill"
                  className="absolute inset-0 rounded-full bg-foreground"
                  transition={SPRING}
                />
              )}
              <span
                className={cn(
                  "relative z-10 transition-colors",
                  filter === f
                    ? "text-background"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {f}
              </span>
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-4">
        <AnimatePresence mode="popLayout" initial={false}>
          {groups.map((group) => (
            <motion.div
              key={group.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="mt-10 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {group.heading}
              </h3>
              <div className="mt-2 divide-y divide-border">
                {WORKS.filter((w) => w.group === group.id).map((w, i) => (
                  <WorkRow key={w.title} work={w} index={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
