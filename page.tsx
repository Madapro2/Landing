import { Hero } from "@/components/Hero";
import { MediaSection } from "@/components/MediaSection";
import { Benefits } from "@/components/Benefits";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <MediaSection />
      <Benefits />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
