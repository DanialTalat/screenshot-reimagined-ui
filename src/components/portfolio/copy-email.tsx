import { useCallback, useState } from "react";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";
import { EMAIL } from "./data";
import { cn } from "@/lib/utils";

const PILL_CLASS =
  "inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-4 py-2 text-sm font-medium transition-all duration-200 hover:border-foreground/20 hover:bg-accent hover:scale-[1.03] active:scale-[0.98]";

export function useCopyEmail() {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      toast.success("Email copied to clipboard", { description: EMAIL });
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      toast.error("Couldn't copy the email address");
    }
  }, []);

  return { copied, copy };
}

export function CopyEmailPill({ className }: { className?: string }) {
  const { copied, copy } = useCopyEmail();

  return (
    <button type="button" onClick={copy} className={cn(PILL_CLASS, className)}>
      <span
        className={cn(
          "inline-flex size-3.5 items-center justify-center transition-transform duration-200",
          copied && "scale-110 text-status-live",
        )}
      >
        {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
      </span>
      Email
    </button>
  );
}

export function CopyEmailButton() {
  const { copied, copy } = useCopyEmail();

  return (
    <button
      type="button"
      onClick={copy}
      className="group inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
    >
      {copied ? (
        <Check className="size-3 text-status-live" />
      ) : (
        <Copy className="size-3 transition-transform duration-200 group-hover:-rotate-6" />
      )}
      {copied ? "Copied" : "Copy email"}
    </button>
  );
}
