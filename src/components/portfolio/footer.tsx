import { CopyEmailButton } from "./copy-email";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border pb-20 pt-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-muted-foreground">
          Built by Danial Talat (FA23-BCS-014). Powered by{" "}
          <span className="font-serif italic text-foreground">WebSync</span>. © 2026.
        </p>
        <CopyEmailButton />
      </div>
    </footer>
  );
}
