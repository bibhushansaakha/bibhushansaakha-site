import type { Metadata } from "next";
import { Mail, Phone, CalendarClock } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ContactCard } from "@/components/contact/ContactCard";
import { GithubIcon, LinkedinIcon, InstagramIcon, XIcon } from "@/components/ui/SocialIcons";
import { site } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Bibhushan Saakha.",
};

export default function ContactPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container size="narrow">
        <p className="text-xs font-medium uppercase tracking-widest text-accent">
          Contact
        </p>
        <h1 className="mt-3 font-display text-4xl text-ink-900 sm:text-5xl">
          Let&apos;s talk
        </h1>
        <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-500">
          I&apos;m always happy to hear from people building interesting
          things, whether that&apos;s a role, a project, or just a good
          conversation about design and frontend work.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <ContactCard
            icon={<Mail size={18} />}
            label="Email"
            value={site.email}
            href={`mailto:${site.email}`}
          />
          <ContactCard
            icon={<Phone size={18} />}
            label="Phone"
            value={site.phone}
            href={`tel:${site.phoneHref}`}
          />
          <ContactCard
            icon={<CalendarClock size={18} />}
            label="Quick chat, 10 min"
            value="Book an intro call"
            href={site.booking.quick}
          />
          <ContactCard
            icon={<CalendarClock size={18} />}
            label="In-depth talk, 30 min"
            value="Book a deeper conversation"
            href={site.booking.deep}
          />
        </div>

        <div className="mt-12">
          <p className="text-xs font-medium uppercase tracking-widest text-ink-400">
            Elsewhere
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink-200 px-4 py-2 text-sm text-ink-700 hover:border-ink-400"
            >
              <LinkedinIcon size={16} /> LinkedIn
            </a>
            <a
              href={site.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink-200 px-4 py-2 text-sm text-ink-700 hover:border-ink-400"
            >
              <GithubIcon size={16} /> GitHub
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink-200 px-4 py-2 text-sm text-ink-700 hover:border-ink-400"
            >
              <InstagramIcon size={16} /> Instagram
            </a>
            <a
              href={site.social.x}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink-200 px-4 py-2 text-sm text-ink-700 hover:border-ink-400"
            >
              <XIcon size={16} /> X
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
