"use client";

import { motion } from "motion/react";
import { Plus, Users, Clock, CheckCircle, Store } from "lucide-react";

const ZONES = [
  { 
    id: 1, 
    name: "Comedor Principal", 
    tables: [
      { id: "M1", status: "occupied", time: "14:30", capacity: 4 },
      { id: "M2", status: "free", capacity: 2 },
      { id: "M3", status: "occupied", time: "15:00", capacity: 6 },
      { id: "M4", status: "free", capacity: 4 },
    ]
  },
  { 
    id: 2, 
    name: "Terraza", 
    tables: [
      { id: "T1", status: "free", capacity: 4 },
      { id: "T2", status: "occupied", time: "15:15", capacity: 2 },
    ]
  }
];

export default function AdminTables() {
  return (
    <div className="text-left flex flex-col gap-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-display font-bold mb-2">Gestión de Mesas</h1>
          <p className="text-on-surface-variant">Monitorea la disponibilidad y tiempo real de tus mesas.</p>
        </div>
        <div className="flex gap-4">
          <button className="bg-surface-container hover:bg-surface-container-high px-6 py-2.5 rounded-full font-bold text-sm transition-all">
            Nueva Zona
          </button>
          <button className="bg-primary text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-emerald-ambient flex items-center gap-2">
            <Plus size={18} /> Agregar Mesa
          </button>
        </div>
      </div>

      <div className="flex gap-8 border-b border-surface-container pb-4">
        <button className="text-primary font-bold border-b-2 border-primary pb-4 -mb-[18px]">Todas</button>
        <button className="text-on-surface-variant font-bold hover:text-on-surface transition-colors">Comedor Principal</button>
        <button className="text-on-surface-variant font-bold hover:text-on-surface transition-colors">Terraza</button>
        <button className="text-on-surface-variant font-bold hover:text-on-surface transition-colors">Bar</button>
      </div>

      {ZONES.map((zone) => (
        <div key={zone.id} className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-display font-bold">{zone.name}</h2>
            <span className="bg-surface-container px-3 py-1 rounded-lg text-xs font-bold opacity-60">
              {zone.tables.length} Mesas
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {zone.tables.map((table) => (
              <motion.div 
                key={table.id}
                whileHover={{ y: -5 }}
                className={`p-6 rounded-[2rem] border transition-all flex flex-col gap-4 relative overflow-hidden ${
                  table.status === "occupied" 
                    ? "bg-white border-surface-container shadow-lg shadow-primary/5" 
                    : "bg-surface-container/20 border-dashed border-surface-container/50"
                }`}
              >
                <div className="flex justify-between items-start z-10">
                  <h3 className="text-3xl font-display font-extrabold">{table.id}</h3>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-1 ${
                    table.status === "occupied" 
                      ? "bg-secondary-container/10 text-secondary-container" 
                      : "bg-primary/10 text-primary"
                  }`}>
                    {table.status === "occupied" ? <Store size={10} /> : <CheckCircle size={10} />}
                    {table.status === "occupied" ? "Ocupada" : "Libre"}
                  </span>
                </div>

                <div className="flex flex-col gap-2 z-10">
                  <div className={`flex items-center gap-2 text-sm font-bold ${table.status === "occupied" ? "text-on-surface" : "opacity-30"}`}>
                    <Clock size={16} className="text-primary" />
                    {table.status === "occupied" ? `Desde ${table.time}` : "--:--"}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-on-surface-variant font-medium">
                    <Users size={16} />
                    Capacidad: {table.capacity} pax
                  </div>
                </div>

                <button className={`w-full py-2.5 rounded-xl font-bold text-xs mt-2 transition-all ${
                  table.status === "occupied" 
                    ? "bg-surface-container text-on-surface hover:bg-surface-container-high" 
                    : "bg-primary text-white shadow-sm hover:opacity-90"
                }`}>
                  {table.status === "occupied" ? "Ver Detalles" : "Abrir Mesa"}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
