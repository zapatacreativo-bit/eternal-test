"use client";

import { motion } from "framer-motion";
import { Scale, Truck, Terminal } from "lucide-react";

const cases = [
    {
        title: "Sector Legal",
        desc: "Agentes que revisan NDAs y contratos estándar, resaltando cláusulas de riesgo.",
        icon: Scale,
        stats: "85% reducción tiempo revisión",
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        title: "Logística Inteligente",
        desc: "Negociación automática de tarifas de flete vía email con proveedores pre-aprobados.",
        icon: Truck,
        stats: "12% ahorro directo en costes",
        gradient: "from-orange-500 to-red-500"
    },
    {
        title: "DevOps & QA",
        desc: "Detección de bugs, propuesta de fix y generación de Pull Request autónoma.",
        icon: Terminal,
        stats: "24/7 cobertura de calidad",
        gradient: "from-green-500 to-emerald-500"
    }
];

export function UseCasesGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
            {cases.map((item, i) => (
                <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="relative p-6 rounded-2xl bg-black/40 border border-white/10 overflow-hidden group"
                >
                    <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${item.gradient} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`} />

                    <item.icon className="w-10 h-10 text-white mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-4">
                        {item.desc}
                    </p>

                    <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-primary">
                        {item.stats}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
