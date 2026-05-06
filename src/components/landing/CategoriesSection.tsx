'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    name: 'Hamburguesas',
    description: 'Las más jugosas y deliciosas',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=400&fit=crop&crop=center',
    color: 'from-yellow-400/20 to-orange-400/20',
  },
  {
    name: 'Pizzas',
    description: 'Auténtico sabor italiano',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=400&fit=crop&crop=center',
    color: 'from-red-400/20 to-rose-400/20',
  },
  {
    name: 'Cervezas',
    description: 'Las más frías para acompañar',
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=400&h=400&fit=crop&crop=center',
    color: 'from-amber-400/20 to-yellow-500/20',
  },
];

export function CategoriesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-extrabold text-lora-primary uppercase tracking-widest mb-2">
            Categorías
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-lora-text">
            Nuestras Mejores Categorías
          </h2>
          <p className="mt-3 text-lg text-lora-text-muted max-w-xl mx-auto">
            Lo más pedido por nuestros usuarios en toda la plataforma
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative bg-white rounded-3xl border border-lora-border/30 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* Gradient bg */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="relative z-10 p-6">
                {/* Circular Image Container */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 bg-lora-bg">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-lora-text">
                    {category.name}
                  </h3>
                  <p className="text-sm text-lora-text-muted mt-1">
                    {category.description}
                  </p>
                </div>

                {/* Order Link */}
                <Link
                  href="/"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-lora-primary hover:text-lora-primary-dark transition-colors"
                >
                  Ordenar ahora
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
