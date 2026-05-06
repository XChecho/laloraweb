'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Smartphone, Search, ShoppingCart, Truck, Star } from 'lucide-react';

const steps = [
  {
    icon: Smartphone,
    title: 'Descarga la App',
    description: 'Disponible en App Store y Google Play. Crea tu cuenta en segundos.',
  },
  {
    icon: Search,
    title: 'Explora Restaurantes',
    description: 'Descubre los mejores restaurantes y negocios en Anserma, Caldas.',
  },
  {
    icon: ShoppingCart,
    title: 'Elige tu Pedido',
    description: 'Navega por menús, personaliza tus platos y agrega al carrito.',
  },
  {
    icon: Truck,
    title: 'Recibe en Casa',
    description: 'Un domiciliario llevará tu pedido directamente a tu puerta.',
  },
  {
    icon: Star,
    title: 'Califica y Comenta',
    description: 'Ayuda a otros usuarios compartiendo tu experiencia.',
  },
];

export default function HowItWorksPage() {
  return (
    <div className="py-20 bg-lora-bg">
      <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-lora-text mb-4">
            Cómo Funciona
          </h1>
          <p className="text-lg text-lora-text-muted max-w-2xl mx-auto">
            Ordenar comida a domicilio nunca fue tan fácil. Sigue estos simples pasos y disfruta de lo mejor de Anserma.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-white rounded-2xl shadow-sm border-lora-border/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-6">
                    {/* Step Number + Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-lora-primary text-white flex items-center justify-center text-2xl font-bold shadow-lg shadow-lora-primary/20">
                        {index + 1}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <step.icon className="w-6 h-6 text-lora-primary" />
                        <h3 className="text-xl font-bold text-lora-text">{step.title}</h3>
                      </div>
                      <p className="text-lora-text-muted">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center bg-lora-primary rounded-3xl p-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            ¡Descarga la App Ahora!
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Pronto disponible en App Store y Google Play para Anserma, Caldas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-lora-primary px-8 py-4 rounded-xl font-semibold hover:bg-lora-bg transition-colors" disabled>
              App Store (Próximamente)
            </button>
            <button className="bg-white text-lora-primary px-8 py-4 rounded-xl font-semibold hover:bg-lora-bg transition-colors" disabled>
              Google Play (Próximamente)
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
