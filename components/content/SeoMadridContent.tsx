"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap, Brain, Rocket, ShieldCheck, BarChart3, Bot, Network, Code2 } from "lucide-react";

export function SeoMadridContent() {
    return (
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto text-white/80 space-y-24">

            {/* Introduction - The Hybrid Future */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-3xl md:text-4xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
                    >
                        Liderando la Revolución de la Inteligencia Artificial en Madrid
                    </motion.h2>
                    <p className="text-lg leading-relaxed">
                        En el corazón financiero y tecnológico de España, la competencia es feroz. Las empresas en Madrid no solo buscan sobrevivir, buscan dominar. Y en la era digital actual, el dominio no se logra con más horas de trabajo, sino con <strong>Inteligencia Artificial Estratégica</strong>.
                    </p>
                    <p className="text-lg leading-relaxed">
                        Somos la agencia pionera en <strong>Servicios de Inteligencia Artificial en Madrid</strong>, dedicada a transformar negocios tradicionales en potencias tecnológicas autónomas. No implementamos herramientas sueltas; diseñamos ecosistemas cognitivos completos que operan tu negocio con una precisión, velocidad y eficiencia que el trabajo humano simplemente no puede igualar.
                    </p>
                    <ul className="space-y-3 pt-4">
                        {[
                            "Automatización de Procesos de Negocio (BPA) End-to-End",
                            "Despliegue de Agentes Autónomos Inteligentes",
                            "Consultoría Estratégica de IA para Directivos",
                            "Integración de LLMs (GPT-4, Claude, Llama 3) en Flujos Reales"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
                                <span className="font-medium text-white">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="relative h-[400px] rounded-3xl overflow-hidden glass border border-white/10 p-8 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-cyan-900/40 blur-3xl" />
                    <div className="relative z-10 text-center space-y-4">
                        <Brain className="w-24 h-24 text-cyan-400 mx-auto animate-pulse" />
                        <h3 className="text-2xl font-bold text-white">Madrid AI Hub</h3>
                        <p className="text-sm text-white/60">Centro de Innovación Tecnológica</p>
                        <div className="flex gap-4 justify-center mt-6">
                            <div className="p-3 bg-white/5 rounded-xl border border-white/10 backdrop-blur">
                                <span className="block text-2xl font-bold text-green-400">+500%</span>
                                <span className="text-xs uppercase tracking-widest text-white/50">Eficiencia</span>
                            </div>
                            <div className="p-3 bg-white/5 rounded-xl border border-white/10 backdrop-blur">
                                <span className="block text-2xl font-bold text-purple-400">24/7</span>
                                <span className="text-xs uppercase tracking-widest text-white/50">Operatividad</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Deep Dive Services */}
            <div className="space-y-16">
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <span className="text-cyan-400 font-bold tracking-widest uppercase text-sm">Nuestros Servicios Core</span>
                    <h3 className="text-3xl md:text-5xl font-bold text-white">Ingeniería de Automatización Avanzada</h3>
                    <p className="text-white/60">
                        Más allá del Hype. Ingeniería real aplicada a problemas reales de empresas en Madrid.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Service 1 */}
                    <ServiceCard
                        icon={<Bot className="w-10 h-10 text-cyan-400" />}
                        title="Agentes Autónomos de IA"
                        description="Implementamos agentes digitales que actúan como empleados virtuales. Desde SDRs que cualifican leads hasta agentes de soporte que resuelven incidencias complejas sin intervención humana. Tu fuerza laboral digital, operativa 24/7 en Madrid."
                    />
                    {/* Service 2 */}
                    <ServiceCard
                        icon={<Network className="w-10 h-10 text-purple-400" />}
                        title="Orquestación de Flujos (n8n/Zapier)"
                        description="Conectamos tu CRM, ERP, Marketing y Ventas en un sistema unificado. Eliminamos los silos de datos y automatizamos la transferencia de información crítica entre departamentos, reduciendo errores manuales a cero."
                    />
                    {/* Service 3 */}
                    <ServiceCard
                        icon={<Code2 className="w-10 h-10 text-pink-400" />}
                        title="Desarrollo de Software a Medida con IA"
                        description="Creamos soluciones propietarias para retos únicos. Dashboards predictivos, sistemas de recomendación personalizados y herramientas internas potenciadas por LLMs que aprenden de tus datos históricos."
                    />
                    {/* Service 4 */}
                    <ServiceCard
                        icon={<BarChart3 className="w-10 h-10 text-yellow-400" />}
                        title="Consultoría de Datos e Insights"
                        description="Transformamos tus datos brutos en decisiones de oro. Análisis predictivo de ventas, detección de anomalías en tiempo real y optimización de precios dinámica basada en Machine Learning."
                    />
                    {/* Service 5 */}
                    <ServiceCard
                        icon={<ShieldCheck className="w-10 h-10 text-green-400" />}
                        title="Auditoría y Gobernanza de IA"
                        description="Implementación segura y ética. Aseguramos que tus sistemas de IA cumplan con la normativa europea (AI Act), protegiendo la privacidad de tus datos y la propiedad intelectual de tu empresa."
                    />
                    {/* Service 6 */}
                    <ServiceCard
                        icon={<Rocket className="w-10 h-10 text-orange-400" />}
                        title="Escalado de Startups y Scaleups"
                        description="Infraestructura tecnológica para crecimiento exponencial. Ayudamos a startups madrileñas a multiplicar su valoración integrando tecnología propietaria de IA en su core business."
                    />
                </div>
            </div>

            {/* Why Madrid? Premium Redesign */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full opacity-50 group-hover:opacity-75 transition-opacity" />
                    <div className="relative z-10 bg-[#0a0a12] border border-white/10 rounded-3xl p-8 md:p-10 space-y-8 overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                        <div>
                            <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest bg-cyan-950/30 px-3 py-1 rounded-full border border-cyan-500/20">Local Expertise</span>
                            <h3 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-2">
                                Agencia de IA en <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Madrid</span>
                            </h3>
                            <p className="text-white/60">
                                Conocemos el ecosistema. Hablamos tu idioma. Operamos en tu zona horaria.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <FeatureRow
                                title="Hub Tecnológico Sur de Europa"
                                description="Madrid es el epicentro. Conectamos tu empresa con talento, partners y oportunidades exclusivas del ecosistema local."
                            />
                            <FeatureRow
                                title="Cultura de Negocios Local"
                                description="Entendemos la exigencia de la Castellana y la velocidad de las startups. Soluciones adaptadas a la realidad empresarial de Madrid."
                            />
                            <FeatureRow
                                title="Soporte VIP Presencial"
                                description="Para despliegues críticos, nada supera la cercanía. Reuniones presenciales y soporte on-site cuando lo necesitas."
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-8">
                    <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0f0f1a] to-[#05050a] border border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500" />
                        <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="p-2 bg-white/5 rounded-lg"><Code2 className="w-5 h-5 text-cyan-400" /></span>
                            Ingeniería vs. Hype
                        </h4>
                        <p className="text-white/70 text-sm leading-relaxed">
                            Mientras otros venden "prompts" genéricos, nosotros desplegamos <strong>infraestructura propietaria</strong>. Servidores dedicados, Fine-tuning de modelos Open Source y arquitecturas RAG que garantizan la privacidad de tus datos según la normativa europea.
                        </p>
                    </div>

                    <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0f0f1a] to-[#05050a] border border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500" />
                        <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                            <span className="p-2 bg-white/5 rounded-lg"><Network className="w-5 h-5 text-purple-400" /></span>
                            Conectividad Total
                        </h4>
                        <p className="text-white/70 text-sm leading-relaxed">
                            Tus agentes de IA no viven aislados. Los integramos con tu CRM (Salesforce, HubSpot), tu ERP (SAP, Odoo) y tus canales de comunicación (Slack, WhatsApp Business, Email), creando un tejido operativo unificado.
                        </p>
                    </div>
                </div>
            </div>

            {/* Detailed Methodology SEO Content */}
            <div className="grid gap-12 text-white/80">
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white">Metodología "Aether": De la Consultoría a la Implementación</h3>
                    <p>
                        Nuestro enfoque para prestar <strong>servicios de inteligencia artificial</strong> se basa en un ciclo iterativo de mejora continua. No vendemos "prompts"; vendemos arquitectura de sistemas.
                    </p>
                    <ol className="list-decimal list-inside space-y-4 ml-4">
                        <li><strong>Diagnóstico Cognitivo</strong>: Analizamos tus flujos de trabajo actuales para identificar cuellos de botella informacionales.</li>
                        <li><strong>Arquitectura de Solución</strong>: Diseñamos el blueprint de la solución, seleccionando los modelos (LLMs) y herramientas (Vector Dbs, RAG) adecuados.</li>
                        <li><strong>Desarrollo Ágil</strong>: Implementamos MVPs funcionales en semanas, no meses.</li>
                        <li><strong>Optimización Continua</strong>: Tus agentes de IA aprenden y mejoran con el feedback real de tus operaciones.</li>
                    </ol>
                </div>

                <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white">Tecnologías que Dominamos</h3>
                    <p>
                        Nuestro stack tecnológico es agnóstico pero puntero. Utilizamos lo mejor para cada caso de uso: <strong>OpenAI (GPT-4o)</strong> para razonamiento complejo, <strong>Anthropic (Claude 3.5 Sonnet)</strong> para generación de código y texto matizado, y modelos Open Source como <strong>Llama 3</strong> para despliegues privados y seguros on-premise o en nube privada.
                    </p>
                    <p>
                        Para la orquestación, somos expertos certificados en <strong>n8n</strong>, permitiendo automatizaciones complejas, auditables y escalables que se integran con más de 1000 aplicaciones empresariales.
                    </p>
                </div>
            </div>

        </section>
    );
}


function FeatureRow({ title, description }: { title: string, description: string }) {
    return (
        <div className="flex gap-4">
            <div className="mt-1">
                <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(0,212,255,0.5)]" />
            </div>
            <div>
                <h4 className="text-white font-bold text-lg leading-none mb-2">{title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{description}</p>
            </div>
        </div>
    );
}

function ServiceCard({ icon, title, description }: { icon: any, title: string, description: string }) {
    return (
        <div className="group relative p-8 rounded-2xl bg-[#0a0a12] border border-white/5 hover:border-cyan-500/30 transition-all hover:bg-[#0f0f1a] hover:-translate-y-1">
            <div className="mb-6 p-4 rounded-xl bg-white/5 w-fit group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{title}</h4>
            <p className="text-white/60 leading-relaxed text-sm">
                {description}
            </p>
        </div>
    );
}
