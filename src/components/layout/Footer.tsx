import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { Container } from "./Container";
import { site } from "@/lib/content/site";

export function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-ink-50">
      <Container>
        <div className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-base text-ink-900">
              {site.name}
            </p>
            <p className="mt-1 text-sm text-ink-500">
              {site.role} &middot; {site.location}
            </p>
          </div>

          <div className="flex items-center gap-5">
            <Link
              href={site.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-ink-500 transition-colors hover:text-ink-900"
            >
              <GithubIcon size={20} />
            </Link>
            <Link
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-ink-500 transition-colors hover:text-ink-900"
            >
              <LinkedinIcon size={20} />
            </Link>
            <Link
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-ink-500 transition-colors hover:text-ink-900"
            >
              <InstagramIcon size={20} />
            </Link>
            <Link
              href={`mailto:${site.email}`}
              aria-label="Email"
              className="text-ink-500 transition-colors hover:text-ink-900"
            >
              <Mail size={20} />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-ink-100 py-6 text-xs text-ink-400 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {site.name}. Built from scratch with Next.js.</p>
          <p>Designed and coded in Kathmandu, Nepal.</p>
        </div>
      </Container>
    </footer>
  );
}
