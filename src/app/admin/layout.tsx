import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { AdminHeader } from '@/components/admin/AdminHeader';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-lora-bg">
      <AdminSidebar />
      <AdminHeader />
      <main className="ml-[240px] mt-16 p-6">
        {children}
      </main>
    </div>
  );
}
