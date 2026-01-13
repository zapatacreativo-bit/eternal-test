"use client";

import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

// --- Configuration Constants from User Script ---
const CONFIG = {
    colors: {
        cyan: '#00d4ff',
        magenta: '#ff00aa',
        purple: '#8b5cf6',
        green: '#00ff88',
        yellow: '#ffd000',
    },
    animation: {
        particleDuration: 600,
        easing: (t: number) => 1 - Math.pow(1 - t, 3)
    }
};

const TIERS = [
    {
        id: 'trigger',
        label: 'Trigger',
        color: 'cyan',
        nodes: [
            { id: 'trigger', icon: '⚡', title: 'CRM Trigger', subtitle: 'on:new_lead', type: 'trigger' },
            { id: 'webhook', icon: '🔗', title: 'Webhook', subtitle: 'POST /api', type: 'webhook' }
        ]
    },
    {
        id: 'process',
        label: 'Process',
        color: 'magenta',
        nodes: [
            { id: 'filter', icon: '🔍', title: 'Filter', subtitle: 'score > 70', type: 'filter' },
            { id: 'transform', icon: '🔄', title: 'Transform', subtitle: 'map:fields', type: 'transform' }
        ]
    },
    {
        id: 'integrate',
        label: 'Integrate',
        color: 'yellow',
        nodes: [
            { id: 'mailchimp', icon: '📧', title: 'Mailchimp', subtitle: 'add:subscriber', type: 'mailchimp' },
            { id: 'slack', icon: '💬', title: 'Slack', subtitle: 'notify:sales', type: 'slack' },
            { id: 'database', icon: '🗄️', title: 'Database', subtitle: 'insert:lead', type: 'database' }
        ]
    },
    {
        id: 'output',
        label: 'Output',
        color: 'green',
        nodes: [
            { id: 'output', icon: '✅', title: 'Response', subtitle: 'status:200', type: 'output' }
        ]
    }
];

const CONNECTIONS = [
    { from: 'trigger', to: 'filter' },
    { from: 'webhook', to: 'filter' },
    { from: 'filter', to: 'transform' },
    { from: 'transform', to: 'mailchimp' },
    { from: 'transform', to: 'slack' },
    { from: 'transform', to: 'database' },
    { from: 'mailchimp', to: 'output' },
    { from: 'slack', to: 'output' },
    { from: 'database', to: 'output' }
];

