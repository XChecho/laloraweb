'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

const orders = [
  { id: '#1234', customer: 'Juan Pérez', items: 3, status: 'EN_CURSO', total: '$45,000', table: 'Mesa 5', date: 'Hace 2 min' },
  { id: '#1233', customer: 'María García', items: 2, status: 'PENDIENTE', total: '$32,500', table: 'Mesa 3', date: 'Hace 5 min' },
  { id: '#1232', customer: 'Carlos López', items: 5, status: 'FINALIZADA', total: '$67,800', table: 'Mesa 1', date: 'Hace 15 min' },
  { id: '#1231', customer: 'Ana Martínez', items: 1, status: 'EN_CURSO', total: '$28,900', table: 'Mesa 8', date: 'Hace 20 min' },
  { id: '#1230', customer: 'Pedro Sánchez', items: 4, status: 'CANCELADA', total: '$15,600', table: 'Mesa 2', date: 'Hace 30 min' },
  { id: '#1229', customer: 'Laura Díaz', items: 2, status: 'FINALIZADA', total: '$52,300', table: 'Mesa 6', date: 'Hace 45 min' },
];

const statusColors: Record<string, string> = {
  EN_CURSO: 'bg-lora-primary/10 text-lora-primary',
  PENDIENTE: 'bg-amber-100 text-amber-600',
  FINALIZADA: 'bg-slate-100 text-slate-500',
  CANCELADA: 'bg-red-50 text-red-500',
};

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-lora-text">Órdenes</h2>
        <Button className="bg-lora-primary hover:bg-lora-primary-dark">
          <Plus className="w-4 h-4 mr-2" />
          Nueva Orden
        </Button>
      </div>

      <Card className="bg-white rounded-2xl shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-lora-text">Todas las Órdenes</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Orden</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Mesa</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Fecha</TableHead>
                <TableHead>Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.items}</TableCell>
                  <TableCell>{order.table}</TableCell>
                  <TableCell>
                    <Badge className={cn('px-3 py-1 rounded-full', statusColors[order.status])}>
                      {order.status.replace('_', ' ')}
                    </Badge>
                  </TableCell>
                  <TableCell>{order.total}</TableCell>
                  <TableCell className="text-lora-text-muted">{order.date}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">Ver</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
