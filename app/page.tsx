import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ParallaxHero } from "@/components/sections/ParallaxHero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { TechAuthority } from "@/components/sections/TechAuthority";
import { VideoSection } from "@/components/sections/VideoSection";
import { FlowDiagram } from "@/components/sections/FlowDiagram";
import { FunnelContainer } from "@/components/funnel/FunnelContainer";
import { SalesCTA } from "@/components/sections/SalesCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navbar />

      {/* 1. Hero with Parallax Background */}
      <ParallaxHero />

      {/* 2. Detailed Services Grid */}
      <ServicesGrid />

      {/* 3. "Wow" Flow Animation (Kept from MVP) */}
      <FlowDiagram />

      {/* 4. Deep Dive Technical Authority Content */}
      <TechAuthority />

      {/* 5. Interactive Funnel (Core Feature) */}
      <FunnelContainer />

      {/* 6. Video Proof Section */}
      <VideoSection />

      {/* 7. Final Sales Call to Action */}
      <SalesCTA />

      {/* 8. Footer with Links */}
      <Footer />
    </main>
  );
}
