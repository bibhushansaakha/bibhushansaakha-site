import { Container } from "@/components/layout/Container";
import { CountUp } from "@/components/motion/CountUp";
import { Reveal } from "@/components/motion/Reveal";
import { credibilityStats } from "@/lib/content/site";

export function CredibilityStrip() {
  return (
    <section className="relative z-10 mt-20 border-y hairline bg-paper-dim/60 py-12">
      <Container>
        <Reveal>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
            {credibilityStats.map((stat) => (
              <div key={stat.label} className="border-l hairline pl-4">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-mono text-3xl tabular text-ink sm:text-4xl">
                  <CountUp value={stat.value} />
                </dd>
                <p className="mt-2 text-sm leading-snug text-muted">{stat.label}</p>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
