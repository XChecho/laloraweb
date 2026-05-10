'use client';

import { motion } from "motion/react";
import Link from "next/link";
import { 
  ArrowRight, 
  Play, 
  Timer, 
  Truck, 
  MapPin, 
  ChevronRight, 
  Smartphone, 
  Navigation2, 
  Bot,
  UtensilsCrossed,
  Pizza,
  Fish,
  Leaf
} from "lucide-react";

const CATEGORIES = [
  { name: "Burgers", icon: <UtensilsCrossed className="w-8 h-8" />, color: "bg-primary-container", img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&auto=format&fit=crop&q=60" },
  { name: "Pizza", icon: <Pizza className="w-8 h-8" />, color: "bg-secondary-container" },
  { name: "Sushi", icon: <Fish className="w-8 h-8" />, color: "bg-tertiary-container" },
  { name: "Healthy", icon: <Leaf className="w-8 h-8" />, color: "bg-primary" },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h2 className="text-6xl md:text-7xl font-display font-extrabold leading-[0.95] mb-6">
              Fresh Food,<br />Delivered <span className="text-secondary-container">Rápido</span>
            </h2>
            <p className="text-lg text-on-surface-variant max-w-md mb-8">
              Experience the vibrant flavors of premium dining, rushed to your door with incredible speed. Crave it, click it, enjoy it.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/restaurants" className="bg-secondary-container text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 ambient-shadow-secondary hover:translate-y-[-2px] transition-all">
                Explore Menu <ArrowRight size={20} />
              </Link>
              <button className="bg-surface-container px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-surface-container/80 transition-all">
                <Play size={20} fill="currentColor" /> Watch How
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:w-1/2 relative"
          >
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              <div className="absolute inset-0 bg-primary-container/10 rounded-full animate-pulse" />
              <div className="absolute inset-0 border-2 border-dashed border-primary-container/20 rounded-full animate-[spin_20s_linear_infinite]" />
              <img 
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=800"
                alt="Delicious Salad"
                className="w-full h-full object-cover rounded-full p-4 relative z-10"
              />
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute bottom-10 left-0 bg-white p-4 rounded-2xl shadow-2xl flex items-center gap-4 z-20"
              >
                <div className="bg-primary/10 p-3 rounded-xl text-primary">
                  <Timer size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Delivery</p>
                  <p className="text-xl font-display font-bold text-primary">15-20 Min</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Categories */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h3 className="text-4xl font-display font-bold text-center mb-12">Crave Categories</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {CATEGORIES.map((cat, i) => (
              <motion.div 
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group flex flex-col items-center gap-4 cursor-pointer"
              >
                <div className={`w-40 h-40 rounded-full ${cat.color} flex items-center justify-center p-2 transition-transform duration-300 group-hover:rotate-6 shadow-xl`}>
                  <div className="bg-white/20 w-full h-full rounded-full flex items-center justify-center text-white backdrop-blur-sm">
                    {cat.img ? (
                      <img src={cat.img} alt={cat.name} className="w-full h-full object-cover rounded-full" />
                    ) : (
                      <span className="scale-[2.5]">{cat.icon}</span>
                    )}
                  </div>
                </div>
                <span className="text-xl font-display font-bold">{cat.name}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Promotions Bento */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[450px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 0.98 }}
              className="lg:col-span-2 bg-secondary-container rounded-[2.5rem] p-10 relative overflow-hidden flex flex-col justify-end group cursor-pointer ambient-shadow-secondary"
            >
              <div className="absolute top-8 right-8 bg-tertiary text-white px-4 py-2 rounded-full font-bold text-sm rotate-12 z-10">-20% OFF</div>
              <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/20 rounded-full blur-3xl" />
              <div className="relative z-10 max-w-md text-white">
                <h4 className="text-5xl font-display font-bold mb-4">Family Feast Bonanza</h4>
                <p className="mb-6 opacity-90">Perfect for sharing. Get massive discounts on bundles designed for 4+ people.</p>
                <button className="bg-white text-secondary-container px-6 py-3 rounded-full font-bold text-left">Claim Offer</button>
              </div>
            </motion.div>
            
            <div className="flex flex-col gap-6">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-1 bg-surface-container rounded-[2.5rem] p-8 relative overflow-hidden flex flex-col justify-between hover:bg-surface-container/60 transition-colors"
              >
                <div className="bg-primary-container text-white w-12 h-12 rounded-full flex items-center justify-center">
                  <Truck size={24} />
                </div>
                <div>
                  <h5 className="text-2xl font-display font-bold mb-2 text-left">Free Delivery</h5>
                  <p className="text-sm text-on-surface-variant text-left">On all orders over $25. Ends this Sunday.</p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex-1 bg-tertiary-container rounded-[2.5rem] p-8 text-white relative overflow-hidden group text-left"
              >
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-110 transition-transform" />
                <h5 className="text-2xl font-display font-bold mb-2">Lunch Special</h5>
                <p className="text-sm opacity-80 mb-6">Daily deals from 11AM to 2PM.</p>
                <button className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-6 py-2 rounded-full font-bold text-sm">View Menu</button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* App Download Banner */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="bg-secondary-container/90 rounded-[3rem] p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 z-10 text-white text-left">
              <h2 className="text-5xl font-display font-bold mb-6">Get the App.<br />Get it Rápido.</h2>
              <p className="text-lg opacity-90 mb-10 max-w-sm">Track your order in real-time, unlock exclusive rewards, and reorder your favorites with a single tap.</p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-black px-6 py-3 rounded-xl flex items-center gap-3">
                  <span className="scale-125"><Smartphone /></span>
                  <div className="text-left">
                    <p className="text-[10px] uppercase font-bold leading-none mb-1 opacity-60">Download on the</p>
                    <p className="text-lg font-bold leading-none">App Store</p>
                  </div>
                </button>
                <button className="bg-white text-black px-6 py-3 rounded-xl flex items-center gap-3">
                  <Play />
                  <div className="text-left">
                    <p className="text-[10px] uppercase font-bold leading-none mb-1 opacity-60">Get it on</p>
                    <p className="text-lg font-bold leading-none">Google Play</p>
                  </div>
                </button>
              </div>
            </div>

            <div className="md:w-1/2 relative flex justify-center mt-12 md:mt-0">
               <motion.div 
                initial={{ rotate: -15, y: 100 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-64 h-[500px] bg-white rounded-[2.5rem] border-8 border-surface-container shadow-2xl flex flex-col overflow-hidden text-left"
               >
                <div className="p-4 bg-primary-container text-white pb-10">
                  <p className="text-sm opacity-80">Arriving in</p>
                  <p className="text-2xl font-display font-bold">12 mins</p>
                </div>
                <div className="flex-grow bg-white -mt-6 rounded-t-3xl p-4 flex flex-col gap-4">
                  <div className="h-40 bg-surface-container rounded-2xl flex items-center justify-center text-primary-container/30">
                    <MapPin size={48} />
                  </div>
                  <div className="h-16 bg-surface-container rounded-2xl p-3 flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <ChevronRight size={20} className="text-primary" />
                    </div>
                    <div className="flex-grow">
                      <div className="h-2 w-20 bg-primary/20 rounded mb-2"></div>
                      <div className="h-2 w-12 bg-primary/10 rounded"></div>
                    </div>
                  </div>
                </div>
               </motion.div>
            </div>
          </div>
        </section>

        {/* Future Section (Dark) */}
        <div className="ripped-paper-top h-10 bg-background" />
        <section className="bg-inverse-surface py-32 text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-display font-bold text-primary-container mb-6">The Future of Delivery</h2>
              <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">We are pioneering new ways to get your food to you faster, hotter, and safer than ever before.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {[
                { title: "Air Delivery", icon: <Navigation2 className="w-10 h-10" />, desc: "Pilot programs launching soon. Your meal drops from the sky to your designated safe zone in under 10 minutes." },
                { title: "Automated Kitchens", icon: <Bot className="w-10 h-10" />, desc: "AI-driven prep processes ensure perfect consistency and drastically reduced wait times for high-volume items." }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  whileHover={{ y: -5 }}
                  className="bg-white/5 border border-white/10 p-10 rounded-[3rem] text-center flex flex-col items-center backdrop-blur-sm"
                >
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-8 text-primary-container">
                    {feature.icon}
                  </div>
                  <h4 className="text-2xl font-display font-bold mb-4">{feature.title}</h4>
                  <p className="opacity-70 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
    </div>
  );
}
