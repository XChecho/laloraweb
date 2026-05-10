'use client';

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const PARTNERS = [
  { name: "El Rinconcito", type: "Comida Típica", icon: "🌮", desc: "Sabores locales auténticos elaborados con recetas familiares de generaciones." },
  { name: "Café Verde", type: "Cafetería", icon: "☕", desc: "Tostadores de café artesanal que sirven granos de origen único en un ambiente moderno." },
  { name: "Nonna's", type: "Pizzería", icon: "🍕", desc: "Pizzas al horno de leña con ingredientes frescos obtenidos localmente." },
  { name: "The Night Owl", type: "Bar", icon: "🍸", desc: "Cócteles artesanales y una amplia selección de licores locales." },
  { name: "Gelato Dreams", type: "Heladería", icon: "🍦", desc: "Gelato italiano hecho a mano con sabores únicos y estacionales." },
  { name: "Sopa Fina", type: "Comida Típica", icon: "🍲", desc: "Sopas y guisos abundantes y reconfortantes, perfectos para la tarde." },
];

export default function Partners() {
  return (
    <div className="pt-20 min-h-screen bg-warm-paper">
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-display font-extrabold mb-6"
        >
          Nuestros Aliados
        </motion.h1>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto mb-16">
          Descubre los increíbles negocios locales que hacen posible La Lora. Desde cocina tradicional hasta cafeterías acogedoras.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          <button className="bg-primary text-white px-8 py-3 rounded-full font-bold shadow-md hover:scale-105 transition-all">Todos</button>
          {["Comida Típica", "Cafetería", "Pizzería", "Bar", "Heladería"].map(type => (
            <button key={type} className="bg-white border border-surface-container text-on-surface px-8 py-3 rounded-full font-bold hover:border-primary transition-all">
              {type}
            </button>
          ))}
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PARTNERS.map((partner, i) => (
            <motion.div 
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[2.5rem] p-10 shadow-sm hover:shadow-xl transition-all text-left border border-surface-container group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform">
                {partner.icon}
              </div>
              <h3 className="text-3xl font-display font-bold mb-3">{partner.name}</h3>
              <span className="inline-block bg-secondary-container/10 text-secondary-container px-4 py-1.5 rounded-full font-bold text-xs mb-4">
                {partner.type}
              </span>
              <p className="text-on-surface-variant mb-8">{partner.desc}</p>
              <button className="text-primary font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                Ver Detalles <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
