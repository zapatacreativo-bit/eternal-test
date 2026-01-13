import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Condiciones de Uso - Eternal Observatory',
    robots: {
        index: false,
        follow: false,
    },
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function CondicionesDeUso() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-background text-foreground py-24 px-6 md:px-12 pt-32">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h1 className="text-4xl font-bold mb-4 text-primary">Condiciones Generales de Contratación y Uso</h1>
                    <p className="text-sm text-muted-foreground">Última actualización: {new Date().toLocaleDateString()}</p>

                    <div className="space-y-6 text-muted-foreground text-sm leading-relaxed">

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-2">1. Objeto del Servicio</h2>
                            <p>
                                Eternal Observatory ("La Agencia") presta servicios de consultoría estratégica, desarrollo de software y automatización mediante Inteligencia Artificial.
                                Nuestros servicios incluyen, pero no se limitan a: auditoría de procesos, generación de "Blueprints" (hojas de ruta técnicas), implementación de agentes autónomos y formación corporativa.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-2">2. Propiedad Intelectual e Industrial</h2>
                            <p>
                                <strong>2.1. Entregables al Cliente:</strong> Una vez abonado el importe total del servicio, el Cliente ostentará la propiedad de los entregables finales personalizados (ej. reportes, configuraciones específicas).
                            </p>
                            <p className="mt-2">
                                <strong>2.2. Tecnología Preexistente:</strong> La Agencia retiene la propiedad intelectual de todo código, librería, metodología ("know-how") y componentes de IA preexistentes utilizados para la prestación del servicio. Se otorga al Cliente una licencia de uso no exclusiva, intransferible y perpetua sobre estos componentes para su uso interno.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-2">3. Uso de Inteligencia Artificial y Limitación de Responsabilidad</h2>
                            <p>
                                <strong>3.1. Naturaleza de la IA:</strong> El Cliente reconoce que los sistemas de IA (como ChatGPT, Claude, o modelos propietarios) pueden generar resultados inexactos ("alucinaciones") y que su funcionamiento es probabilístico.
                            </p>
                            <p className="mt-2">
                                <strong>3.2. Exención de Garantías:</strong> La Agencia no garantiza resultados económicos específicos (ROI) ni la infalibilidad técnica absoluta de las automatizaciones. Los "Blueprints" son proyecciones estimadas basadas en la información proporcionada por el Cliente.
                            </p>
                            <p className="mt-2">
                                <strong>3.3. Responsabilidad:</strong> La Agencia no será responsable por daños indirectos, lucro cesante o pérdidas de datos derivadas del uso indebido de las herramientas implementadas.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-2">4. Confidencialidad y Protección de Datos</h2>
                            <p>
                                Ambas partes se obligan a mantener la más estricta confidencialidad sobre la información sensible compartida. La Agencia se compromete a no utilizar datos propietarios del Cliente para entrenar modelos de IA públicos sin consentimiento explícito. (Ver Política de Privacidad para más detalles).
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-2">5. Pagos y Cancelación</h2>
                            <p>
                                Los servicios de consultoría se abonan por adelantado o según hitos pactados en la propuesta comercial. En caso de cancelación por parte del Cliente, no se reembolsarán los importes correspondientes a trabajos ya iniciados o recursos reservados.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold text-white mb-2">6. Legislación Aplicable</h2>
                            <p>
                                Estas condiciones se rigen por la legislación española. Para cualquier controversia, ambas partes se someten a los juzgados y tribunales de la ciudad de Madrid, renunciando a cualquier otro fuero que pudiera corresponderles.
                            </p>
                        </section>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
