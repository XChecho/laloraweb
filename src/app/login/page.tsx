'use client';

import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { Utensils, Loader2 } from "lucide-react";
import { useLoginMutation, useGoogleLogin } from "@/hooks/useAuth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginMutation = useLoginMutation();
  const googleLogin = useGoogleLogin();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginMutation.mutate({ email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-container/20">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-screen lg:min-h-[850px] shadow-2xl bg-white overflow-hidden transition-all duration-500">
        
        {/* Left Side: Login Form */}
        <div className="flex flex-col justify-center px-8 py-20 lg:px-[12%] bg-white relative z-10 text-left">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full max-w-md mx-auto"
          >
            <div className="mb-12">
              <Link href="/" className="inline-block mb-8">
                <h1 className="text-4xl font-display font-extrabold text-primary tracking-tighter">La Lora</h1>
              </Link>
              <h2 className="text-3xl font-display font-bold text-on-surface mb-2">Bienvenido de nuevo</h2>
              <p className="text-on-surface-variant">Inicia sesión para pedir tus platos favoritos.</p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-on-surface mb-2" htmlFor="email">Correo Electrónico</label>
                <input 
                  className="w-full bg-surface-container border-transparent focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-4 text-on-surface placeholder-outline-variant transition-all outline-none" 
                  id="email" 
                  name="email" 
                  placeholder="tu@ejemplo.com" 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-on-surface mb-2" htmlFor="password">Contraseña</label>
                <input 
                  className="w-full bg-surface-container border-transparent focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-4 text-on-surface placeholder-outline-variant transition-all outline-none" 
                  id="password" 
                  name="password" 
                  placeholder="••••••••" 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input className="h-5 w-5 rounded border-surface-container text-primary focus:ring-primary cursor-pointer" id="terms" name="terms" type="checkbox" />
                  <label className="ml-3 text-sm text-on-surface-variant cursor-pointer" htmlFor="terms">Acepto los términos</label>
                </div>
                <Link href="/forgot-password" className="text-sm text-primary hover:text-primary-container font-bold transition-colors">¿Olvidaste tu contraseña?</Link>
              </div>

              {loginMutation.isError && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-red-600 bg-red-50 rounded-lg px-4 py-3"
                >
                  {loginMutation.error instanceof Error
                    ? loginMutation.error.message
                    : "Error al iniciar sesión"}
                </motion.p>
              )}

              <button
                className="w-full bg-primary text-white font-bold py-4 rounded-full hover:bg-primary-container transition-all shadow-emerald-ambient active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                type="submit"
                disabled={loginMutation.isPending}
              >
                {loginMutation.isPending ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Iniciando sesión...
                  </>
                ) : (
                  "Iniciar Sesión"
                )}
              </button>
            </form>

            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-surface-container"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-on-surface-variant italic">O continúa con</span>
                </div>
              </div>
              
              <button
                onClick={() => googleLogin.mutate()}
                disabled={googleLogin.isPending}
                className="mt-6 w-full flex items-center justify-center gap-3 bg-surface-container text-on-surface font-bold py-4 rounded-full hover:bg-surface-container-high transition-all border border-transparent hover:border-surface-container-highest disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {googleLogin.isPending ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Conectando con Google...
                  </>
                ) : (
                  <>
                    <svg className="h-5 w-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"></path>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                    </svg>
                    Iniciar sesión con Google
                  </>
                )}
              </button>

              {googleLogin.isError && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-sm text-red-600 bg-red-50 rounded-lg px-4 py-3"
                >
                  {googleLogin.error instanceof Error
                    ? googleLogin.error.message
                    : "Error al iniciar sesión con Google"}
                </motion.p>
              )}
            </div>

            <p className="mt-10 text-center text-on-surface-variant text-sm">
              ¿No tienes una cuenta? <Link href="/contact" className="text-primary font-bold hover:underline">Regístrate</Link>
            </p>
          </motion.div>
        </div>

        {/* Right Side: Imagery */}
        <div className="hidden lg:block relative bg-surface-container shadow-inner">
          <div className="absolute inset-0 z-10 bg-gradient-to-tr from-primary/10 to-transparent" />
          <img 
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=1200" 
            className="absolute inset-0 w-full h-full object-cover" 
            alt="Amigos comiendo pizza" 
          />
          
          <div className="absolute bottom-12 left-12 z-20 bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-xl max-w-[320px] border border-white/50 text-left">
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <Utensils size={20} />
              </div>
              <h4 className="font-bold text-on-surface uppercase text-xs tracking-widest">Ingredientes Frescos</h4>
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed italic">"La mejor pizza que he probado en mucho tiempo, la rapidez es increíble."</p>
          </div>
        </div>
      </div>
    </div>
  );
}
