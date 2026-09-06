import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ProjectCard } from "@/components/work/ProjectCard";
import { RevealGroup, Reveal } from "@/components/motion/Reveal";
import { GridLines } from "@/components/ui/GridLines";
import { projects, moreWork } from "@/lib/content/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies in product design and frontend engineering, from Tigg's cloud accounting platform to independent design and hackathon work.",
};

export default function WorkPage() {
  return (
    <>
      <GridLines />
      <section className="relative z-10 py-16 sm:py-24">
        <Container>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Work</p>
            <h1 className="mt-3 max-w-2xl text-display-1 font-medium tracking-tight text-ink">
              Case studies, not a screenshot gallery
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Each project below covers the actual problem, the process, and
              the decisions behind it — including the parts that didn&apos;t
              work the first time.
            </p>
          </Reveal>

          <RevealGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="relative z-10 border-t hairline py-24 sm:py-32">
        <Container>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">More work</p>
            <h2 className="mt-3 text-display-3 font-medium tracking-tight text-ink">
              Smaller projects, worth a mention
            </h2>
          </Reveal>

          <RevealGroup className="mt-12 grid grid-cols-1 divide-y hairline border-t hairline sm:grid-cols-2 sm:divide-x sm:divide-y-0">
            {moreWork.map((item) => (
              <div key={item.title} className="py-8 sm:px-8 sm:first:pl-0">
                <p className="font-mono text-[11px] uppercase tracking-wider text-accent">{item.tag}</p>
                <h3 className="mt-3 text-xl font-medium text-ink">
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="prose-underline" data-cursor="hover">
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            ))}
          </RevealGroup>
        </Container>
      </section>
    </>
  );
}
