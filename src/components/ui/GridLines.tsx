/**
 * A faint, fixed 12-column guide running the full height of the viewport,
 * behind all content. Purely decorative Swiss-grid signal, hidden below
 * the lg breakpoint where a visible column grid stops reading as intentional.
 */
export function GridLines() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 hidden lg:block" aria-hidden="true">
      <div className="grid-lines mx-auto h-full max-w-content px-6 sm:px-8">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} />
        ))}
      </div>
    </div>
  );
}
