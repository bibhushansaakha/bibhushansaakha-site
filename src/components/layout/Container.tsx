import { ReactNode } from "react";
import clsx from "clsx";

export function Container({
  children,
  className,
  size = "default",
}: {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow";
}) {
  return (
    <div
      className={clsx(
        "mx-auto w-full px-6 sm:px-8",
        size === "narrow" ? "max-w-prose" : "max-w-content",
        className
      )}
    >
      {children}
    </div>
  );
}
