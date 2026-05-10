"use client";

import { motion } from "motion/react";
import { Plus, BadgeCheck, Bike, Mail, Phone, Edit, MoreVertical } from "lucide-react";

const STAFF = [
  { id: 1, name: "Sarah Jenkins", role: "Manager", email: "sarah.j@restaurant.com", phone: "+1 (555) 123-4567", status: "active", img: "https://images.unsplash.com/photo-1549489569-80862024b898?w=100" },
  { id: 2, name: "Marcus Chen", role: "Head Chef", email: "marcus.c@restaurant.com", phone: "+1 (555) 987-6543", status: "active", img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=100" },
  { id: 3, name: "Emily Rodriguez", role: "Waiter", email: "emily.r@restaurant.com", phone: "+1 (555) 456-7890", status: "on_leave", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100" },
];

export default function AdminUsers() {
  return (
    <div className="text-left flex flex-col gap-8">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-5xl font-display font-extrabold mb-4">Personal y Usuarios</h2>
          <p className="text-lg text-on-surface-variant">Gestiona roles de empleados y socios domiciliarios registrados.</p>
        </div>
        <button className="bg-primary text-white px-8 py-3 rounded-full font-bold text-sm shadow-emerald-ambient hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-2">
          <Plus size={20} /> Invitar Personal
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        <aside className="w-full lg:w-64 flex flex-col gap-6">
          <div className="bg-white rounded-[2rem] p-2 border border-surface-container shadow-sm flex lg:flex-col gap-2">
            <button className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-primary text-white font-bold transition-all w-full">
              <BadgeCheck size={20} /> Staff Restaurante
            </button>
            <button className="flex items-center gap-3 px-6 py-3 rounded-2xl text-on-surface-variant font-bold hover:bg-surface-container transition-all w-full">
              <Bike size={20} /> Domiciliarios
            </button>
          </div>

          <div className="bg-white rounded-[2rem] p-8 border border-surface-container shadow-sm">
            <h3 className="font-display font-bold text-xl mb-6">Filtros</h3>
            <div className="flex flex-col gap-4">
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant block mb-2">Rol</label>
                <select className="w-full bg-surface-container/50 border-none rounded-xl py-3 px-4 outline-none font-bold text-sm">
                  <option>Todos</option>
                  <option>Manager</option>
                  <option>Chef</option>
                </select>
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1 flex flex-col gap-6">
          {STAFF.map((member) => (
            <motion.div 
              key={member.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-6 rounded-[2.5rem] border border-surface-container shadow-sm hover:shadow-xl transition-all flex flex-col sm:flex-row items-center gap-6 group"
            >
              <div className="relative">
                 <div className="w-24 h-24 rounded-full border-4 border-white shadow-xl overflow-hidden group-hover:scale-105 transition-transform">
                   <img src={member.img} className="w-full h-full object-cover" alt={member.name} />
                 </div>
                 <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-4 border-white shadow-md ${
                   member.status === 'active' ? 'bg-primary' : 'bg-surface-container'
                 }`} />
              </div>

              <div className="flex-grow text-center sm:text-left">
                 <div className="flex items-center justify-center sm:justify-start gap-3 mb-2">
                   <h3 className="text-2xl font-display font-extrabold">{member.name}</h3>
                   <span className="bg-secondary-container/10 text-secondary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                     {member.role}
                   </span>
                 </div>
                 <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-sm text-on-surface-variant font-medium">
                   <span className="flex items-center gap-2"><Mail size={14} className="text-primary" /> {member.email}</span>
                   <span className="flex items-center gap-2"><Phone size={14} className="text-primary" /> {member.phone}</span>
                 </div>
              </div>

              <div className="flex gap-2">
                 <button className="w-12 h-12 rounded-full hover:bg-surface-container flex items-center justify-center transition-colors">
                   <Edit size={20} className="text-on-surface-variant" />
                 </button>
                 <button className="w-12 h-12 rounded-full hover:bg-error/10 flex items-center justify-center transition-colors">
                   <MoreVertical size={20} className="text-on-surface-variant" />
                 </button>
              </div>
            </motion.div>
          ))}
        </main>
      </div>
    </div>
  );
}
