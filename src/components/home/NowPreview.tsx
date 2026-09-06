import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { nowItems } from "@/lib/content/site";

export function NowPreview() {
  return (
    <section className="relative z-10 py-24 sm:py-32">
      <Container>
        <SectionLabel index="02" title="Right now" />

        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6 border-b hairline pb-8">
            <h2 className="max-w-xl text-display-2 font-medium tracking-tight text-ink">
              What I&apos;m doing currently
            </h2>
            <Link
              href="/now"
              data-cursor="hover"
              className="prose-underline flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-ink"
            >
              Full /now page <ArrowUpRight size={14} />
            </Link>
          </div>
        </Reveal>

        <RevealGroup className="mt-2 grid grid-cols-1 sm:grid-cols-2">
          {nowItems.map((item, i) => (
            <div
              key={item}
              className="border-b hairline py-8 pr-6 sm:border-r sm:odd:border-r sm:[&:nth-child(2)]:border-r-0 sm:[&:nth-child(4)]:border-r-0"
            >
              <span className="font-mono text-xs tabular text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 text-lg leading-relaxed text-ink/90">{item}</p>
            </div>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
