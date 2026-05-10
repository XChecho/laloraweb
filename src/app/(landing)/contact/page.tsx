'use client';

import { motion } from "motion/react";
import { Phone, Mail } from "lucide-react";
import { useState } from "react";

export default function ContactUs() {
  const [activeTab, setActiveTab] = useState("usuario");

  return (
    <div className="pt-20 bg-background relative overflow-hidden min-h-screen flex flex-col">
      <div className="absolute top-20 right-[-100px] w-96 h-96 rounded-full border-[20px] border-surface-container opacity-50 -z-10" />
      <div className="absolute bottom-40 left-[-50px] w-64 h-64 rounded-full border-[15px] border-surface-container opacity-50 -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start relative z-10">
        <div className="text-left flex flex-col gap-12">
          <div>
            <h1 className="text-6xl font-display font-extrabold text-primary mb-6">Ponte en Contacto</h1>
            <p className="text-lg text-on-surface-variant max-w-md">Ya sea que tengas un antojo, quieras ser socio o simplemente saludar, estamos aquí para ti.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-surface-container p-8 rounded-3xl group shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 text-primary border border-primary/20">
                <Phone size={24} fill="currentColor" className="opacity-20" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-1">Llámanos</h3>
              <p className="text-on-surface-variant">+1 (800) LORA-NOW</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-outline mt-2">SOPORTE 24/7</p>
            </div>
            <div className="bg-surface-container p-8 rounded-3xl group shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 text-secondary-container border border-secondary-container/20">
                <Mail size={24} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-1">Email</h3>
              <p className="text-on-surface-variant">hola@lalora.com</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-outline mt-2">RESPUESTAS EN 24H</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[2.5rem] p-10 shadow-2xl border border-surface-container"
          >
            <div className="flex bg-surface-container p-1 rounded-2xl mb-8">
              {["usuario", "restaurante", "domiciliario"].map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs transition-all capitalize ${
                    activeTab === tab ? "bg-primary text-white shadow-md" : "text-on-surface-variant hover:bg-white/50"
                  }`}
                >
                  Soy {tab}
                </button>
              ))}
            </div>

            <form className="flex flex-col gap-6 text-left">
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant block mb-2">Nombre</label>
                <input className="w-full bg-surface-container border border-transparent focus:border-primary rounded-xl px-4 py-4 outline-none transition-all" placeholder="Tu nombre completo" />
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant block mb-2">Email</label>
                <input className="w-full bg-surface-container border border-transparent focus:border-primary rounded-xl px-4 py-4 outline-none transition-all" placeholder="tu@ejemplo.com" />
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant block mb-2">Mensaje</label>
                <textarea rows={4} className="w-full bg-surface-container border border-transparent focus:border-primary rounded-xl px-4 py-4 outline-none transition-all resize-none" placeholder="¿Cómo podemos ayudarte?" />
              </div>
              <button type="button" className="bg-primary text-white py-4 rounded-xl font-bold shadow-emerald-ambient hover:shadow-lg transition-all transform active:scale-95">
                Enviar Mensaje
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
