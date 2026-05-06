'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const partners = [
  { name: 'Restaurante El Sabor', category: 'Comida Típica', logo: '🍽️', description: 'Lo mejor de la cocina colombiana en el corazón de Anserma.' },
  { name: 'Café de Montaña', category: 'Cafetería', logo: '☕', description: 'Café de origen con las mejores vistas del Eje Cafetero.' },
  { name: 'Pizzería Don Pepe', category: 'Pizzería', logo: '🍕', description: 'Pizzas artesanales con ingredientes frescos y locales.' },
  { name: 'Bar La Esquina', category: 'Bar', logo: '🍺', description: 'El punto de encuentro para disfrutar buenas bebidas y música.' },
  { name: 'Heladería Dulce Frío', category: 'Heladería', logo: '🍦', description: 'Helados artesanales con frutas frescas de la región.' },
  { name: 'Asados El Rancherito', category: 'Parrilla', logo: '🥩', description: 'Los mejores cortes de carne a la parrilla de la región.' },
];

const categories = ['Todos', 'Comida Típica', 'Cafetería', 'Pizzería', 'Bar', 'Heladería', 'Parrilla'];

export default function PartnersPage() {
  return (
    <div className="py-20 bg-lora-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-lora-text mb-4">
            Nuestros Aliados
          </h1>
          <p className="text-lg text-lora-text-muted max-w-2xl mx-auto">
            Descubre los restaurantes y negocios que ya confían en La Lora para gestionar su operación.
          </p>
        </motion.div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              variant="outline"
              className="px-4 py-2 cursor-pointer hover:bg-lora-primary hover:text-white transition-colors"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border-lora-border/20 h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{partner.logo}</span>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-lora-text">{partner.name}</h3>
                      <Badge className="mt-1 bg-lora-primary/10 text-lora-primary border-0">
                        {partner.category}
                      </Badge>
                    </div>
                  </div>
                  <p className="mt-4 text-lora-text-muted text-sm">{partner.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
