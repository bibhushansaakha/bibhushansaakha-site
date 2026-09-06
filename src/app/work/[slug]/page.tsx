import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Tag } from "@/components/ui/Tag";
import { Reveal, RevealGroup } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";
import { GridLines } from "@/components/ui/GridLines";
import { TypographicCover } from "@/components/work/TypographicCover";
import { ResearchStats } from "@/components/case-study/ResearchStats";
import { ColorPalette } from "@/components/case-study/ColorPalette";
import { ArchitectureDiagram } from "@/components/case-study/ArchitectureDiagram";
import { CommitGraph } from "@/components/case-study/CommitGraph";
import { BeforeAfter } from "@/components/case-study/BeforeAfter";
import { QuoteBlock } from "@/components/case-study/QuoteBlock";
import { CreditsBlock } from "@/components/case-study/CreditsBlock";
import { ConstraintsList } from "@/components/case-study/ConstraintsList";
import { AlternativesConsidered } from "@/components/case-study/AlternativesConsidered";
import { EdgeCases } from "@/components/case-study/EdgeCases";
import { PhaseTimeline } from "@/components/case-study/PhaseTimeline";
import { FAQAccordion } from "@/components/case-study/FAQAccordion";
import { CompareSlider } from "@/components/case-study/CompareSlider";
import { mockupRegistry } from "@/components/case-study/MockupRegistry";
import { projects, getProjectBySlug } from "@/lib/content/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: { title: project.title, description: project.summary },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const next = projects[(currentIndex + 1) % projects.length];

  // A running counter for numbered editorial sections, so the numbering
  // stays sequential no matter which optional sections a given case study has.
  let n = 0;
  const idx = () => String(++n).padStart(2, "0");

  return (
    <>
      <GridLines />
      <article className="relative z-10 py-16 sm:py-24">
        <Container>
          <Reveal>
            <Link
              href="/work"
              data-cursor="hover"
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-muted hover:text-ink"
            >
              <ArrowLeft size={14} /> All work
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-2">
              <Tag>{project.category}</Tag>
              {project.status === "paused" && <Tag className="text-rust">Paused</Tag>}
              {project.status === "unshipped" && <Tag>Unshipped</Tag>}
            </div>

            <h1 className="mt-5 text-display-1 font-medium tracking-tight text-ink">
              {project.title}
            </h1>
            <p className="mt-4 max-w-2xl text-xl leading-snug text-muted sm:text-2xl">
              {project.subtitle}
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-6 border-y hairline py-6 sm:grid-cols-4">
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-wider text-muted">Role</dt>
                <dd className="mt-1 text-sm font-medium text-ink">{project.role}</dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-wider text-muted">Timeframe</dt>
                <dd className="mt-1 text-sm font-medium text-ink">{project.timeframe}</dd>
              </div>
              <div className="col-span-2 sm:col-span-2">
                <dt className="font-mono text-[11px] uppercase tracking-wider text-muted">Stack</dt>
                <dd className="mt-1 text-sm font-medium text-ink">{project.stack.join(" \u00b7 ")}</dd>
              </div>
            </dl>
          </Reveal>
        </Container>

        <Container className="mt-12">
          <Reveal>
            <div className="relative aspect-[16/9] w-full overflow-hidden border hairline bg-paper-dim">
              {project.coverType === "typographic" ? (
                <TypographicCover
                  index=""
                  title={project.cover}
                  meta={project.coverMeta ?? ""}
                  color={project.coverColor}
                />
              ) : (
                <Image
                  src={project.cover}
                  alt={`${project.title} overview`}
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 84rem, 100vw"
                />
              )}
            </div>
          </Reveal>
        </Container>

        <Container size="narrow" className="mt-16 space-y-20 sm:mt-24">
          <Reveal>
            <SectionBlock index={idx()} title="Context">
              <p>{project.context}</p>
            </SectionBlock>
          </Reveal>

          {project.research && (
            <Reveal>
              <SectionBlock index={idx()} title={project.research.title}>
                <p className="mb-8">{project.research.intro}</p>
                <ResearchStats findings={project.research.findings} />
              </SectionBlock>
            </Reveal>
          )}

          <Reveal>
            <SectionBlock index={idx()} title="The problem">
              <p>{project.problem}</p>
            </SectionBlock>
          </Reveal>

          {project.constraints && (
            <Reveal>
              <SectionBlock index={idx()} title={project.constraints.title}>
                <p className="mb-8">{project.constraints.intro}</p>
                <ConstraintsList constraints={project.constraints.items} />
              </SectionBlock>
            </Reveal>
          )}

          {project.beforeAfter && (
            <Reveal>
              <p className="mb-4 font-mono text-xs uppercase tracking-wider text-muted">
                {project.beforeAfter.title}
              </p>
              <BeforeAfter before={project.beforeAfter.before} after={project.beforeAfter.after} />
            </Reveal>
          )}

          {project.compareSlider && (
            <Reveal>
              <SectionBlock index={idx()} title={project.compareSlider.title}>
                <p className="mb-8">{project.compareSlider.intro}</p>
                <CompareSlider
                  before={mockupRegistry[project.compareSlider.beforeMockupId] ?? null}
                  after={mockupRegistry[project.compareSlider.afterMockupId] ?? null}
                  beforeLabel={project.compareSlider.beforeLabel}
                  afterLabel={project.compareSlider.afterLabel}
                />
              </SectionBlock>
            </Reveal>
          )}

          {project.alternatives && (
            <Reveal>
              <SectionBlock index={idx()} title={project.alternatives.title}>
                <p className="mb-8">{project.alternatives.intro}</p>
                <AlternativesConsidered options={project.alternatives.options} />
              </SectionBlock>
            </Reveal>
          )}

          <div>
            <SectionBlock index={idx()} title="Approach" />
            <RevealGroup className="mt-8 space-y-10">
              {project.approach.map((step, i) => (
                <div key={step.title} className="grid grid-cols-1 gap-4 border-t hairline pt-8 sm:grid-cols-[3rem_1fr]">
                  <span className="font-mono text-sm tabular text-muted">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-xl font-medium text-ink">{step.title}</h3>
                    <p className="mt-3 leading-relaxed text-ink/80">{step.body}</p>
                    {step.caption && (
                      <p className="mt-3 border-l-2 border-accent pl-3 font-mono text-xs uppercase tracking-wide text-muted">
                        {step.caption}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </RevealGroup>
          </div>

          {project.mockupGallery && (
            <Reveal>
              <SectionBlock index={idx()} title={project.mockupGallery.title}>
                <p className="mb-8">{project.mockupGallery.intro}</p>
                <MockupGalleryGrid items={project.mockupGallery.items} />
              </SectionBlock>
            </Reveal>
          )}

          {project.designSystem && (
            <Reveal>
              <SectionBlock index={idx()} title={project.designSystem.title}>
                <p className="mb-8">{project.designSystem.intro}</p>
                <ColorPalette colors={project.designSystem.colors} />
                <ul className="mt-6 space-y-2">
                  {project.designSystem.notes.map((note) => (
                    <li key={note} className="flex gap-2 text-base leading-relaxed text-ink/80">
                      <span className="text-accent">&middot;</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </SectionBlock>
            </Reveal>
          )}

          {project.architecture && (
            <Reveal>
              <SectionBlock index={idx()} title={project.architecture.title}>
                <p className="mb-8">{project.architecture.intro}</p>
                <ArchitectureDiagram source={project.architecture.source} targets={project.architecture.targets} />
              </SectionBlock>
            </Reveal>
          )}

          {project.edgeCases && (
            <Reveal>
              <SectionBlock index={idx()} title={project.edgeCases.title}>
                <p className="mb-8">{project.edgeCases.intro}</p>
                <EdgeCases cases={project.edgeCases.cases} />
              </SectionBlock>
            </Reveal>
          )}

          {project.phaseTimeline && (
            <Reveal>
              <SectionBlock index={idx()} title={project.phaseTimeline.title}>
                <p className="mb-8">{project.phaseTimeline.intro}</p>
                <PhaseTimeline phases={project.phaseTimeline.phases} />
              </SectionBlock>
            </Reveal>
          )}

          {project.commitGraph && (
            <Reveal>
              <SectionBlock index={idx()} title={project.commitGraph.title}>
                <p className="mb-8">{project.commitGraph.intro}</p>
                <CommitGraph data={project.commitGraph.data} totalLabel={project.commitGraph.totalLabel} />
              </SectionBlock>
            </Reveal>
          )}

          <Reveal>
            <SectionBlock index={idx()} title="Solution">
              <p>{project.solution}</p>
            </SectionBlock>
          </Reveal>

          <Reveal>
            <SectionBlock index={idx()} title="Outcomes">
              <dl className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                {project.outcomes.map((outcome) => (
                  <div key={outcome.label}>
                    <dt className="sr-only">{outcome.label}</dt>
                    <dd className="font-mono text-4xl tabular text-ink">
                      <CountUp value={outcome.value} />
                    </dd>
                    <p className="mt-2 text-sm leading-snug text-muted">{outcome.label}</p>
                  </div>
                ))}
              </dl>
            </SectionBlock>
          </Reveal>

          {project.quote && (
            <Reveal>
              <QuoteBlock quote={project.quote.quote} author={project.quote.author} />
            </Reveal>
          )}

          {project.credits && (
            <Reveal>
              <SectionBlock index={idx()} title={project.credits.title}>
                <CreditsBlock credits={project.credits.members} />
              </SectionBlock>
            </Reveal>
          )}

          {project.faq && (
            <Reveal>
              <SectionBlock index={idx()} title={project.faq.title}>
                <FAQAccordion items={project.faq.items} />
              </SectionBlock>
            </Reveal>
          )}

          <Reveal>
            <SectionBlock index={idx()} title="What I'd do differently">
              <p>{project.reflection}</p>
            </SectionBlock>
          </Reveal>

          {project.confidentialityNote && (
            <p className="border-t hairline pt-6 text-sm italic text-muted">
              {project.confidentialityNote}
            </p>
          )}
        </Container>

        <Container className="mt-24">
          <Reveal>
            <Link
              href={`/work/${next.slug}`}
              data-cursor="hover"
              className="group flex items-center justify-between border hairline p-8 transition-colors hover:border-ink"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-muted">Next case study</p>
                <p className="mt-2 text-2xl font-medium text-ink">{next.title}</p>
              </div>
              <ArrowRight size={22} className="text-muted transition-transform group-hover:translate-x-1 group-hover:text-ink" />
            </Link>
          </Reveal>
        </Container>
      </article>
    </>
  );
}

function SectionBlock({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <section>
      <div className="mb-6 flex items-baseline gap-3">
        <span className="font-mono text-xs tabular text-accent">{index}</span>
        <h2 className="text-2xl font-medium tracking-tight text-ink">{title}</h2>
      </div>
      {children && <div className="text-lg leading-relaxed text-ink/80">{children}</div>}
    </section>
  );
}

function MockupGalleryGrid({ items }: { items: { caption: string; mockupId: string }[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {items.map((item) => (
        <figure key={item.mockupId} className="border hairline">
          <div className="aspect-[4/3] w-full overflow-hidden bg-paper-dim">
            {mockupRegistry[item.mockupId] ?? null}
          </div>
          <figcaption className="border-t hairline p-4 font-mono text-xs uppercase tracking-wide text-muted">
            {item.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
