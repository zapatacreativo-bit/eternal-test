"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, MapPin } from "lucide-react";
import Image from "next/image";
import { PixelCanvas } from "@/components/ui/pixel-canvas";

export function HeroSeoMadrid() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">

            {/* Parallax Background */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                {/* Reusing the same hero bg or we could ask for a new madrid one. Using hero-bg for consistency */}
                <Image
                    src="/hero-bg.png"
                    alt="Inteligencia Artificial en Madrid"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" />
                <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/40 to-[#05050a]" />
            </motion.div>

            <div className="relative z-10 text-center max-w-5xl px-6 space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/30 backdrop-blur-md"
                >
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm font-bold text-cyan-200 uppercase tracking-widest">Agencia IA en Madrid</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight leading-tight"
                >
                    <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">SERVICIOS DE</span>
                    <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-purple-500 to-pink-500 animate-pulse">
                        INTELIGENCIA ARTIFICIAL
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed"
                >
                    Transformamos empresas en Madrid con <span className="text-cyan-300 font-semibold">Agentes Autónomos</span> y <span className="text-purple-300 font-semibold">Automatización Cognitiva</span>.
                    <br className="hidden md:block" />
                    El futuro de tu negocio empieza aquí, en la capital de la innovación.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <Button
                        size="lg"
                        className="group relative h-16 px-10 text-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-full backdrop-blur-md transition-all hover:scale-105 overflow-hidden"
                        onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        <PixelCanvas
                            gap={10}
                            speed={35}
                            colors={["#22d3ee", "#e879f9", "#ffffff"]}
                            variant="icon"
                            noFocus
                            className="opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                        />
                        <div className="relative z-10 flex items-center">
                            Solicitar Consultoría Madrid
                            <ArrowRight className="ml-2 w-6 h-6" />
                        </div>
                    </Button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-16 bg-linear-to-b from-transparent via-cyan-500 to-transparent" />
            </motion.div>

        </section>
    );
}
