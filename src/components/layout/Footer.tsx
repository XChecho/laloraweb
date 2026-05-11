
import Image from "next/image";
import { Share2, Mail, ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-inverse-surface border-t border-white/5 pt-20 pb-10 text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
        <div className="col-span-1 md:col-span-1">
          <div className="mb-6">
            <Image src="/images/logo.png" alt="La Lora" width={48} height={48} className="h-10 w-auto" />
          </div>
          <p className="text-sm opacity-60">© 2024 La Lora. Entregado fresco a tu puerta.</p>
        </div>
        
        <div>
          <div className="flex flex-col gap-4 text-sm opacity-80">
            <Link href="#" className="hover:text-primary transition-colors">Política de Privacidad</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Términos de Servicio</Link>
            <Link href="/about" className="hover:text-primary transition-colors">Nuestra Historia</Link>
          </div>
        </div>
        
        <div>
          <div className="flex flex-col gap-4 text-sm opacity-80">
            <Link href="/partners" className="hover:text-primary transition-colors">Sé Nuestro Aliado</Link>
            <Link href="#" className="hover:text-primary transition-colors">Acceso Restaurantes</Link>
            <Link href="#" className="hover:text-primary transition-colors">Beneficios de Entrega</Link>
          </div>
        </div>

        <div className="flex md:justify-end gap-4 h-fit">
          <button className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
            <Share2 size={20} />
          </button>
          <button className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
            <Mail size={20} />
          </button>
          <button className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
            <ShoppingBag size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
