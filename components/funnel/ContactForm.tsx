"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "@/lib/schemas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";

interface ContactFormProps {
    onSubmit: (data: ContactFormData) => void;
}

export function ContactForm({ onSubmit }: ContactFormProps) {
    const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-md mx-auto">
            <div className="space-y-2">
                <Label htmlFor="name">Nombre Completo</Label>
                <Input
                    id="name"
                    placeholder="Ej. Juan Pérez"
                    {...register("name")}
                    className="bg-white/5 border-white/10 focus:border-primary/50 text-lg py-6"
                />
                {errors.name && <p className="text-red-400 text-sm">{errors.name.message}</p>}
            </div>

            <div className="space-y-2">
                <Label htmlFor="email">Correo Corporativo</Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="juan@empresa.com"
                    {...register("email")}
                    className="bg-white/5 border-white/10 focus:border-primary/50 text-lg py-6"
                />
                {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}
            </div>

            <Button type="submit" size="lg" className="w-full text-lg h-12 bg-primary hover:bg-primary/90">
                Comenzar Diagnóstico
                <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <p className="text-xs text-center text-muted-foreground mt-4">
                Tus datos están seguros. Te enviaremos el reporte final por email.
            </p>
        </form>
    );
}
