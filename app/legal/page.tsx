export default function LegalPage() {
    return (
        <main className="pt-32 pb-16 px-6 max-w-4xl mx-auto space-y-8 text-muted-foreground">
            <h1 className="text-4xl font-bold text-white">Aviso Legal</h1>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Datos Identificativos</h2>
                <p>En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico.</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Titular:</strong> AETHER Intelligence Solutions S.L.</li>
                    <li><strong>Domicilio:</strong> Calle de la Innovación 101, Madrid, España</li>
                    <li><strong>C.I.F:</strong> B-12345678</li>
                    <li><strong>Contacto:</strong> legal@aether.ai</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Propiedad Intelectual</h2>
                <p>El código fuente, los diseños gráficos, las imágenes, las fotografías, los sonidos, las animaciones, el software, los textos, así como la información y los contenidos que se recogen en el presente sitio web están protegidos por la legislación española sobre los derechos de propiedad intelectual e industrial a favor de AETHER Intelligence.</p>
            </section>
        </main>
    );
}
