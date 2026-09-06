import { Container } from "@/components/layout/Container";
import { credibilityStats } from "@/lib/content/site";

export function CredibilityStrip() {
  return (
    <section className="mt-16 border-y border-ink-100 bg-white py-10">
      <Container>
        <dl className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {credibilityStats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-2xl text-ink-900 sm:text-3xl">
                {stat.value}
              </dd>
              <p className="mt-1 text-sm text-ink-500">{stat.label}</p>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
