import CantinhoDoSiri from "@/components/CantinhoDoSiri/CantinhoDoSiri";
import CantinhoDoSiriFofinho from "@/components/CantinhoDoSiri/CantinhoDoSiriFofinho";
import Divisor from "@/components/Divisor";
import HeroSection from "@/components/HeroSection/HeroSection";
import ReserveSection from "@/components/ReserveSection/ReserveSection";
import VideoSection from "@/components/VideoSection/VideoSection";

export default function LandingPage() {
  return (
    <section className="relative w-full">
      <HeroSection />
      <ReserveSection />
      <VideoSection />
      <Divisor />
      <CantinhoDoSiri />
      <CantinhoDoSiriFofinho />
    </section>
  );
}
