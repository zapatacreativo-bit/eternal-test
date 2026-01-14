import { ParallaxHero } from "@/components/sections/ParallaxHero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { TechAuthority } from "@/components/sections/TechAuthority";
import { WorkflowSimulation } from "@/components/sections/WorkflowSimulation";
import { FlowDiagram } from "@/components/sections/FlowDiagram";
import { FunnelContainer } from "@/components/funnel/FunnelContainer";
import { SalesCTA } from "@/components/sections/SalesCTA";
import { LogoCloud } from "@/components/ui/logo-cloud";

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

      {/* 7. Trusted By - Logo Cloud */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-background/50 pointer-events-none" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Empresas que <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Automatizan</span> con Nosotros
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
        </div>
        <LogoCloud logos={logos} />
      </section>

      {/* 8. Final Sales Call to Action */}
      <SalesCTA />
    </main>
  );
}

const logos = [
  { src: "https://svgl.app/library/nvidia-wordmark-light.svg", alt: "Nvidia" },
  { src: "https://svgl.app/library/supabase_wordmark_light.svg", alt: "Supabase" },
  { src: "https://svgl.app/library/openai_wordmark_light.svg", alt: "OpenAI" },
  { src: "https://svgl.app/library/vercel_wordmark.svg", alt: "Vercel" },
  { src: "https://svgl.app/library/github_wordmark_light.svg", alt: "GitHub" },
  { src: "https://svgl.app/library/stripe.svg", alt: "Stripe" },
  { src: "https://svgl.app/library/google_wordmark.svg", alt: "Google" },
  { src: "https://svgl.app/library/aws.svg", alt: "AWS" },
];
