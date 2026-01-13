import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Política de Privacidad - Eternal Observatory',
    robots: {
        index: false,
        follow: false,
    },
};

export default function PoliticaDePrivacidad() {
    return (
        <div className="min-h-screen bg-background text-foreground py-24 px-6 md:px-12">
            <div className="max-w-4xl mx-auto space-y-8">
                <h1 className="text-4xl font-bold mb-4 text-primary">Política de Privacidad</h1>
                <p className="text-sm text-muted-foreground">Última actualización: {new Date().toLocaleDateString()}</p>

                <div className="space-y-6 text-muted-foreground text-sm leading-relaxed">

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-2">1. Responsable del Tratamiento</h2>
                        <p>
                            Eternal Observatory ("La Agencia"), con domicilio social en Madrid, España, es el responsable del tratamiento de los datos personales recabados a través de este sitio web.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-2">2. Finalidad del Tratamiento</h2>
                        <p>Sus datos personales (nombre, email, teléfono, datos de negocio) serán tratados para:</p>
                        <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li>Gestionar su solicitud de presupuesto o diagnóstico (Blueprint).</li>
                            <li>Prestar los servicios contratados de consultoría e implementación.</li>
                            <li>Enviar comunicaciones comerciales relacionadas, siempre que haya dado su consentimiento.</li>
                            <li>Cumplir con obligaciones legales y fiscales.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-2">3. Legitimación</h2>
                        <p>
                            La base legal para el tratamiento de sus datos es la ejecución de medidas precontractuales (solicitud de información) o contractuales, así como el interés legítimo de la Agencia o su consentimiento explícito para el envío de newsletters.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-2">4. Destinatarios de los Datos</h2>
                        <p>
                            No cederemos sus datos a terceros, salvo obligación legal o a proveedores tecnológicos encargados del tratamiento (ej. hosting, herramientas de automatización) que cumplan con la normativa GDPR.
                            En caso de transferencias internacionales (ej. uso de servidores en EE.UU.), nos aseguramos de que existan garantías adecuadas (Cláusulas Contractuales Tipo).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-2">5. Derechos del Usuario</h2>
                        <p>
                            Puede ejercer sus derechos de acceso, rectificación, supresión, limitación, portabilidad y oposición dirigiéndose a nuestro correo de contacto.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-2">6. Seguridad</h2>
                        <p>
                            Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos contra el acceso no autorizado, la pérdida o la alteración.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
}
