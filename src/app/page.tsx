import { Hero } from "@/components/home/Hero";
import { CredibilityStrip } from "@/components/home/CredibilityStrip";
import { SelectedWork } from "@/components/home/SelectedWork";
import { NowPreview } from "@/components/home/NowPreview";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CredibilityStrip />
      <SelectedWork />
      <NowPreview />
      <ContactCTA />
    </>
  );
}
