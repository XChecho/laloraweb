'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const partnerLogos = [
  { letter: 'R', color: 'bg-red-400' },
  { letter: 'P', color: 'bg-yellow-400' },
  { letter: 'B', color: 'bg-blue-400' },
  { letter: 'G', color: 'bg-green-400' },
  { letter: 'C', color: 'bg-purple-400' },
  { letter: 'M', color: 'bg-pink-400' },
];

export function RestaurantsCounter() {
  return (
    <section className="py-20 bg-lora-primary relative overflow-hidden">
      {/* Decorative floating elements */}
      <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-white/10" />
      <div className="absolute bottom-10 right-20 w-16 h-16 rounded-full bg-white/10" />
      <div className="absolute top-1/2 left-1/4 w-12 h-12 rounded-full bg-white/5" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Counter + CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white space-y-6"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Disfruta de{' '}
              <span className="text-yellow-300">3000+</span> comidas<br />
              de{' '}
              <span className="text-yellow-300">400+</span> Restaurantes
            </h2>
            <p className="text-lg text-white/80">
              La red de restaurantes más grande de la región, todo en un solo lugar.
            </p>
            <Button className="bg-white text-lora-primary hover:bg-lora-bg px-8 py-6 text-lg rounded-2xl shadow-lg">
              Ordenar Ahora
            </Button>
          </motion.div>

          {/* Right: Floating Partner Logos */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[350px]"
          >
            {/* Center character/chef */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-28 h-28 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <span className="text-5xl">👨‍🍳</span>
              </div>
            </div>

            {/* Orbiting partner logos */}
            {partnerLogos.map((partner, index) => {
              const total = partnerLogos.length;
              const angle = (index * 360) / total - 30;
              const radius = 120;

              return (
                <motion.div
                  key={partner.letter}
                  className={`absolute w-14 h-14 rounded-full ${partner.color} shadow-lg flex items-center justify-center text-white font-bold text-lg border-2 border-white`}
                  style={{
                    left: `calc(50% + ${Math.cos((angle * Math.PI) / 180) * radius}px - 28px)`,
                    top: `calc(50% + ${Math.sin((angle * Math.PI) / 180) * radius}px - 28px)`,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.15 }}
                >
                  {partner.letter}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
