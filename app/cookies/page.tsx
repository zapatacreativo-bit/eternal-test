export default function CookiesPage() {
    return (
        <main className="pt-32 pb-16 px-6 max-w-4xl mx-auto space-y-8 text-muted-foreground">
            <h1 className="text-4xl font-bold text-white">Política de Cookies</h1>

            <section className="space-y-4">
                <p>Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo.</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Tipos de cookies utilizadas</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Cookies técnicas:</strong> Son aquellas que permiten al usuario la navegación a través de una página web.</li>
                    <li><strong>Cookies de personalización:</strong> Son aquellas que permiten al usuario acceder al servicio con algunas características de carácter general predefinidas.</li>
                    <li><strong>Cookies de análisis:</strong> Son aquellas que nos permiten el seguimiento y análisis del comportamiento de los usuarios en nuestro sitio web.</li>
                </ul>
            </section>
        </main>
    );
}
