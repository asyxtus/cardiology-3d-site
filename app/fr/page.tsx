// app/fr/page.tsx
import HeroFr from "@/app/components/HeroFr"; // keep same hero for now
import ServicesSectionFr from "@/app/sections/ServicesSectionFr";
import PreventiveTimelineSectionFr from "@/app/sections/PreventiveTimelineSectionFr";
import AboutSectionFr from "@/app/sections/AboutSectionFr";
import ClinicSectionFr from "@/app/sections/ClinicSectionFr";
import BookingSectionFr from "@/app/sections/BookingSectionFr";
import FooterSectionFr from "@/app/sections/FooterSectionFr";

export default function FrenchHomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <HeroFr />
      <ServicesSectionFr />
      <PreventiveTimelineSectionFr />
      <AboutSectionFr />
      <ClinicSectionFr />
      <BookingSectionFr />
      <FooterSectionFr />
    </main>
  );
}
