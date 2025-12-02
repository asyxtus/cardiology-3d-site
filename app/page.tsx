// app/page.tsx
import Hero from "./components/Hero";
import ServicesSection from "./sections/ServicesSection";
import PreventiveTimelineSection from "./sections/PreventiveTimelineSection";
import AboutSection from "./sections/AboutSection";
import BookingSection from "./sections/BookingSection";
import ClinicSection from "./sections/ClinicSection";
import FooterSection from "./sections/FooterSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Hero />
      <ServicesSection />
      <PreventiveTimelineSection />
      <AboutSection />
      <ClinicSection />
      <BookingSection />
      <FooterSection />
      {/* Later we will add other sections here */}
    </main>
  );
}
