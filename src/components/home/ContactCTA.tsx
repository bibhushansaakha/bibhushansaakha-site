import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { Marquee } from "@/components/ui/Marquee";
import { skillsMarquee } from "@/lib/content/site";
import { site } from "@/lib/content/site";

export function ContactCTA() {
  return (
    <section className="relative z-10">
      <Marquee items={[...skillsMarquee]} />

      <div className="py-24 sm:py-32">
        <Container>
          <Reveal>
            <div className="border hairline px-8 py-16 text-center sm:px-16">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                03 / Let&apos;s talk
              </p>
              <h2 className="mx-auto max-w-2xl text-display-2 font-medium tracking-tight text-ink">
                Open to conversations about UI/UX, frontend, and product roles.
              </h2>
              <p className="mx-auto mt-5 max-w-md text-lg text-muted">
                Or just a good conversation about design and code.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Button href="/contact">Get in touch</Button>
                <Button href={`mailto:${site.email}`} variant="secondary">
                  {site.email}
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
