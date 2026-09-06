"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/content/site";

export function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from("[data-hero-eyebrow]", { opacity: 0, y: 12, duration: 0.6 })
        .from("[data-hero-title] span", { opacity: 0, y: "100%", duration: 0.8, stagger: 0.04 }, "-=0.3")
        .from("[data-hero-role]", { opacity: 0, y: 16, duration: 0.6 }, "-=0.4")
        .from("[data-hero-copy]", { opacity: 0, y: 16, duration: 0.6 }, "-=0.45")
        .from("[data-hero-cta] > *", { opacity: 0, y: 12, duration: 0.5, stagger: 0.08 }, "-=0.4")
        .from("[data-hero-photo]", { opacity: 0, scale: 0.96, duration: 1 }, "-=0.9");
    }, rootRef);
    return () => ctx.revert();
  }, []);

  const title = "Bibhushan Saakha";

  return (
    <section ref={rootRef} className="relative overflow-hidden pt-14 sm:pt-20">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p data-hero-eyebrow className="mb-6 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted">
              <span className="h-1.5 w-1.5 bg-accent" />
              {site.location} — Available for select work
            </p>

            <h1
              data-hero-title
              className="overflow-hidden text-display-1 font-medium tracking-tight text-ink"
              aria-label={title}
            >
              {title.split(" ").map((word, wi) => (
                <span key={wi} className="mr-4 inline-block overflow-hidden last:mr-0">
                  <span className="inline-block">{word}</span>
                </span>
              ))}
            </h1>

            <p data-hero-role className="mt-6 text-2xl text-muted sm:text-3xl">
              {site.role}
            </p>

            <p data-hero-copy className="mt-6 max-w-xl text-lg leading-relaxed text-ink/80">
              {site.tagline} I move between Figma and code myself, currently
              at Tigg, so what ships stays close to what was actually designed.
            </p>

            <div data-hero-cta className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="/work">View Work</Button>
              <Button href="/contact" variant="secondary">Get in touch</Button>
            </div>
          </div>

          <div data-hero-photo className="relative lg:col-span-4">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-xs border hairline bg-paper-dim sm:max-w-sm">
              <Image
                src="/photos/portrait-halo.png"
                alt="Portrait of Bibhushan Saakha"
                fill
                priority
                className="object-cover object-top grayscale"
                sizes="(min-width: 1024px) 24vw, 60vw"
              />
            </div>
            <p className="mt-3 text-center font-mono text-[11px] uppercase tracking-wider text-muted">
              Kathmandu, Nepal
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
