import { Gem, Palette, ShoppingBag, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function MobileBottomNav() {
  return (
    <nav className="fixed bottom-0 w-full z-50 md:hidden bg-background/95 backdrop-blur-xl border-t border-white/5 h-16 px-4 pb-safe flex justify-around items-center">
      <Link href="#" className="flex flex-col items-center justify-center text-primary">
        <Gem className="w-5 h-5" strokeWidth={1.5} />
        <span className="font-label-caps text-[9px] uppercase tracking-wider mt-1">Shop</span>
      </Link>
      <Link href="#" className="flex flex-col items-center justify-center text-on-surface-variant">
        <Palette className="w-5 h-5" strokeWidth={1.5} />
        <span className="font-label-caps text-[9px] uppercase tracking-wider mt-1">Bespoke</span>
      </Link>
      <Link href="#" className="flex flex-col items-center justify-center text-on-surface-variant">
        <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
        <span className="font-label-caps text-[9px] uppercase tracking-wider mt-1">Cart</span>
      </Link>
      <Link href="https://wa.me/918608730000" className="flex flex-col items-center justify-center text-on-surface-variant">
        <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
        <span className="font-label-caps text-[9px] uppercase tracking-wider mt-1">Connect</span>
      </Link>
    </nav>
  );
}
