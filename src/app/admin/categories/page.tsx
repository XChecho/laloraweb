'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export default function CategoriesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-lora-text">Categorías</h2>
        <Button className="bg-lora-primary hover:bg-lora-primary-dark">
          <Plus className="w-4 h-4 mr-2" />
          Agregar Categoría
        </Button>
      </div>
      <Card className="bg-white rounded-2xl shadow-sm">
        <CardContent className="py-20">
          <div className="flex flex-col items-center justify-center">
            <p className="text-lg font-semibold text-slate-400">Próximamente</p>
            <p className="text-sm text-slate-300 mt-1">Gestión de categorías en desarrollo</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
