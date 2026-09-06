import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/content/site";

export function ContactCTA() {
  return (
    <section className="pb-24 pt-8 sm:pb-32">
      <Container>
        <div className="rounded-3xl border border-ink-100 bg-white px-8 py-14 text-center sm:px-12">
          <h2 className="font-display text-3xl text-ink-900 sm:text-4xl">
            Let&apos;s talk
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-ink-500">
            Open to conversations about UI/UX, frontend, and product design
            roles, or just a good conversation about design and code.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href="/contact">Get in touch</Button>
            <Button href={`mailto:${site.email}`} variant="secondary">
              {site.email}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
