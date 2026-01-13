"use client";

import { motion } from "framer-motion";
import { Database, Bot, Zap, CheckCircle, FileJson, Cpu, Send } from "lucide-react";

export function FlowDiagram() {
    return (
        <section className="py-32 px-6 overflow-hidden bg-black/40 relative">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />

            <div className="max-w-5xl mx-auto text-center mb-24">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
                >
                    Automatización <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-purple-400 to-cyan-400">Cognitiva</span>
                </motion.h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    De datos crudos a decisiones ejecutadas en milisegundos.
                </p>
            </div>

            <div className="relative max-w-6xl mx-auto">
                {/* Connecting Beam Container */}
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2 z-0">
                    {/* Animated Beam */}
                    <motion.div
                        initial={{ scaleX: 0, originX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="h-full w-full bg-linear-to-r from-transparent via-primary to-transparent shadow-[0_0_20px_2px_var(--color-primary)]"
                    />
                    {/* Travelling Particles */}
                    <motion.div
                        animate={{ x: ["0%", "100%"] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                        className="absolute top-1/2 -translate-y-1/2 w-20 h-[3px] bg-white blur-[2px] shadow-[0_0_10px_white]"
                    />
                    <motion.div
                        animate={{ x: ["0%", "100%"] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "linear", delay: 1.5 }}
                        className="absolute top-1/2 -translate-y-1/2 w-20 h-[3px] bg-cyan-400 blur-[2px]"
                    />
                </div>

                {/* Steps Container */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
                    <FlowCard
                        icon={Database}
                        label="Ingesta de Datos"
                        sub="APIs, SQL, Docs"
                        color="text-blue-400"
                        delay={0.2}
                        align="start"
                    />
                    <FlowCard
                        icon={Cpu}
                        label="Razonamiento"
                        sub="GPT-4 + Contexto"
                        color="text-purple-400"
                        delay={0.6}
                        align="center"
                        isMain
                    />
                    <FlowCard
                        icon={Zap}
                        label="Ejecución"
                        sub="Function Calling"
                        color="text-yellow-400"
                        delay={1.0}
                        align="center"
                    />
                    <FlowCard
                        icon={Send}
                        label="Entrega"
                        sub="Webhook, Email, CRM"
                        color="text-green-400"
                        delay={1.4}
                        align="end"
                    />
                </div>
            </div>
        </section>
    );
}

function FlowCard({ icon: Icon, label, sub, delay, isMain, color, align }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay, type: "spring", stiffness: 100 }}
            className={`flex flex-col gap-6 group relative ${align === 'start' ? 'md:items-start' : align === 'end' ? 'md:items-end' : 'md:items-center'} items-center`}
        >
            {/* Floating Connection Dot */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-black border-2 border-white/20 rounded-full z-0 group-hover:border-primary group-hover:scale-150 transition-all duration-500 hidden md:block" />

            {/* Card Content */}
            <div className={`
                relative z-10 p-6 rounded-2xl 
                bg-black/80 backdrop-blur-xl border border-white/10
                group-hover:border-white/30 group-hover:bg-white/5
                transition-all duration-500 w-full max-w-[240px]
                ${isMain ? "shadow-[0_0_50px_-10px_rgba(168,85,247,0.4)] border-purple-500/30 scale-110" : "shadow-lg"}
            `}>
                <div className="flex flex-col items-center text-center gap-4">
                    <div className={`
                        w-16 h-16 rounded-xl flex items-center justify-center 
                        bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-500
                        ${isMain ? "bg-purple-500/10 border-purple-500/50" : ""}
                    `}>
                        <Icon className={`w-8 h-8 ${color} ${isMain ? "animate-pulse" : ""}`} />
                    </div>

                    <div>
                        <h3 className="font-bold text-lg text-white group-hover:text-primary transition-colors">
                            {label}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                            {sub}
                        </p>
                    </div>
                </div>

                {/* Animated Border Gradient */}
                <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </div>

            {/* Connector Line (Vertical for Mobile) */}
            <div className="md:hidden w-[2px] h-12 bg-white/10" />
        </motion.div>
    );
}
