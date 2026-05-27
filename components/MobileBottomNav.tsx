import { Gem, Paintbrush, ShoppingBag, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function MobileBottomNav() {
  return (
    <nav className="fixed bottom-0 w-full z-50 md:hidden bg-surface-container-high dark:bg-surface-container-high border-t border-outline-variant/30 shadow-lg h-16 px-4 pb-safe flex justify-around items-center">
      <Link className="flex flex-col items-center justify-center text-primary font-bold" href="#">
        <Gem size={20} />
        <span className="font-label-caps text-[10px] uppercase mt-1">Shop</span>
      </Link>
      <Link className="flex flex-col items-center justify-center text-on-surface-variant" href="#">
        <Paintbrush size={20} />
        <span className="font-label-caps text-[10px] uppercase mt-1">Bespoke</span>
      </Link>
      <Link className="flex flex-col items-center justify-center text-on-surface-variant" href="#">
        <ShoppingBag size={20} />
        <span className="font-label-caps text-[10px] uppercase mt-1">Cart</span>
      </Link>
      <Link
        className="flex flex-col items-center justify-center text-on-surface-variant"
        href="https://wa.me/918608730000"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle size={20} />
        <span className="font-label-caps text-[10px] uppercase mt-1">WhatsApp</span>
      </Link>
    </nav>
  );
}
