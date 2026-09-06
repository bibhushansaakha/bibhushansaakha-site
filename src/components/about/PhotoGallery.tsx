import Image from "next/image";
import { RevealGroup } from "@/components/motion/Reveal";

const photos = [
  { src: "/photos/candid-street.jpg", caption: "Kathmandu, on the way somewhere", span: "row-span-1" },
  { src: "/photos/ubucon-camera.jpg", caption: "UbuCon Asia, shooting the event", span: "row-span-2" },
  { src: "/photos/cubing-execution.png", caption: "Blindfolded, mid-solve, timer running", span: "row-span-1" },
  { src: "/photos/friendly-headshot.png", caption: "A more ordinary Tuesday", span: "row-span-1" },
];

export function PhotoGallery() {
  return (
    <RevealGroup className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {photos.map((photo) => (
        <div
          key={photo.src}
          className={`group relative overflow-hidden border hairline bg-paper-dim ${
            photo.span === "row-span-2" ? "row-span-2 aspect-[3/4]" : "aspect-square"
          }`}
        >
          <Image
            src={photo.src}
            alt={photo.caption}
            fill
            className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
            sizes="(min-width: 640px) 22vw, 45vw"
          />
          <div className="absolute inset-x-0 bottom-0 translate-y-full bg-paper/95 p-2 transition-transform duration-300 group-hover:translate-y-0">
            <p className="font-mono text-[10px] uppercase tracking-wide text-muted">{photo.caption}</p>
          </div>
        </div>
      ))}
    </RevealGroup>
  );
}
