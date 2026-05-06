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
import {
  ShoppingCart,
  DollarSign,
  Armchair,
  Package,
  TrendingUp,
  TrendingDown,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const stats = [
  {
    title: 'Ventas Hoy',
    value: '$1,234,567',
    trend: '+12%',
    isPositive: true,
    icon: DollarSign,
  },
  {
    title: 'Órdenes Activas',
    value: '45',
    trend: '+8%',
    isPositive: true,
    icon: ShoppingCart,
  },
  {
    title: 'Mesas Ocupadas',
    value: '8/12',
    trend: '67%',
    isPositive: true,
    icon: Armchair,
  },
  {
    title: 'Productos',
    value: '156',
    trend: '+3',
    isPositive: true,
    icon: Package,
  },
];

const recentOrders = [
  { id: '#1234', customer: 'Juan Pérez', status: 'EN_CURSO', total: '$45,000', date: 'Hace 2 min' },
  { id: '#1233', customer: 'María García', status: 'PENDIENTE', total: '$32,500', date: 'Hace 5 min' },
  { id: '#1232', customer: 'Carlos López', status: 'FINALIZADA', total: '$67,800', date: 'Hace 15 min' },
  { id: '#1231', customer: 'Ana Martínez', status: 'EN_CURSO', total: '$28,900', date: 'Hace 20 min' },
  { id: '#1230', customer: 'Pedro Sánchez', status: 'CANCELADA', total: '$15,600', date: 'Hace 30 min' },
];

const statusColors: Record<string, string> = {
  EN_CURSO: 'bg-lora-primary/10 text-lora-primary',
  PENDIENTE: 'bg-amber-100 text-amber-600',
  FINALIZADA: 'bg-slate-100 text-slate-500',
  CANCELADA: 'bg-red-50 text-red-500',
};

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="bg-white rounded-2xl p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-lora-text-muted">{stat.title}</p>
                <p className="text-2xl font-bold text-lora-text mt-1">{stat.value}</p>
                <div className="flex items-center gap-1 mt-2">
                  {stat.isPositive ? (
                    <TrendingUp className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-red-500" />
                  )}
                  <span
                    className={cn(
                      'text-sm font-medium',
                      stat.isPositive ? 'text-emerald-600' : 'text-red-500'
                    )}
                  >
                    {stat.trend}
                  </span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-lora-primary/10 flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-lora-primary" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Recent Orders */}
      <Card className="bg-white rounded-2xl shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-lora-text">Órdenes Recientes</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Orden</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Fecha</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>
                    <Badge className={cn('px-3 py-1 rounded-full', statusColors[order.status])}>
                      {order.status.replace('_', ' ')}
                    </Badge>
                  </TableCell>
                  <TableCell>{order.total}</TableCell>
                  <TableCell className="text-lora-text-muted">{order.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
