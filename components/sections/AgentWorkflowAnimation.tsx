"use client";

import { motion } from "framer-motion";
import { Database, Mail, MessageSquare, Zap, CheckCircle, ArrowRight, BrainCircuit } from "lucide-react";
import { useState, useEffect } from "react";

export function AgentWorkflowAnimation() {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setStep((prev) => (prev + 1) % 4);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const nodes = [
        { id: "trigger", label: "Trigger (Input)", icon: Mail, color: "text-blue-400" },
        { id: "agent", label: "Agente Autónomo (Thinking)", icon: BrainCircuit, color: "text-purple-400" },
        { id: "action", label: "Webhook (Action)", icon: Zap, color: "text-yellow-400" },
        { id: "result", label: "Resultado (CRM)", icon: Database, color: "text-green-400" },
    ];

    return (
        <div className="w-full max-w-4xl mx-auto p-8 rounded-3xl bg-black/40 border border-white/10 backdrop-blur-md relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />

            {/* Connecting Lines */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-white/5 -translate-y-1/2 z-0" />

            {/* Moving Particle */}
            <motion.div
                className="absolute top-1/2 left-0 w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent z-0"
                animate={{
                    x: ["0%", "100%"],
                    opacity: [0, 1, 0]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                }}
                style={{ translateY: "-50%" }}
            />

            <div className="grid grid-cols-4 gap-4 relative z-10">
                {nodes.map((node, index) => {
                    const Icon = node.icon;
                    const isActive = step === index;
                    const isPassed = step > index;

                    return (
                        <div key={node.id} className="flex flex-col items-center gap-4">
                            <motion.div
                                initial={false}
                                animate={{
                                    scale: isActive ? 1.2 : 1,
                                    borderColor: isActive ? "rgba(139, 92, 246, 0.5)" : "rgba(255,255,255,0.1)",
                                    boxShadow: isActive ? "0 0 30px rgba(139, 92, 246, 0.3)" : "none"
                                }}
                                className={`w-20 h-20 rounded-2xl bg-black/80 border flex items-center justify-center transition-colors duration-500`}
                            >
                                <Icon className={`w-10 h-10 ${node.color} ${isActive ? 'animate-pulse' : ''}`} />
                            </motion.div>

                            <div className="text-center">
                                <p className={`font-bold text-sm ${isActive ? 'text-white' : 'text-gray-500'}`}>
                                    {node.label}
                                </p>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: isActive ? 1 : 0 }}
                                    className="text-xs text-primary mt-1"
                                >
                                    {isActive ? "Procesando..." : "."}
                                </motion.div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Code Snippet Overlay */}
            <div className="mt-12 p-4 bg-black/60 rounded-xl border border-white/5 font-mono text-xs text-gray-400 overflow-hidden">
                <div className="flex gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <motion.div
                    animate={{ y: [0, -20, -40, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                >
                    <p>
                        <span className="text-purple-400">const</span> agent = <span className="text-blue-400">new</span> Agent();
                    </p>
                    <p>
                        agent.<span className="text-yellow-400">on</span>(<span className="text-green-300">"email_received"</span>, <span className="text-blue-400">async</span> (event) ={">"} {"{"}
                    </p>
                    <p className="pl-4">
                        <span className="text-purple-400">const</span> intent = <span className="text-blue-400">await</span> llm.analyze(event.body);
                    </p>
                    <p className="pl-4">
                        <span className="text-purple-400">if</span> (intent === <span className="text-green-300">"purchase"</span>) {"{"}
                    </p>
                    <p className="pl-8">
                        <span className="text-blue-400">await</span> crm.createLead(event.sender);
                    </p>
                    <p className="pl-8 text-gray-500">// Triggering webhook...</p>
                    <p className="pl-4">{"}"}</p>
                    <p>{"}"});</p>
                </motion.div>
            </div>
        </div>
    );
}
