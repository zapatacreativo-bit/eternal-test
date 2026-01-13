import { z } from "zod";

export const contactSchema = z.object({
    name: z.string().min(2, "El nombre es requerido"),
    email: z.string().email("Email inválido"),
});

export const questionnaireSchema = z.object({
    businessType: z.string().min(1, "Selecciona un tipo de negocio"),
    teamSize: z.string().min(1, "Selecciona el tamaño del equipo"),
    painPoints: z.array(z.string()).min(1, "Selecciona al menos un punto de dolor"),
    goal: z.string().min(1, "Selecciona un objetivo principal"),
    budget: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
export type QuestionnaireData = z.infer<typeof questionnaireSchema>;

export interface FullSubmission extends ContactFormData, QuestionnaireData {
    createdAt: Date;
}
