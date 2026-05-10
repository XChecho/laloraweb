"use client";

import { motion } from "motion/react";
import { Plus, Search, Edit3, Trash2, Eye, MoreVertical } from "lucide-react";

const PRODUCTS = [
  { id: 1, name: "Margherita Pizza", category: "Pizzas", price: 12.99, status: "available", img: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?w=100" },
  { id: 2, name: "Pepperoni Feast", category: "Pizzas", price: 16.99, status: "available", img: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?w=100" },
  { id: 3, name: "Truffle Burger", category: "Burgers", price: 18.50, status: "out_of_stock", img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=100" },
];

export default function AdminMenu() {
  return (
    <div className="text-left flex flex-col gap-8">
      <div className="flex justify-between items-end">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-primary-container text-white flex items-center justify-center shadow-lg shadow-primary/20">
            <Plus size={24} />
          </div>
          <div>
            <h2 className="text-4xl font-display font-bold">Gestión de Menú</h2>
            <p className="text-on-surface-variant font-medium">Categorías, modificadores y productos del restaurante.</p>
          </div>
        </div>
        <div className="flex gap-4">
           <button className="bg-primary text-white px-8 py-3 rounded-full font-bold text-sm flex items-center gap-2 shadow-emerald-ambient hover:scale-105 transition-all">
             <Plus size={20} /> Crear Producto
           </button>
           <button className="w-12 h-12 rounded-full border border-surface-container flex items-center justify-center hover:bg-surface-container transition-colors">
             <MoreVertical size={20} />
           </button>
        </div>
      </div>

      <div className="flex border-b border-surface-container gap-8">
           <button className="text-primary font-bold border-b-2 border-primary pb-4 -mb-[1px]">Productos</button>
           <button className="text-on-surface-variant font-bold hover:text-on-surface pb-4 transition-colors">Categorías</button>
           <button className="text-on-surface-variant font-bold hover:text-on-surface pb-4 transition-colors">Modificadores</button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {PRODUCTS.map((prod) => (
          <motion.div 
            key={prod.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className={`p-6 rounded-[2.5rem] bg-white border border-surface-container shadow-sm flex items-center justify-between group hover:shadow-xl transition-all ${
              prod.status === "out_of_stock" ? "opacity-60" : ""
            }`}
          >
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-full border-4 border-white shadow-xl overflow-hidden shrink-0 group-hover:scale-105 transition-transform z-10">
                <img src={prod.img} className="w-full h-full object-cover" alt={prod.name} />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold mb-1">{prod.name}</h3>
                <div className="flex items-center gap-3">
                  <span className="text-primary font-extrabold text-lg">${prod.price}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-surface-container opacity-50" />
                  <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{prod.category}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-8 px-6">
              <div className="flex flex-col items-end gap-2">
                <span className={`text-[10px] font-bold uppercase tracking-widest ${prod.status === "available" ? "text-primary" : "text-error"}`}>
                  {prod.status === "available" ? "Disponible" : "Sin Stock"}
                </span>
                <div className={`w-14 h-8 rounded-full p-1 transition-all cursor-pointer ${prod.status === "available" ? "bg-primary" : "bg-surface-container"}`}>
                  <div className={`w-6 h-6 rounded-full bg-white shadow-md transition-all ${prod.status === "available" ? "translate-x-6" : ""}`} />
                </div>
              </div>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <Edit3 size={18} />
                </button>
                <button className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-error hover:text-white transition-all">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
