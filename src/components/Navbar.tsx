
import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: "Sobre Nosotros", path: "/about" },
    { name: "Aliados", path: "/partners" },
    { name: "Unete", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-surface-container/50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link to="/" className="text-3xl font-display font-extrabold text-primary tracking-tighter">
            La Lora
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-semibold text-sm transition-colors relative transition-all ${
                  location.pathname === link.path ? "text-primary border-b-2 border-primary pb-1" : "hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/login" className="hidden sm:block font-semibold text-sm hover:text-primary transition-colors">Login</Link>
          <Link to="/restaurants" className="bg-primary text-white px-6 py-2.5 rounded-full font-bold text-sm ambient-shadow-primary hover:scale-105 active:scale-95 transition-all">
            Order Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
