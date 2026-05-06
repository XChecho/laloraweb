'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const promotions = [
  {
    title: 'Buy 2 Get 1 Free',
    subtitle: 'En hamburguesas seleccionadas',
    tag: '2x1',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&h=400&fit=crop&crop=center',
    size: 'large',
  },
  {
    title: 'Save 20%',
    subtitle: 'En tu primera orden',
    tag: '-20%',
    image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=300&h=300&fit=crop&crop=center',
    size: 'small',
  },
  {
    title: '$12 Off',
    subtitle: 'En pedidos +$30',
    tag: '-$12',
    image: 'https://images.unsplash.com/photo-1603073163308-9654c3fb70b5?w=300&h=300&fit=crop&crop=center',
    size: 'small',
  },
];

export function PromotionsSection() {
  return (
    <section className="py-20 bg-lora-bg">
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
            Promociones
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-lora-text">
            Ofertas Especiales para Ti
          </h2>
          <p className="mt-3 text-lg text-lora-text-muted max-w-xl mx-auto">
            Aprovecha descuentos increíbles en tus restaurantes favoritos
          </p>
        </motion.div>

        {/* Promotions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative bg-white rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden md:row-span-2"
          >
            <div className="relative h-60 md:h-72 overflow-hidden">
              <Image
                src={promotions[0].image}
                alt={promotions[0].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              {/* Badge */}
              <div className="absolute top-4 left-4 bg-lora-primary text-white px-4 py-2 rounded-2xl font-bold text-sm shadow-lg">
                {promotions[0].tag}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-lora-text">{promotions[0].title}</h3>
              <p className="text-sm text-lora-text-muted mt-1">{promotions[0].subtitle}</p>
              <Button className="mt-4 bg-lora-primary hover:bg-lora-primary-dark text-white rounded-xl">
                Ordenar Ahora
              </Button>
            </div>
          </motion.div>

          {/* Small Cards */}
          {promotions.slice(1).map((promo, index) => (
            <motion.div
              key={promo.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
              className="group relative bg-white rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex"
            >
              {/* Badge */}
              <div className="absolute top-4 left-4 z-10 bg-lora-primary text-white px-3 py-1.5 rounded-2xl font-bold text-xs shadow-lg">
                {promo.tag}
              </div>
              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-center">
                <h3 className="text-lg font-bold text-lora-text">{promo.title}</h3>
                <p className="text-sm text-lora-text-muted mt-1">{promo.subtitle}</p>
                <Button variant="outline" className="mt-4 border-lora-primary text-lora-primary hover:bg-lora-primary/5 rounded-xl w-fit">
                  Obtener
                </Button>
              </div>
              {/* Image */}
              <div className="relative w-40 overflow-hidden">
                <Image
                  src={promo.image}
                  alt={promo.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="160px"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
