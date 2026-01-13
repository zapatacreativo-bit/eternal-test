"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function VideoSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

    return (
        <section className="py-24 px-6 bg-black">
            <div className="max-w-6xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold">Ver en Acción</h2>
                    <p className="text-muted-foreground">Así es como nuestros Agentes navegan tus sistemas.</p>
                </div>

                <div
                    ref={containerRef}
                    className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl shadow-primary/10 group"
                >
                    <motion.div style={{ y }} className="absolute inset-0 h-[140%] -top-[20%]">
                        <video
                            src="https://davidzapata.es/agencia-de-inteligencia-artificial-en-madrid.webm"
                            className="w-full h-full object-cover"
                            controls={false} // Hide controls to maintain clean parallax look, user can un-mute if needed via custom UI or browser controls, but standard controls break parallax illusion often. Actually user likely wants controls. Let's keep controls but maybe use a wrapper.
                            // If I use controls, parallax might feel weird if clicking.
                            // Let's stick to the requested "video in parallax". 
                            // Usually parallax videos are backgrounds. 
                            // If it has controls, it's an interactive player. 
                            // The user previously asked specifically for the video to loop/autoplay/muted.
                            // So it acts more like a background.
                            playsInline
                            preload="metadata"
                            loop
                            muted
                            autoPlay
                        >
                            Tu navegador no soporta la reproducción de videos.
                        </video>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
