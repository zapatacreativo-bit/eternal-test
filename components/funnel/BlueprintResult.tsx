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

    const handleDownload = async () => {
        if (!contentRef.current) return;

        try {
            const canvas = await html2canvas(contentRef.current, {
                scale: 2, // Better resolution
                backgroundColor: "#000000", // Force dark background for PDF
                useCORS: true
            });
            const imgData = canvas.toDataURL("image/png");

            const pdf = new jsPDF({
                orientation: "portrait",
                unit: "mm",
                format: "a4"
            });

            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

            pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
            pdf.save(`Blueprint-IA-${contact.name.replace(/\s+/g, "-")}.pdf`);
        } catch (err) {
            console.error("PDF Generation failed", err);
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
            <div ref={contentRef} className="space-y-8 p-4 rounded-xl bg-black/40">
                <div className="text-center space-y-2">
                    <div className="inline-block p-2 rounded-full bg-green-500/10 text-green-400 mb-2 border border-green-500/20">
                        <CheckCircle className="w-5 h-5 inline mr-2" />
                        Blueprint Generado con Éxito
                    </div>
                    <h3 className="text-2xl font-bold">Hola {contact.name.split(" ")[0]}, aquí está tu plan.</h3>
                    <p className="text-muted-foreground">Basado en tus objetivos de {answers.goal.toLowerCase()}.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <MetricCard title="Ahorro Estimado" value="20h/ sem" sub="En tareas manuales" icon={Clock} delay={0.1} />
                    <MetricCard title="ROI Proyectado" value="3.5x" sub="En 6 meses" icon={TrendingUp} delay={0.2} />
                    <MetricCard title="Implementación" value="3-5 Sem" sub="Tiempo estimado" icon={Zap} delay={0.3} />
                </div>

                <Card className="bg-white/5 border-white/10 overflow-hidden">
                    <CardHeader className="bg-white/5 border-b border-white/5">
                        <CardTitle className="flex items-center gap-2">
                            <Bot className="w-5 h-5 text-primary" />
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
                                className="flex items-start gap-4 p-4 rounded-lg bg-black/20 border border-white/5 hover:border-primary/50 transition-colors"
                            >
                                <div className="p-2 rounded-md bg-primary/10 text-primary">
                                    <agent.icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white">{agent.title}</h4>
                                    <p className="text-sm text-muted-foreground">{agent.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </CardContent>
                </Card>

                {/* Footer for PDF only (Visual trickery could be added here) */}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" onClick={handleDownload} className="bg-primary hover:bg-primary/90 w-full sm:w-auto">
                    <Download className="mr-2 w-4 h-4" />
                    Descargar PDF Completo
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
            className="p-4 rounded-xl bg-white/5 border border-white/10 text-center space-y-1 hover:bg-white/10 transition-colors"
        >
            <Icon className="w-6 h-6 mx-auto text-primary mb-2 opacity-80" />
            <div className="text-2xl font-bold text-white">{value}</div>
            <div className="text-sm font-medium text-white/80">{title}</div>
            <div className="text-xs text-muted-foreground">{sub}</div>
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
