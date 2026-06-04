
import HeroSection from "@/components/layout/home/HeroSection";
import FeaturedWorks from "@/components/layout/home/FeaturedWorks";
import ExhibitionHighlight from "@/components/layout/home/ExhibitionHighlight";


export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[#1C1B22] text-[#EDEDED] overflow-hidden">

      <HeroSection />

      <FeaturedWorks />

      <ExhibitionHighlight />

    </main>
  );
}

