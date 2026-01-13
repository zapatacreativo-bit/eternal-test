import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AgentWorkflowAnimation } from "@/components/sections/AgentWorkflowAnimation";
import { EternalProtocol } from "@/components/sections/EternalProtocol";
import { UseCasesGrid } from "@/components/sections/UseCasesGrid";
import { SecurityModule } from "@/components/sections/SecurityModule";
import { AgentFAQ } from "@/components/sections/AgentFAQ";
import { AIEvolutionTimeline } from "@/components/sections/AIEvolutionTimeline";
import { BrainCircuit, Database, Zap, ShieldCheck, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Agentes Autónomos de Inteligencia Artificial | Automatización Soberana 2026",
    description: "Descubre cómo los agentes autónomos de inteligencia artificial revolucionan empresas. Guía definitiva 2026: arquitectura, casos de uso y metodología EEAT.",
};

export default function AgentesAutonomosPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-primary/30">

            {/* --- HERO SECTION --- */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/ai-agent-neural-network-hero.png"
                        alt="Red neuronal digital representando agentes autónomos de inteligencia artificial"
                        fill
                        className="object-cover opacity-40"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/80 to-black z-10" />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-6 text-center space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs font-mono uppercase tracking-widest text-gray-300">Tecnología de Vanguardia 2026</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500 pb-2">
                        Agentes Autónomos de <br className="hidden md:block" />
                        <span className="text-primary glow-text">Inteligencia Artificial</span>
                    </h1>

                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Más allá de los chatbots. Sistemas que razonan, planifican y ejecutan tareas complejas sin intervención humana. La verdadera revolución de la automatización cognitiva.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full glow-component" asChild>
                            <Link href="/#blueprint-funnel">Solicitar Diagnóstico IA</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full" asChild>
                            <Link href="/#services">Ver Demo Técnica</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* --- DEFINITION & CONTEXT (EEAT: Educational Value) --- */}
            <section className="py-24 px-6 relative">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">¿Qué son los Agentes Autónomos de Inteligencia Artificial?</h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            A diferencia de los modelos de lenguaje tradicionales (LLMs) como GPT-4, que son pasivos y esperan una instrucción ("prompt"), los <strong>agentes autónomos de inteligencia artificial</strong> son sistemas diseñados para perseguir objetivos de forma proactiva. Poseen la capacidad de:
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                            {[
                                { icon: BrainCircuit, title: "Razonamiento Iterativo", desc: "Evalúan su propio progreso y corrigen errores en tiempo real." },
                                { icon: Database, title: "Memoria Persistente", desc: "Recuerdan interacciones pasadas y contexto del negocio a largo plazo." },
                                { icon: Zap, title: "Uso de Herramientas", desc: "Pueden navegar por internet, consultar bases de datos y usar APIs externas." },
                                { icon: ShieldCheck, title: "Autonomía Ejecutiva", desc: "Toman decisiones operativas dentro de los límites de seguridad definidos." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors group">
                                    <item.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                                    <div>
                                        <h3 className="font-bold text-white mb-2">{item.title}</h3>
                                        <p className="text-sm text-gray-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </ul>
                        <p className="text-gray-400 text-lg leading-relaxed mt-6">
                            En 2026, la distinción es clara: un chatbot responde preguntas; un agente autónomo <em>realiza el trabajo</em>. Desde gestionar cadenas de suministro hasta automatizar soporte técnico de nivel 2, estos sistemas representan la fuerza laboral sintética del futuro.
                        </p>
                    </div>
                </div>
            </section>

            {/* --- TECHNICAL ARCHITECTURE VISUALIZATION (WOW FACTOR) --- */}
            <section className="py-24 bg-black/50 relative border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-primary font-mono text-sm uppercase tracking-wider">Arquitectura Agéntica</span>
                        <h2 className="text-4xl font-bold text-white mt-2 mb-6">Orquestación de Webhooks y Triggers</h2>
                        <div className="space-y-6 text-gray-400">
                            <p>
                                Nuestros agentes no viven en el vacío. Se integran profundamente con tu ecosistema tecnológico actual a través de webhooks seguros y APIs REST.
                            </p>
                            <p>
                                Cuando ocurre un evento (Trigger), el agente "despierta", analiza la carga útil (Payload) utilizando modelos cognitivos avanzados, y determina la secuencia óptima de acciones.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span>Procesamiento asíncrono de alta velocidad</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span>Validación de esquemas con Zod en tiempo de ejecución</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span>Trazabilidad completa de auditoría</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* ANIMATED COMPONENT: 2026 WEBHOOK VISUALIZATION */}
                    <div className="relative">
                        <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-20" />
                        <AgentWorkflowAnimation />
                    </div>
                </div>
            </section>

            {/* --- DEEP DIVE CONTENT (SEO: KEYWORD DENSITY & DEPTH) --- */}
            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto space-y-16">

                    {/* NEW TIMELINE SECTION (AI EVOLUTION) */}
                    <AIEvolutionTimeline />

                    {/* INTERACTIVE METHODOLOGY: THE ETERNAL PROTOCOL */}
                    <article className="prose prose-invert prose-lg max-w-none">
                        <h3 className="text-3xl font-bold text-center mb-4 text-white">Descubre el "Protocolo Eternal"</h3>
                        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                            La implementación no es mágica, es metódica. Navega por las fases de nuestro proceso de despliegue soberano.
                        </p>

                        {/* INTERACTIVE COMPONENT REPLACING TEXT LIST */}
                        <EternalProtocol />
                    </article>

                    {/* INTERACTIVE USE CASES GRID */}
                    <div className="space-y-8">
                        <h3 className="text-3xl font-bold text-white mb-8">Casos de Uso en la Industria Española</h3>
                        <UseCasesGrid />
                    </div>

                    {/* REPLACED LARGE IMAGE WITH CONTEXTUAL SECTION */}
                    <div className="relative rounded-3xl overflow-hidden border border-white/10 group bg-black/40 p-8 md:p-12 flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1 space-y-6">
                            <h3 className="text-2xl font-bold text-white">Colaboración Humano-IA</h3>
                            <p className="text-gray-400 leading-relaxed">
                                En el entorno laboral del futuro, los humanos definen la estrategia y los valores, mientras que los agentes ejecutan las tácticas repetitivas. Esta simbiosis aumenta la productividad exponencialmente sin sacrificar el toque humano.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-sm text-gray-300">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                    Supervisión activa ("Human-in-the-loop")
                                </li>
                                <li className="flex items-center gap-2 text-sm text-gray-300">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                    Escalabilidad infinita bajo demanda
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1 relative h-64 w-full rounded-2xl overflow-hidden border border-white/10">
                            <Image
                                src="/assets/human-ai-collaboration-workforce.png"
                                alt="Colaboración humano-IA"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>

                    {/* NEW SECURITY MODULE */}
                    <SecurityModule />

                </div>
            </section>

            {/* --- FAQ SECTION for SEO RICH SNIPPETS --- */}
            {/* --- FAQ SECTION --- */}
            <AgentFAQ />

            {/* --- FINAL CTA --- */}
            <section className="py-32 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 blur-[100px] z-0" />
                <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-5xl font-bold text-white">¿Listo para escalar tu fuerza laboral?</h2>
                    <p className="text-xl text-gray-300">
                        No contrates más manos. Contrata más inteligencia.
                        Descubre el potencial de los agentes autónomos en tu organización hoy mismo.
                    </p>
                    <div className="pt-8">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 px-16 py-8 text-2xl rounded-full font-bold shadow-[0_0_50px_rgba(255,255,255,0.3)] hover:shadow-[0_0_80px_rgba(255,255,255,0.5)] hover:scale-105 transition-all duration-300 animate-pulse" asChild>
                            <Link href="/#blueprint-funnel">Calcular Potencial con IA</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
