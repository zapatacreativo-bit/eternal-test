"use client";

import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import Image from "next/image";

export function SalesCTA() {
    return (
        <section className="relative py-32 px-6 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/cta-network.png"
                    alt="Global Network"
                    fill
                    className="object-cover opacity-40 mix-blend-screen"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-transparent" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                    ¿Listo para la <span className="text-primary">Evolución</span>?
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    No dejes que tu competencia automatice primero. Agenda una sesión estratégica de 30 minutos y recibe una auditoría preliminar sin costo.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
                    <Button size="lg" className="h-16 px-8 text-lg bg-white text-black hover:bg-white/90 rounded-full font-bold">
                        <Phone className="mr-2 w-5 h-5" />
                        Agendar Llamada
                    </Button>
                    <Button size="lg" variant="outline" className="h-16 px-8 text-lg border-white/20 text-white hover:bg-white/10 rounded-full backdrop-blur-md">
                        Completar Formulario
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>

                <p className="text-sm text-muted-foreground pt-4">
                    Plazas limitadas por mes. Solo trabajamos con empresas facturando +$50k/mes.
                </p>
            </div>
        </section>
    );
}
