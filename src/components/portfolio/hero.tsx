import { useSpring, motion } from "motion/react";
import type { ReactNode } from "react";
import { Reveal } from "./reveal";
import { ThemeToggle } from "./theme-toggle";
import { CopyEmailPill } from "./copy-email";
import { EMAIL, EXTERNAL_LINKS } from "./data";

/** Subtle magnetic pull that follows the cursor inside the element. */
function Magnetic({ children }: { children: ReactNode }) {
  const x = useSpring(0, { stiffness: 300, damping: 20 });
  const y = useSpring(0, { stiffness: 300, damping: 20 });

  return (
    <motion.div
      style={{ x, y }}
      className="inline-flex"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set(((e.clientX - r.left) / r.width - 0.5) * 8);
        y.set(((e.clientY - r.top) / r.height - 0.5) * 6);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

const PILL_CLASS =
  "inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-4 py-2 text-sm font-medium transition-all duration-200 hover:border-foreground/20 hover:bg-accent hover:scale-[1.03] active:scale-[0.98]";

export function Hero() {
  return (
    <header className="relative pt-14">
      {/* Soft ambient glow behind the hero text */}
      <div
        aria-hidden
        className="ambient-glow pointer-events-none absolute -top-24 left-1/2 h-72 w-[36rem] max-w-full -translate-x-1/2 rounded-full blur-2xl"
      />

      {/* Top status bar */}
      <Reveal>
        <div className="relative flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="text-sm font-semibold tracking-tight">Danial Talat</span>
            <span className="rounded-full border border-border px-2 py-0.5 font-mono text-[11px] text-muted-foreground">
              FA23-BCS-014
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-2 font-mono text-[11px] text-muted-foreground sm:flex">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-status-live opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-status-live" />
              </span>
              Abbottabad, PK — Available for select projects
            </span>
            <ThemeToggle />
          </div>
        </div>
      </Reveal>

      {/* Headline */}
      <Reveal delay={0.08}>
        <h1 className="relative mt-16 text-4xl font-semibold tracking-tight md:text-5xl">
          Full-Stack Software
          <br />
          Developer &amp;{" "}
          <span className="font-serif font-normal italic text-foreground/85">
            AI Engineer
          </span>
          <span className="text-status-live">.</span>
        </h1>
      </Reveal>

      {/* Bio */}
      <Reveal delay={0.16}>
        <p className="relative mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          Full-Stack Software Developer, AI/Automation Engineer, and Founder of{" "}
          <span className="font-serif text-lg italic text-foreground">WebSync</span>.
          Building custom high-performance web applications, autonomous AI agents, and
          enterprise e-commerce architectures.
        </p>
      </Reveal>

      {/* Quick links */}
      <Reveal delay={0.24}>
        <div className="relative mt-8 flex flex-wrap items-center gap-2">
          <Magnetic>
            <CopyEmailPill />
          </Magnetic>
          {EXTERNAL_LINKS.map((link) => (
            <Magnetic key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className={PILL_CLASS}
              >
                {link.label}
                <span
                  aria-hidden
                  className="text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  ↗
                </span>
              </a>
            </Magnetic>
          ))}
        </div>
      </Reveal>

      {/* Screen-reader friendly email affordance for the smallest viewports */}
      <Reveal delay={0.3}>
        <a
          href={`mailto:${EMAIL}`}
          className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] text-muted-foreground sm:hidden"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-status-live opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-status-live" />
          </span>
          Abbottabad, PK — Available for select projects
        </a>
      </Reveal>
    </header>
  );
}
