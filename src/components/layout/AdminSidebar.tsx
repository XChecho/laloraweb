'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { 
  LayoutDashboard, 
  Table2, 
  Banknote, 
  UtensilsCrossed, 
  Menu as MenuIcon, 
  Users, 
  Settings,
  LogOut,
  Plus
} from "lucide-react";

export default function AdminSidebar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Dashboard", path: "/admin", icon: LayoutDashboard },
    { name: "Mesas", path: "/admin/tables", icon: Table2 },
    { name: "Caja", path: "/admin/cashier", icon: Banknote },
    { name: "Cocina", path: "/admin/kitchen", icon: UtensilsCrossed },
    { name: "Menús", path: "/admin/menu", icon: MenuIcon },
    { name: "Usuarios", path: "/admin/users", icon: Users },
  ];

  return (
    <aside className="w-64 bg-surface h-screen fixed left-0 top-0 border-r border-surface-container flex flex-col z-50">
      <div className="p-6 border-b border-surface-container">
        <Link href="/" className="text-2xl font-display font-extrabold text-primary tracking-tighter">
          La Lora <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold block -mt-1">Admin</span>
        </Link>
      </div>

      <nav className="flex-grow p-4 flex flex-col gap-2 overflow-y-auto">
        {navLinks.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.path;
          return (
            <Link
              key={link.name}
              href={link.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all ${
                isActive 
                  ? "bg-primary text-white shadow-emerald-ambient" 
                  : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
              }`}
            >
              <Icon size={20} />
              {link.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-surface-container flex flex-col gap-2">
        <button className="flex items-center justify-center gap-2 w-full bg-secondary-container text-white py-3 rounded-xl font-bold text-sm shadow-md hover:scale-[1.02] active:scale-95 transition-all">
          <Plus size={18} /> Nueva Orden
        </button>
        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm text-error hover:bg-error/10 transition-all"
        >
          <LogOut size={20} /> Salir
        </button>
      </div>
    </aside>
  );
}
