import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Tag } from "@/components/ui/Tag";
import { ProjectMockup } from "@/components/work/MockupRegistry";
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
    openGraph: {
      title: project.title,
      description: project.summary,
    },
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
    <article className="py-16 sm:py-24">
      <Container size="narrow">
        <Link
          href="/work"
          className="inline-flex items-center gap-1.5 text-sm text-ink-500 hover:text-ink-900"
        >
          <ArrowLeft size={15} /> All work
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          <Tag>{project.category}</Tag>
          {project.status === "paused" && (
            <span className="rounded-full bg-ink-100 px-3 py-1 text-xs font-medium text-ink-500">
              Paused
            </span>
          )}
        </div>

        <h1 className="mt-4 font-display text-4xl text-ink-900 sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-3 text-xl text-ink-500">{project.subtitle}</p>

        <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-2 border-y border-ink-100 py-5 text-sm">
          <div>
            <dt className="text-ink-400">Role</dt>
            <dd className="mt-0.5 font-medium text-ink-800">{project.role}</dd>
          </div>
          <div>
            <dt className="text-ink-400">Timeframe</dt>
            <dd className="mt-0.5 font-medium text-ink-800">{project.timeframe}</dd>
          </div>
        </dl>
      </Container>

      <Container size="narrow" className="mt-10">
        <ProjectMockup name={project.mockup} />
      </Container>

      <Container size="narrow" className="mt-14 space-y-14">
        <section>
          <h2 className="font-display text-2xl text-ink-900">Context</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-600">
            {project.context}
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-ink-900">The problem</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-600">
            {project.problem}
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-ink-900">Approach</h2>
          <ol className="mt-6 space-y-6">
            {project.approach.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-ink-900 font-mono text-xs text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-medium text-ink-900">{step.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-ink-500">
                    {step.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="font-display text-2xl text-ink-900">
            Key decisions
          </h2>
          <div className="mt-6 space-y-4">
            {project.decisions.map((decision) => (
              <div
                key={decision.title}
                className="rounded-xl border border-ink-100 bg-white p-5"
              >
                <h3 className="font-medium text-ink-900">{decision.title}</h3>
                <p className="mt-1.5 leading-relaxed text-ink-500">
                  {decision.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl text-ink-900">Outcome</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-600">
            {project.outcome}
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl text-ink-900">Stack</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
        </section>

        {project.confidentialityNote && (
          <p className="border-t border-ink-100 pt-6 text-sm italic text-ink-400">
            {project.confidentialityNote}
          </p>
        )}
      </Container>

      <Container size="narrow" className="mt-20">
        <Link
          href={`/work/${next.slug}`}
          className="group flex items-center justify-between rounded-2xl border border-ink-100 bg-white p-6 transition-colors hover:border-ink-300"
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-ink-400">
              Next case study
            </p>
            <p className="mt-1 font-display text-xl text-ink-900">
              {next.title}
            </p>
          </div>
          <ArrowRight
            size={20}
            className="text-ink-400 transition-transform group-hover:translate-x-1"
          />
        </Link>
      </Container>
    </article>
  );
}
