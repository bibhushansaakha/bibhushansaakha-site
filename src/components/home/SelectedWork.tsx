import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RevealGroup } from "@/components/motion/Reveal";
import { ProjectCard } from "@/components/work/ProjectCard";
import { Button } from "@/components/ui/Button";
import { getFeaturedProjects } from "@/lib/content/projects";

export function SelectedWork() {
  const projects = getFeaturedProjects();

  return (
    <section className="relative z-10 py-24 sm:py-32">
      <Container>
        <SectionLabel index="01" title="Selected work" />

        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <h2 className="max-w-2xl text-display-2 font-medium tracking-tight text-ink">
            Case studies, not a screenshot gallery
          </h2>
          <Button href="/work" variant="secondary">All work</Button>
        </div>

        <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
