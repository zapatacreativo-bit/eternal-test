"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

export function ParallaxHero() {
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
                <Image
                    src="/hero-bg.png"
                    alt="Neural Network Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" />
                <div className="absolute inset-0 bg-linear-to-b from-black/0 via-black/20 to-background" />
            </motion.div>

            <div className="relative z-10 text-center max-w-5xl px-6 space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
                >
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-white/80">La Nueva Era de la Automatización</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-8xl font-bold tracking-tight leading-none"
                >
                    <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">ESCALA</span>
                    <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-purple-400 to-cyan-400 animate-pulse">
                        SIN LÍMITES
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed"
                >
                    Diseñamos ecosistemas de Agentes IA que operan tu negocio.
                    <br className="hidden md:block" />
                    De la ineficiencia humana a la <span className="text-white font-semibold">Soberanía Digital</span>.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <Button
                        size="lg"
                        onClick={() => document.getElementById('blueprint-funnel')?.scrollIntoView({ behavior: 'smooth' })}
                        className="h-16 px-10 text-lg bg-primary hover:bg-primary/90 rounded-full shadow-[0_0_30px_-5px_var(--color-primary)] transition-shadow"
                    >
                        Calcula Nuestro Potencial
                        <ArrowRight className="ml-2 w-6 h-6" />
                    </Button>
                    <Button size="lg" variant="outline" className="h-16 px-10 text-lg text-white border-white/20 hover:bg-white/10 rounded-full backdrop-blur-md">
                        Ver Casos de Éxito
                    </Button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-widest text-white/50">Scroll</span>
                <div className="w-[1px] h-16 bg-linear-to-b from-transparent via-primary to-transparent" />
            </motion.div>

        </section>
    );
}
