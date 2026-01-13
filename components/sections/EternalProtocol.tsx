"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Search, PenTool, Box, Rocket, ChevronRight, Check } from "lucide-react";

const steps = [
    {
        id: 1,
        title: "Observación",
        desc: "Análisis de patrones manuales y minería de procesos.",
        icon: Search,
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/30"
    },
    {
        id: 2,
        title: "Arquitectura",
        desc: "Diseño de herramientas cognitivas (RAG, APIs, Memoria).",
        icon: PenTool,
        color: "text-purple-400",
        bg: "bg-purple-500/10",
        border: "border-purple-500/30"
    },
    {
        id: 3,
        title: "Sandbox",
        desc: "Entrenamiento supervisado en entorno simulado seguro.",
        icon: Box,
        color: "text-yellow-400",
        bg: "bg-yellow-500/10",
        border: "border-yellow-500/30"
    },
    {
        id: 4,
        title: "Despliegue",
        desc: "Activación gradual de la autonomía operativa.",
        icon: Rocket,
        color: "text-green-400",
        bg: "bg-green-500/10",
        border: "border-green-500/30"
    }
];

export function EternalProtocol() {
    const [hoveredStep, setHoveredStep] = useState<number | null>(null);

    return (
        <section className="w-full">
            <div className="relative grid grid-cols-1 md:grid-cols-4 gap-4">

                {/* Connecting Line (Desktop) */}
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent hidden md:block -z-10" />

                {steps.map((step, index) => (
                    <motion.div
                        key={step.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        onHoverStart={() => setHoveredStep(index)}
                        onHoverEnd={() => setHoveredStep(null)}
                        className={`relative p-6 rounded-2xl border ${step.border} ${step.bg} backdrop-blur-sm cursor-pointer group h-full flex flex-col justify-between overflow-hidden`}
                    >
                        {/* Hover Glow Effect */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${step.color.replace('text', 'from')} to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                        <div>
                            <div className="flex justify-between items-start mb-4">
                                <div className={`w-12 h-12 rounded-xl bg-black/50 border border-white/10 flex items-center justify-center ${step.color} shadow-lg group-hover:scale-110 transition-transform`}>
                                    <step.icon className="w-6 h-6" />
                                </div>
                                <span className="text-4xl font-bold text-white/5 group-hover:text-white/10 transition-colors">
                                    0{step.id}
                                </span>
                            </div>

                            <h3 className={`text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${step.color.replace('text', 'from')} group-hover:to-white transition-all`}>
                                {step.title}
                            </h3>

                            <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                {step.desc}
                            </p>
                        </div>

                        {/* Interactive Status Indicator */}
                        <div className="mt-6 flex items-center gap-2 text-xs font-mono text-gray-500">
                            <div className={`w-2 h-2 rounded-full ${index === hoveredStep ? 'bg-green-400 animate-pulse' : 'bg-gray-700'}`} />
                            {index === hoveredStep ? "ACTIVE NODE" : "STANDBY"}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
