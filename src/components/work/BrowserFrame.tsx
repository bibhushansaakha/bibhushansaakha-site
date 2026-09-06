import { ReactNode } from "react";

export function BrowserFrame({
  children,
  label,
}: {
  children: ReactNode;
  label?: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-ink-200 bg-white shadow-sm">
      <div className="flex items-center gap-2 border-b border-ink-100 bg-ink-50 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-200" />
        </div>
        {label && (
          <div className="ml-2 flex-1 rounded-md bg-white px-3 py-1 text-center text-xs text-ink-400">
            {label}
          </div>
        )}
      </div>
      <div className="bg-ink-50/50 p-4 sm:p-6">{children}</div>
    </div>
  );
}
