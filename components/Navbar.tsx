import { Search, Heart, ShoppingBag, Menu } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-white/5">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-5 max-w-container-max mx-auto">
        <Link href="/" className="font-display-lg text-primary tracking-tighter italic text-[22px] md:text-[28px] hover:opacity-80 transition-opacity">
          Infinity Silver
        </Link>
        
        <div className="hidden md:flex space-x-10 items-center">
          <Link href="#" className="nav-link-refined font-button text-[11px] uppercase tracking-[0.2em] text-primary">
            Collections
          </Link>
          <Link href="#" className="nav-link-refined font-button text-[11px] uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors">
            Bespoke Studio
          </Link>
          <Link href="#" className="nav-link-refined font-button text-[11px] uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors">
            Best Sellers
          </Link>
          <Link href="#" className="nav-link-refined font-button text-[11px] uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors">
            92.5 Hallmark
          </Link>
          <Link href="#" className="nav-link-refined font-button text-[11px] uppercase tracking-[0.2em] text-on-surface-variant hover:text-primary transition-colors">
            About
          </Link>
        </div>

        <div className="flex items-center space-x-6">
          <button className="text-[20px] text-primary hover:opacity-70 transition-opacity">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button className="text-[20px] text-primary hover:opacity-70 transition-opacity hidden md:block">
            <Heart size={20} strokeWidth={1.5} />
          </button>
          <div className="relative">
            <button className="text-[20px] text-primary hover:opacity-70 transition-opacity">
              <ShoppingBag size={20} strokeWidth={1.5} />
            </button>
            <span className="absolute -top-1 -right-1 bg-primary text-background text-[8px] font-bold w-3 h-3 rounded-full flex items-center justify-center">
              0
            </span>
          </div>
          <button className="md:hidden text-primary">
            <Menu size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </nav>
  );
}
