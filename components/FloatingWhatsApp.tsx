import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function FloatingWhatsApp() {
  return (
    <Link
      className="fixed bottom-20 right-6 md:bottom-10 md:right-10 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 group flex items-center"
      href="https://wa.me/918608730000?text=Hi%20Infinity%20Silver%20Store,%20I'm%20interested%20in%20customizing%20a%20piece%20of%20jewelry!"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-button text-[12px] uppercase tracking-wider pr-0 group-hover:pr-3">
        Chat with us
      </span>
      <MessageCircle size={24} />
    </Link>
  );
}
