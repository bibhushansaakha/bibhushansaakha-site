import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { nowItems } from "@/lib/content/site";

export function NowPreview() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="rounded-3xl bg-ink-900 px-8 py-12 text-white sm:px-12 sm:py-16">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-white/50">
                Right now
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl">
                What I&apos;m doing currently
              </h2>
            </div>
            <Link
              href="/now"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Read more <ArrowUpRight size={15} />
            </Link>
          </div>

          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {nowItems.slice(0, 4).map((item) => (
              <li
                key={item}
                className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm leading-relaxed text-white/80"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
