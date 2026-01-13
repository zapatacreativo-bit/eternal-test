"use client";

import { useState } from "react";
import Link from "next/link";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-6 py-4 glass"
        >
            {/* 1. Logo (Left) */}
            <Link href="/" className="flex items-center gap-2 z-50 relative shrink-0">
                <div className="w-8 h-8 rounded-full bg-linear-to-tr from-primary to-purple-500 animate-pulse" />
                <span className="text-xl font-bold tracking-tighter text-white hidden sm:block">AETHER</span>
                <span className="text-xl font-bold tracking-tighter text-white sm:hidden">AE</span>
            </Link>

            {/* 2. Desktop Nav (Center) */}
            <nav className="hidden md:flex gap-8 text-sm font-medium text-white/70 absolute left-1/2 -translate-x-1/2">
                <Link href="/#services" className="hover:text-primary transition-colors">Servicios</Link>
                <Link href="/#proceso" className="hover:text-primary transition-colors">Proceso</Link>
                <Link href="/#casos" className="hover:text-primary transition-colors">Casos de Éxito</Link>
            </nav>

            {/* 3. Mobile Hamburger (Center Absolute) */}
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden absolute left-1/2 -translate-x-1/2 z-50 p-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-[0_0_15px_rgba(0,212,255,0.5)] hover:scale-110 transition-transform active:scale-95"
            >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* 4. CTA Button (Right - Visible on Mobile) */}
            <div className="z-50 shrink-0">
                <Link href="tel:+34646544645">
                    <ShimmerButton className="shadow-2xl hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 transition-all text-xs md:text-sm px-3 py-2 md:px-6 md:py-3 h-10 md:h-12">
                        <span className="flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="hidden md:inline font-bold">CONTACTO</span>
                            <Phone className="md:hidden w-4 h-4 text-white" />
                        </span>
                    </ShimmerButton>
                </Link>
            </div>

            {/* 5. Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center md:hidden"
                    >
                        <nav className="flex flex-col items-center w-full max-w-xs space-y-2">
                            <Link href="/#services" onClick={() => setIsMenuOpen(false)} className="w-full text-center py-4 text-lg font-medium text-white/90 hover:text-cyan-400 border-b border-white/10 transition-colors">
                                Servicios
                            </Link>
                            <Link href="/#proceso" onClick={() => setIsMenuOpen(false)} className="w-full text-center py-4 text-lg font-medium text-white/90 hover:text-cyan-400 border-b border-white/10 transition-colors">
                                Proceso
                            </Link>
                            <Link href="/#casos" onClick={() => setIsMenuOpen(false)} className="w-full text-center py-4 text-lg font-medium text-white/90 hover:text-cyan-400 border-b border-white/10 transition-colors">
                                Casos de Éxito
                            </Link>

                            <div className="pt-8 text-center">
                                <p className="text-white/40 text-xs uppercase tracking-widest">Agencia de IA Madrid</p>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
