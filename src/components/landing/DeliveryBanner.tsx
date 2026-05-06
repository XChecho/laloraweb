'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Wind, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function DeliveryBanner() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Irregular/brush-stroke bordered container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-[#1B2332] rounded-[4rem_2rem_4rem_2rem] md:rounded-[6rem_3rem_6rem_3rem] overflow-hidden"
        >
          {/* Brush stroke texture overlay */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.1)_0%,transparent_60%)]" />

          {/* Decorative elements */}
          <div className="absolute top-10 left-10 text-white/10">
            {/* Decorative chips */}
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <circle cx="30" cy="30" r="28" stroke="currentColor" strokeWidth="2" strokeDasharray="8 4" />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: Text Content */}
            <div className="p-8 md:p-12 lg:p-16 text-white space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Fastest food<br />
                <span className="text-lora-primary">Delivery</span> in town
              </h2>
              <p className="text-white/70 text-lg max-w-md">
                Recibe tus pedidos en tiempo récord con nuestro servicio de entrega optimizado.
              </p>

              {/* Service badges */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <div className="flex items-center gap-3 bg-white/10 rounded-2xl px-5 py-3 backdrop-blur-sm">
                  <div className="w-10 h-10 rounded-full bg-lora-primary/20 flex items-center justify-center">
                    <Wind className="w-5 h-5 text-lora-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Air Delivery</p>
                    <p className="text-xs text-white/50">Vía drones</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/10 rounded-2xl px-5 py-3 backdrop-blur-sm">
                  <div className="w-10 h-10 rounded-full bg-lora-primary/20 flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-lora-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Automated</p>
                    <p className="text-xs text-white/50">Sistema smart</p>
                  </div>
                </div>
              </div>

              <Button className="bg-lora-primary hover:bg-lora-primary-dark text-white px-8 py-6 text-base rounded-2xl shadow-lg shadow-lora-primary/20 mt-2">
                Ordenar Ahora
              </Button>
            </div>

            {/* Right: Pizza Image */}
            <div className="relative h-full min-h-[320px] flex items-center justify-center p-8">
              {/* Glow effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-lora-primary/20 blur-3xl" />
              </div>
              {/* Decorative pizza slice */}
              <div className="absolute top-8 right-8 text-white/10">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M20 4L36 32H4L20 4Z" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <div className="relative z-10">
                <Image
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=600&fit=crop&crop=center"
                  alt="Pizza delivery"
                  width={400}
                  height={400}
                  className="object-contain max-h-[350px] w-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
