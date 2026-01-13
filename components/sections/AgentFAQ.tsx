"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
    {
        question: "¿En qué se diferencian de RPA (Robotic Process Automation)?",
        answer: "Los RPA son 'ciegos' y rígidos; si un botón cambia de lugar, el robot falla. Nuestros agentes autónomos ven la pantalla como un humano (Visión Computacional) y entienden el contexto, adaptándose a cambios en la interfaz sin romperse."
    },
    {
        question: "¿Son seguros para datos confidenciales?",
        answer: "Absolutamente. Desplegamos modelos 'Sovereign' que se ejecutan en tu propia infraestructura (On-Premise) o en una nube privada aislada (VPC). Tus datos nunca se utilizan para entrenar modelos públicos como los de OpenAI o Google."
    },
    {
        question: "¿Cuánto tarda la implementación?",
        answer: "Depende de la complejidad, pero nuestro 'Protocolo Eternal' nos permite desplegar un MVP funcional en 4-6 semanas. La primera semana es puramente de observación y diseño de arquitectura."
    },
    {
        question: "¿Pueden los agentes 'alucinar' o cometer errores?",
        answer: "Minimizamos este riesgo con arquitecturas RAG (Retrieval-Augmented Generation) que obligan al agente a basar sus respuestas en tu documentación interna. Además, implementamos 'Firewalls Semánticos' que bloquean cualquier salida que no cumpla con tus políticas de seguridad."
    }
];

export function AgentFAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-mono uppercase tracking-wider mb-4 border border-blue-500/20">
                        <HelpCircle className="w-4 h-4" />
                        Dudas Frecuentes
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Despejando incógnitas sobre la <span className="text-primary">Autonomía IA</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ margin: "-50px" }}
                            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${activeIndex === index
                                    ? "bg-white/10 border-primary/50 shadow-[0_0_30px_rgba(59,130,246,0.15)]"
                                    : "bg-white/5 border-white/10 hover:bg-white/8"
                                }`}
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left"
                            >
                                <span className={`text-lg font-bold transition-colors ${activeIndex === index ? "text-white" : "text-gray-400"}`}>
                                    {faq.question}
                                </span>
                                <div className={`p-2 rounded-full border transition-colors ${activeIndex === index ? "bg-primary border-primary text-white" : "border-white/20 text-gray-500"}`}>
                                    {activeIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 text-gray-300 leading-relaxed border-t border-white/5 pt-4">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />
        </section>
    );
}
