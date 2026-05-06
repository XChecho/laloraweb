'use client';

import { getUserFromToken } from '@/lib/auth';
import { User } from 'lucide-react';

export function AdminHeader() {
  const user = getUserFromToken();

  return (
    <header className="fixed top-0 left-[240px] right-0 h-16 bg-white border-b border-lora-border/20 flex items-center justify-between px-6 z-10">
      <h1 className="text-lg font-semibold text-lora-text">Panel de Administración</h1>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-lora-primary/10 flex items-center justify-center">
            <User className="w-4 h-4 text-lora-primary" />
          </div>
          <div>
            <p className="text-sm font-medium text-lora-text">{user?.name || 'Usuario'}</p>
            <p className="text-xs text-lora-text-muted">{user?.role || 'ADMIN'}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
