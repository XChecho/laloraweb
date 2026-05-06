'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Rocket, Eye, Handshake, Lightbulb, Users, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const values = [
  { icon: Handshake, title: 'Confianza' },
  { icon: Lightbulb, title: 'Innovación' },
  { icon: Users, title: 'Comunidad' },
  { icon: Star, title: 'Excelencia' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1920&h=800&fit=crop&crop=center"
            alt="Nuestra Historia"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-md">
            Nuestra Historia
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Transformando la gastronomía local desde el corazón de Caldas.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-lora-border/30 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-lora-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-6 h-6 text-lora-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-lora-text mb-4">Misión</h2>
              <p className="text-base text-lora-text-muted">
                Digitalizar y potenciar los restaurantes locales con tecnología de clase mundial.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-lora-border/30 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-lora-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Eye className="w-6 h-6 text-lora-primary" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-lora-text mb-4">Visión</h2>
              <p className="text-base text-lora-text-muted">
                Ser la plataforma líder de gestión gastronómica en Colombia.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 bg-lora-bg">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-lora-text mb-4">
              Nuestros Valores
            </h2>
            <p className="text-lg text-lora-text-muted max-w-2xl mx-auto">
              Los principios que guían cada línea de código y cada interacción con nuestros aliados.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm text-center hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="mx-auto w-16 h-16 rounded-full bg-lora-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-lora-primary" />
                </div>
                <h3 className="text-xl font-bold text-lora-text">{value.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact / Stats */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden shadow-lg h-[350px] relative">
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop&crop=center"
                alt="Impacto en Colombia"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-lora-text mb-4">
                  Nuestro Impacto
                </h2>
                <p className="text-base text-lora-text-muted">
                  Construimos la red más fuerte de restaurantes impulsados por tecnología, creciendo día a día junto a nuestros aliados locales.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { value: '50+', label: 'Aliados' },
                  { value: '10k+', label: 'Órdenes' },
                  { value: '100%', label: 'Compromiso' },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="border-l-4 border-lora-primary pl-4"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-lora-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs font-extrabold uppercase tracking-widest text-lora-text-muted">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 md:py-20 pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="bg-lora-dark text-white rounded-3xl p-10 md:p-16 text-center shadow-lg relative overflow-hidden">
            {/* Decorative blurs */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-lora-primary opacity-50 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-lora-primary/30 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Únete a la revolución gastronómica
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Sé parte del ecosistema que está transformando la manera en que los restaurantes locales operan y crecen.
              </p>
              <Link href="/contact">
                <Button className="bg-lora-primary hover:bg-lora-primary-dark text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-lora-primary/30">
                  Regístrate Ahora
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
