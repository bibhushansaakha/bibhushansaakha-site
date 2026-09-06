import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Timeline } from "@/components/about/Timeline";
import { SkillsGrid } from "@/components/about/SkillsGrid";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "UI/UX designer and frontend engineer based in Kathmandu, Nepal, currently at Tigg.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-16 sm:pt-24">
        <Container size="narrow">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">
            About
          </p>
          <h1 className="mt-3 font-display text-4xl text-ink-900 sm:text-5xl">
            Design and engineering, same discipline, two hats.
          </h1>

          <div className="prose-ink mt-8 space-y-5 text-lg leading-relaxed text-ink-600">
            <p>
              I&apos;m Bibhushan, a UI/UX designer and frontend engineer based
              in Kathmandu. Most of my process starts with a full flow, not a
              single screen, sketched out end to end before I touch a visual
              detail, because a beautiful screen that ignores what happens two
              steps later isn&apos;t actually solved yet.
            </p>
            <p>
              I currently work at Tigg, a cloud accounting and POS platform
              used by 15,000+ businesses across Nepal, where I work across
              UI/UX and frontend, including as the sole designer on parts of
              the product. I move between Figma and code myself, so what
              ships stays close to what was actually designed.
            </p>
            <p>
              Before this, I studied Computer Engineering at Kathmandu
              University, where I spent as much time on design and event
              leadership as I did on coursework, running the AR Treasure Hunt
              at KU IT MEET for two years, serving as Director of Creative
              Affairs for TEDxKathmanduUniversity, and picking up a national
              record in blindfolded cube solving somewhere along the way.
            </p>
            <p>
              I&apos;m currently building this exact site from scratch,
              mentoring at hackathons and AI/dev bootcamps around Kathmandu,
              and always happy to talk to people building things in Nepal&apos;s
              tech and design community.
            </p>
          </div>

          <div className="mt-8">
            <Button href="/contact">Get in touch</Button>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Journey" title="How I got here" />
          <div className="mt-12">
            <Timeline />
          </div>
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container>
          <SectionHeading eyebrow="Toolkit" title="Skills & tools" />
          <div className="mt-10">
            <SkillsGrid />
          </div>
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container size="narrow">
          <div className="rounded-2xl border border-ink-100 bg-white p-8">
            <p className="text-xs font-medium uppercase tracking-widest text-ink-400">
              Outside of work
            </p>
            <p className="mt-3 text-base leading-relaxed text-ink-600">
              Competitive cubing history, hackathon mentoring, and slowly
              working through a growing backlog of conference and travel
              writeups I keep meaning to actually publish. See{" "}
              <a href="/now" className="prose-underline font-medium text-ink-900">
                what I&apos;m doing right now
              </a>
              .
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
