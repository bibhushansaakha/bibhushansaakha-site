import { Hero } from "@/components/home/Hero";
import { CredibilityStrip } from "@/components/home/CredibilityStrip";
import { SelectedWork } from "@/components/home/SelectedWork";
import { NowPreview } from "@/components/home/NowPreview";
import { ContactCTA } from "@/components/home/ContactCTA";
import { GridLines } from "@/components/ui/GridLines";

export default function HomePage() {
  return (
    <>
      <GridLines />
      <Hero />
      <CredibilityStrip />
      <SelectedWork />
      <NowPreview />
      <ContactCTA />
    </>
  );
}
