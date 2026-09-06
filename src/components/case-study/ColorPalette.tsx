export interface PaletteColor {
  name: string;
  hex: string;
}

export function ColorPalette({ colors }: { colors: PaletteColor[] }) {
  return (
    <div className="grid grid-cols-2 gap-px border hairline bg-line sm:grid-cols-4">
      {colors.map((c) => (
        <div key={c.hex} className="bg-paper p-5">
          <div className="aspect-square w-full border hairline" style={{ backgroundColor: c.hex }} />
          <p className="mt-3 text-sm font-medium text-ink">{c.name}</p>
          <p className="font-mono text-xs uppercase text-muted">{c.hex}</p>
        </div>
      ))}
    </div>
  );
}
