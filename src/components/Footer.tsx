
import { Share2, Mail, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-inverse-surface border-t border-white/5 pt-20 pb-10 text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-3xl font-display font-extrabold text-primary mb-6">La Lora</h2>
          <p className="text-sm opacity-60">© 2024 La Lora. Freshly delivered to your doorstep.</p>
        </div>
        
        <div>
          <div className="flex flex-col gap-4 text-sm opacity-80">
            <Link to="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="/about" className="hover:text-primary transition-colors">Our Story</Link>
          </div>
        </div>
        
        <div>
          <div className="flex flex-col gap-4 text-sm opacity-80">
            <Link to="/partners" className="hover:text-primary transition-colors">Partner with Us</Link>
            <Link to="#" className="hover:text-primary transition-colors">Restaurant Login</Link>
            <Link to="#" className="hover:text-primary transition-colors">Delivery Perks</Link>
          </div>
        </div>

        <div className="flex md:justify-end gap-4 h-fit">
          <button className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
            <Share2 size={20} />
          </button>
          <button className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
            <Mail size={20} />
          </button>
          <button className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
            <ShoppingBag size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
