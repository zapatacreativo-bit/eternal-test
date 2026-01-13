"use client";

import { motion } from "framer-motion";
import { Bot, Brain, Database, Workflow, Shield, Zap, Globe, Code } from "lucide-react";
import Image from "next/image";

const services = [
    {
        icon: Bot,
        title: "Agentes Autónomos de Nivel 4",
        desc: "Desplegamos enjambres de agentes capaces de razonamiento complejo y ejecución de tareas multi-paso sin supervisión humana. Integración profunda con LLMs (GPT-4, Claude 3, Llama 3) y herramientas externas (browsing, code execution).",
        tech: ["LangChain", "AutoGPT", "Vector DB"]
    },
    {
        icon: Workflow,
        title: "Automatización de Procesos Cognitivos (CPA)",
        desc: "Más allá del RPA tradicional. Analizamos flujos de trabajo no estructurados (emails, documentos legales, soporte) y diseñamos pipelines que entienden contexto, intención y sentimiento para automatizar decisiones críticas.",
        tech: ["n8n", "Python", "OCR AI"]
    },
    {
        icon: Database,
        title: "Infraestructura de Datos & RAG",
        desc: "Arquitectura de conocimiento empresarial. Convertimos tu documentación estática en una base de conocimientos viva. Implementamos sistemas RAG (Retrieval-Augmented Generation) para que tus agentes tengan memoria perfecta y contexto del negocio.",
        tech: ["Pinecone", "Weaviate", "Embeddings"]
    },
    {
        icon: Brain,
        title: "Consultoría de Estrategia IA",
        desc: "No solo código, sino visión. Realizamos auditorías de operaciones para identificar cuellos de botella cognitivos. Entregamos un Roadmap de Transformación Digital que alinea la adopción de IA con tus KPIs financieros.",
        tech: ["Auditoría", "Roadmap", "ROI"]
    },
    {
        icon: Shield,
        title: "Gobernanza y Ética de IA",
        desc: "Implementación segura y compliant. Aseguramos que tus agentes operen dentro de límites éticos y legales. Filtros de contenido, prevención de alucinaciones y auditoría de logs para sectores regulados (Fintech, Salud).",
        tech: ["Guardrails", "Compliance", "Security"]
    },
    {
        icon: Zap,
        title: "Desarrollo de Micro-SaaS Internos",
        desc: "Creamos herramientas internas a medida potenciadas por IA. Dashboards inteligentes, generadores de reportes automáticos y asistentes de ventas personalizados que viven en tu propia infraestructura.",
        tech: ["Next.js", "React", "Serverless"]
    }
];

export function ServicesGrid() {
    return (
        <section id="services" className="py-24 px-6 relative overflow-hidden">
            {/* Abstract Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] -z-10" />

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-bold tracking-tight"
                    >
                        Ingeniería en <span className="text-gradient">Inteligencia Artificial</span>
                    </motion.h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        No vendemos "chatbots". Construimos infraestructuras cognitivas que escalan el intelecto de tu corporación.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_-10px_var(--color-primary)] overflow-hidden"
                        >
                            {/* Hover Gradient */}
                            <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 space-y-4">
                                <div className="w-12 h-12 rounded-lg bg-black/50 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-500">
                                    <service.icon className="w-6 h-6 text-primary" />
                                </div>

                                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                                    {service.title}
                                </h3>

                                <p className="text-muted-foreground leading-relaxed">
                                    {service.desc}
                                </p>

                                <div className="pt-4 flex flex-wrap gap-2">
                                    {service.tech.map(t => (
                                        <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/70 border border-white/5">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Visual Breaker */}
                <div className="mt-24 relative h-[300px] rounded-3xl overflow-hidden border border-white/10 group">
                    <Image
                        src="/service-analysis.png"
                        alt="Data Analytics"
                        fill
                        className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-10">
                        <h3 className="text-2xl font-bold mb-2">Análisis Predictivo en Tiempo Real</h3>
                        <p className="max-w-xl text-muted-foreground">
                            Nuestros sistemas no solo ejecutan, observan. Monitoreo constante de KPIs y auto-optimización de flujos de trabajo basada en resultados históricos.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
