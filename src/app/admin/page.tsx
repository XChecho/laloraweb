"use client";

import { motion } from "motion/react";
import { Plus, Search, MapPin, ArrowRight, ExternalLink } from "lucide-react";

const RESTAURANTS = [
  { id: 1, name: "Gourmet Bistro", location: "Downtown, Metro City", status: "active", logo: "https://images.unsplash.com/photo-1549489569-80862024b898?w=100" },
  { id: 2, name: "Pizza Palace", location: "Westside Avenue", status: "active", logo: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=100" },
  { id: 3, name: "Sushi Express", location: "Eastside Mall", status: "inactive", logo: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=100" },
  { id: 4, name: "Taco Fiesta", location: "Northside Strip", status: "active", logo: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=100" },
];

export default function AdminRestaurants() {
  return (
    <div className="text-left flex flex-col gap-8">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-5xl font-display font-extrabold mb-4">Aliados Registrados</h2>
          <p className="text-lg text-on-surface-variant max-w-2xl">Gestión global de restaurantes, configuración de menús y staff centralizado.</p>
        </div>
        <button className="bg-primary text-white px-8 py-3 rounded-full font-bold text-sm shadow-emerald-ambient hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2">
          <Plus size={20} /> Nuevo Restaurante
        </button>
      </div>

      <div className="bg-white rounded-[3rem] border border-surface-container overflow-hidden shadow-sm">
        <div className="p-8 border-b border-surface-container flex flex-wrap gap-4 justify-between items-center bg-surface">
          <div className="flex gap-4">
             <div className="bg-primary/10 text-primary px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest border border-primary/20">Todos</div>
             <div className="hover:bg-surface-container px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest opacity-40 cursor-pointer">Activos</div>
             <div className="hover:bg-surface-container px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest opacity-40 cursor-pointer">Inactivos</div>
          </div>
          <div className="w-80 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" size={18} />
            <input 
              type="text" 
              className="w-full bg-surface-container/50 border-none rounded-full py-2.5 pl-10 pr-4 focus:ring-2 focus:ring-primary/20 outline-none text-sm font-bold"
              placeholder="Buscar aliado..."
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-surface-container/30">
                <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">Restaurante</th>
                <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">Ubicación</th>
                <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">Estado</th>
                <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant text-right">Acción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container">
              {RESTAURANTS.map((res) => (
                <tr key={res.id} className="hover:bg-surface-container/20 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-surface-container p-1 shadow-sm shrink-0 overflow-hidden group-hover:scale-110 transition-transform">
                        <img src={res.logo} className="w-full h-full object-cover rounded-xl" alt={res.name} />
                      </div>
                      <span className="font-bold text-lg">{res.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2 text-sm text-on-surface-variant font-medium">
                      <MapPin size={14} className="text-primary" /> {res.location}
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                      res.status === "active" 
                        ? "bg-primary/10 text-primary" 
                        : "bg-error/10 text-error"
                    }`}>
                      {res.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <button className="text-primary font-bold text-xs uppercase tracking-widest hover:underline flex items-center gap-1 justify-end ml-auto group-hover:gap-2 transition-all">
                      Gestionar <ArrowRight size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-8 bg-surface-container/10 flex justify-center gap-2">
          <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-md">1</div>
          <div className="w-10 h-10 rounded-full hover:bg-surface-container flex items-center justify-center font-bold text-sm transition-colors cursor-pointer">2</div>
          <div className="w-10 h-10 rounded-full hover:bg-surface-container flex items-center justify-center font-bold text-sm transition-colors cursor-pointer">3</div>
        </div>
      </div>
    </div>
  );
}
