import clsx from "clsx";

export function Tag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center border hairline px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
