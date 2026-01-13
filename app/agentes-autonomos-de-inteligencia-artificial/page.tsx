import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AgentWorkflowAnimation } from "@/components/sections/AgentWorkflowAnimation";
import { BrainCircuit, Cpu, Network, ShieldCheck, Zap, BarChart3, Bot, Code2 } from "lucide-react";

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
                        src="/assets/ai_agent_hero_network_1768327454555.png"
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
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full glow-component">
                            Solicitar Diagnóstico IA
                        </Button>
                        <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full">
                            Ver Demo Técnica
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

                    {/* ANIMATED COMPONENT */}
                    <div className="relative">
                        <div className="absolute -inset-4 bg-primary/20 blur-3xl opacity-20" />
                        <AgentWorkflowAnimation />
                    </div>
                </div>
            </section>

            {/* --- DEEP DIVE CONTENT (SEO: KEYWORD DENSITY & DEPTH) --- */}
            <section className="py-24 px-6">
                <div className="max-w-3xl mx-auto space-y-16">

                    <article className="prose prose-invert prose-lg max-w-none">
                        <h3>Metodología de Implementación: El Protocolo Eternal</h3>
                        <p>
                            La implementación de <strong>agentes autónomos de inteligencia artificial</strong> no es una instalación de software Plug-and-Play. Requiere una ingeniería de prompts meticulosa, diseño de arquitectura RAG (Retrieval-Augmented Generation) y pruebas exhaustivas.
                        </p>
                        <p>
                            Nuestra metodología "Eternal" garantiza resultados predecibles en un entorno probabilístico:
                        </p>
                        <ol>
                            <li>
                                <strong>Fase de Observación:</strong> Analizamos los procesos manuales actuales para identificar patrones de decisión.
                            </li>
                            <li>
                                <strong>Diseño de la Arquitectura Cognitiva:</strong> Definimos qué "herramientas" necesita el agente (acceso a CRM, Email, ERP).
                            </li>
                            <li>
                                <strong>Sandbox de Entrenamiento:</strong> El agente opera en un entorno simulado donde humanos validan sus decisiones.
                            </li>
                            <li>
                                <strong>Despliegue Gradual:</strong> Activamos la autonomía progresivamente, empezando por tareas de bajo riesgo.
                            </li>
                        </ol>

                        <h3>Casos de Uso en la Industria Española</h3>
                        <p>
                            Hemos desplegado agentes para resolver problemas críticos en sectores regulados:
                        </p>
                        <ul>
                            <li>
                                <strong>Sector Legal:</strong> Agentes que revisan NDAs y contratos estándar, resaltando cláusulas de riesgo basándose en el "playbook" de la firma.
                            </li>
                            <li>
                                <strong>Logística:</strong> Sistemas que negocian tarifas de flete menores automáticamente vía email con proveedores pre-aprobados.
                            </li>
                            <li>
                                <strong>Desarrollo de Software:</strong> Agentes de QA que no solo detectan bugs, sino que proponen el código de corrección y generan el Pull Request.
                            </li>
                        </ul>
                    </article>

                    {/* ILLUSTRATION: FUTURE WORKFORCE */}
                    <div className="relative rounded-3xl overflow-hidden border border-white/10 group">
                        <Image
                            src="/assets/future_workforce_ai_1768327491111.png"
                            alt="Colaboración humano-IA en el entorno laboral del futuro"
                            width={1024}
                            height={1024}
                            className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent">
                            <p className="text-white font-bold text-xl">El Futuro del Trabajo es Híbrido</p>
                            <p className="text-gray-300 text-sm">Humanos definiendo estrategias, Agentes ejecutando tácticas.</p>
                        </div>
                    </div>

                    <article className="prose prose-invert prose-lg max-w-none">
                        <h3>Ética y Seguridad en Agentes Autónomos</h3>
                        <p>
                            Un gran poder conlleva una gran responsabilidad. Todos nuestros agentes se rigen por principios de "Human-in-the-loop" para decisiones críticas. Implementamos capas de seguridad, como firewalls semánticos, que impiden que el agente ejecute acciones maliciosas o fuera de política, incluso si su modelo subyacente es "engañado" (jailbroken).
                        </p>
                    </article>

                </div>
            </section>

            {/* --- FAQ SECTION for SEO RICH SNIPPETS --- */}
            <section className="py-24 bg-white/5 border-t border-white/10">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-16">Preguntas Frecuentes sobre Agentes IA</h2>
                    <div className="grid gap-6">
                        {[
                            { q: "¿En qué se diferencian de RPA (Robotic Process Automation)?", a: "Los RPA son rígidos y se rompen si cambia la interfaz. Los agentes autónomos de IA entienden el contexto visual y semántico, adaptándose a cambios." },
                            { q: "¿Son seguros para datos confidenciales?", a: "Absolutamente. Podemos desplegar agentes en infraestructura local (On-Premise) o nubes privadas, garantizando que los datos nunca entrenen modelos públicos." },
                            { q: "¿Cuánto tarda la implementación?", a: "Un MVP funcional (Producto Mínimo Viable) suele estar listo en 4-6 semanas, dependiendo de la complejidad de las integraciones." }
                        ].map((faq, i) => (
                            <div key={i} className="bg-black/40 border border-white/10 p-6 rounded-xl hover:bg-black/60 transition-colors">
                                <h4 className="font-bold text-lg text-white mb-2">{faq.q}</h4>
                                <p className="text-gray-400">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

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
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 px-12 py-8 text-xl rounded-full font-bold shadow-2xl hover:scale-105 transition-transform">
                            Calcular Potencial con IA
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}

// Importing icons for the definition section to avoid "ReferenceError"
import { CheckCircle } from "lucide-react";
