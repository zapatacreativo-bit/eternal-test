import { ParallaxHero } from "@/components/sections/ParallaxHero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { TechAuthority } from "@/components/sections/TechAuthority";
import { WorkflowSimulation } from "@/components/sections/WorkflowSimulation";
import { FlowDiagram } from "@/components/sections/FlowDiagram";
import { FunnelContainer } from "@/components/funnel/FunnelContainer";
import { SalesCTA } from "@/components/sections/SalesCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20">

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

      {/* 6. Motion Simulation Section */}
      <WorkflowSimulation />

      {/* 7. Final Sales Call to Action */}
      <SalesCTA />
    </main>
  );
}
