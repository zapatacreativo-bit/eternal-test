"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Zap, Link as LinkIcon, FileJson, Mail, CheckCircle, Play, RotateCcw, Activity } from "lucide-react";

// Types
interface LogEntry {
    id: string;
    timestamp: string;
    message: string;
    type: "info" | "action" | "success" | "data";
}

interface NodeState {
    id: string;
    status: "idle" | "running" | "success";
}

// Visual Nodes Configuration
const nodesConfig = [
    { id: "trigger", label: "Trigger", sub: "Nuevo Lead CRM", icon: Zap, x: 4, y: 32, color: "cyan" },
    { id: "webhook", label: "Webhook", sub: "POST /api/lead", icon: LinkIcon, x: 26, y: 15, color: "magenta" },
    { id: "mapping", label: "Data Mapping", sub: "Transform JSON", icon: FileJson, x: 26, y: 52, color: "purple" },
    { id: "mailchimp", label: "Mailchimp", sub: "Add Subscriber", icon: Mail, x: 50, y: 32, color: "yellow" },
    { id: "output", label: "Output", sub: "Response 200", icon: CheckCircle, x: 76, y: 32, color: "green" },
];

export function WorkflowSimulation() {
    // State
    const [isRunning, setIsRunning] = useState(false);
    const [execCount, setExecCount] = useState(0);
    const [dataCount, setDataCount] = useState(0);
    const [logs, setLogs] = useState<LogEntry[]>([{ id: "init", timestamp: "--:--:--", message: "Sistema listo. Pulsa Ejecutar.", type: "info" }]);
    const [nodeStatuses, setNodeStatuses] = useState<Record<string, "idle" | "running" | "success">>({
        trigger: "idle", webhook: "idle", mapping: "idle", mailchimp: "idle", output: "idle"
    });
    const [activePaths, setActivePaths] = useState<string[]>([]);
    const [particles, setParticles] = useState<{ id: string, from: string, to: string, color: string }[]>([]);
    const [hoveredNode, setHoveredNode] = useState<string | null>(null);

    // Helper: Log
    const addLog = (message: string, type: LogEntry["type"] = "info") => {
        const time = new Date().toLocaleTimeString("es-ES");
        setLogs(prev => [...prev, { id: Math.random().toString(), timestamp: time, message, type }]);
    };

    // Helper: Sleep
    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    // Helper: Paths SVG
    const getPathD = (fromId: string, toId: string) => {
        // Simple coordinate mapping based on % positions (approximate for responsiveness, ideally would utilize refs)
        // For this demo, let's assume a fixed 1000px width reference for logic simplicity or use percentages if SVG supports it well.
        // Actually, SVG lines with percentages are tricky. Let's use specific coordinates logic or just generic straight lines if nodes are aligned.
        // The user's code used curve logic. Let's approximate Bezier curves in SVG relative to 100x100 viewbox.
        const fromParams = nodesConfig.find(n => n.id === fromId)!;
        const toParams = nodesConfig.find(n => n.id === toId)!;

        // Adjust centers (approximate based on node size)
        const startX = fromParams.x + 6; // +6 to center roughly
        const startY = fromParams.y + 6;
        const endX = toParams.x + 6;
        const endY = toParams.y + 6;

        const midX = (startX + endX) / 2;
        return `M ${startX} ${startY} C ${midX} ${startY}, ${midX} ${endY}, ${endX} ${endY}`;
    };

    // Execution Logic
    const executeWorkflow = async () => {
        if (isRunning) return;
        setIsRunning(true);
        setExecCount(p => p + 1);
        setLogs([]);
        setNodeStatuses({ trigger: "idle", webhook: "idle", mapping: "idle", mailchimp: "idle", output: "idle" });
        setActivePaths([]);

        addLog("🚀 Iniciando workflow...", "action");

        // Step 1: Trigger
        await sleep(400);
        setNodeStatuses(prev => ({ ...prev, trigger: "running" }));
        addLog("⚡ Trigger activado: Nuevo lead", "action");
        await sleep(700);
        setNodeStatuses(prev => ({ ...prev, trigger: "success" }));

        // Step 2: Paths to Webhook
        addLog("🔗 Webhook recibiendo payload...", "action");
        setActivePaths(prev => [...prev, "trigger-webhook"]);
        setParticles(prev => [...prev, { id: "p1", from: "trigger", to: "webhook", color: "cyan" }]);
        await sleep(600);
        setParticles(prev => prev.filter(p => p.id !== "p1"));
        setNodeStatuses(prev => ({ ...prev, webhook: "running" }));
        addLog("✓ POST /api/lead (200 OK)", "success");
        await sleep(500);
        setNodeStatuses(prev => ({ ...prev, webhook: "success" }));

        // Step 3: Trigger to Mapping
        addLog("🔄 Transformando datos...", "action");
        setActivePaths(prev => [...prev, "trigger-mapping"]);
        setParticles(prev => [...prev, { id: "p2", from: "trigger", to: "mapping", color: "purple" }]);
        await sleep(600);
        setParticles(prev => prev.filter(p => p.id !== "p2"));
        setNodeStatuses(prev => ({ ...prev, mapping: "running" }));
        addLog("{ email: EMAIL, score: 92 }", "data");
        await sleep(600);
        setNodeStatuses(prev => ({ ...prev, mapping: "success" }));

        // Step 4: Merge to Mailchimp
        addLog("📧 Conectando Mailchimp API...", "action");
        setActivePaths(prev => [...prev, "webhook-mailchimp", "mapping-mailchimp"]);
        setParticles(prev => [
            ...prev,
            { id: "p3", from: "webhook", to: "mailchimp", color: "cyan" },
            { id: "p4", from: "mapping", to: "mailchimp", color: "purple" }
        ]);
        await sleep(500);
        setParticles(prev => prev.filter(p => p.id !== "p3" && p.id !== "p4"));
        setNodeStatuses(prev => ({ ...prev, mailchimp: "running" }));
        await sleep(700);
        addLog("✓ Suscriptor añadido", "success");
        setNodeStatuses(prev => ({ ...prev, mailchimp: "success" }));
        setDataCount(p => p + 1);

        // Step 5: Output
        addLog("📤 Finalizando...", "action");
        setActivePaths(prev => [...prev, "mailchimp-output"]);
        setParticles(prev => [...prev, { id: "p5", from: "mailchimp", to: "output", color: "green" }]);
        await sleep(400);
        setParticles(prev => prev.filter(p => p.id !== "p5"));
        setNodeStatuses(prev => ({ ...prev, output: "running" }));
        await sleep(350);
        setNodeStatuses(prev => ({ ...prev, output: "success" }));
        addLog("✓ Workflow completado", "success");

        setIsRunning(false);
    };

    const resetWorkflow = () => {
        setIsRunning(false);
        setActivePaths([]);
        setNodeStatuses({ trigger: "idle", webhook: "idle", mapping: "idle", mailchimp: "idle", output: "idle" });
        setParticles([]);
        addLog("Sistema reiniciado.", "info");
    };

    return (
        <section className="py-24 px-6 bg-[#0a0a0f] text-white overflow-hidden relative font-sans">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0a0a0f] to-[#0a0a0f]" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                        <span className="text-xs font-mono uppercase tracking-widest text-cyan-200">En Vivo</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                        Workflow IA en Acción
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Visualiza cómo los triggers, webhooks y mapeos transforman tu negocio con automatización inteligente.
                    </p>
                </div>

                {/* Workflow Canvas */}
                <div className="relative w-full aspect-[16/10] md:aspect-[21/9] bg-[#0f0f19]/80 rounded-3xl border border-white/10 backdrop-blur-2xl overflow-hidden shadow-2xl">

                    {/* Top Line */}
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-50" />

                    {/* SVG Connections Layer */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="gradient-flow" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#22d3ee" />
                                <stop offset="50%" stopColor="#a855f7" />
                                <stop offset="100%" stopColor="#ec4899" />
                            </linearGradient>
                        </defs>
                        {/* Draw Lines */}
                        {[
                            { id: "trigger-webhook", from: "trigger", to: "webhook" },
                            { id: "trigger-mapping", from: "trigger", to: "mapping" },
                            { id: "webhook-mailchimp", from: "webhook", to: "mailchimp" },
                            { id: "mapping-mailchimp", from: "mapping", to: "mailchimp" },
                            { id: "mailchimp-output", from: "mailchimp", to: "output" }
                        ].map(path => (
                            <path
                                key={path.id}
                                d={getPathD(path.from, path.to)}
                                fill="none"
                                stroke={activePaths.includes(path.id) ? "url(#gradient-flow)" : "rgba(255,255,255,0.1)"}
                                strokeWidth="0.5"
                                strokeDasharray={activePaths.includes(path.id) ? "none" : "1 1"}
                                className={cn("transition-all duration-500", activePaths.includes(path.id) && "animate-pulse drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]")}
                            />
                        ))}
                    </svg>

                    {/* Particles Layer */}
                    <AnimatePresence>
                        {particles.map(particle => {
                            const fromNode = nodesConfig.find(n => n.id === particle.from)!;
                            const toNode = nodesConfig.find(n => n.id === particle.to)!;
                            return (
                                <motion.div
                                    key={particle.id}
                                    initial={{ x: `${fromNode.x + 6}%`, y: `${fromNode.y + 6}%`, opacity: 1, scale: 0.5 }}
                                    animate={{ x: `${toNode.x + 6}%`, y: `${toNode.y + 6}%`, opacity: 0, scale: 1.5 }}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                    className={cn(
                                        "absolute w-3 h-3 rounded-full blur-[2px] z-20",
                                        particle.color === "cyan" && "bg-cyan-400 shadow-[0_0_20px_#22d3ee]",
                                        particle.color === "purple" && "bg-purple-400 shadow-[0_0_20px_#a855f7]",
                                        particle.color === "green" && "bg-green-400 shadow-[0_0_20px_#4ade80]"
                                    )}
                                />
                            )
                        })}
                    </AnimatePresence>

                    {/* Nodes Layer */}
                    {nodesConfig.map(node => {
                        const status = nodeStatuses[node.id];
                        const isActive = status === 'running';
                        const isSuccess = status === 'success';
                        const isHovered = hoveredNode === node.id;

                        return (
                            <motion.div
                                key={node.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: isHovered ? 1.05 : 1 }}
                                whileHover={{ y: -5 }}
                                onHoverStart={() => setHoveredNode(node.id)}
                                onHoverEnd={() => setHoveredNode(null)}
                                className={cn(
                                    "absolute p-4 rounded-xl border backdrop-blur-md transition-all duration-300 cursor-pointer z-30 min-w-[140px]",
                                    "bg-[#141423]/90 border-white/10",
                                    isActive && "border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.3)]",
                                    isSuccess && "border-green-400 shadow-[0_0_30px_rgba(74,222,128,0.3)]"
                                )}
                                style={{ left: `${node.x}%`, top: `${node.y}%` }}
                            >
                                {/* Status Dot */}
                                <div className={cn(
                                    "absolute top-3 right-3 w-2 h-2 rounded-full transition-all",
                                    status === 'idle' && "bg-white/10",
                                    status === 'running' && "bg-cyan-400 animate-ping",
                                    status === 'success' && "bg-green-400"
                                )} />

                                {/* Icon */}
                                <div className={cn(
                                    "w-10 h-10 rounded-lg mb-3 flex items-center justify-center text-xl relative overflow-hidden",
                                    node.color === 'cyan' && "bg-gradient-to-br from-cyan-400 to-cyan-600",
                                    node.color === 'magenta' && "bg-gradient-to-br from-pink-500 to-pink-700",
                                    node.color === 'purple' && "bg-gradient-to-br from-purple-500 to-purple-700",
                                    node.color === 'yellow' && "bg-gradient-to-br from-yellow-400 to-yellow-600",
                                    node.color === 'green' && "bg-gradient-to-br from-green-400 to-green-600",
                                )}>
                                    <node.icon className="text-white w-5 h-5" />
                                    <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent" />
                                </div>

                                <div className="font-bold text-sm text-white">{node.label}</div>
                                <div className="text-[10px] font-mono text-gray-400">{node.sub}</div>

                                {/* JSON Popover on Hover */}
                                <AnimatePresence>
                                    {isHovered && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.9 }}
                                            className="absolute left-0 -bottom-2 translate-y-full w-48 p-3 rounded-lg bg-black/90 border border-white/10 text-[10px] font-mono text-gray-300 z-50 pointer-events-none shadow-xl"
                                        >
                                            <div className="text-purple-400">{"{"}</div>
                                            <div className="pl-2"><span className="text-pink-400">"id"</span>: <span className="text-green-400">"{node.id}"</span>,</div>
                                            <div className="pl-2"><span className="text-pink-400">"status"</span>: <span className="text-cyan-400">"{status}"</span></div>
                                            <div className="text-purple-400">{"}"}</div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}

                    {/* Data Panel */}
                    <div className="absolute bottom-6 left-6 right-6 h-32 bg-[#0a0a12]/95 border border-white/10 rounded-xl backdrop-blur-xl p-4 flex flex-col z-40">
                        <div className="flex justify-between items-center mb-2 border-b border-white/5 pb-2">
                            <div className="flex items-center gap-2 text-sm font-semibold text-white">
                                <Activity className="w-4 h-4 text-cyan-400" />
                                Execution Log
                            </div>
                            <div className={cn(
                                "text-xs px-2 py-1 rounded-full border",
                                isRunning ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-400" : "bg-white/5 border-white/10 text-gray-500"
                            )}>
                                {isRunning ? "EJECUTANDO..." : "ESPERANDO"}
                            </div>
                        </div>
                        <div className="flex-1 overflow-y-auto font-mono text-xs space-y-1 pr-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                            {logs.map((log) => (
                                <div key={log.id} className="flex gap-2">
                                    <span className="text-gray-600">[{log.timestamp}]</span>
                                    <span className={cn(
                                        log.type === 'action' && "text-cyan-400",
                                        log.type === 'success' && "text-green-400",
                                        log.type === 'data' && "text-pink-400",
                                        log.type === 'info' && "text-gray-400",
                                    )}>
                                        {log.type === 'data' ? <span dangerouslySetInnerHTML={{ __html: log.message }} /> : log.message}
                                    </span>
                                </div>
                            ))}
                            <div id="log-end" />
                        </div>
                    </div>

                </div>

                {/* Controls */}
                <div className="flex justify-center gap-4 mt-8">
                    <button
                        onClick={executeWorkflow}
                        disabled={isRunning}
                        className="px-8 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-bold rounded-xl shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_50px_rgba(168,85,247,0.6)] hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                        <Play className="w-5 h-5 fill-current" />
                        Ejecutar Workflow
                    </button>
                    <button
                        onClick={resetWorkflow}
                        className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all flex items-center gap-2"
                    >
                        <RotateCcw className="w-5 h-5" />
                        Reiniciar
                    </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                    {[
                        { label: "Ejecuciones", value: execCount },
                        { label: "Tiempo", value: isRunning ? "..." : "850ms" },
                        { label: "Leads Procesados", value: dataCount },
                        { label: "Tasa de Éxito", value: "100%" },
                    ].map((stat, i) => (
                        <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                            <div className="text-2xl font-mono font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
