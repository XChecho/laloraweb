
import { ReactNode } from "react";
import AdminSidebar from "../components/AdminSidebar";
import { Search, Bell } from "lucide-react";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="min-h-screen bg-background flex">
      <AdminSidebar />
      <div className="flex-grow ml-64 flex flex-col">
        {/* Header */}
        <header className="h-20 bg-background/80 backdrop-blur-md flex items-center justify-between px-8 sticky top-0 z-40 border-b border-surface-container/50">
          <div className="w-96 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" size={20} />
            <input 
              type="text" 
              className="w-full bg-surface-container/50 border-none rounded-full py-2.5 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 outline-none"
              placeholder="Buscar órdenes, platos, mesas..."
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center relative hover:bg-surface-container-high transition-colors">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-error rounded-full border-2 border-background" />
            </button>
            <div className="h-10 w-px bg-surface-container mx-2" />
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold">Admin User</p>
                <p className="text-xs text-on-surface-variant">Manager</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-primary-container text-white flex items-center justify-center font-bold shadow-sm">
                AD
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
