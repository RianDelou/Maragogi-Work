import CantinhoDoSiri from "@/components/CantinhoDoSiri/CantinhoDoSiri";
import CantinhoDoSiriFofinho from "@/components/CantinhoDoSiri/CantinhoDoSiriFofinho";
import Cardss from "@/components/Cardss/Cardss";
import Divisor from "@/components/Divisor";
import DivisorTwo from "@/components/DivisorTwo";
import HeroSection from "@/components/HeroSection/HeroSection";
import ReserveSection from "@/components/ReserveSection/ReserveSection";
import Slider from "@/components/Slider/Slider";
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
      <DivisorTwo></DivisorTwo>
      <Cardss></Cardss>
      <Slider></Slider>
    </section>
  );
}
