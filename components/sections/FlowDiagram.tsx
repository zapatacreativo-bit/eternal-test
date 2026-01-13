"use client";

import { motion } from "framer-motion";
import { Database, Bot, Zap, CheckCircle } from "lucide-react";

export function FlowDiagram() {
    return (
        <section className="py-24 px-6 overflow-hidden">
            <div className="max-w-5xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    Automatización <span className="text-primary">End-to-End</span>
                </h2>
                <p className="text-muted-foreground">Tu empresa operando 24/7 sin intervención humana.</p>
            </div>

            <div className="relative max-w-4xl mx-auto h-[300px] md:h-[400px] flex items-center justify-between px-4 md:px-12">

                {/* Connecting Line */}
                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/10 -translate-y-1/2 -z-10">
                    <motion.div
                        initial={{ width: "0%" }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="h-full bg-linear-to-r from-primary via-purple-500 to-primary origin-left"
                    />
                </div>

                {/* Step 1: Data */}
                <FlowStep
                    icon={Database}
                    label="Data Input"
                    delay={0}
                />

                {/* Step 2: AI Processing (Main) */}
                <FlowStep
                    icon={Bot}
                    label="AI Analysis"
                    delay={0.8}
                    isMain
                />

                {/* Step 3: Action */}
                <FlowStep
                    icon={Zap}
                    label="Execution"
                    delay={1.6}
                />

                {/* Step 4: Result */}
                <FlowStep
                    icon={CheckCircle}
                    label="Result"
                    delay={2.4}
                />

            </div>
        </section>
    );
}

function FlowStep({ icon: Icon, label, delay, isMain }: any) {
    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay, type: "spring", stiffness: 260, damping: 20 }}
            className={`relative flex flex-col items-center gap-4 ${isMain ? "scale-125" : ""}`}
        >
            <div className={`
                relative z-10 flex items-center justify-center 
                ${isMain ? "w-24 h-24 bg-primary text-white shadow-[0_0_50px_-10px_var(--color-primary)]" : "w-16 h-16 bg-card border border-white/10 text-muted-foreground"}
                rounded-2xl transition-all duration-500
            `}>
                <Icon className={isMain ? "w-10 h-10 animate-pulse" : "w-6 h-6"} />
                {isMain && (
                    <div className="absolute inset-0 rounded-2xl ring-2 ring-white/20 animate-ping opacity-50" />
                )}
            </div>
            <span className={`text-sm font-medium ${isMain ? "text-primary" : "text-muted-foreground"}`}>
                {label}
            </span>
        </motion.div>
    );
}
