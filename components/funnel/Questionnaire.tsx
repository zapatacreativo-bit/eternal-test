"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { questionnaireSchema, QuestionnaireData } from "@/lib/schemas";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, ArrowLeft, Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuestionnaireProps {
    onSubmit: (data: QuestionnaireData) => void;
}

const BUSINESS_TYPES = [
    "Agencia de Marketing", "SaaS / Tech", "E-commerce", "Consultoría", "Inmobiliaria",
    "Clínica / Salud", "Despacho Legal", "Logística", "Educación / Info", "Finanzas / Seguros",
    "Restauración", "Eventos", "Construcción", "Retail Físico", "Otro"
];
const TEAM_SIZES = ["1-5", "6-20", "21-50", "50+"];
const PAIN_POINTS = [
    "Tareas repetitivas manuales",
    "Atención al cliente lenta",
    "Confusión en gestión de leads",
    "Reportes desordenados",
    "Falta de escalabilidad",
    "Costes operativos altos",
    "Baja tasa de cierre",
    "Fugas de información",
    "Agenda desorganizada",
    "Marketing desconectado"
];
const GOALS = ["Ahorrar tiempo operativo", "Reducir costos de personal", "Escalar ventas 2x", "Mejorar calidad de servicio"];
const BUDGETS = ["< 1.000€", "1.000€ - 5.000€", "5.000€ - 10.000€", "+10.000€"];

