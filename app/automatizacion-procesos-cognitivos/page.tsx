import { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CognitiveProcessingUnit } from "@/components/sections/CognitiveProcessingUnit";
import { Brain, FileText, Scan, Zap, Server, Shield, Layers, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Automatización de Procesos Cognitivos (CPA) | Cerebro Digital Corporativo 2026",
    description: "Transforma datos no estructurados en decisiones de negocio con CPA. La evolución del RPA impulsada por IA. Guía técnica y casos de uso.",
};

export default function CognitiveAutomationPage() {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">

            {/* --- HERO SECTION --- */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/cpa-hero-synapse.png"
                        alt="Sinapsis digital representando la automatización cognitiva de procesos"
                        fill
                        className="object-cover opacity-50"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] z-10" />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-6 text-center space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/20 border border-blue-500/30 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                        <span className="text-xs font-mono uppercase tracking-widest text-blue-200">The Next Gen RPA</span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter pb-4 leading-tight">
                        Automatización de <br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-white glow-text">
                            Procesos Cognitivos
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Donde el RPA se detiene, el CPA comienza. Convertimos el caos de tus datos no estructurados en flujos de trabajo inteligentes, autónomos y libres de supervisión.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center pt-10">
                        <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-8 text-xl rounded-full shadow-[0_0_40px_rgba(37,99,235,0.3)] hover:scale-105 transition-all" asChild>
                            <Link href="/#blueprint-funnel">Auditar Mis Procesos</Link>
                        </Button>
                        <Button size="lg" variant="ghost" className="text-white hover:bg-white/10 px-10 py-8 text-xl rounded-full border border-white/10" asChild>
                            <Link href="/#services">Ver Tecnología</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* --- INTERACTIVE DEMO (THE "JAVA" MOTION) --- */}
            <section className="py-24 relative border-y border-white/5 bg-black/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Del Caos Documental al Orden Digital</h2>
                        <p className="text-gray-400">Visualiza en tiempo real cómo nuestros núcleos cognitivos procesan información heterogénea.</p>
                    </div>

                    <CognitiveProcessingUnit />
                </div>
            </section>

            {/* --- CORE CONTENT: WHAT IS CPA? --- */}
            <section className="py-24 px-6 relative">
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-5xl font-bold text-white">¿Qué es el CPA (Cognitive Process Automation)?</h2>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            La automatización tradicional (RPA) es excelente para mover datos estructurados de A a B. Pero, ¿qué ocurre cuando la información llega en un PDF escaneado, un correo electrónico con jerga legal o una imagen borrosa? El RPA falla.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            Aquí entra la <strong>Automatización de Procesos Cognitivos (CPA)</strong>. Es la fusión de Inteligencia Artificial (Visión Computacional, NLP, Machine Learning) con la automatización robusta. El CPA no solo "hace", también "entiende".
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                <Scan className="w-10 h-10 text-blue-400 mb-4" />
                                <h3 className="text-xl font-bold mb-2">Lectura Inteligente</h3>
                                <p className="text-sm text-gray-400">OCR con IA que entiende layouts complejos, tablas rotas y escritura a mano.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                <Brain className="w-10 h-10 text-purple-400 mb-4" />
                                <h3 className="text-xl font-bold mb-2">Comprensión Semántica</h3>
                                <p className="text-sm text-gray-400">NLP que extrae intención, sentimiento y entidades clave de textos libres.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                <Layers className="w-10 h-10 text-green-400 mb-4" />
                                <h3 className="text-xl font-bold mb-2">Decisión Probabilística</h3>
                                <p className="text-sm text-gray-400">Modelos que toman decisiones basadas en confianza, derivando a humanos solo las excepciones.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- VISUAL DEEP DIVE: THE PRISM --- */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-900/5 -z-10" />
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative h-[500px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                        <Image
                            src="/assets/cpa-data-prism.png"
                            alt="Prisma digital transformando documentos en datos estructurados"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
                        <div className="absolute bottom-8 left-8 max-w-xs">
                            <div className="text-blue-400 font-mono text-xs mb-2">FIG 1.0: REFRACCIÓN DE DATOS</div>
                            <p className="text-white font-bold">La Alquimia Digital: Convirtiendo papel en SQL.</p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <span className="text-blue-500 font-bold tracking-widest uppercase text-sm">Arquitectura de Procesado</span>
                        <h2 className="text-4xl font-bold text-white">El Eslabón Perdido de la Transformación Digital</h2>
                        <div className="prose prose-invert prose-lg text-gray-400">
                            <p>
                                Se estima que el <strong>80% de los datos empresariales son no estructurados</strong>. Contratos, facturas, correos, grabaciones de llamadas. Son "materia oscura" que tus sistemas de BI no pueden ver.
                            </p>
                            <p>
                                Nuestra plataforma de CPA actúa como un prisma. Ingiere este flujo caótico, lo pasa por modelos de lenguaje afinados (Fine-Tuned LLMs) y una capa de validación lógica, y proyecta al otro lado una estructura de datos cristalina, lista para ser consumida por tu ERP, CRM o Data Lake.
                            </p>
                        </div>
                        <ul className="space-y-4 pt-4">
                            {['Reducción del 90% en entrada manual de datos', 'Trazabilidad y auditoría completa', 'Escalabilidad elástica en picos de trabajo'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-white">
                                    <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                                        <ArrowRight className="w-4 h-4 text-blue-400" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* --- DASHBOARD UI & USE CASES --- */}
            <section className="py-24 px-6 relative bg-white/5 border-t border-white/10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Casos de Uso de Alto Impacto</h2>
                                <p className="text-gray-400">Sectores donde el error humano es costoso y la velocidad es crítica.</p>
                            </div>

                            <div className="space-y-8">
                                <div className="group cursor-pointer">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                                            <Shield className="w-6 h-6 text-blue-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">FinTech & Banca (KYC/AML)</h3>
                                            <p className="text-gray-400 text-sm leading-relaxed">
                                                Validación automática de documentos de identidad, nóminas y escrituras. Cross-checking contra listas de sanciones en tiempo real. Reducción del tiempo de onboarding de días a minutos.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="group cursor-pointer">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                                            <FileText className="w-6 h-6 text-purple-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">Legal & Real Estate</h3>
                                            <p className="text-gray-400 text-sm leading-relaxed">
                                                Extracción de cláusulas, fechas clave y partes intervinientes en contratos de alquiler o compraventa. Generación de resúmenes ejecutivos automáticos para los letrados.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="group cursor-pointer">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                                            <Server className="w-6 h-6 text-green-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">Salud & Seguros</h3>
                                            <p className="text-gray-400 text-sm leading-relaxed">
                                                Procesamiento de reclamaciones médicas. Lectura de informes clínicos para codificación automática (CIE-10). Detección de fraude en facturas hospitalarias.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-full min-h-[400px] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                            <Image
                                src="/assets/cpa-dashboard-ui.png"
                                alt="Dashboard de control de procesos cognitivos"
                                fill
                                className="object-cover"
                            />
                            {/* Overlay UI elements could go here */}
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent" />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- TECHNICAL SPECS / CTA --- */}
            <section className="py-32 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-600/10 blur-[120px] rounded-full transform -translate-y-1/2" />

                <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
                    <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                        Deja de procesar papeles. <br />
                        <span className="text-blue-500">Empieza a procesar inteligencia.</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        La tecnología existe. Tu competencia ya la está usando.
                        Descubre cuánto puedes ahorrar automatizando tus procesos cognitivos hoy.
                    </p>

                    <div className="pt-12">
                        <Button size="lg" className="bg-white text-black hover:bg-gray-200 px-16 py-10 text-2xl rounded-full font-bold shadow-[0_0_60px_rgba(255,255,255,0.2)] hover:shadow-[0_0_80px_rgba(255,255,255,0.4)] hover:scale-105 transition-all duration-300" asChild>
                            <Link href="/#blueprint-funnel">Solicitar Demo CPA</Link>
                        </Button>
                    </div>
                    <p className="text-sm text-gray-500 mt-6 font-mono">
                        Infraestructura SOC2 Type II Compliant • GDPR Ready • On-Premise Available
                    </p>
                </div>
            </section>

        </div>
    );
}
