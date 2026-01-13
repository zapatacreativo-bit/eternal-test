"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { motion } from "framer-motion";

export function Navbar() {
    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 glass"
        >
            <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-linear-to-tr from-primary to-purple-500 animate-pulse" />
                <span className="text-xl font-bold tracking-tighter text-white">AETHER</span>
            </Link>

            <nav className="hidden md:flex gap-8 text-sm font-medium text-white/70">
                <Link href="/#services" className="hover:text-primary transition-colors">Servicios</Link>
                <Link href="/#proceso" className="hover:text-primary transition-colors">Proceso</Link>
                <Link href="/#casos" className="hover:text-primary transition-colors">Casos de Éxito</Link>
            </nav>

            <Link href="tel:+34646544645">
                <ShimmerButton className="shadow-2xl hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 transition-all">
                    <span className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        CONTACTO
                    </span>
                </ShimmerButton>
            </Link>
        </motion.header>
    );
}
