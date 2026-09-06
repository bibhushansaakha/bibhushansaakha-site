import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/content/projects";
import { Tag } from "@/components/ui/Tag";
import { TypographicCover } from "@/components/work/TypographicCover";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      data-cursor="hover"
      className="group relative flex flex-col overflow-hidden border hairline bg-paper transition-colors duration-300 hover:border-ink"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden border-b hairline bg-paper-dim">
        {project.coverType === "typographic" ? (
          <div className="h-full w-full transition-transform duration-700 ease-swiss group-hover:scale-[1.04]">
            <TypographicCover
              index=""
              title={project.cover}
              meta={project.coverMeta ?? ""}
              color={project.coverColor}
            />
          </div>
        ) : (
          <Image
            src={project.cover}
            alt=""
            fill
            className="object-cover transition-transform duration-700 ease-swiss group-hover:scale-[1.04]"
            sizes="(min-width: 1024px) 32vw, (min-width: 640px) 45vw, 90vw"
          />
        )}
        <span className="absolute left-3 top-3 border border-ink/10 bg-paper/90 px-2 py-1 font-mono text-[10px] tabular text-muted">
          {String(index + 1).padStart(2, "0")}
        </span>
        {project.status === "paused" && (
          <span className="absolute right-3 top-3 border border-ink/10 bg-paper/90 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-muted">
            Paused
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <Tag className="w-fit">{project.category}</Tag>
        <h3 className="mt-4 text-2xl font-medium tracking-tight text-ink">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.subtitle}</p>
        <div className="mt-6 flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-ink">
          Read the case study
          <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}
