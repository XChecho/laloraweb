'use client';

import { motion } from "motion/react";
import { Search, Star, Clock, Bike, ShoppingCart, ArrowRight } from "lucide-react";
import Link from "next/link";

const RESTAURANTS = [
  {
    id: "luigis",
    name: "Luigi's Pizzeria",
    rating: 4.8,
    reviews: "1.2k+",
    type: "Pizza, Italiana",
    price: "$$",
    time: "25-35 min",
    delivery: "Gratis",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800",
    avatar: "🍕",
    promo: "-20% Promo"
  },
  {
    id: "smash-bros",
    name: "Smash Bros",
    rating: 4.6,
    reviews: "800+",
    type: "Hamburguesas, Americana",
    price: "$",
    time: "15-25 min",
    delivery: "$2.50",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800",
    avatar: "🍔"
  },
  {
    id: "green-bowl",
    name: "Green Bowl",
    rating: 4.9,
    reviews: "500+",
    type: "Saludable, Bowls",
    price: "$$$",
    time: "20-30 min",
    delivery: "Gratis",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800",
    avatar: "🥗"
  },
  {
    id: "sakura",
    name: "Sakura Sushi",
    rating: 4.7,
    reviews: "950+",
    type: "Sushi, Japonesa",
    price: "$$$",
    time: "30-45 min",
    delivery: "$3.00",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=800",
    avatar: "🍣",
    promo: "Combo 2x1"
  }
];

export default function Restaurants() {
  return (
    <div className="pt-20 min-h-screen bg-background">
      {/* Hero Search */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-8 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-display font-extrabold mb-8"
        >
          Encuentra tu comida favorita
        </motion.h1>
        <div className="max-w-2xl mx-auto relative group">
          <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-on-surface-variant">
            <Search size={24} />
          </div>
          <input 
            className="w-full bg-white border border-surface-container rounded-full py-5 pl-16 pr-32 text-lg focus:ring-2 focus:ring-primary outline-none shadow-sm group-hover:shadow-md transition-all" 
            placeholder="Buscar restaurantes, platillos..." 
          />
          <button className="absolute inset-y-2 right-2 bg-primary text-white rounded-full px-8 font-bold flex items-center gap-2 hover:bg-primary-container transition-all">
            Buscar <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 border-b border-surface-container overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto flex gap-4 pb-2">
          {["Pizza", "Pollo", "Hamburguesas", "Sushi", "Saludable", "Postres", "Desayuno", "Bebidas"].map((cat, i) => (
            <button key={cat} className={`flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all ${i === 0 ? "bg-primary text-white shadow-lg" : "bg-white border border-surface-container hover:border-primary"}`}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 shrink-0 text-left">
          <h3 className="text-2xl font-display font-bold mb-6">Filtros</h3>
          <div className="space-y-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">Calificación</p>
              <div className="space-y-3">
                {["4.5+", "4.0+", "Todos"].map((label) => (
                  <label key={label} className="flex items-center gap-3 cursor-pointer group">
                    <input type="radio" name="rating" className="w-5 h-5 accent-primary" />
                    <span className="flex items-center gap-1 group-hover:text-primary transition-colors">
                      {label !== "Todos" && <Star size={16} className="text-secondary-container fill-current" />}
                      {label}
                    </span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">Precio</p>
              <div className="flex gap-2">
                {["$", "$$", "$$$"].map((p) => (
                  <button key={p} className={`flex-1 py-2 rounded-full font-bold border transition-all ${p === "$$" ? "bg-primary/10 border-primary text-primary" : "bg-white border-surface-container hover:border-primary"}`}>
                    {p}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4">Ordenar por</p>
              <select className="w-full bg-white border border-surface-container rounded-xl py-3 px-4 outline-none focus:ring-2 focus:ring-primary">
                <option>Recomendados</option>
                <option>Más populares</option>
                <option>Calificación</option>
                <option>Tiempo de entrega</option>
              </select>
            </div>
          </div>
        </aside>

        {/* Grid */}
        <div className="flex-grow">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {RESTAURANTS.map((res) => (
              <Link 
                key={res.id} 
                href={`/restaurant/${res.id}`}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col text-left"
              >
                <div className="relative h-48">
                  <img src={res.image} alt={res.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  {res.promo && (
                    <div className="absolute top-4 left-4 bg-secondary-container text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                      {res.promo}
                    </div>
                  )}
                  <div className="absolute -bottom-6 left-4 w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl shadow-xl border-4 border-white">
                    {res.avatar}
                  </div>
                </div>
                <div className="p-8 pt-10 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-2xl font-display font-bold">{res.name}</h4>
                    <div className="flex items-center gap-1 bg-surface-container px-2 py-0.5 rounded-lg text-sm font-bold">
                      {res.rating} <Star size={14} className="text-secondary-container fill-current" />
                    </div>
                  </div>
                  <p className="text-sm text-on-surface-variant mb-4">{res.type} • {res.price}</p>
                  <div className="mt-auto pt-4 border-t border-surface-container flex items-center gap-4">
                    <div className="flex items-center gap-1 text-xs font-bold text-on-surface-variant">
                      <Clock size={14} /> {res.time}
                    </div>
                    <div className="flex items-center gap-1 text-xs font-bold text-primary">
                      <Bike size={14} /> {res.delivery === "Gratis" ? "Envío Gratis" : res.delivery}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
