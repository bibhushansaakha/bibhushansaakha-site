const skillGroups = [
  { label: "Design", items: ["Figma", "UI/UX Design", "Design Systems", "Prototyping"] },
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GSAP"] },
  { label: "Also comfortable with", items: ["Node.js", "Flutter", "Python", "Supabase"] },
  { label: "Tools", items: ["Git", "GitHub", "Cursor", "Vercel", "Chakra UI"] },
];

export function SkillsGrid() {
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
      {skillGroups.map((group) => (
        <div key={group.label} className="border-t hairline pt-4">
          <p className="font-mono text-xs uppercase tracking-wider text-muted">{group.label}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span key={item} className="border hairline px-3 py-1.5 text-sm text-ink">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
