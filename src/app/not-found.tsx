import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center py-24">
      <Container size="narrow" className="text-center">
        <p className="font-display text-6xl text-ink-900">404</p>
        <h1 className="mt-4 font-display text-2xl text-ink-900">
          Nothing solved here
        </h1>
        <p className="mt-3 text-ink-500">
          This page doesn&apos;t exist, or moved somewhere I haven&apos;t
          linked yet.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href="/">Back home</Button>
          <Button href="/work" variant="secondary">
            See my work
          </Button>
        </div>
      </Container>
    </section>
  );
}
