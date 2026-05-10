'use client';

import { motion } from "motion/react";
import { useParams } from 'next/navigation';
import Link from "next/link";
import { Star, MapPin, Clock, Info, Plus, Minus, ArrowRight, ShoppingBag } from "lucide-react";
import { useState } from "react";

const MENU = {
  entradas: [
    { id: 1, name: "Nonna's Garlic Knots", price: 6.50, desc: "Oven-baked dough knots tossed in extra virgin olive oil, fresh garlic, parsley, and parmesan. Served with house marinara.", popular: true, img: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&q=80&w=400" },
    { id: 2, name: "Bruschetta Italiana", price: 8.90, desc: "Toasted crostini topped with fresh tomatoes, basil, garlic, and balsamic glaze." }
  ],
  pizzasClasicas: [
    { id: 3, name: "Margherita Suprema", price: 18.00, desc: "San Marzano tomato sauce, fresh mozzarella di bufala, basil, and a drizzle of extra virgin olive oil.", img: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=400" },
    { id: 4, name: "Pepperoni Passion", price: 19.50, desc: "Classic pepperoni with spicy honey drizzle and fresh oregano." }
  ]
};

export default function RestaurantDetail() {
  const params = useParams<{ id: string }>();
  const { id } = params;
  const [cartCount, setCartCount] = useState(1);

  return (
    <div className="min-h-screen bg-background">
      <header className="relative h-[400px] w-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1200" 
          alt="Restaurant Cover" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-white text-left">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end gap-6 relative">
            <div className="w-32 h-32 bg-white rounded-3xl p-2 shadow-2xl relative -mb-16 hidden md:block">
              <div className="w-full h-full bg-primary-container rounded-2xl flex items-center justify-center text-5xl">🍕</div>
            </div>
            <div className="flex-grow">
              <h1 className="text-5xl font-display font-extrabold mb-2">Nonna's Pizza</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm font-bold opacity-80">
                <span className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full"><Star size={14} className="fill-current text-secondary-container" /> 4.8 (1.2k+ reviews)</span>
                <span className="flex items-center gap-1"><MapPin size={14} /> 123 Artisan Way, Food District</span>
              </div>
            </div>
            <button className="bg-white/20 backdrop-blur-md px-6 py-2 rounded-full font-bold flex items-center gap-2 border border-white/30 mb-2">
              <Info size={18} /> Más info
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 flex flex-col gap-12 text-left">
          {/* Menu Nav */}
          <div className="sticky top-20 z-30 bg-background/90 backdrop-blur-md py-4 flex flex-wrap gap-3 border-b border-surface-container">
            {["Entradas", "Pizzas Clásicas", "Pizzas Especiales", "Bebidas", "Postres"].map((cat, i) => (
              <button key={cat} className={`px-6 py-2 rounded-full font-bold text-sm transition-all ${i === 0 ? "bg-primary text-white" : "border border-surface-container hover:border-primary bg-white"}`}>
                {cat}
              </button>
            ))}
          </div>

          <section>
            <h2 className="text-4xl font-display font-bold mb-8">Entradas</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {MENU.entradas.map(item => (
                <div key={item.id} className="bg-white p-4 rounded-3xl shadow-sm hover:shadow-md transition-all flex flex-col group border border-surface-container">
                  {item.img && <img src={item.img} className="w-full h-40 object-cover rounded-2xl mb-4" alt={item.name} />}
                  <div className="flex justify-between mb-2">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <span className="text-primary font-bold">${item.price.toFixed(2)}</span>
                  </div>
                  <p className="text-sm text-on-surface-variant flex-grow mb-4">{item.desc}</p>
                  <button className="w-full py-3 bg-surface-container hover:bg-primary hover:text-white rounded-2xl font-bold transition-all flex items-center justify-center gap-2">
                    <Plus size={18} /> Agregar
                  </button>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-4xl font-display font-bold mb-8">Pizzas Clásicas</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {MENU.pizzasClasicas.map(item => (
                <div key={item.id} className="bg-white p-4 lg:p-6 rounded-3xl shadow-sm hover:shadow-md transition-all flex items-center justify-between gap-4 border border-surface-container">
                   <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                    <p className="text-sm text-on-surface-variant mb-4 line-clamp-2">{item.desc}</p>
                    <span className="font-bold text-primary">${item.price.toFixed(2)}</span>
                  </div>
                  <button className="shrink-0 w-12 h-12 bg-surface-container hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-all">
                    <Plus size={20} />
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Cart Sidebar */}
        <aside className="lg:col-span-4 text-left">
          <div className="sticky top-32 bg-white rounded-[2.5rem] p-8 shadow-2xl border border-surface-container flex flex-col h-[calc(100vh-160px)]">
            <h3 className="text-2xl font-display font-bold mb-6 border-b border-surface-container pb-4">Tu Pedido</h3>
            <div className="flex-grow overflow-y-auto space-y-6">
              <div className="flex justify-between items-start gap-4">
                <div className="flex items-center gap-3">
                   <div className="flex items-center bg-surface-container rounded-full px-2 py-1 gap-2">
                    <button className="hover:text-primary transition-colors"><Minus size={14} /></button>
                    <span className="font-bold text-sm w-4 text-center">1</span>
                    <button className="hover:text-primary transition-colors"><Plus size={14} /></button>
                   </div>
                   <p className="font-bold text-sm leading-none">Margherita Suprema</p>
                </div>
                <span className="text-sm font-bold opacity-60">$18.00</span>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-surface-container space-y-3">
              <div className="flex justify-between opacity-60 font-bold">
                <span>Subtotal</span>
                <span>$18.00</span>
              </div>
              <div className="flex justify-between opacity-60 font-bold">
                <span>Costo de envío</span>
                <span>$3.99</span>
              </div>
              <div className="flex justify-between text-2xl font-display font-bold text-primary pt-2">
                <span>Total</span>
                <span>$21.99</span>
              </div>
              <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold mt-4 flex justify-between items-center px-6 shadow-emerald-ambient hover:translate-y-[-2px] transition-all group">
                <span>Checkout</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </aside>
      </div>

      <div className="fixed bottom-6 left-0 w-full px-6 md:hidden z-50 pointer-events-none">
        <button className="pointer-events-auto w-full bg-primary text-white rounded-2xl py-4 px-6 flex justify-between items-center shadow-2xl">
          <div className="flex items-center gap-3">
            <span className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center font-bold">1</span>
            <span className="font-bold">Ver Pedido</span>
          </div>
          <span className="font-bold">$21.99</span>
        </button>
      </div>
    </div>
  );
}
