"use client";

import { motion } from "framer-motion";
import { ShieldCheck, UserCheck, Lock, AlertTriangle } from "lucide-react";

export function SecurityModule() {
    return (
        <section className="py-20 relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-900/20 via-black to-black border border-red-500/20">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

            <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">

                {/* Visual Core */}
                <div className="flex-1 w-full flex justify-center">
                    <div className="relative w-64 h-64">
                        {/* Pulsing Shield Animation */}
                        <motion.div
                            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute inset-0 bg-red-500/20 blur-3xl rounded-full"
                        />
                        <div className="absolute inset-4 border-2 border-red-500/30 rounded-full animate-spin-slow" />
                        <div className="absolute inset-8 border border-red-500/50 rounded-full animate-reverse-spin" />

                        <div className="absolute inset-0 flex items-center justify-center">
                            <ShieldCheck className="w-24 h-24 text-red-500" />
                        </div>
                    </div>
                </div>

                {/* Content Side */}
                <div className="flex-[2] space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-4">
                        <Lock className="w-8 h-8 text-red-500" />
                        Garantía Ética y Seguridad
                    </h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Un gran poder conlleva una gran responsabilidad. Nuestra infraestructura "Sovereign AI" implementa
                        capas de protección militar para garantizar que la autonomía nunca comprometa la integridad.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                            <div className="flex items-center gap-3 mb-2 text-red-400 font-bold">
                                <UserCheck className="w-5 h-5" />
                                <h3>Human-in-the-Loop</h3>
                            </div>
                            <p className="text-sm text-gray-400">
                                Las decisiones críticas (ej. transacciones {'>'} 1000€) requieren aprobación humana explícita antes de ejecutarse.
                            </p>
                        </div>

                        <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                            <div className="flex items-center gap-3 mb-2 text-red-400 font-bold">
                                <AlertTriangle className="w-5 h-5" />
                                <h3>Firewall Semántico</h3>
                            </div>
                            <p className="text-sm text-gray-400">
                                Filtros de salida que bloquean prompts maliciosos o alucinaciones fuera de las políticas de la empresa en tiempo real.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
