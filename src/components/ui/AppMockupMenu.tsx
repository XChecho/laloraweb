'use client';

import { Star } from "lucide-react";

export default function AppMockupMenu() {
  return (
    <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden flex flex-col">
      <div className="bg-primary-container text-white p-4 pb-6">
        <p className="text-xs opacity-80">La Lora</p>
        <p className="text-lg font-display font-bold">Menú</p>
      </div>
      <div className="flex gap-2 px-3 py-2 bg-surface-container-low overflow-hidden">
        <span className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap">Hamburguesas</span>
        <span className="bg-surface-container text-on-surface-variant text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap">Pizza</span>
        <span className="bg-surface-container text-on-surface-variant text-[10px] font-bold px-3 py-1 rounded-full whitespace-nowrap">Ensaladas</span>
      </div>
      <div className="flex-grow p-3 flex flex-col gap-3 bg-surface-container-low overflow-hidden">
        <div className="bg-white p-3 rounded-xl shadow-sm flex gap-3">
          <div className="w-14 h-14 bg-surface-container rounded-lg flex-shrink-0" />
          <div className="flex-grow">
            <p className="text-sm font-bold text-on-surface">Hamburguesa Clásica</p>
            <p className="text-[10px] text-on-surface-variant">Carne, lechuga, tomate</p>
            <div className="flex items-center gap-1 mt-1">
              <Star size={10} className="text-secondary-container fill-current" />
              <span className="text-[10px] font-bold">4.8</span>
            </div>
            <p className="text-sm font-bold text-primary mt-1">$18.000</p>
          </div>
        </div>
        <div className="bg-white p-3 rounded-xl shadow-sm flex gap-3">
          <div className="w-14 h-14 bg-surface-container rounded-lg flex-shrink-0" />
          <div className="flex-grow">
            <p className="text-sm font-bold text-on-surface">Pizza Pepperoni</p>
            <p className="text-[10px] text-on-surface-variant">Pepperoni, queso, salsa</p>
            <div className="flex items-center gap-1 mt-1">
              <Star size={10} className="text-secondary-container fill-current" />
              <span className="text-[10px] font-bold">4.9</span>
            </div>
            <p className="text-sm font-bold text-primary mt-1">$25.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}
