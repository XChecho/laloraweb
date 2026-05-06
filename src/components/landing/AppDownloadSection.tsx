'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { QRCodeSVG } from 'qrcode.react';
import { Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function AppDownloadSection() {
  return (
    <section className="py-20 bg-lora-primary relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Phone frame */}
              <div className="w-[260px] h-[520px] bg-white rounded-[3rem] border-4 border-white shadow-2xl shadow-black/20 overflow-hidden">
                <div className="bg-white h-full w-full flex flex-col items-center justify-center p-4">
                  {/* Notification bar mock */}
                  <div className="w-full h-8 bg-gray-100 rounded-full mb-4" />
                  {/* App screen mock */}
                  <div className="w-16 h-16 rounded-2xl bg-lora-primary/20 flex items-center justify-center mb-4">
                    <Image
                      src="/images/logo.png"
                      alt="La Lora App"
                      width={40}
                      height={40}
                      className="rounded-xl"
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-bold text-lora-text">La Lora</p>
                    <p className="text-xs text-lora-text-muted mt-1">Food Delivery App</p>
                  </div>
                  {/* Screen content mock */}
                  <div className="mt-6 w-full space-y-3">
                    <div className="h-32 bg-lora-bg rounded-2xl" />
                    <div className="h-32 bg-lora-bg rounded-2xl" />
                    <div className="h-32 bg-lora-bg rounded-2xl" />
                  </div>
                </div>
              </div>
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20" />
            </div>
          </motion.div>

          {/* Right: Content + QR */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Descarga nuestra App
            </h2>
            <p className="text-lg text-white/90">
              Ordena tu comida favorita desde cualquier lugar. Disponible en iOS y Android.
            </p>

            {/* Happy users avatars */}
            <div className="flex items-center gap-2">
              <div className="flex -space-x-3">
                {['bg-yellow-400', 'bg-pink-400', 'bg-blue-400', 'bg-green-400'].map((bg, i) => (
                  <div
                    key={i}
                    className={`w-10 h-10 rounded-full ${bg} border-2 border-white flex items-center justify-center text-xs font-bold text-white`}
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <span className="text-sm text-white/80">+1,200 descargas</span>
            </div>

            {/* QR Code + App Store Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-6">
              {/* QR Code */}
              <div className="bg-white p-3 rounded-2xl">
                <QRCodeSVG
                  value={`${process.env.NEXT_PUBLIC_APP_URL || 'https://lalora.com'}/download`}
                  size={110}
                  level="M"
                  fgColor="#0A873A"
                />
              </div>

              {/* Store Buttons */}
              <div className="space-y-3">
                {/* App Store */}
                <Button className="bg-black hover:bg-gray-800 text-white px-6 py-6 rounded-xl flex items-center gap-3 w-full sm:w-auto">
                  <Smartphone className="w-6 h-6" />
                  <div className="text-left">
                    <p className="text-xs opacity-70">Descargar en</p>
                    <p className="text-sm font-semibold">App Store</p>
                  </div>
                </Button>
                {/* Google Play */}
                <Button className="bg-black hover:bg-gray-800 text-white px-6 py-6 rounded-xl flex items-center gap-3 w-full sm:w-auto">
                  <Smartphone className="w-6 h-6" />
                  <div className="text-left">
                    <p className="text-xs opacity-70">Disponible en</p>
                    <p className="text-sm font-semibold">Google Play</p>
                  </div>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
