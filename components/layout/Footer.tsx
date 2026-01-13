import Link from "next/link";
import { Twitter, Linkedin, Github } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black py-16 px-6 text-sm">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-linear-to-tr from-primary to-purple-500" />
                        <span className="text-lg font-bold text-white">AETHER</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                        Pioneros en automatización agéntica y soluciones de inteligencia artificial soberana.
                    </p>
                    <div className="flex gap-4 text-muted-foreground">
                        <Link href="#" className="hover:text-white transition"><Twitter className="w-5 h-5" /></Link>
                        <Link href="#" className="hover:text-white transition"><Linkedin className="w-5 h-5" /></Link>
                        <Link href="#" className="hover:text-white transition"><Github className="w-5 h-5" /></Link>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold text-white mb-4">Servicios</h4>
                    <ul className="space-y-2 text-muted-foreground">
                        <li><Link href="#services" className="hover:text-primary">Agentes Autónomos</Link></li>
                        <li><Link href="#services" className="hover:text-primary">Automatización Cognitiva</Link></li>
                        <li><Link href="#services" className="hover:text-primary">Consultoría Estratégica</Link></li>
                        <li><Link href="#services" className="hover:text-primary">Sistemas RAG</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-white mb-4">Empresa</h4>
                    <ul className="space-y-2 text-muted-foreground">
                        <li><Link href="/about" className="hover:text-primary">Sobre Nosotros</Link></li>
                        <li><Link href="#blueprint-funnel" className="hover:text-primary">Contacto</Link></li>
                        <li><Link href="/admin" className="hover:text-primary">Portal Cliente</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-white mb-4">Legal</h4>
                    <ul className="space-y-2 text-muted-foreground">
                        <li><Link href="/legal" className="hover:text-primary">Aviso Legal</Link></li>
                        <li><Link href="/privacy" className="hover:text-primary">Política de Privacidad</Link></li>
                        <li><Link href="/cookies" className="hover:text-primary">Política de Cookies</Link></li>
                    </ul>
                </div>

            </div>

            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center bg-transparent gap-4">
                <p className="text-muted-foreground">© 2024 AETHER Intelligence. Todos los derechos reservados.</p>
                <p className="text-xs text-muted-foreground/50">Designed in the Future.</p>
            </div>
        </footer>
    );
}
