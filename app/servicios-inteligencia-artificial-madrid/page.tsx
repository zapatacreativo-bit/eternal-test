"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSeoMadrid } from "@/components/sections/HeroSeoMadrid";
import { SeoMadridContent } from "@/components/content/SeoMadridContent";

import { SalesCTA } from "@/components/sections/SalesCTA";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { PixelCanvas } from "@/components/ui/pixel-canvas";

export default function ServicesMadridPage() {
    return (
        <main className="min-h-screen bg-[#05050a] selection:bg-cyan-500/30">
            <Navbar />

            <HeroSeoMadrid />

            {/* Main SEO Content */}
            <div className="relative">
                {/* Background beams/grid for content area */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 blur-[100px]" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-900/10 blur-[100px]" />
                </div>

                <div className="relative z-10">
                    <SeoMadridContent />
                </div>
            </div>



            {/* Aggressive CTA Section */}
            <section className="py-24 px-6 relative overflow-hidden bg-black">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,0,0,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-[shimmer_3s_infinite]" />

                <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 font-bold uppercase tracking-widest text-sm"
                    >
                        <Zap className="w-4 h-4" />
                        Solo para empresas ambiciosas
                    </motion.div>

                    <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">
                        DOMINA MADRID O <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">DESAPARECE</span>
                    </h2>

                    <p className="text-xl text-white/60 max-w-2xl mx-auto">
                        Tus competidores ya están automatizando sus ventas. Cada minuto que pasas dudando, ellos ganan cuota de mercado. ¿Vas a permitirlo?
                    </p>

                    <div className="pt-8 flex justify-center">
                        <a
                            href="#contacto"
                            className="group relative inline-flex items-center gap-4 px-12 py-6 bg-white text-black text-xl font-bold uppercase tracking-wide rounded-full hover:bg-white/90 transition-all hover:scale-105 overflow-hidden"
                        >
                            <PixelCanvas
                                gap={6}
                                speed={60}
                                colors={["#ef4444", "#fb923c", "#000000"]}
                                variant="icon"
                                noFocus
                                className="opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                            />
                            <span className="relative z-10 flex items-center gap-4">
                                RESERVAR AUDITORÍA DE EMERGENCIA
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </a>
                    </div>
                </div>
            </section>

            <SalesCTA />
            <Footer />
        </main>
    );
}
