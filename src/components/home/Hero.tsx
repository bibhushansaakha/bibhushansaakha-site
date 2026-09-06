import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { site } from "@/lib/content/site";
import { MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-16 sm:pt-24">
      <Container>
        <div className="max-w-3xl animate-fade-up">
          <p className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-ink-200 bg-white px-3 py-1 text-xs font-medium text-ink-500">
            <MapPin size={12} /> {site.location}
          </p>
          <h1 className="font-display text-4xl leading-[1.1] text-ink-900 sm:text-6xl">
            {site.name}
          </h1>
          <p className="mt-4 text-xl text-ink-600 sm:text-2xl">{site.role}</p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-500">
            {site.tagline}
          </p>
          <p className="mt-3 text-base text-ink-400">
            Currently at Tigg &middot; {site.location}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/work">View Work</Button>
            <Button href="/contact" variant="secondary">
              Get in touch
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
