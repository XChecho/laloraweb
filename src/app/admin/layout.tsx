'use client';

import { useSession } from "next-auth/react";
import AdminSidebar from "@/components/layout/AdminSidebar";
import { Search, Bell } from 'lucide-react';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { status } = useSession();

  if (status === 'loading') {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-on-surface-variant">Cargando...</p>
      </div>
    );
  }

  if (status === 'unauthenticated') {
    return null; // middleware will redirect
  }

  return (
    <div className="flex h-screen bg-surface">
      <AdminSidebar />
      <main className="flex-1 overflow-y-auto p-4 lg:p-8">{children}</main>
    </div>
  );
}