export function WorkflowSimulation() {
    const [isRunning, setIsRunning] = useState(false);
    const [execStatus, setExecStatus] = useState("Standby");
    const [stats, setStats] = useState({ exec: 0, time: "0ms", nodes: "0/8", success: "100%" });
    const logContainerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLDivElement>(null);

    // Initial Drawing of Connections
    useEffect(() => {
        const draw = () => {
            const svg = document.getElementById('connections-svg');
            const canvas = document.getElementById('canvas-content');
            if (!svg || !canvas) return;

            const canvasRect = canvas.getBoundingClientRect();
            // Clear existing paths but keep defs
            const defs = svg.querySelector('defs');
            svg.innerHTML = '';
            if (defs) svg.appendChild(defs);

            CONNECTIONS.forEach((conn, index) => {
                const startEl = document.getElementById(`node-${conn.from}`);
                const endEl = document.getElementById(`node-${conn.to}`);

                if (!startEl || !endEl) return;

                const startRect = startEl.getBoundingClientRect();
                const endRect = endEl.getBoundingClientRect();

                // Calculate relative positions
                const start = {
                    x: startRect.left - canvasRect.left + startRect.width / 2,
                    y: startRect.top - canvasRect.top + startRect.height / 2
                };
                const end = {
                    x: endRect.left - canvasRect.left + endRect.width / 2,
                    y: endRect.top - canvasRect.top + endRect.height / 2
                };

                const dx = end.x - start.x;
                const cp1x = start.x + dx * 0.4;
                const cp2x = start.x + dx * 0.6;

                const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                path.setAttribute('class', 'connection-line');
                path.setAttribute('id', `connection-${index}`);
                path.setAttribute('d', `M ${start.x} ${start.y} C ${cp1x} ${start.y}, ${cp2x} ${end.y}, ${end.x} ${end.y}`);
                path.style.fill = 'none';
                path.style.stroke = 'rgba(255, 255, 255, 0.06)';
                path.style.strokeWidth = '2';
                path.style.transition = 'all 0.3s';

                svg.appendChild(path);
            });
        };

        // Draw initially and on resize
        setTimeout(draw, 500); // Wait for layout
        window.addEventListener('resize', draw);
        return () => window.removeEventListener('resize', draw);
    }, []);

    // Helper: Log
    const log = (msg: string, type: string) => {
        if (!logContainerRef.current) return;
        const time = new Date().toLocaleTimeString('es-ES');
        const color = type === 'act' ? CONFIG.colors.cyan :
            type === 'ok' ? CONFIG.colors.green :
                type === 'data' ? CONFIG.colors.magenta : 'rgba(255,255,255,0.5)';

        const line = document.createElement('div');
        line.innerHTML = `<span style="color:rgba(255,255,255,0.35)">[${time}]</span> <span style="color:${color}">${msg}</span>`;
        logContainerRef.current.appendChild(line);
        logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    };

    // Helper: Activate Node
    const activateNode = (id: string, status: 'active' | 'success') => {
        const node = document.getElementById(`node-${id}`);
        const statusEl = document.getElementById(`status-${id}`);

        if (node) {
            node.classList.remove('ring-[#00d4ff]', 'ring-[#00ff88]', 'ring-2');
            node.style.boxShadow = 'none';
            if (status === 'active') {
                node.style.borderColor = CONFIG.colors.cyan;
                node.style.boxShadow = `0 0 30px rgba(0, 212, 255, 0.25), inset 0 0 20px rgba(0, 212, 255, 0.05)`;
            } else if (status === 'success') {
                node.style.borderColor = CONFIG.colors.green;
                node.style.boxShadow = `0 0 30px rgba(0, 255, 136, 0.2), inset 0 0 20px rgba(0, 255, 136, 0.03)`;
                setStats(prev => ({ ...prev, nodes: `${parseInt(prev.nodes.split('/')[0]) + 1}/8` }));
            }
        }

        if (statusEl) {
            statusEl.style.backgroundColor = status === 'active' ? CONFIG.colors.cyan : CONFIG.colors.green;
            statusEl.style.boxShadow = `0 0 10px ${status === 'active' ? CONFIG.colors.cyan : CONFIG.colors.green}`;
        }
    };

    // Helper: Animate Particle
    const animateParticle = (particleId: number, from: string, to: string, duration = CONFIG.animation.particleDuration) => {
        return new Promise<void>(resolve => {
            const particle = document.getElementById(`particle-${particleId}`);
            const connIndex = CONNECTIONS.findIndex(c => c.from === from && c.to === to);
            const path = document.getElementById(`connection-${connIndex}`) as unknown as SVGPathElement;

            if (!particle || !path) { resolve(); return; }

            // Highlight path
            path.style.stroke = 'url(#threadGradient)';
            path.style.strokeWidth = '2.5';
            path.style.filter = 'drop-shadow(0 0 8px rgba(0, 212, 255, 0.6))';

            const length = path.getTotalLength();
            particle.style.opacity = '1';
            const startTime = performance.now();

            const frame = (time: number) => {
                const elapsed = time - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const eased = CONFIG.animation.easing(progress);

                const p = path.getPointAtLength(length * eased);
                particle.style.left = `${p.x - 5}px`;
                particle.style.top = `${p.y - 5}px`;

                if (progress < 1) {
                    requestAnimationFrame(frame);
                } else {
                    particle.style.opacity = '0';
                    // Reset path
                    path.style.stroke = 'rgba(255, 255, 255, 0.06)';
                    path.style.strokeWidth = '2';
                    path.style.filter = 'none';
                    resolve();
                }
            };
            requestAnimationFrame(frame);
        });
    };

    const run = async () => {
        if (isRunning) return;
        setIsRunning(true);
        setExecStatus("Running...");
        setStats(p => ({ ...p, nodes: "0/8", success: "100%", exec: p.exec + 1 }));
        if (logContainerRef.current) logContainerRef.current.innerHTML = '';

        // Reset Nodes Visuals
        TIERS.forEach(t => t.nodes.forEach(n => {
            const el = document.getElementById(`node-${n.id}`);
            const st = document.getElementById(`status-${n.id}`);
            if (el) { el.style.borderColor = 'rgba(255,255,255,0.06)'; el.style.boxShadow = 'none'; }
            if (st) { st.style.backgroundColor = 'rgba(255,255,255,0.1)'; st.style.boxShadow = 'none'; }
        }));

        const t0 = performance.now();
        log('🚀 Iniciando workflow...', 'act');

        const sleep = (ms: number) => new Promise(r => setTimeout(r, ms));

        // TIER 1
        await sleep(300);
        log('⚡ Trigger: Nuevo lead detectado', 'act');
        activateNode('trigger', 'active');
        await sleep(400);
        activateNode('trigger', 'success');

        log('🔗 Webhook: Recibiendo payload...', 'act');
        activateNode('webhook', 'active');
        await sleep(350);
        log('✓ POST /api/lead → 200 OK', 'ok');
        activateNode('webhook', 'success');

        await Promise.all([
            animateParticle(1, 'trigger', 'filter'),
            animateParticle(2, 'webhook', 'filter')
        ]);

        // TIER 2
        log('🔍 Filter: Evaluando score...', 'act');
        activateNode('filter', 'active');
        await sleep(400);
        log('✓ Lead score: 85 > 70 → PASS', 'ok');
        activateNode('filter', 'success');

        await animateParticle(1, 'filter', 'transform');

        log('🔄 Transform: Mapeando campos...', 'act');
        activateNode('transform', 'active');
        await sleep(450);
        log('{email→EMAIL, name→FNAME, ...}', 'data');
        activateNode('transform', 'success');

        // TIER 3
        log('📧 Mailchimp: Añadiendo suscriptor...', 'act');
        log('💬 Slack: Notificando a #sales...', 'act');
        log('🗄️ Database: Insertando lead...', 'act');
        activateNode('mailchimp', 'active');
        activateNode('slack', 'active');
        activateNode('database', 'active');

        await Promise.all([
            animateParticle(1, 'transform', 'mailchimp'),
            animateParticle(2, 'transform', 'slack'),
            animateParticle(3, 'transform', 'database')
        ]);

        await sleep(500);
        log('✓ Mailchimp: Suscriptor añadido', 'ok');
        activateNode('mailchimp', 'success');
        await sleep(200);
        log('✓ Slack: Mensaje enviado', 'ok');
        activateNode('slack', 'success');
        await sleep(200);
        log('✓ Database: Lead insertado (ID: 8847)', 'ok');
        activateNode('database', 'success');

        // Output
        await Promise.all([
            animateParticle(1, 'mailchimp', 'output'),
            animateParticle(2, 'slack', 'output'),
            animateParticle(4, 'database', 'output')
        ]);

        log('📤 Output: Generando respuesta...', 'act');
        activateNode('output', 'active');
        await sleep(300);
        activateNode('output', 'success');
        log('✅ Workflow completado con éxito', 'ok');

        setExecStatus("✓ Complete");
        setStats(p => ({ ...p, time: `${Math.round(performance.now() - t0)}ms` }));
        setIsRunning(false);
    };

    const reset = () => {
        setIsRunning(false);
        setExecStatus("Standby");
        setStats(p => ({ ...p, nodes: "0/8" }));
        if (logContainerRef.current) logContainerRef.current.innerHTML = '<div style="color:rgba(255,255,255,0.35)">[--:--:--] Sistema reiniciado.</div>';
        TIERS.forEach(t => t.nodes.forEach(n => {
            const el = document.getElementById(`node-${n.id}`);
            const st = document.getElementById(`status-${n.id}`);
            if (el) { el.style.borderColor = 'rgba(255,255,255,0.06)'; el.style.boxShadow = 'none'; }
            if (st) { st.style.backgroundColor = 'rgba(255,255,255,0.1)'; st.style.boxShadow = 'none'; }
        }));
    };

    return (
        <section className="py-12 md:py-16 px-4 bg-[#05050a] text-white overflow-hidden relative">
            <style jsx>{`
                .tier-label.cyan { color: ${CONFIG.colors.cyan}; border: 1px solid rgba(0,212,255,0.2); background: rgba(0,212,255,0.05); }
                .tier-label.magenta { color: ${CONFIG.colors.magenta}; border: 1px solid rgba(255,0,170,0.2); background: rgba(255,0,170,0.05); }
                .tier-label.yellow { color: ${CONFIG.colors.yellow}; border: 1px solid rgba(255,208,0,0.2); background: rgba(255,208,0,0.05); }
                .tier-label.green { color: ${CONFIG.colors.green}; border: 1px solid rgba(0,255,136,0.2); background: rgba(0,255,136,0.05); }
                
                .node-icon.trigger { background: linear-gradient(135deg, #00d4ff, #0099cc); box-shadow: 0 4px 15px rgba(0,212,255,0.3); }
                .node-icon.webhook { background: linear-gradient(135deg, #ff00aa, #cc0088); box-shadow: 0 4px 15px rgba(255,0,170,0.3); }
                .node-icon.filter { background: linear-gradient(135deg, #8b5cf6, #6d28d9); box-shadow: 0 4px 15px rgba(139,92,246,0.3); }
                .node-icon.transform { background: linear-gradient(135deg, #f59e0b, #d97706); box-shadow: 0 4px 15px rgba(245,158,11,0.3); }
                .node-icon.mailchimp { background: linear-gradient(135deg, #ffd000, #e6bb00); box-shadow: 0 4px 15px rgba(255,208,0,0.3); }
                .node-icon.slack { background: linear-gradient(135deg, #4a154b, #611f69); box-shadow: 0 4px 15px rgba(97,31,105,0.3); }
                .node-icon.database { background: linear-gradient(135deg, #059669, #047857); box-shadow: 0 4px 15px rgba(5,150,105,0.3); }
                .node-icon.output { background: linear-gradient(135deg, #00ff88, #00cc6a); box-shadow: 0 4px 15px rgba(0,255,136,0.3); }
            `}</style>

            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_15%_30%,rgba(0,212,255,0.12)_0%,transparent_50%),radial-gradient(ellipse_at_85%_70%,rgba(255,0,170,0.1)_0%,transparent_50%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10 font-sans">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/20 text-[#00d4ff] text-xs font-bold uppercase tracking-widest mb-4">
                        <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-pulse shadow-[0_0_10px_#00d4ff]" />
                        Live Demo
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00d4ff] via-[#ff00aa] to-[#8b5cf6]">Workflow Automation</span> en Acción
                    </h2>
                    <p className="text-white/60 max-w-xl mx-auto text-lg mb-8">
                        Triggers, Webhooks, Data Mapping y conexiones inteligentes trabajando en tiempo real.
                    </p>

                    {/* Controls (Moved Up) */}
                    <div className="flex justify-center gap-4 flex-wrap relative z-20">
                        <button
                            onClick={run}
                            disabled={isRunning}
                            className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#00d4ff] via-[#ff00aa] to-[#8b5cf6] text-white font-bold text-lg shadow-[0_0_30px_rgba(0,212,255,0.4)] hover:shadow-[0_0_50px_rgba(255,0,170,0.6)] hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:hover:scale-100 disabled:hover:shadow-none animate-pulse hover:animate-none"
                        >
                            {isRunning ? "EJECUTANDO..." : "▶ INICIAR SIMULACIÓN"}
                        </button>
                        <button
                            onClick={reset}
                            className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white/60 font-medium hover:bg-white/10 hover:text-white transition-all backdrop-blur-md"
                        >
                            ↺ REINICIAR
                        </button>
                    </div>

                    {/* Execution Dashboard (Moved Here) */}
                    <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-4xl mx-auto">

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <StatCard label="Ejecuciones" value={stats.exec} />
                            <StatCard label="Tiempo" value={stats.time} />
                            <StatCard label="Nodos" value={stats.nodes} />
                            <StatCard label="Éxito" value={stats.success} />
                        </div>

                        {/* Log Panel */}
                        <div className="bg-[#08080f]/95 border border-white/5 rounded-xl p-4 flex flex-col h-full min-h-[140px]">
                            <div className="flex justify-between items-center mb-2 border-b border-white/5 pb-2">
                                <h4 className="font-bold text-white text-xs flex items-center gap-2">📊 Execution Log</h4>
                                <span className={cn(
                                    "text-[9px] uppercase font-bold px-2 py-0.5 rounded-full border",
                                    execStatus === "Standby" ? "border-white/10 text-white/40" :
                                        execStatus === "Running..." ? "border-[#00d4ff]/20 bg-[#00d4ff]/5 text-[#00d4ff]" :
                                            "border-[#00ff88]/20 bg-[#00ff88]/5 text-[#00ff88]"
                                )}>
                                    {execStatus}
                                </span>
                            </div>
                            <div ref={logContainerRef} className="flex-1 overflow-y-auto font-mono text-[10px] space-y-1 pr-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                                <div className="text-white/35">[--:--:--] Sistema inicializado.</div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Canvas */}
                <div className="bg-[rgba(12,12,20,0.9)] border border-white/5 rounded-3xl p-8 backdrop-blur-xl overflow-hidden relative" id="canvas-content">
                    {/* SVG Layer */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" id="connections-svg">
                        <defs>
                            <linearGradient id="threadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor={CONFIG.colors.cyan} />
                                <stop offset="50%" stopColor={CONFIG.colors.magenta} />
                                <stop offset="100%" stopColor={CONFIG.colors.purple} />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* Tiers Grid (Responsive) */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 min-h-[400px] relative z-10">
                        {TIERS.map(tier => (
                            <div key={tier.id} className="flex flex-col items-center gap-6">
                                <div className={`tier-label ${tier.color} text-[10px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-md`}>
                                    {tier.label}
                                </div>
                                <div className="flex flex-col w-full gap-4 items-center justify-center flex-1">
                                    {tier.nodes.map(node => (
                                        <div
                                            key={node.id}
                                            id={`node-${node.id}`}
                                            className="bg-[#0f0f19]/95 border border-white/5 rounded-2xl p-5 w-48 max-w-full backdrop-blur transition-all duration-300 relative group cursor-pointer hover:-translate-y-1 hover:border-white/10"
                                        >
                                            <div id={`status-${node.id}`} className="absolute top-3 right-3 w-2 h-2 rounded-full bg-white/10 transition-colors duration-300" />
                                            <div className={`node-icon ${node.type} w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-3 mx-auto`}>
                                                {node.icon}
                                            </div>
                                            <div className="text-center">
                                                <div className="text-sm font-bold text-white mb-1">{node.title}</div>
                                                <div className="text-[10px] text-white/40 font-mono">{node.subtitle}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Particles */}
                    {[1, 2, 3, 4].map(i => (
                        <div
                            key={i}
                            id={`particle-${i}`}
                            className="absolute w-2.5 h-2.5 rounded-full z-50 pointer-events-none opacity-0"
                            style={{
                                background: i === 1 ? CONFIG.colors.cyan : i === 2 ? CONFIG.colors.magenta : i === 3 ? CONFIG.colors.green : CONFIG.colors.yellow,
                                boxShadow: `0 0 15px ${i === 1 ? CONFIG.colors.cyan : i === 2 ? CONFIG.colors.magenta : i === 3 ? CONFIG.colors.green : CONFIG.colors.yellow}`
                            }}
                        />
                    ))}



                </div>

                {/* Aggressive CTA Banner */}
                <div className="relative mt-16 group">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff] via-[#ff00aa] to-[#8b5cf6] rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
                    <div className="relative bg-[#0a0a12] border border-white/10 rounded-3xl p-8 md:p-12 text-center overflow-hidden">

                        {/* Background Beams */}
                        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-[shimmer_3s_infinite]" />

                        <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                            ¿SIGUES PERDIENDO <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff00aa] to-[#ff4d4d]">TIEMPO Y DINERO</span>?
                        </h3>
                        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-8 font-light">
                            La automatización no es el futuro, es el estándar de supervivencia. <br className="hidden md:block" />
                            Tu competencia ya está operando 24/7 con Agentes IA. <strong className="text-white">¿Te vas a quedar atrás?</strong>
                        </p>

                        <div className="flex justify-center">
                            <a href="#contacto" className="relative inline-flex group/btn">
                                <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover/btn:opacity-100 group-hover/btn:-inset-1 group-hover/btn:duration-200 animate-tilt"></div>
                                <button className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-black font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                                    RESERVAR AUDITORÍA ESTRATÉGICA
                                </button>
                            </a>
                        </div>

                    </div>
                </div>


            </div>
        </section>
    );
}

function StatCard({ label, value }: { label: string, value: any }) {
    return (
        <div className="bg-[rgba(12,12,20,0.9)] border border-white/5 rounded-xl p-4 text-center">
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00d4ff] via-[#ff00aa] to-[#8b5cf6] font-mono">
                {value}
            </div>
            <div className="text-[10px] text-white/40 uppercase tracking-widest mt-1">
                {label}
            </div>
        </div>
    );
}
