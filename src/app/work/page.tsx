import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ProjectCard } from "@/components/work/ProjectCard";
import { projects } from "@/lib/content/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies in product design and frontend engineering, from Tigg's point-of-sale platform to independent design explorations.",
};

export default function WorkPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <p className="text-xs font-medium uppercase tracking-widest text-accent">
          Work
        </p>
        <h1 className="mt-3 max-w-2xl font-display text-4xl text-ink-900 sm:text-5xl">
          Case studies, not a screenshot gallery
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-500">
          Each project below covers the actual problem, the process, and the
          decisions behind it, not just the finished screen.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
