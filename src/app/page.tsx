import { Hero } from "@/components/home/Hero";
import { QuickAccess } from "@/components/home/QuickAccess";
import { Services } from "@/components/home/Services";
import { About } from "@/components/home/About";
import { Doctors } from "@/components/home/Doctors";
import { Testimonials } from "@/components/home/Testimonials";
import { ContactSection } from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickAccess />
      <Services />
      <About />
      <Doctors />
      <Testimonials />
      <ContactSection />
    </>
  );
}
