"use client";

import { motion } from "motion/react";
import { 
  SquarePlay, 
  Timer, 
  CheckCircle2, 
  AlertCircle,
  Hash,
  MessageSquare
} from "lucide-react";

const ORDERS = {
  pending: [
    { id: "1042", table: "12", time: "14m", items: [{ qty: 2, name: "Classic Burger", notes: "No Onion" }, { qty: 1, name: "Truffle Fries" }] },
    { id: "1043", table: "04", time: "4m", items: [{ qty: 1, name: "Caesar Salad", notes: "Dressing on side" }] },
  ],
  preparation: [
    { id: "1040", table: "08", time: "18m", items: [{ qty: 1, name: "Ribeye Steak", notes: "Medium Rare" }] }
  ],
  ready: [
    { id: "1038", table: "Takeout", time: "25m", items: [{ qty: 3, name: "Margarita Pizza" }], urgent: true }
  ]
};

export default function AdminKitchen() {
  return (
    <div className="h-[calc(100vh-140px)] flex flex-col gap-8">
      <div className="flex justify-between items-end shrink-0">
        <div>
          <h1 className="text-4xl font-display font-bold mb-2">Cocina KDS</h1>
          <p className="text-on-surface-variant">Monitoreo de preparación de alimentos en tiempo real.</p>
        </div>
        <div className="flex items-center gap-4 bg-white px-6 py-3 rounded-full border border-surface-container">
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-bold opacity-60">SISTEMA ONLINE</span>
          <div className="h-6 w-px bg-surface-container mx-2" />
          <span className="text-2xl font-display font-bold text-on-surface">18:42</span>
        </div>
      </div>

      <div className="flex-grow flex gap-8 min-h-0">
        {/* Column: PENDING */}
        <div className="flex-1 flex flex-col gap-6 bg-surface-container/20 rounded-[2.5rem] p-6 border border-surface-container/50">
          <div className="flex justify-between items-center px-2">
            <h2 className="text-xl font-display font-bold flex items-center gap-2">
              <AlertCircle size={20} className="text-secondary-container" /> Pendientes
            </h2>
            <span className="bg-secondary-container/10 text-secondary-container px-3 py-1 rounded-full text-xs font-bold">
              {ORDERS.pending.length} Órdenes
            </span>
          </div>
          <div className="flex-grow overflow-y-auto pr-2 space-y-6">
            {ORDERS.pending.map((order) => (
              <KitchenCard key={order.id} order={order} type="pending" />
            ))}
          </div>
        </div>

        {/* Column: PREPARATION */}
        <div className="flex-1 flex flex-col gap-6 bg-surface-container/20 rounded-[2.5rem] p-6 border border-surface-container/50">
          <div className="flex justify-between items-center px-2">
            <h2 className="text-xl font-display font-bold flex items-center gap-2">
              <SquarePlay size={20} className="text-primary" /> En Preparación
            </h2>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">
              {ORDERS.preparation.length} Preparando
            </span>
          </div>
          <div className="flex-grow overflow-y-auto pr-2 space-y-6">
            {ORDERS.preparation.map((order) => (
              <KitchenCard key={order.id} order={order} type="preparation" />
            ))}
          </div>
        </div>

        {/* Column: READY */}
        <div className="flex-1 flex flex-col gap-6 bg-surface-container/20 rounded-[2.5rem] p-6 border border-surface-container/50">
          <div className="flex justify-between items-center px-2">
            <h2 className="text-xl font-display font-bold flex items-center gap-2">
              <CheckCircle2 size={20} className="text-secondary-container" /> Listos
            </h2>
            <span className="bg-secondary-container/10 text-secondary-container px-3 py-1 rounded-full text-xs font-bold">
              {ORDERS.ready.length} Para Entrega
            </span>
          </div>
          <div className="flex-grow overflow-y-auto pr-2 space-y-6">
            {ORDERS.ready.map((order) => (
              <KitchenCard key={order.id} order={order} type="ready" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function KitchenCard({ order, type }: { order: any, type: string }) {
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`bg-white p-6 rounded-3xl shadow-sm border-l-8 flex flex-col gap-6 relative transition-all hover:shadow-xl ${
        order.urgent ? "border-error shadow-error/10" : 
        type === "pending" ? "border-secondary-container shadow-secondary-container/10" : 
        type === "preparation" ? "border-primary shadow-primary/10" : "border-secondary-container"
      }`}
    >
      <div className="flex justify-between items-start border-b border-surface-container pb-4">
        <div>
          <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">
            <Hash size={12} /> Orden #{order.id}
          </div>
          <h3 className="text-3xl font-display font-extrabold leading-none">Mesa {order.table}</h3>
        </div>
        <div className={`px-3 py-1.5 rounded-xl font-bold text-xs flex items-center gap-2 ${
          order.urgent ? "bg-error text-white" : "bg-surface-container text-on-surface-variant"
        }`}>
          <Timer size={16} /> {order.time} ago
        </div>
      </div>

      <ul className="flex flex-col gap-4">
        {order.items.map((item: any, i: number) => (
          <li key={i} className="flex gap-4">
            <span className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center font-bold text-sm text-primary shrink-0">
              {item.qty}x
            </span>
            <div className="flex-grow">
              <p className="font-bold text-lg leading-snug">{item.name}</p>
              {item.notes && (
                <div className="flex items-center gap-2 text-xs text-error font-bold uppercase mt-1 bg-error/5 p-1 rounded">
                  <MessageSquare size={12} /> {item.notes}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>

      <button className={`w-full py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-3 transition-all ${
        type === "pending" ? "bg-primary text-white shadow-emerald-ambient" :
        type === "preparation" ? "bg-secondary-container text-white shadow-lg" : "bg-surface-container text-on-surface-variant opacity-60"
      }`}>
        {type === "pending" ? "Iniciar Preparación" : 
         type === "preparation" ? "Marcar como Listo" : "Completado"}
      </button>
    </motion.div>
  );
}
