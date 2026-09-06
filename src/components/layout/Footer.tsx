import Link from "next/link";
import { Mail } from "lucide-react";
import { Container } from "./Container";
import { GithubIcon, LinkedinIcon, InstagramIcon, XIcon } from "@/components/ui/SocialIcons";
import { site } from "@/lib/content/site";

export function Footer() {
  return (
    <footer className="relative z-10 border-t hairline bg-paper">
      <Container>
        <div className="grid grid-cols-1 gap-10 py-16 sm:grid-cols-4">
          <div className="sm:col-span-2">
            <p className="font-mono text-xs uppercase tracking-wider text-muted">
              {site.name}
            </p>
            <p className="mt-3 max-w-xs text-2xl leading-tight">
              Let&apos;s build something that holds up.
            </p>
            <Link
              href="/contact"
              className="prose-underline mt-4 inline-block font-mono text-xs uppercase tracking-wider text-ink"
            >
              Get in touch →
            </Link>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-muted">Index</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/work" className="hover:text-accent">Work</Link></li>
              <li><Link href="/about" className="hover:text-accent">About</Link></li>
              <li><Link href="/now" className="hover:text-accent">Now</Link></li>
              <li><Link href="/contact" className="hover:text-accent">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-muted">Elsewhere</p>
            <div className="mt-4 flex items-center gap-4">
              <Link href={site.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted hover:text-ink" data-cursor="hover">
                <GithubIcon size={18} />
              </Link>
              <Link href={site.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted hover:text-ink" data-cursor="hover">
                <LinkedinIcon size={18} />
              </Link>
              <Link href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted hover:text-ink" data-cursor="hover">
                <InstagramIcon size={18} />
              </Link>
              <Link href={site.social.x} target="_blank" rel="noopener noreferrer" aria-label="X" className="text-muted hover:text-ink" data-cursor="hover">
                <XIcon size={18} />
              </Link>
              <Link href={`mailto:${site.email}`} aria-label="Email" className="text-muted hover:text-ink" data-cursor="hover">
                <Mail size={18} />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t hairline py-6 font-mono text-[11px] uppercase tracking-wider text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {site.name} — Designed &amp; built in Kathmandu</p>
          <p>No template. No theme. Coded by hand.</p>
        </div>
      </Container>
    </footer>
  );
}
