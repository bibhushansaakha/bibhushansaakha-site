import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center py-24">
      <Container size="narrow" className="text-center">
        <p className="font-mono text-6xl tabular text-ink">404</p>
        <h1 className="mt-4 text-2xl font-medium text-ink">Nothing solved here</h1>
        <p className="mt-3 text-muted">
          This page doesn&apos;t exist, or moved somewhere I haven&apos;t linked yet.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href="/">Back home</Button>
          <Button href="/work" variant="secondary">See my work</Button>
        </div>
      </Container>
    </section>
  );
}
