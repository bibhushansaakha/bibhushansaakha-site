import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { GridLines } from "@/components/ui/GridLines";
import { KathmanduClock } from "@/components/ui/KathmanduClock";
import { nowItems } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Now",
  description: "What Bibhushan Saakha is currently working on.",
};

const lastUpdated = "September 2026";

export default function NowPage() {
  return (
    <>
      <GridLines />
      <section className="relative z-10 py-16 sm:py-24">
        <Container size="narrow">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Now</p>
            <h1 className="mt-3 text-display-1 font-medium tracking-tight text-ink">
              What I&apos;m doing right now
            </h1>
            <div className="mt-4 flex items-center gap-4">
              <p className="font-mono text-xs text-muted">Last updated {lastUpdated}</p>
              <span className="h-3 w-px bg-line" />
              <KathmanduClock />
            </div>
          </Reveal>

          <RevealGroup className="mt-12 divide-y hairline border-y hairline">
            {nowItems.map((item, i) => (
              <div key={item} className="flex gap-6 py-8">
                <span className="font-mono text-xs tabular text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-lg leading-relaxed text-ink/85">{item}</p>
              </div>
            ))}
          </RevealGroup>

          <Reveal>
            <div className="mt-10 border hairline p-5 text-sm leading-relaxed text-muted">
              This is a{" "}
              <a
                href="https://nownownow.com/about"
                target="_blank"
                rel="noopener noreferrer"
                className="prose-underline font-medium text-ink"
              >
                /now page
              </a>
              , a short, honestly-updated snapshot rather than a polished
              announcement. It changes more often than the rest of the site.
            </div>

            <div className="mt-10">
              <Button href="/contact">Get in touch</Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
