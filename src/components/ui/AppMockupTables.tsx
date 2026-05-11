'use client';

import { Armchair, MapPin, Users } from "lucide-react";

export default function AppMockupTables() {
  return (
    <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden flex flex-col">
      <div className="bg-primary-container text-white p-4 pb-6">
        <p className="text-xs opacity-80">La Lora</p>
        <p className="text-lg font-display font-bold">Mesas</p>
      </div>
      <div className="flex-grow p-3 flex flex-col gap-3 bg-surface-container-low">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2">Zona Terraza</p>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white p-3 rounded-xl shadow-sm">
              <div className="flex items-center gap-2 mb-1">
                <Armchair size={16} className="text-primary" />
                <span className="text-sm font-bold">Mesa 1</span>
              </div>
              <span className="text-[10px] text-primary font-semibold bg-primary/10 px-2 py-0.5 rounded-full">Libre</span>
            </div>
            <div className="bg-white p-3 rounded-xl shadow-sm">
              <div className="flex items-center gap-2 mb-1">
                <Armchair size={16} className="text-tertiary" />
                <span className="text-sm font-bold">Mesa 2</span>
              </div>
              <div className="flex items-center gap-1">
                <Users size={12} className="text-on-surface-variant" />
                <span className="text-[10px] text-on-surface-variant">4 personas</span>
              </div>
              <span className="text-[10px] text-tertiary font-semibold bg-tertiary/10 px-2 py-0.5 rounded-full">Ocupada</span>
            </div>
          </div>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2">Zona Bar</p>
          <div className="bg-white p-3 rounded-xl shadow-sm">
            <div className="flex items-center gap-2 mb-1">
              <Armchair size={16} className="text-tertiary" />
              <span className="text-sm font-bold">Mesa 5</span>
            </div>
            <div className="flex items-center gap-1">
              <Users size={12} className="text-on-surface-variant" />
              <span className="text-[10px] text-on-surface-variant">2 personas</span>
            </div>
            <span className="text-[10px] text-tertiary font-semibold bg-tertiary/10 px-2 py-0.5 rounded-full">Ocupada</span>
          </div>
        </div>
      </div>
    </div>
  );
}
