import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Timeline } from "@/components/about/Timeline";
import { SkillsGrid } from "@/components/about/SkillsGrid";
import { PhotoGallery } from "@/components/about/PhotoGallery";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { GridLines } from "@/components/ui/GridLines";
import { KathmanduClock } from "@/components/ui/KathmanduClock";

export const metadata: Metadata = {
  title: "About",
  description: "UI/UX designer and frontend engineer based in Kathmandu, Nepal, currently at Tigg.",
};

export default function AboutPage() {
  return (
    <>
      <GridLines />
      <section className="relative z-10 pt-16 sm:pt-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">About</p>
                <h1 className="mt-3 text-display-1 font-medium tracking-tight text-ink">
                  Design and engineering, one discipline, two hats.
                </h1>

                <div className="mt-10 space-y-6 text-lg leading-relaxed text-ink/85">
                  <p>
                    I&apos;m Bibhushan, a UI/UX designer and frontend engineer
                    based in Kathmandu. Most of my process starts with a full
                    flow, not a single screen, mapped out end to end before I
                    touch a visual detail, because a beautiful screen that
                    ignores what happens two steps later isn&apos;t actually
                    solved yet.
                  </p>
                  <p>
                    I currently work at Tigg, a cloud accounting and POS
                    platform used by thousands of businesses across Nepal,
                    where I work across UI/UX and frontend, including as the
                    sole designer on parts of the product. I move between
                    Figma and code myself, so what ships stays close to what
                    was actually designed.
                  </p>
                  <p>
                    Before this, I studied Computer Engineering at Kathmandu
                    University, where I spent as much time on design and
                    event leadership as I did on coursework: running the AR
                    Treasure Hunt at KU IT MEET for two years, serving as
                    Director of Creative Affairs for TEDxKathmanduUniversity,
                    and picking up a national record in blindfolded cube
                    solving somewhere along the way. I also co-founded Myra,
                    a reproductive-health platform that won first prize at
                    YuwaXcel, currently paused while we figure out the right
                    direction.
                  </p>
                  <p>
                    I&apos;m currently building this exact site from scratch,
                    mentoring at hackathons and AI/dev bootcamps around
                    Kathmandu, and always happy to talk to people building
                    things in Nepal&apos;s tech and design community.
                  </p>
                </div>

                <div className="mt-10 flex flex-wrap items-center gap-6">
                  <Button href="/contact">Get in touch</Button>
                  <KathmanduClock />
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.1}>
                <div className="relative aspect-[4/5] w-full border hairline bg-paper-dim">
                  <Image
                    src="/photos/studio-headshot.png"
                    alt="Bibhushan Saakha"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 36vw, 90vw"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative z-10 py-24 sm:py-32">
        <Container>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">In frames</p>
            <h2 className="mt-3 text-display-3 font-medium tracking-tight text-ink">
              A few unposed ones
            </h2>
          </Reveal>
          <div className="mt-10">
            <PhotoGallery />
          </div>
        </Container>
      </section>

      <section className="relative z-10 border-t hairline py-24 sm:py-32">
        <Container>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Journey</p>
            <h2 className="mt-3 text-display-3 font-medium tracking-tight text-ink">
              How I got here
            </h2>
          </Reveal>
          <div className="mt-12">
            <Timeline />
          </div>
        </Container>
      </section>

      <section className="relative z-10 border-t hairline py-24 sm:py-32">
        <Container>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Toolkit</p>
            <h2 className="mt-3 text-display-3 font-medium tracking-tight text-ink">
              Skills & tools
            </h2>
          </Reveal>
          <div className="mt-12">
            <SkillsGrid />
          </div>
        </Container>
      </section>

      <section className="relative z-10 border-t hairline pb-24 pt-24 sm:pb-32">
        <Container size="narrow">
          <Reveal>
            <div className="border hairline p-8">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                Outside of work
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink/85">
                Competitive cubing history (a national record I&apos;m
                currently retraining to defend), hackathon mentoring, and a
                growing backlog of conference and travel writeups I keep
                meaning to actually publish. See{" "}
                <a href="/now" className="prose-underline font-medium text-ink">
                  what I&apos;m doing right now
                </a>
                .
              </p>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
