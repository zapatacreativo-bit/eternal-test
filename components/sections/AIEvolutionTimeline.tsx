"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Bot, Brain, Cpu, Globe, MessageSquare, Sparkles, Zap } from "lucide-react";

const milestones = [
    {
        year: "2017",
        title: "Transformer Architecture",
        desc: "Google publica 'Attention Is All You Need', naciendo la base de la IA moderna.",
        icon: Cpu,
        color: "text-blue-400"
    },
    {
        year: "2020",
        title: "GPT-3 & Large Models",
        desc: "Los LLMs demuestran capacidades de generalización textual sin precedentes.",
        icon: Globe,
        color: "text-purple-400"
    },
    {
        year: "2022",
        title: "ChatGPT Revolution",
        desc: "La IA generativa se democratiza globalmente con interfaces conversacionales.",
        icon: MessageSquare,
        color: "text-green-400"
    },
    {
        year: "2024",
        title: "Multimodalidad",
        desc: "La IA ve, escucha y habla con fluidez nativa en tiempo real.",
        icon: Sparkles,
        color: "text-yellow-400"
    },
    {
        year: "2026",
        title: "Agentes Autónomos",
        desc: "Sistemas que razonan, planifican y actúan en el mundo real sin supervisión.",
        icon: Bot,
        color: "text-primary"
    }
];

export function AIEvolutionTimeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    return (
        <section ref={containerRef} className="py-20 relative overflow-hidden">
            <h2 className="text-4xl font-bold text-center text-white mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-primary">
                Evolución de la Inteligencia: 2017-2026
            </h2>

            {/* Central Progress Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white/10 -translate-x-1/2 hidden md:block">
                <motion.div
                    style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
                    className="w-full h-full bg-gradient-to-b from-blue-500 via-purple-500 to-primary"
                />
            </div>

            <div className="max-w-6xl mx-auto relative">
                {milestones.map((item, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: isEven ? -50 : 50, rotateX: -15 }}
                            whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
                            viewport={{ margin: "-100px" }}
                            transition={{ duration: 0.8, type: "spring" }}
                            className={`flex flex-col md:flex-row items-center gap-8 mb-20 ${isEven ? 'md:flex-row-reverse' : ''}`}
                        >
                            {/* Card Side */}
                            <div className="flex-1 w-full md:w-auto pl-6 md:pl-0">
                                <div className={`relative p-6 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-xl group hover:-translate-y-2 transition-transform duration-300 shadow-2xl`}>
                                    {/* 3D Glow Effect */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color.replace('text', 'from')} to-transparent opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`} />

                                    <h3 className={`text-4xl font-black mb-2 opacity-20 ${item.color}`}>{item.year}</h3>
                                    <h4 className="text-2xl font-bold text-white mb-2">{item.title}</h4>
                                    <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>

                            {/* Center Icon */}
                            <div className="relative z-10 shrink-0">
                                <motion.div
                                    whileHover={{ scale: 1.2, rotate: 360 }}
                                    transition={{ duration: 0.5 }}
                                    className={`w-16 h-16 rounded-full bg-black border-2 border-white/20 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.1)] ${item.color}`}
                                >
                                    <item.icon className="w-8 h-8" />
                                </motion.div>
                            </div>

                            {/* Empty Side for layout balance */}
                            <div className="flex-1 hidden md:block" />
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
