import clsx from "clsx";

export function Tag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border border-ink-200 bg-white px-3 py-1 text-xs font-medium text-ink-600",
        className
      )}
    >
      {children}
    </span>
  );
}
