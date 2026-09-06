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
            <SectionBlock index="01" title="Context">
              <p>{project.context}</p>
            </SectionBlock>
          </Reveal>

          <Reveal>
            <SectionBlock index="02" title="The problem">
              <p>{project.problem}</p>
            </SectionBlock>
          </Reveal>

          <div>
            <SectionBlock index="03" title="Approach" />
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

          <Reveal>
            <SectionBlock index="04" title="Solution">
              <p>{project.solution}</p>
            </SectionBlock>
          </Reveal>

          <Reveal>
            <SectionBlock index="05" title="Outcomes">
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

          <Reveal>
            <SectionBlock index="06" title="What I'd do differently">
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
