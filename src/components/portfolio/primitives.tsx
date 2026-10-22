import { cn } from "@/lib/utils";

export function SectionHeader({
  index,
  title,
  note,
}: {
  index: string;
  title: string;
  note?: string;
}) {
  return (
    <div className="flex items-baseline justify-between border-b border-border pb-4">
      <h2 className="text-sm font-medium uppercase tracking-[0.18em] text-foreground">
        <span className="mr-3 font-mono text-xs font-normal text-muted-foreground">
          {index}
        </span>
        {title}
      </h2>
      {note ? (
        <span className="font-mono text-xs text-muted-foreground">{note}</span>
      ) : null}
    </div>
  );
}

export function MonoLabel({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
      {children}
    </h3>
  );
}

export function TagPill({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground transition-colors",
        className,
      )}
    >
      {children}
    </span>
  );
}
