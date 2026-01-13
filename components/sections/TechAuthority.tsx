"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { AetherProtocolAnimation } from "@/components/sections/AetherProtocolAnimation";

export function TechAuthority() {
    return (
        <section className="py-24 px-6 bg-black/50">
            <div className="max-w-4xl mx-auto space-y-16">

                {/* Intro Content */}
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold">Por qué la Automatización Convencional <span className="text-red-400 font-mono line-through opacity-70">Ha Muerto</span> No Es Suficiente</h2>
                    <div className="prose prose-invert prose-lg text-muted-foreground">
                        <p>
                            En la última década, la "Transformación Digital" se limitó a digitalizar el papel. Mover PDFs de un archivador físico a la nube no es automatización. Usar Zapier para conectar un formulario a un Google Sheet es útil, pero no escala ni razona.
                        </p>
                        <p>
                            Estamos entrando en la era de la <strong>Inteligencia Agéntica</strong>. A diferencia del software tradicional que sigue reglas rígidas (If This Then That), los Agentes IA poseen capacidades probabilísticas. Pueden lidiar con la ambigüedad, tomar decisiones basadas en contexto incompleto y aprender de sus errores.
                        </p>
                        <blockquote className="border-l-4 border-primary pl-6 italic text-white/90 my-8">
                            "El futuro no pertenece a quien tiene más datos, sino a quien tiene los agentes más capaces para actuar sobre esos datos."
                        </blockquote>
                    </div>
                </div>

                {/* Technical Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-white">Nuestro Stack Tecnológico</h3>
                        <p className="text-muted-foreground">
                            No dependemos de "wrappers" de GPT. Construimos sobre infraestructura de nivel empresarial diseñada para latencia mínima y máxima fiabilidad.
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-primary mt-1" />
                                <span><strong>Orquestación:</strong> LangChain & LangGraph para flujos cíclicos complejos.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-primary mt-1" />
                                <span><strong>Vector Stores:</strong> Pinecone/Qdrant para memoria semántica a largo plazo.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-primary mt-1" />
                                <span><strong>Modelos:</strong> Arquitectura híbrida (GPT-4o para razonamiento, Haiku para velocidad, Llama 3 local para privacidad).</span>
                            </li>
                        </ul>
                    </div>
                    <div className="relative h-[300px] rounded-xl overflow-hidden border border-white/10 bg-white/5 p-6">
                        <div className="absolute inset-0 bg-[url('/hero-bg.png')] opacity-20 bg-cover bg-center" />
                        <div className="relative z-10 flex flex-col justify-center h-full text-center space-y-4">
                            <div className="text-5xl font-mono font-bold text-primary">99.9%</div>
                            <div className="text-xl font-medium">Uptime Garantizado</div>
                            <p className="text-sm text-muted-foreground">Sistemas redundantes y monitoreo 24/7</p>
                        </div>
                    </div>
                </div>

                {/* Methodology */}
                {/* Methodology */}
                <div className="space-y-8">
                    <h3 className="text-3xl font-bold text-center">Metodología: El Protocolo AETHER</h3>
                    <p className="text-center text-muted-foreground max-w-2xl mx-auto">
                        Nuestro proceso propietario de tres fases para transformar organizaciones caóticas en entidades autónomas.
                    </p>
                    <AetherProtocolAnimation />
                </div>

                {/* FAQ for Density */}
                <div className="space-y-8 pt-12 border-t border-white/10">
                    <h3 className="text-2xl font-bold">Preguntas Frecuentes (FAQ)</h3>
                    <div className="space-y-4">
                        <FaqItem q="¿La IA reemplazará a mi equipo actual?" a="No. La IA está diseñada para eliminar el trabajo robótico y repetitivo (data entry, clasificación, reporting), liberando a tu equipo para tareas de alto valor cognitivo, estrategia y creatividad. Es un multiplicador de fuerza, no un reemplazo." />
                        <FaqItem q="¿Es segura la integración con mis datos privados?" a="Absolutamente. Utilizamos entornos aislados (VPC) y técnicas de anonimización de datos. Para clientes con requisitos estrictos, desplegamos modelos Open Source (como Llama 3) en servidores propios (On-Premise), garantizando que ningún dato salga de tu infraestructura." />
                        <FaqItem q="¿Cuánto tiempo toma ver resultados?" a="Nuestros Blueprints están diseñados para Quick Wins. Un agente de clasificación de correos o soporte nivel 1 puede estar operativo en menos de 2 semanas, generando ROI desde el primer mes. Proyectos de transformación completa toman entre 8 y 12 semanas." />
                    </div>
                </div>

            </div>
        </section>
    );
}

function FaqItem({ q, a }: { q: string, a: string }) {
    return (
        <div className="p-4 rounded-lg bg-white/5 border border-white/5">
            <h5 className="font-bold text-white mb-2">{q}</h5>
            <p className="text-muted-foreground text-sm">{a}</p>
        </div>
    )
}
