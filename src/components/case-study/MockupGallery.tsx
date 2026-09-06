import Image from "next/image";
import { ReactNode } from "react";
import { RevealGroup } from "@/components/motion/Reveal";

export interface GalleryItem {
  caption: string;
  src?: string;
  mockup?: ReactNode;
}

export function MockupGallery({ items }: { items: GalleryItem[] }) {
  return (
    <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {items.map((item) => (
        <figure key={item.caption} className="border hairline">
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-paper-dim">
            {item.mockup ? (
              item.mockup
            ) : item.src ? (
              <Image
                src={item.src}
                alt={item.caption}
                fill
                className="object-cover"
                sizes="(min-width: 640px) 42vw, 90vw"
              />
            ) : null}
          </div>
          <figcaption className="border-t hairline p-4 font-mono text-xs uppercase tracking-wide text-muted">
            {item.caption}
          </figcaption>
        </figure>
      ))}
    </RevealGroup>
  );
}
