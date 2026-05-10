
import { motion } from "motion/react";
import { Play, CheckCircle, Zap } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-6 pt-20 pb-32 overflow-hidden">
        <div className="absolute top-10 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-secondary-container/10 rounded-full blur-3xl -z-10" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="z-10 text-left"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-container/10 text-primary font-bold text-sm mb-6 border border-primary/20">
              Sobre La Lora
            </span>
            <h1 className="text-6xl md:text-7xl font-display font-extrabold mb-6 leading-tight">
              La Esencia de la <br />
              <span className="text-secondary-container relative inline-block">
                Gastronomía
                <svg className="absolute w-full h-4 -bottom-1 left-0 text-secondary-container/30" fill="currentColor" preserveAspectRatio="none" viewBox="0 0 200 12">
                  <path d="M0,10 Q100,0 200,10 L200,12 L0,12 Z" />
                </svg>
              </span>
            </h1>
            <p className="text-lg text-on-surface-variant mb-10 max-w-lg">
              Estamos revolucionando la forma en que los restaurantes se conectan con los amantes de la comida. Una experiencia de entrega premium y alta velocidad respaldada por tecnología SaaS robusta.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-emerald-ambient hover:-translate-y-1 transition-all duration-300">
                Sé un Socio
              </button>
              <button className="flex items-center gap-2 bg-white text-on-surface px-8 py-4 rounded-full font-bold border border-surface-container hover:border-primary hover:text-primary transition-all duration-300 group">
                <Play size={20} fill="currentColor" className="group-hover:text-primary transition-colors" />
                Mira cómo funciona
              </button>
            </div>
          </motion.div>

          <div className="relative z-10 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[450px] aspect-square">
              <div className="absolute inset-0 border-[3px] border-dashed border-primary/20 rounded-full animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-4 border-[2px] border-transparent border-t-secondary-container border-r-secondary-container rounded-full rotate-45 opacity-60" />
              
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="absolute inset-12 bg-surface-container rounded-full overflow-hidden shadow-emerald-ambient border-4 border-white relative z-20"
              >
                <img 
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800"
                  alt="Fine Dining"
                  className="w-full h-full object-cover scale-110"
                />
              </motion.div>

              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -top-8 right-16 w-24 h-24 z-30"
              >
                <div className="bg-white p-2 rounded-full shadow-lg">
                  <img src="https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?w=100" className="w-full h-full object-cover rounded-full" alt="Herb" />
                </div>
              </motion.div>

              <div className="absolute bottom-10 -left-10 bg-white p-4 rounded-xl shadow-amber-ambient flex items-center gap-3 z-30 border border-surface-container">
                <div className="w-10 h-10 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary-container">
                  <Zap size={20} fill="currentColor" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant leading-none">Entrega Promedio</p>
                  <p className="font-bold text-on-surface leading-none mt-1">Bajo 30 mins</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="bg-surface-container/30 rounded-[2rem] p-8 lg:p-12 border border-surface-container/50">
              <div className="grid grid-cols-2 gap-4">
                <img 
                    src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=400" 
                    className="rounded-xl w-full h-48 object-cover shadow-sm" 
                    alt="Chef with tablet" 
                />
                <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400" 
                    className="rounded-xl w-full h-48 object-cover shadow-sm mt-8" 
                    alt="Dashboard metrics" 
                />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 text-left">
            <h2 className="text-5xl font-display font-bold mb-6">Empoderando Cocinas Locales</h2>
            <p className="text-lg text-on-surface-variant mb-6">
              La Lora no es solo una aplicación de entrega; somos una plataforma SaaS integral de marca blanca diseñada para elevar las operaciones de los restaurantes. Proporcionamos la infraestructura digital para que los chefs puedan concentrarse en lo que mejor saben hacer: crear comida excepcional.
            </p>
            <div className="space-y-6">
              {[
                { title: "Integración Fluida", desc: "Conecte su POS, pantallas de cocina y sistemas de inventario en un panel unificado." },
                { title: "Experiencia de Marca", desc: "Mantenga su identidad de restaurante única mientras aprovecha nuestra poderosa red logística." }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="text-primary pt-1">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">{item.title}</h4>
                    <p className="text-on-surface-variant">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
