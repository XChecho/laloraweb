'use client';

import { Card, CardContent } from '@/components/ui/card';

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-lora-text">Configuración</h2>
      <Card className="bg-white rounded-2xl shadow-sm">
        <CardContent className="py-20">
          <div className="flex flex-col items-center justify-center">
            <p className="text-lg font-semibold text-slate-400">Próximamente</p>
            <p className="text-sm text-slate-300 mt-1">Configuración del sistema en desarrollo</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
