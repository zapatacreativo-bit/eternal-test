import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { FlowDiagram } from "@/components/sections/FlowDiagram";
import { FunnelContainer } from "@/components/funnel/FunnelContainer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* "Wow" Animation Section */}
      <FlowDiagram />

      {/* Funnel Section (The Core Interaction) */}
      <FunnelContainer />

      {/* Footer / Trust Section */}
      <footer className="py-12 text-center text-muted-foreground border-t border-white/5 bg-black/20">
        <p className="text-sm">© 2024 AETHER Intelligence. All rights reserved.</p>
      </footer>
    </main>
  );
}
