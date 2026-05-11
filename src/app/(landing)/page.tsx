'use client';

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Play, 
  Timer, 
  Truck, 
  MapPin, 
  ChevronRight, 
  Smartphone, 
  Navigation2, 
  Bot,
  UtensilsCrossed,
  Pizza,
  Salad,
  Flame
} from "lucide-react";
import AppMockupTables from "@/components/ui/AppMockupTables";
import AppMockupMenu from "@/components/ui/AppMockupMenu";

const CATEGORIES = [
  { 
    name: "Hamburguesas", 
    icon: <UtensilsCrossed className="w-8 h-8" />, 
    color: "bg-primary-container",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&auto=format&fit=crop&q=60" 
  },
  { 
    name: "Pizza", 
    icon: <Pizza className="w-8 h-8" />, 
    color: "bg-secondary-container",
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&auto=format&fit=crop&q=60"
  },
  { 
    name: "Ensaladas", 
    icon: <Salad className="w-8 h-8" />, 
    color: "bg-tertiary-container",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&auto=format&fit=crop&q=60"
  },
  { 
    name: "Asados", 
    icon: <Flame className="w-8 h-8" />, 
    color: "bg-primary",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&auto=format&fit=crop&q=60"
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h2 className="text-6xl md:text-7xl font-display font-extrabold leading-[0.95] mb-6">
              Comida Fresca,<br />Entrega <span className="text-secondary-container">Rápida</span>
            </h2>
            <p className="text-lg text-on-surface-variant max-w-md mb-8">
              Disfruta de los sabores vibrantes de la alta cocina, llevados a tu puerta con una velocidad increíble. Antójate, pide y disfruta.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/restaurants" className="bg-secondary-container text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 ambient-shadow-secondary hover:translate-y-[-2px] transition-all">
                Explorar Menú <ArrowRight size={20} />
              </Link>
              <button className="bg-surface-container px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-surface-container/80 transition-all">
                <Play size={20} fill="currentColor" /> Ver Cómo Funciona
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:w-1/2 relative"
          >
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              <div className="absolute inset-0 bg-primary-container/10 rounded-full animate-pulse" />
              <div className="absolute inset-0 border-2 border-dashed border-primary-container/20 rounded-full animate-[spin_20s_linear_infinite]" />
              <Image 
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800"
                alt="Ensalada Deliciosa"
                fill
                className="object-cover rounded-full p-4 z-10"
                unoptimized
              />
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute bottom-10 left-0 bg-white p-4 rounded-2xl shadow-2xl flex items-center gap-4 z-20"
              >
                <div className="bg-primary/10 p-3 rounded-xl text-primary">
                  <Timer size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Entrega</p>
                  <p className="text-xl font-display font-bold text-primary">15-20 Min</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Categories */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h3 className="text-4xl font-display font-bold text-center mb-12">Categorías</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {CATEGORIES.map((cat, i) => (
              <motion.div 
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group flex flex-col items-center gap-4 cursor-pointer"
              >
                <div className={`w-40 h-40 rounded-full ${cat.color} flex items-center justify-center p-2 transition-transform duration-300 group-hover:rotate-6 shadow-xl`}>
                  <div className="bg-white/20 w-full h-full rounded-full flex items-center justify-center text-white backdrop-blur-sm">
                    {cat.img ? (
                      <Image src={cat.img} alt={cat.name} width={160} height={160} className="w-full h-full object-cover rounded-full" unoptimized />
                    ) : (
                      <span className="scale-[2.5]">{cat.icon}</span>
                    )}
                  </div>
                </div>
                <span className="text-xl font-display font-bold">{cat.name}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Promotions Bento */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[450px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 0.98 }}
              className="lg:col-span-2 bg-secondary-container rounded-[2.5rem] p-10 relative overflow-hidden flex flex-col justify-end group cursor-pointer ambient-shadow-secondary"
            >
              <div className="absolute inset-0">
                <Image src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop&q=60" alt="" fill className="object-cover" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>
              <div className="absolute top-8 right-8 bg-tertiary text-white px-4 py-2 rounded-full font-bold text-sm rotate-12 z-10">-20% OFF</div>
              <div className="relative z-10 max-w-md text-white">
                <h4 className="text-5xl font-display font-bold mb-4">Banquete Familiar</h4>
                <p className="mb-6 opacity-90">Perfecto para compartir. Obtén descuentos increíbles en combos diseñados para 4 o más personas.</p>
                <button className="bg-white text-secondary-container px-6 py-3 rounded-full font-bold text-left">Reclamar Oferta</button>
              </div>
            </motion.div>
            
            <div className="flex flex-col gap-6">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-1 bg-surface-container rounded-[2.5rem] p-8 relative overflow-hidden flex flex-col justify-between hover:bg-surface-container/60 transition-colors"
              >
                <div className="absolute inset-0">
                  <Image src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=600&auto=format&fit=crop&q=60" alt="" fill className="object-cover" unoptimized />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
                </div>
                <div className="bg-primary-container text-white w-12 h-12 rounded-full flex items-center justify-center relative z-10">
                  <Truck size={24} />
                </div>
                <div className="relative z-10">
                  <h5 className="text-2xl font-display font-bold mb-2 text-left text-white">Envío Gratis</h5>
                  <p className="text-sm text-white/80 text-left">En todos los pedidos superiores a $25. Válido hasta este domingo.</p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex-1 bg-tertiary-container rounded-[2.5rem] p-8 text-white relative overflow-hidden group text-left"
              >
                <div className="absolute inset-0">
                  <Image src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&auto=format&fit=crop&q=60" alt="" fill className="object-cover" unoptimized />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
                </div>
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-110 transition-transform" />
                <h5 className="text-2xl font-display font-bold mb-2 relative z-10">Especial de Almuerzo</h5>
                <p className="text-sm opacity-80 mb-6 relative z-10">Ofertas diarias de 11AM a 2PM.</p>
                <button className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-6 py-2 rounded-full font-bold text-sm relative z-10">Ver Menú</button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* App Download Banner */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="bg-secondary-container/90 rounded-[3rem] p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 z-10 text-white text-left">
              <h2 className="text-5xl font-display font-bold mb-6">Descarga la App.<br />Rápido y fácil.</h2>
              <p className="text-lg opacity-90 mb-10 max-w-sm">Rastrea tu pedido en tiempo real, desbloquea recompensas exclusivas y vuelve a ordenar tus favoritos con un solo toque.</p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-black px-5 py-3 rounded-xl flex items-center gap-3 hover:scale-105 transition-transform">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <p className="text-[10px] uppercase font-bold leading-none opacity-60">Descargar en la</p>
                    <p className="text-lg font-bold leading-none">App Store</p>
                  </div>
                </button>
                <button className="bg-white text-black px-5 py-3 rounded-xl flex items-center gap-3 hover:scale-105 transition-transform">
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92z"/>
                    <path fill="#EA4335" d="M17.727 8.272L5.063.891a1 1 0 0 0-.454.114l8.545 8.545 4.573-1.278z"/>
                    <path fill="#FBBC04" d="M17.727 15.728l-4.573-1.278-8.545 8.545a1 1 0 0 0 .454.114l12.664-7.381z"/>
                    <path fill="#34A853" d="M21.373 10.727l-3.646-2.455-4.573 1.278 4.573 1.278 3.646-2.091a1.001 1.001 0 0 0 0-1.01z"/>
                  </svg>
                  <div className="text-left">
                    <p className="text-[10px] uppercase font-bold leading-none opacity-60">Disponible en</p>
                    <p className="text-lg font-bold leading-none">Google Play</p>
                  </div>
                </button>
              </div>
            </div>

            <div className="md:w-1/2 relative flex justify-center mt-12 md:mt-0">
              <div className="relative flex justify-center gap-4">
                <motion.div
                  initial={{ rotate: -15, y: 100 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="w-56 h-[480px] bg-surface-container rounded-[2.5rem] border-4 border-surface-container-highest shadow-2xl overflow-hidden"
                >
                  <AppMockupTables />
                </motion.div>
                <motion.div
                  initial={{ rotate: 5, y: 100 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.15 }}
                  className="w-56 h-[480px] bg-surface-container rounded-[2.5rem] border-4 border-surface-container-highest shadow-2xl overflow-hidden -rotate-6 translate-y-4"
                >
                  <AppMockupMenu />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Section (Dark) */}
        <div className="ripped-paper-top h-10 bg-background" />
        <section className="bg-inverse-surface py-32 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-display font-bold text-primary-container mb-6">El Futuro de la Entrega</h2>
              <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">Estamos pionereando nuevas formas de llevar tu comida más rápido, más caliente y más seguro que nunca.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {[
                { title: "Entrega Aérea", icon: <Navigation2 className="w-10 h-10" />, desc: "Programas piloto próximamente. Tu comida cae del cielo a tu zona segura en menos de 10 minutos." },
                { title: "Cocinas Automatizadas", icon: <Bot className="w-10 h-10" />, desc: "Procesos de preparación con IA aseguran consistencia perfecta y tiempos de espera drásticamente reducidos." }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  whileHover={{ y: -5 }}
                  className="bg-white/5 border border-white/10 p-10 rounded-[3rem] text-center flex flex-col items-center backdrop-blur-sm"
                >
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-8 text-primary-container">
                    {feature.icon}
                  </div>
                  <h4 className="text-2xl font-display font-bold mb-4">{feature.title}</h4>
                  <p className="opacity-70 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
    </div>
  );
}
