"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ContactForm } from "./ContactForm";
import { Questionnaire } from "./Questionnaire";
import { BlueprintResult } from "./BlueprintResult";
import { ContactFormData, QuestionnaireData } from "@/lib/schemas";

type Step = "contact" | "questionnaire" | "blueprint";

export function FunnelContainer() {
    const [step, setStep] = useState<Step>("contact");
    const [contactData, setContactData] = useState<ContactFormData | null>(null);
    const [answers, setAnswers] = useState<QuestionnaireData | null>(null);

    const handleContactSubmit = (data: ContactFormData) => {
        setContactData(data);
        setStep("questionnaire");
        // Ideally sync to backend here as a partial lead
    };

    const handleQuestionnaireSubmit = async (data: QuestionnaireData) => {
        setAnswers(data);
        setStep("blueprint");

        if (contactData) {
            try {
                await fetch("/api/submit", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ ...contactData, ...data }),
                });
            } catch (error) {
                console.error("Failed to save submission", error);
            }
        }
    };

    return (
        <section id="blueprint-funnel" className="py-24 px-6 relative bg-black/40">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Genera tu Blueprint IA</h2>
                    <p className="text-muted-foreground">
                        Descubre en 3 minutos cómo la IA puede transformar tu negocio.
                        {step === "contact" && " Comienza con tus datos."}
                        {step === "questionnaire" && " Cuéntanos sobre tu operación."}
                        {step === "blueprint" && " Aquí tienes tu plan personalizado."}
                    </p>
                </div>

                <div className="bg-card/50 border border-white/5 backdrop-blur-md rounded-2xl p-6 md:p-10 shadow-2xl overflow-hidden min-h-[400px]">
                    <AnimatePresence mode="wait">
                        {step === "contact" && (
                            <motion.div
                                key="contact"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ContactForm onSubmit={handleContactSubmit} />
                            </motion.div>
                        )}

                        {step === "questionnaire" && (
                            <motion.div
                                key="questionnaire"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Questionnaire onSubmit={handleQuestionnaireSubmit} />
                            </motion.div>
                        )}

                        {step === "blueprint" && contactData && answers && (
                            <motion.div
                                key="blueprint"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <BlueprintResult contact={contactData} answers={answers} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
