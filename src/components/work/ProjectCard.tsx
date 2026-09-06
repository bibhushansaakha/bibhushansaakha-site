import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/lib/content/projects";
import { Tag } from "@/components/ui/Tag";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex flex-col justify-between rounded-2xl border border-ink-100 bg-white p-6 transition-all hover:-translate-y-1 hover:border-ink-300 hover:shadow-lg"
    >
      <div>
        <div className="mb-3 flex items-center justify-between">
          <Tag>{project.category}</Tag>
          {project.status === "paused" && (
            <span className="text-xs font-medium text-ink-400">Paused</span>
          )}
        </div>
        <h3 className="font-display text-2xl text-ink-900">{project.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-500">
          {project.subtitle}
        </p>
      </div>
      <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-ink-900">
        Read the case study
        <ArrowUpRight
          size={16}
          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </div>
    </Link>
  );
}
