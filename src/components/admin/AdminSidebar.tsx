'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Tags,
  MapPin,
  Armchair,
  Users,
  BarChart3,
  Settings,
  LogOut,
  Home,
} from 'lucide-react';
import { logout } from '@/lib/auth';
import { useRouter } from 'next/navigation';

const navItems = [
  { href: '/admin/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/admin/orders', icon: ShoppingCart, label: 'Órdenes' },
  { href: '/admin/products', icon: Package, label: 'Productos' },
  { href: '/admin/categories', icon: Tags, label: 'Categorías' },
  { href: '/admin/zones', icon: MapPin, label: 'Zonas' },
  { href: '/admin/tables', icon: Armchair, label: 'Mesas' },
  { href: '/admin/users', icon: Users, label: 'Usuarios' },
  { href: '/admin/reports', icon: BarChart3, label: 'Reportes' },
  { href: '/admin/settings', icon: Settings, label: 'Configuración' },
];

export function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push('/login');
    router.refresh();
  };

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-[240px] bg-lora-dark text-white flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-white/10">
        <Link href="/admin/dashboard" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-lora-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">LL</span>
          </div>
          <span className="text-xl font-bold">La Lora</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 overflow-y-auto">
        <ul className="space-y-1 px-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors',
                    isActive
                      ? 'bg-lora-primary/20 text-lora-primary'
                      : 'text-white/70 hover:bg-white/5 hover:text-white'
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium text-sm">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-white/10">
        <Link
          href="/"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/70 hover:bg-white/5 hover:text-white transition-colors mb-2"
        >
          <Home className="w-5 h-5" />
          <span className="font-medium text-sm">Volver al Sitio</span>
        </Link>
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/70 hover:bg-white/5 hover:text-white transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium text-sm">Cerrar Sesión</span>
        </button>
      </div>
    </aside>
  );
}
