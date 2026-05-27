import { BadgeCheck, Brush, Truck, Star } from "lucide-react";

export default function TrustBar() {
  return (
    <div className="bg-surface-container-lowest border-y border-white/5 py-8">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-2 md:grid-cols-4 gap-gutter">
        
        <div className="flex flex-col items-center text-center space-y-2 opacity-70 hover:opacity-100 transition-opacity">
          <BadgeCheck className="text-primary w-6 h-6" strokeWidth={1.5} />
          <span className="font-label-caps text-[10px] uppercase tracking-[0.15em] text-on-surface">92.5 Hallmarked</span>
        </div>
        
        <div className="flex flex-col items-center text-center space-y-2 opacity-70 hover:opacity-100 transition-opacity border-l border-white/10 md:border-l">
          <Brush className="text-primary w-6 h-6" strokeWidth={1.5} />
          <span className="font-label-caps text-[10px] uppercase tracking-[0.15em] text-on-surface">Customizable Studio</span>
        </div>
        
        <div className="flex flex-col items-center text-center space-y-2 opacity-70 hover:opacity-100 transition-opacity border-t border-white/10 md:border-t-0 md:border-l">
          <Truck className="text-primary w-6 h-6" strokeWidth={1.5} />
          <span className="font-label-caps text-[10px] uppercase tracking-[0.15em] text-on-surface">Insured Shipping</span>
        </div>
        
        <div className="flex flex-col items-center text-center space-y-2 opacity-70 hover:opacity-100 transition-opacity border-t border-white/10 md:border-t-0 md:border-l">
          <Star className="text-primary w-6 h-6" strokeWidth={1.5} />
          <span className="font-label-caps text-[10px] uppercase tracking-[0.15em] text-on-surface">4.9/5 Google Rated</span>
        </div>

      </div>
    </div>
  );
}
