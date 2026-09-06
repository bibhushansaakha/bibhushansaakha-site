import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { nowItems } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Now",
  description: "What Bibhushan Saakha is currently working on.",
};

const lastUpdated = "September 2026";

export default function NowPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container size="narrow">
        <p className="text-xs font-medium uppercase tracking-widest text-accent">
          Now
        </p>
        <h1 className="mt-3 font-display text-4xl text-ink-900 sm:text-5xl">
          What I&apos;m doing right now
        </h1>
        <p className="mt-3 text-sm text-ink-400">Last updated {lastUpdated}</p>

        <ul className="mt-10 space-y-5">
          {nowItems.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-ink-100 bg-white p-5 text-lg leading-relaxed text-ink-600"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-10 rounded-xl bg-ink-100 p-5 text-sm leading-relaxed text-ink-500">
          This is a{" "}
          <a
            href="https://nownownow.com/about"
            target="_blank"
            rel="noopener noreferrer"
            className="prose-underline font-medium text-ink-800"
          >
            /now page
          </a>
          , a short, honestly-updated snapshot rather than a polished
          announcement. It changes more often than the rest of the site.
        </div>

        <div className="mt-10">
          <Button href="/contact">Get in touch</Button>
        </div>
      </Container>
    </section>
  );
}