export function Questionnaire({ onSubmit }: QuestionnaireProps) {
    const [step, setStep] = useState(1);
    const totalSteps = 3;

    const { control, handleSubmit, watch, trigger, formState: { errors } } = useForm<QuestionnaireData>({
        resolver: zodResolver(questionnaireSchema),
        defaultValues: {
            businessType: "",
            teamSize: "",
            painPoints: [],
            goal: "",
            budget: "",
        }
    });

    const nextStep = async () => {
        let isValid = false;
        if (step === 1) isValid = await trigger(["businessType", "teamSize"]);
        if (step === 2) isValid = await trigger(["painPoints"]);

        if (isValid) setStep(s => s + 1);
    };

    const prevStep = () => setStep(s => s - 1);

    return (
        <div className="w-full max-w-2xl mx-auto space-y-8">
            <div className="space-y-2">
                <div className="flex justify-between text-xs uppercase tracking-widest text-muted-foreground">
                    <span>Paso {step} de {totalSteps}</span>
                    <span>{Math.round((step / totalSteps) * 100)}% Completado</span>
                </div>
                <Progress value={(step / totalSteps) * 100} className="h-2" />
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                {/* STEP 1: Context */}
                {step === 1 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                        <div className="space-y-4">
                            <Label className="text-lg">¿Cuál es tu tipo de negocio?</Label>
                            <Controller
                                control={control}
                                name="businessType"
                                render={({ field }) => (
                                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                        {BUSINESS_TYPES.map((type) => (
                                            <div key={type}>
                                                <RadioGroupItem value={type} id={type} className="peer sr-only" />
                                                <Label
                                                    htmlFor={type}
                                                    className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary cursor-pointer transition-all"
                                                >
                                                    {type}
                                                </Label>
                                            </div>
                                        ))}
                                    </RadioGroup>
                                )}
                            />
                            {errors.businessType && <p className="text-red-400 text-sm mt-1">{errors.businessType.message}</p>}
                        </div>

                        <div className="space-y-4">
                            <Label className="text-lg">Tamaño del equipo</Label>
                            <Controller
                                control={control}
                                name="teamSize"
                                render={({ field }) => (
                                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-wrap gap-4">
                                        {TEAM_SIZES.map((size) => (
                                            <div key={size} className="relative">
                                                <RadioGroupItem
                                                    value={size}
                                                    id={`size-${size}`}
                                                    className="peer sr-only"
                                                />
                                                <Label
                                                    htmlFor={`size-${size}`}
                                                    className={cn(
                                                        "px-6 py-3 rounded-full border border-muted bg-popover hover:border-primary cursor-pointer transition-all block text-center min-w-[80px]",
                                                        field.value === size ? "bg-primary text-primary-foreground border-primary" : "text-muted-foreground"
                                                    )}
                                                >
                                                    {size}
                                                </Label>
                                            </div>
                                        ))}
                                    </RadioGroup>
                                )}
                            />
                            {errors.teamSize && <p className="text-red-400 text-sm mt-1">{errors.teamSize.message}</p>}
                        </div>
                    </div>
                )}

                {/* STEP 2: Challenges */}
                {step === 2 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                        <Label className="text-lg">¿Qué desafíos enfrentas hoy? (Selecciona varios)</Label>
                        <Controller
                            control={control}
                            name="painPoints"
                            render={({ field }) => (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {PAIN_POINTS.map((item) => (
                                        <div
                                            key={item}
                                            className={cn(
                                                "flex items-center space-x-3 border p-4 rounded-lg cursor-pointer transition-all hover:bg-white/5",
                                                field.value?.includes(item) ? "border-primary bg-primary/10" : "border-white/10"
                                            )}
                                            onClick={() => {
                                                const newValue = field.value?.includes(item)
                                                    ? field.value.filter((i) => i !== item)
                                                    : [...(field.value || []), item];
                                                field.onChange(newValue);
                                            }}
                                        >
                                            <div className={cn("w-5 h-5 rounded border flex items-center justify-center transition-colors",
                                                field.value?.includes(item) ? "bg-primary border-primary" : "border-muted-foreground"
                                            )}>
                                                {field.value?.includes(item) && <Check className="w-3 h-3 text-white" />}
                                            </div>
                                            <span className="text-sm font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        />
                        {errors.painPoints && <p className="text-red-400 text-sm mt-1">{errors.painPoints.message}</p>}
                    </div>
                )}

                {/* STEP 3: Goals & Budget */}
                {step === 3 && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
                        <div className="space-y-4">
                            <Label className="text-lg">Tu objetivo principal</Label>
                            <Controller
                                control={control}
                                name="goal"
                                render={({ field }) => (
                                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {GOALS.map((goal) => (
                                            <div key={goal}>
                                                <RadioGroupItem value={goal} id={goal} className="peer sr-only" />
                                                <Label
                                                    htmlFor={goal}
                                                    className="flex items-center w-full p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 cursor-pointer transition-all peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/20 peer-data-[state=checked]:text-white text-muted-foreground"
                                                >
                                                    <div className={cn(
                                                        "w-4 h-4 rounded-full border border-white/50 mr-3 flex items-center justify-center",
                                                        field.value === goal ? "border-primary bg-primary" : ""
                                                    )}>
                                                        {field.value === goal && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                                                    </div>
                                                    {goal}
                                                </Label>
                                            </div>
                                        ))}
                                    </RadioGroup>
                                )}
                            />
                            {errors.goal && <p className="text-red-400 text-sm mt-1">{errors.goal.message}</p>}
                        </div>

                        <div className="space-y-4">
                            <Label className="text-lg">Presupuesto Estimado (Mensual)</Label>
                            <Controller
                                control={control}
                                name="budget"
                                render={({ field }) => (
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                        {BUDGETS.map((b) => (
                                            <div key={b} onClick={() => field.onChange(b)}
                                                className={cn(
                                                    "px-4 py-4 rounded-xl border text-sm font-medium cursor-pointer transition-all text-center flex items-center justify-center hover:bg-white/5",
                                                    field.value === b
                                                        ? "border-primary bg-primary/20 text-white shadow-[0_0_15px_rgba(124,58,237,0.3)]"
                                                        : "border-white/10 bg-white/5 text-muted-foreground"
                                                )}
                                            >
                                                {b}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            />
                        </div>
                    </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6 border-t border-white/10">
                    {step > 1 ? (
                        <Button type="button" variant="outline" onClick={prevStep} className="border-white/20">
                            <ArrowLeft className="mr-2 w-4 h-4" /> Atrás
                        </Button>
                    ) : <div />} {/* Spacer */}

                    {step < totalSteps ? (
                        <Button type="button" onClick={nextStep} className="bg-primary hover:bg-primary/90">
                            Siguiente
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    ) : (
                        <Button type="submit" size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 animate-pulse">
                            Generar Blueprint
                            <Sparkles className="ml-2 w-5 h-5" />
                        </Button>
                    )}
                </div>

            </form>
        </div>
    );
}
