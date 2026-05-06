'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { Search, Star, Clock, ShoppingBag, UtensilsCrossed } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="relative pt-8 pb-20 md:pt-16 md:pb-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left Column: Slogan + Testimonial + Search */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-8"
          >
            <div>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-lora-text leading-tight">
                Fastest{' '}
                <span className="text-lora-primary">Delivery</span>
                {' '}& Easy Pickup
              </h1>
            </div>

            {/* Testimonial */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-white font-bold text-sm">
                MC
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-lora-text-muted mt-1">
                  &ldquo;La mejor app para pedir comida a domicilio en Anserma&rdquo;
                </p>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-lora-text-muted" />
                <Input
                  type="text"
                  placeholder="Buscar restaurantes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 py-6 rounded-xl border-lora-border focus:border-lora-primary text-base"
                />
              </div>
              <Button className="bg-lora-primary hover:bg-lora-primary-dark text-white py-6 px-6 rounded-xl shadow-lg shadow-lora-primary/20">
                Buscar
              </Button>
            </div>
          </motion.div>

          {/* Center Column: Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 flex justify-center relative"
          >
            {/* Decorative circular background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-yellow-300/40 blur-xl" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 md:w-60 md:h-60 rounded-full bg-lora-primary/10" />
            </div>
            <div className="relative z-10">
              <Image
                src="/images/hero-woman.png"
                alt="Mujer disfrutando de una hamburguesa"
                width={400}
                height={500}
                className="object-contain max-h-[400px] md:max-h-[480px] w-auto"
                priority
              />
            </div>
          </motion.div>

          {/* Right Column: Services */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-4 space-y-4"
          >
            <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-lora-bg/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-lora-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-lora-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lora-text">Fast Delivery</h3>
                <p className="text-sm text-lora-text-muted mt-1">
                  Entregamos tu comida en tiempo récord, caliente y fresca.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-lora-bg/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-lora-primary/10 flex items-center justify-center flex-shrink-0">
                <ShoppingBag className="w-6 h-6 text-lora-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lora-text">Pick Up</h3>
                <p className="text-sm text-lora-text-muted mt-1">
                  Ordena desde la app y recoge en el restaurante sin filas.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-lora-bg/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-lora-primary/10 flex items-center justify-center flex-shrink-0">
                <UtensilsCrossed className="w-6 h-6 text-lora-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lora-text">Dine In</h3>
                <p className="text-sm text-lora-text-muted mt-1">
                  Disfruta en nuestros restaurantes aliados con la mejor experiencia.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
