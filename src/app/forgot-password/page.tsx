'use client';

import { motion } from "motion/react";
import Link from "next/link";
import { Mail, ArrowLeft } from "lucide-react";

export default function ForgotPassword() {
  return (
    <div className="min-h-screen flex flex-col bg-background relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full border-[40px] border-surface-container opacity-50" />
        <div className="absolute top-[60%] -right-[15%] w-[60vw] h-[60vw] rounded-full border-[60px] border-primary/5" />
      </div>

      <main className="flex-grow flex items-center justify-center p-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-[480px] bg-white rounded-3xl p-10 shadow-2xl relative border border-surface-container/50 overflow-hidden text-left"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-secondary-container" />
          
          <div className="text-center mb-10 mt-4">
            <Link href="/" className="inline-block mb-8">
              <span className="text-3xl font-display font-extrabold text-primary tracking-tight">La Lora</span>
            </Link>
            <h1 className="text-4xl font-display font-bold text-on-background mb-4">¿Olvidaste tu contraseña?</h1>
            <p className="text-on-surface-variant">
              Ingresa el correo asociado a tu cuenta y te enviaremos un enlace para restablecer tu contraseña.
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-on-background mb-2" htmlFor="email">Correo Electrónico</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-on-surface-variant">
                  <Mail size={20} />
                </div>
                <input 
                  className="block w-full pl-12 pr-4 py-4 bg-surface-container border border-transparent rounded-xl text-on-background placeholder:text-outline-variant focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all transition-colors" 
                  id="email" 
                  name="email" 
                  placeholder="tu@ejemplo.com" 
                  required 
                  type="email" 
                />
              </div>
            </div>

            <div className="pt-2">
              <button 
                className="w-full flex justify-center items-center py-4 px-8 border border-transparent rounded-full shadow-lg font-bold text-white bg-primary hover:opacity-90 transition-all shadow-emerald-ambient"
                type="submit"
              >
                Enviar correo de recuperación
              </button>
            </div>
          </form>

          <div className="mt-8 text-center">
            <Link href="/login" className="inline-flex items-center gap-2 font-bold text-primary hover:text-primary-container transition-colors">
              <ArrowLeft size={18} />
              Volver al inicio de sesión
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
