'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { UtensilsCrossed, Bike, Users, Send, Loader2 } from 'lucide-react';

const tabs = [
  { id: 'restaurant', label: 'Soy Restaurante', icon: UtensilsCrossed },
  { id: 'driver', label: 'Soy Domiciliario', icon: Bike },
  { id: 'customer', label: 'Soy Usuario', icon: Users },
];

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState('restaurant');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    alert('¡Gracias por tu interés! Te contactaremos pronto.');
  };

  return (
    <div className="py-20 bg-lora-bg">
      <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-lora-text mb-4">
            Contáctanos
          </h1>
          <p className="text-lg text-lora-text-muted max-w-2xl mx-auto">
            ¿Eres restaurante, domiciliario o usuario? Cuéntanos sobre ti y te ayudaremos a comenzar.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-lora-primary text-white shadow-md shadow-lora-primary/20'
                  : 'bg-white text-lora-text hover:bg-lora-bg border border-lora-border/20'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Form */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="bg-white rounded-2xl shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-lora-text">
                {activeTab === 'restaurant' && 'Registra tu Restaurante'}
                {activeTab === 'driver' && 'Únete como Domiciliario'}
                {activeTab === 'customer' && '¿Cómo funciona para usuarios?'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {activeTab === 'customer' ? (
                <div className="space-y-6">
                  <div className="bg-lora-primary/5 rounded-xl p-6">
                    <h3 className="font-semibold text-lora-text mb-3">¿Cómo funciona La Lora para usuarios?</h3>
                    <ol className="space-y-3 text-lora-text-muted">
                      <li className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-lora-primary text-white flex items-center justify-center text-sm font-bold flex-shrink-0">1</span>
                        <span>Descarga la app La Lora desde App Store o Google Play.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-lora-primary text-white flex items-center justify-center text-sm font-bold flex-shrink-0">2</span>
                        <span>Explora los restaurantes disponibles en Anserma, Caldas.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-lora-primary text-white flex items-center justify-center text-sm font-bold flex-shrink-0">3</span>
                        <span>Elige tus platos favoritos y realiza tu pedido.</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-lora-primary text-white flex items-center justify-center text-sm font-bold flex-shrink-0">4</span>
                        <span>Recibe tu domicilio en la puerta de tu casa.</span>
                      </li>
                    </ol>
                  </div>
                  <div className="text-center">
                    <p className="text-lora-text-muted mb-4">¡Pronto disponible en tu tienda de apps!</p>
                    <Button className="bg-lora-primary hover:bg-lora-primary-dark" disabled>
                      Próximamente
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre Completo</Label>
                      <Input id="name" placeholder="Tu nombre" required className="border-lora-border" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input id="phone" type="tel" placeholder="+57 300 123 4567" required className="border-lora-border" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo Electrónico</Label>
                    <Input id="email" type="email" placeholder="tu@ejemplo.com" required className="border-lora-border" />
                  </div>
                  {activeTab === 'restaurant' && (
                    <div className="space-y-2">
                      <Label htmlFor="business">Nombre del Restaurante</Label>
                      <Input id="business" placeholder="El Sabor de Anserma" required className="border-lora-border" />
                    </div>
                  )}
                  {activeTab === 'driver' && (
                    <div className="space-y-2">
                      <Label htmlFor="vehicle">Tipo de Vehículo</Label>
                      <Input id="vehicle" placeholder="Motocicleta, Bicicleta, etc." required className="border-lora-border" />
                    </div>
                  )}
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje (Opcional)</Label>
                    <Input id="message" placeholder="Cuéntanos más sobre ti..." className="border-lora-border" />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-lora-primary hover:bg-lora-primary-dark"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Enviar Solicitud
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
