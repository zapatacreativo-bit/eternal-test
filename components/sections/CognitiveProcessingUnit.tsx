"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FileText, Database, ArrowRight, ScanLine, BrainCircuit, CheckCircle } from "lucide-react";

export function CognitiveProcessingUnit() {
    const [processingStep, setProcessingStep] = useState(0);
    const [docsProcessed, setDocsProcessed] = useState(0);

    // Simulate continuous processing loop
    useEffect(() => {
        const interval = setInterval(() => {
            setProcessingStep((prev) => (prev + 1) % 4);
            if (processingStep === 3) setDocsProcessed(p => p + 1);
        }, 1500);
        return () => clearInterval(interval);
    }, [processingStep]);

    return (
        <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />

            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

                {/* INPUT ZONE: UNSTRUCTURED */}
                <div className="relative h-80 rounded-2xl bg-white/5 border border-white/10 p-6 flex flex-col items-center justify-center overflow-hidden">
                    <h3 className="text-gray-400 font-mono text-sm mb-8 absolute top-6 left-6">INPUT: Datos No Estructurados</h3>

                    <div className="relative">
                        {/* Simulation of floating documents */}
                        <AnimatePresence mode="popLayout">
                            {[1, 2, 3].map((i) => (
                                <motion.div
                                    key={i + docsProcessed} // Key changes to force re-render
                                    initial={{ opacity: 0, x: -50, rotate: -20 }}
                                    animate={{ opacity: 1, x: 0, rotate: Math.random() * 20 - 10 }}
                                    exit={{ opacity: 0, x: 50, scale: 0.5 }}
                                    transition={{ duration: 0.5, delay: i * 0.2 }}
                                    className="absolute -top-8 -left-8 w-16 h-20 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm"
                                    style={{
                                        top: Math.random() * 40 - 20,
                                        left: Math.random() * 40 - 20
                                    }}
                                >
                                    <FileText className="w-8 h-8 text-gray-400" />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>

                {/* CENTRAL PROCESSING UNIT */}
                <div className="relative h-80 flex flex-col items-center justify-center">
                    {/* Animated Connection Lines */}
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

                    <motion.div
                        animate={{
                            boxShadow: [
                                "0 0 20px rgba(59,130,246,0.2)",
                                "0 0 50px rgba(59,130,246,0.5)",
                                "0 0 20px rgba(59,130,246,0.2)"
                            ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="relative z-10 w-48 h-48 rounded-full bg-black border border-primary/50 flex flex-col items-center justify-center"
                    >
                        {/* Inner Rotator */}
                        <div className="absolute inset-2 border-2 border-dashed border-primary/30 rounded-full animate-spin-slow" />

                        <BrainCircuit className="w-16 h-16 text-primary mb-2" />

                        <div className="flex flex-col items-center">
                            <span className="text-xs text-primary font-mono animate-pulse">
                                {["OCR SCAN", "SEMANTIC PARSE", "ENTITY EXTRACT", "VALIDATING"][processingStep]}
                            </span>
                            <div className="w-24 h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
                                <motion.div
                                    className="h-full bg-primary"
                                    animate={{ width: ["0%", "100%"] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                />
                            </div>
                        </div>
                    </motion.div>

                    <div className="absolute top-2 w-full text-center text-xs text-gray-500 font-mono">
                        PROCESADOS: {14832 + docsProcessed} DOCS
                    </div>
                </div>

                {/* OUTPUT ZONE: STRUCTURED */}
                <div className="relative h-80 rounded-2xl bg-primary/5 border border-primary/20 p-6 flex flex-col items-center justify-center overflow-hidden">
                    <h3 className="text-primary font-mono text-sm mb-8 absolute top-6 left-6">OUTPUT: JSON Estructurado</h3>

                    <motion.div
                        layout
                        className="w-full max-w-[200px] space-y-2"
                    >
                        <AnimatePresence>
                            {[1, 2, 3].slice(0, processingStep).map((i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="flex items-center gap-3 p-3 rounded-lg bg-primary/10 border border-primary/30"
                                >
                                    <Database className="w-4 h-4 text-primary" />
                                    <div className="h-2 w-24 bg-primary/20 rounded-full" />
                                    <CheckCircle className="w-3 h-3 text-green-400 ml-auto" />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                        {processingStep === 0 && (
                            <div className="text-center text-xs text-gray-500 animate-pulse mt-8">
                                Esperando datos...
                            </div>
                        )}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
