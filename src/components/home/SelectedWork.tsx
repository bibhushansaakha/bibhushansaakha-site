import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/work/ProjectCard";
import { Button } from "@/components/ui/Button";
import { getFeaturedProjects } from "@/lib/content/projects";

export function SelectedWork() {
  const projects = getFeaturedProjects().slice(0, 4);

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Selected work"
            title="Case studies"
            description="A few projects, told in enough detail to actually be useful, not just a gallery of screenshots."
          />
          <Button href="/work" variant="secondary">
            View all work
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
