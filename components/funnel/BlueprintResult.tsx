"use client";

import { motion } from "framer-motion";
import { ContactFormData, QuestionnaireData } from "@/lib/schemas";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Share2, Bot, TrendingUp, Clock, Zap } from "lucide-react";
import { useEffect, useState } from "react";

interface BlueprintResultProps {
    contact: ContactFormData;
    answers: QuestionnaireData;
}

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";

// ... imports remain the same

export function BlueprintResult({ contact, answers }: BlueprintResultProps) {
    const [loading, setLoading] = useState(true);
    const contentRef = useRef<HTMLDivElement>(null);

    // Simulate generation delay
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    const [generating, setGenerating] = useState(false); // Add this state

    const handleDownload = async () => {
        if (!contentRef.current) return;

        setGenerating(true);
        try {
            // Capture at a higher resolution width for better text rendering
            const captureWidth = 800;

            const canvas = await html2canvas(contentRef.current, {
                scale: 2, // Good resolution
                useCORS: true,
                backgroundColor: "#0a0a0f",
                windowWidth: captureWidth,
                width: captureWidth,
                onclone: (clonedDoc: Document) => {
                    const element = clonedDoc.querySelector('[data-print-target="true"]') as HTMLElement;
                    if (element) {
                        // Force desktop-like width for cleaner layout
                        element.style.width = `${captureWidth}px`;
                        element.style.padding = "40px";
                        element.style.margin = "0";
                        element.style.height = "auto";

                        // FIX: Force system font and letter spacing to prevent "squashed" text
                        element.style.fontFamily = "Arial, Helvetica, sans-serif";
                        element.style.letterSpacing = "0.5px";

                        // Force Grid to be at least 2 columns if possible or keep stack but cleaner
                        const grid = element.querySelector('.grid');
                        if (grid) {
                            (grid as HTMLElement).style.gap = "20px";
                        }
                    }
                }
            } as any);

            const imgData = canvas.toDataURL("image/png");

            // 9:16 Ratio Format (e.g. 108mm x 192mm)
            const pdf = new jsPDF({
                orientation: "portrait",
                unit: "mm",
                format: [108, 192]
            });

            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

            pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
            pdf.save(`Blueprint-Executivo-${contact.name.replace(/\s+/g, "-")}.pdf`);
        } catch (err: any) {
            console.error("PDF Generation failed", err);
            alert(`Error técnico: ${err.message || JSON.stringify(err)}. Por favor toma una captura y envíala a soporte.`);
        } finally {
            setGenerating(false);
        }
    };

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center py-20 space-y-4">
                <div className="relative w-20 h-20">
                    <div className="absolute inset-0 border-4 border-primary/20 rounded-full" />
                    <div className="absolute inset-0 border-4 border-primary rounded-full border-t-transparent animate-spin" />
                    <Zap className="absolute inset-0 m-auto w-8 h-8 text-white animate-pulse" />
                </div>
                <p className="text-lg font-medium animate-pulse text-muted-foreground">
                    Analizando respuestas y generando arquitectura...
                </p>
            </div>
        );
    }

    // Simple Logic to generate "Recommendations"
    const recommendedAgents = [
        { title: "Lead Qualifier Agent", desc: "Automatiza la cualificación inicial 24/7.", icon: Bot },
        { title: "Support Triaging", desc: "Clasifica y responde tickets nivel 1.", icon: Clock },
        { title: "CRM Sync Bot", desc: "Mantiene tu CRM actualizado en tiempo real.", icon: Zap },
    ];

    return (
        <div className="space-y-8 animate-in fade-in zoom-in duration-500">
            {/* Printable Content Container */}
            <div ref={contentRef} data-print-target="true" className="space-y-8 p-4 rounded-xl bg-[#0a0a0f]">
                <div className="text-center space-y-2">
                    <div className="inline-block p-2 rounded-full bg-[#162a1c] text-[#4ade80] mb-2 border border-[#22c55e33]">
                        <CheckCircle className="w-5 h-5 inline mr-2" />
                        Blueprint Generado con Éxito
                    </div>
                    <h3 className="text-2xl font-bold text-white">Hola {contact.name.split(" ")[0]}, aquí está tu plan.</h3>
                    <p className="text-[#a1a1aa]">Basado en tus objetivos de {answers.goal.toLowerCase()}.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <MetricCard title="Ahorro Estimado" value="20h/ sem" sub="En tareas manuales" icon={Clock} delay={0.1} />
                    <MetricCard title="ROI Proyectado" value="3.5x" sub="En 6 meses" icon={TrendingUp} delay={0.2} />
                    <MetricCard title="Implementación" value="3-5 Sem" sub="Tiempo estimado" icon={Zap} delay={0.3} />
                </div>

                <Card className="bg-[#18181b] border-[#27272a] overflow-hidden">
                    <CardHeader className="bg-[#18181b] border-b border-[#27272a]">
                        <CardTitle className="flex items-center gap-2 text-white">
                            <Bot className="w-5 h-5 text-[#8b5cf6]" />
                            Arquitectura de Agentes Recomendada
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 grid gap-4">
                        {recommendedAgents.map((agent, i) => (
                            <motion.div
                                key={agent.title}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 + (i * 0.1) }}
                                className="flex items-start gap-4 p-4 rounded-lg bg-[#000000] border border-[#27272a] hover:border-[#8b5cf6] transition-colors"
                            >
                                <div className="p-2 rounded-md bg-[#8b5cf620] text-[#8b5cf6]">
                                    <agent.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">{agent.title}</h4>
                                    <p className="text-sm text-[#a1a1aa]">{agent.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </CardContent>
                </Card>

                {/* Footer for PDF only (Visual trickery could be added here) */}
            </div>

            {/* Strategy Tiers */}
            <div className="pt-6">
                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-cyan-400" />
                    Niveles de Implementación Estratégica
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Tier 1: Pilot */}
                    <div className="p-4 rounded-xl bg-black/40 border border-white/10 opacity-70 hover:opacity-100 transition-opacity">
                        <div className="text-sm font-mono text-gray-500 mb-1">FASE 1</div>
                        <h5 className="text-lg font-bold text-white mb-2">Pilot (MVP)</h5>
                        <div className="text-2xl font-bold text-white mb-4">€2.5k <span className="text-xs font-normal text-gray-500">/ setup</span></div>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-gray-600" /> 1 Agente Autónomo</li>
                            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-gray-600" /> Webhook Básico</li>
                            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-gray-600" /> Soporte Email</li>
                        </ul>
                    </div>

                    {/* Tier 2: Growth (Recommended) */}
                    <div className="relative p-6 rounded-xl bg-[#1c1c21] border border-cyan-500/50 shadow-[0_0_30px_rgba(0,212,255,0.1)] transform md:-translate-y-2">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-cyan-500 text-black text-xs font-bold rounded-full">
                            RECOMENDADO
                        </div>
                        <div className="text-sm font-mono text-cyan-400 mb-1">FASE 2</div>
                        <h5 className="text-xl font-bold text-white mb-2">Growth Engine</h5>
                        <div className="text-3xl font-bold text-white mb-4">€5.8k <span className="text-xs font-normal text-gray-500">/ setup</span></div>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li className="flex gap-2"><Zap className="w-4 h-4 text-cyan-400" /> 3 Agentes Orquestados</li>
                            <li className="flex gap-2"><Zap className="w-4 h-4 text-cyan-400" /> Integración CRM + ERP</li>
                            <li className="flex gap-2"><Zap className="w-4 h-4 text-cyan-400" /> Dashboard Analytics</li>
                            <li className="flex gap-2"><Zap className="w-4 h-4 text-cyan-400" /> Soporte Slack Híbrido</li>
                        </ul>
                        <div className="mt-6 w-full py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-center text-sm font-bold">
                            Mejor ROI (4.5x)
                        </div>
                    </div>

                    {/* Tier 3: Sovereign */}
                    <div className="p-4 rounded-xl bg-black/40 border border-white/10 opacity-70 hover:opacity-100 transition-opacity">
                        <div className="text-sm font-mono text-purple-400 mb-1">FASE 3</div>
                        <h5 className="text-lg font-bold text-white mb-2">Sovereign</h5>
                        <div className="text-2xl font-bold text-white mb-4">Custom <span className="text-xs font-normal text-gray-500">/ quote</span></div>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-purple-900" /> Infraestructura Propia</li>
                            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-purple-900" /> Modelos Fine-Tuned</li>
                            <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-purple-900" /> SLA Empresarial</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 border-t border-white/10">
                <Button
                    size="lg"
                    onClick={handleDownload}
                    disabled={generating}
                    className="bg-primary hover:bg-primary/90 w-full sm:w-auto"
                >
                    {generating ? (
                        <>
                            <Zap className="mr-2 w-4 h-4 animate-spin" />
                            Generando...
                        </>
                    ) : (
                        <>
                            <Download className="mr-2 w-4 h-4" />
                            Descargar PDF Completo
                        </>
                    )}
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 w-full sm:w-auto">
                    <Share2 className="mr-2 w-4 h-4 " />
                    Enviar por Email
                </Button>
            </div>
        </div>
    );
}

function MetricCard({ title, value, sub, icon: Icon, delay }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay }}
            className="p-4 rounded-xl bg-[#18181b] border border-[#27272a] text-center space-y-1 hover:bg-[#27272a] transition-colors"
        >
            <Icon className="w-6 h-6 mx-auto text-[#8b5cf6] mb-2 opacity-80" />
            <div className="text-2xl font-bold text-white">{value}</div>
            <div className="text-sm font-medium text-[#e4e4e7]">{title}</div>
            <div className="text-xs text-[#a1a1aa]">{sub}</div>
        </motion.div>
    );
}

function CheckCircle({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
    );
}
