"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Search, PenTool, Radio, ScanLine, Cpu, Network } from "lucide-react";

const steps = [
    {
        id: "01",
        title: "DISECCIÓN",
        desc: "Mapeo atómico de ineficiencias invisibles.",
        icon: Search,
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/30"
    },
    {
        id: "02",
        title: "ARQUITECTURA",
        desc: "Diseño de la red neuronal de agentes.",
        icon: Network,
        color: "text-purple-400",
        bg: "bg-purple-500/10",
        border: "border-purple-500/30"
    },
    {
        id: "03",
        title: "SIMBIOSIS",
        desc: "Despliegue gradual y aprendizaje continuo.",
        icon: Radio,
        color: "text-green-400",
        bg: "bg-green-500/10",
        border: "border-green-500/30"
    }
];

export function AetherProtocolAnimation() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="w-full h-[600px] relative flex items-center justify-center bg-black/50 overflow-hidden rounded-3xl border border-white/5 my-12">

            {/* Background Grid & Particles */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

            {/* Central Animated Core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-64 h-64 rounded-full border border-dashed border-white/20 flex items-center justify-center"
                >
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        className="w-48 h-48 rounded-full border border-dotted border-primary/30"
                    />
                </motion.div>

                {/* Core Nucleus */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], boxShadow: ["0 0 20px rgba(168,85,247,0)", "0 0 50px rgba(168,85,247,0.5)", "0 0 20px rgba(168,85,247,0)"] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="w-20 h-20 rounded-full bg-black border-2 border-primary flex items-center justify-center shadow-lg relative z-20"
                    >
                        <Cpu className="w-8 h-8 text-primary" />
                    </motion.div>
                </div>
            </div>

            {/* Orbiting Satellites (The Steps) */}
            <div className="absolute inset-0">
                {steps.map((step, index) => {
                    // Position calculations for triangle layout
                    const angle = (index * 120 - 90) * (Math.PI / 180);
                    const radius = 220; // Distance from center
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;

                    return (
                        <motion.div
                            key={step.id}
                            className="absolute top-1/2 left-1/2"
                            style={{ x, y }}
                            initial={{ x: 0, y: 0, opacity: 0 }}
                            animate={{ x, y, opacity: 1 }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                        >
                            {/* Visual Connector Line */}
                            <svg className="absolute top-0 left-0 -z-10 overflow-visible" width="0" height="0">
                                <motion.line
                                    x1={0}
                                    y1={0}
                                    x2={-x} // Point back to center (0 relative to this div is x,y relative to center)
                                    y2={-y}
                                    stroke="rgba(255,255,255,0.1)"
                                    strokeWidth="1"
                                    strokeDasharray="4 4"
                                />
                                <motion.circle
                                    cx={-x * 0.5}
                                    cy={-y * 0.5}
                                    r="2"
                                    fill="white"
                                    animate={{
                                        cx: [-x, 0],
                                        cy: [-y, 0],
                                        opacity: [0, 1, 0]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity, delay: index }}
                                />
                            </svg>

                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                onHoverStart={() => setHoveredIndex(index)}
                                onHoverEnd={() => setHoveredIndex(null)}
                                className={`
                                    relative -translate-x-1/2 -translate-y-1/2 w-64 p-6 
                                    rounded-2xl border backdrop-blur-xl bg-black/80
                                    flex flex-col gap-3 cursor-pointer
                                    ${step.border}
                                    ${hoveredIndex === index ? "z-50 shadow-[0_0_30px_rgba(255,255,255,0.1)]" : "z-10"}
                                `}
                            >
                                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-black border border-white/20 flex items-center justify-center font-mono text-xs text-white">
                                    {step.id}
                                </div>

                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${step.bg}`}>
                                    <step.icon className={`w-5 h-5 ${step.color}`} />
                                </div>

                                <div>
                                    <h4 className="text-lg font-bold text-white">{step.title}</h4>
                                    <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
                                </div>

                                {/* Active Scanner Line */}
                                {hoveredIndex === index && (
                                    <motion.div
                                        layoutId="scanner"
                                        className={`absolute inset-0 bg-gradient-to-b ${step.color.replace('text', 'from')}/10 to-transparent pointer-events-none rounded-2xl`}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <motion.div
                                            className={`w-full h-[2px] ${step.bg.replace('bg-', 'bg-')}`}
                                            animate={{ top: ["0%", "100%"] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                            style={{ position: "absolute" }}
                                        />
                                    </motion.div>
                                )}
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Floating ambient particles */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-primary/30 rounded-full"
                    animate={{
                        x: [Math.random() * 600 - 300, Math.random() * 600 - 300],
                        y: [Math.random() * 600 - 300, Math.random() * 600 - 300],
                        opacity: [0, 0.5, 0]
                    }}
                    transition={{
                        duration: Math.random() * 5 + 5,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            ))}

        </div>
    );
}
