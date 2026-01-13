import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Política de Privacidad - Agencia IA',
    robots: {
        index: false,
        follow: false,
    },
};

export default function PoliticaDePrivacidad() {
    return (
        <div className="min-h-screen bg-background text-foreground py-24 px-6">
            <div className="max-w-3xl mx-auto space-y-6">
                <h1 className="text-4xl font-bold mb-8 text-primary">Política de Privacidad</h1>
                <div className="space-y-4 text-muted-foreground">
                    <p>Última actualización: {new Date().toLocaleDateString()}</p>
                    <p>En Eternal Observatory, nos tomamos muy en serio la privacidad de sus datos empresariales.</p>
                    <h2 className="text-2xl font-semibold text-white mt-8">1. Recopilación de Datos</h2>
                    <p>Recopilamos información proporcionada voluntariamente a través de nuestro formulario de diagnóstico (nombre, email, datos operativos) con el único fin de generar su reporte.</p>
                    <h2 className="text-2xl font-semibold text-white mt-8">2. Uso de la Información</h2>
                    <p>Sus datos NO serán vendidos a terceros. Se utilizan exclusivamente para:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Generar el Blueprint de IA personalizado.</li>
                        <li>Contactarle para la sesión de consultoría si así lo solicita.</li>
                        <li>Mejorar nuestros algoritmos de recomendación.</li>
                    </ul>
                    <h2 className="text-2xl font-semibold text-white mt-8">3. Seguridad</h2>
                    <p>Implementamos medidas de seguridad estándar de la industria para proteger sus datos contra accesos no autorizados.</p>
                </div>
            </div>
        </div>
    );
}
