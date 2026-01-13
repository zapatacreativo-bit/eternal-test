import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Condiciones de Uso - Agencia IA',
    robots: {
        index: false,
        follow: false,
    },
};

export default function CondicionesDeUso() {
    return (
        <div className="min-h-screen bg-background text-foreground py-24 px-6">
            <div className="max-w-3xl mx-auto space-y-6">
                <h1 className="text-4xl font-bold mb-8 text-primary">Condiciones de Uso</h1>
                <div className="space-y-4 text-muted-foreground">
                    <p>Última actualización: {new Date().toLocaleDateString()}</p>
                    <p>Bienvenido a Eternal Observatory. Al acceder a nuestro sitio web, acepta cumplir con las presentes condiciones de uso.</p>
                    <h2 className="text-2xl font-semibold text-white mt-8">1. Uso del Servicio</h2>
                    <p>Nuestros servicios de consultoría y blueprints de IA se proporcionan "tal cual". Nos reservamos el derecho de modificar o suspender el servicio en cualquier momento.</p>
                    <h2 className="text-2xl font-semibold text-white mt-8">2. Propiedad Intelectual</h2>
                    <p>Todo el contenido generado, incluyendo los Blueprints personalizados, son propiedad intelectual de la agencia hasta su entrega final.</p>
                    <h2 className="text-2xl font-semibold text-white mt-8">3. Limitación de Responsabilidad</h2>
                    <p>No nos hacemos responsables por decisiones de negocio tomadas basadas en nuestras proyecciones automatizadas.</p>
                </div>
            </div>
        </div>
    );
}
