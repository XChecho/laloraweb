"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { 
  Plus, 
  Filter, 
  X, 
  Utensils, 
  Printer, 
  CreditCard, 
  Banknote as Cash, 
  CheckCircle2,
  TrendingDown
} from "lucide-react";

const ACTIVE_TABLES = [
  { id: "M1", time: "45 min", total: 32.00, items: "3x Hamburguesa, 2x Papas..." },
  { id: "M2", time: "12 min", total: 15.50, items: "1x Pizza Margarita, 2x Cola..." },
  { id: "M4", time: "60 min", total: 89.00, items: "2x Hamburguesa Clásica...", status: "waiting_payment" },
  { id: "B1", time: "5 min", total: 6.00, items: "1x Cerveza Artesanal..." },
];

export default function AdminCashier() {
  const [selectedTable, setSelectedTable] = useState<null | typeof ACTIVE_TABLES[0]>(null);

  return (
    <div className="text-left flex flex-col gap-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-display font-bold mb-2">Caja Principal</h1>
          <p className="text-on-surface-variant">Gestión de órdenes activas y cierres de cuenta.</p>
        </div>
        <button className="bg-error text-white px-8 py-3 rounded-full font-bold text-sm shadow-lg shadow-error/20 hover:bg-on-error-container transition-all">
          Cerrar Caja
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {ACTIVE_TABLES.map((table) => (
          <motion.div 
            key={table.id}
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedTable(table)}
            className={`p-6 rounded-[2.5rem] flex flex-col gap-4 cursor-pointer border transition-all ${
              table.status === "waiting_payment" 
                ? "bg-primary-container border-primary ring-2 ring-primary ring-offset-4" 
                : "bg-white border-surface-container shadow-sm hover:shadow-xl"
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className={`text-2xl font-display font-bold ${table.status === "waiting_payment" ? "text-white" : ""}`}>
                  Mesa {table.id}
                </h3>
                <p className={`text-sm ${table.status === "waiting_payment" ? "text-white/70" : "text-on-surface-variant"}`}>
                  {table.time} ago
                </p>
              </div>
              <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                table.status === "waiting_payment" 
                  ? "bg-secondary-container text-white shadow-inner" 
                  : "bg-surface-container text-on-surface-variant"
              }`}>
                {table.status === "waiting_payment" ? "Pago Pendiente" : "Ocupada"}
              </span>
            </div>

            <p className={`text-sm line-clamp-1 ${table.status === "waiting_payment" ? "text-white/80" : "text-on-surface-variant"}`}>
              {table.items}
            </p>

            <div className={`mt-auto pt-4 border-t flex justify-between items-center ${
              table.status === "waiting_payment" ? "border-white/20" : "border-surface-container"
            }`}>
              <span className={`text-xl font-bold ${table.status === "waiting_payment" ? "text-white" : ""}`}>
                ${table.total.toFixed(2)}
              </span>
              <button className={`text-xs font-bold underline ${table.status === "waiting_payment" ? "text-white" : "text-primary"}`}>
                Cobrar
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedTable && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-12">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTable(null)}
              className="absolute inset-0 bg-inverse-surface/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full max-w-3xl bg-white rounded-[3rem] shadow-2xl relative overflow-hidden flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="p-8 border-b border-surface-container bg-surface flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center shadow-emerald-ambient">
                    <Utensils size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-bold">Detalle Mesa {selectedTable.id}</h2>
                    <p className="text-sm text-on-surface-variant font-medium">Orden #4928 • Mesero: Juan P.</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedTable(null)}
                  className="w-10 h-10 rounded-full hover:bg-surface-container transition-colors flex items-center justify-center text-on-surface-variant"
                >
                  <X />
                </button>
              </div>

              {/* Modal Body */}
              <div className="flex-grow overflow-y-auto p-8 bg-surface-container/10">
                <div className="rounded-3xl border border-surface-container bg-white overflow-hidden">
                  <table className="w-full text-left">
                    <thead className="bg-surface border-b border-surface-container">
                      <tr>
                        <th className="px-6 py-4 font-bold text-xs uppercase tracking-widest opacity-60">Cant.</th>
                        <th className="px-6 py-4 font-bold text-xs uppercase tracking-widest opacity-60">Artículo</th>
                        <th className="px-6 py-4 font-bold text-xs uppercase tracking-widest opacity-60 text-right">P. Unit</th>
                        <th className="px-6 py-4 font-bold text-xs uppercase tracking-widest opacity-60 text-right">Total</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-surface-container">
                      {[1, 2, 3].map((_, i) => (
                        <tr key={i} className="hover:bg-surface-container/30 transition-colors">
                          <td className="px-6 py-4 font-bold text-primary">2</td>
                          <td className="px-6 py-4">
                            <p className="font-bold text-sm">Hamburguesa Clásica</p>
                            <p className="text-[10px] text-on-surface-variant uppercase font-medium">Sin cebolla</p>
                          </td>
                          <td className="px-6 py-4 text-right text-sm text-on-surface-variant font-medium">$12.00</td>
                          <td className="px-6 py-4 text-right font-bold">$24.00</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl border-2 border-primary bg-primary/5 flex items-center gap-4 cursor-pointer">
                    <Cash className="text-primary" />
                    <div>
                      <p className="font-bold text-sm leading-none">Efectivo</p>
                      <p className="text-[10px] uppercase font-bold text-on-surface-variant mt-1">Seleccionado</p>
                    </div>
                  </div>
                  <div className="p-5 rounded-2xl border border-surface-container bg-white flex items-center gap-4 hover:border-primary transition-all cursor-pointer">
                    <CreditCard className="text-on-surface-variant" />
                    <p className="font-bold text-sm">Tarjeta</p>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-8 border-t border-surface-container bg-white">
                <div className="flex justify-between items-end mb-8">
                  <div className="flex flex-col gap-1 text-sm font-bold opacity-60">
                    <div className="flex justify-between w-48"><span>Subtotal:</span> <span>$48.00</span></div>
                    <div className="flex justify-between w-48"><span>Impuestos:</span> <span>$5.76</span></div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-1">Total a Pagar</p>
                    <p className="text-5xl font-display font-extrabold text-primary leading-none">$58.56</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button className="flex-1 py-4 px-6 rounded-2xl border-2 border-surface-container font-bold text-sm flex items-center justify-center gap-2 hover:bg-surface-container transition-all">
                    <Printer size={18} /> Pre-cuenta
                  </button>
                  <button className="flex-[2] py-4 px-6 rounded-2xl bg-primary text-white font-extrabold text-lg shadow-emerald-ambient hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2">
                    <CheckCircle2 size={24} /> Cerrar Mesa y Cobrar
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
