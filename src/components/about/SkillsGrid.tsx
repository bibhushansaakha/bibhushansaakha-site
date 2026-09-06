const skillGroups = [
  {
    label: "Design",
    items: ["Figma", "UI/UX Design", "Design Systems", "Prototyping"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    label: "Also comfortable with",
    items: ["Node.js", "Flutter", "Python"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "Cursor", "Vercel", "Webflow"],
  },
];

export function SkillsGrid() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
      {skillGroups.map((group) => (
        <div key={group.label}>
          <p className="text-xs font-medium uppercase tracking-widest text-ink-400">
            {group.label}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span
                key={item}
                className="rounded-full border border-ink-200 bg-white px-3 py-1.5 text-sm text-ink-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
