export function QuoteBlock({ quote, author }: { quote: string; author: string }) {
  return (
    <blockquote className="border-l-2 border-accent py-2 pl-8">
      <p className="text-2xl font-medium leading-snug tracking-tight text-ink sm:text-3xl">
        &ldquo;{quote}&rdquo;
      </p>
      <footer className="mt-4 font-mono text-xs uppercase tracking-wider text-muted">
        {author}
      </footer>
    </blockquote>
  );
}
