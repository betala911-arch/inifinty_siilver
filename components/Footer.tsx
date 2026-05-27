import { Star, Globe, Share2 } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* Wall of Love */}
      <section className="py-section-gap overflow-hidden bg-surface-container-lowest">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-16 text-center">
          <h2 className="font-headline-lg text-on-surface">Wall of Love</h2>
          <p className="font-body-md text-on-surface-variant mt-3 uppercase tracking-widest text-[11px] opacity-60">Trusted by thousands across India</p>
        </div>

        <div className="flex space-x-gutter px-margin-mobile md:px-margin-desktop overflow-x-auto no-scrollbar pb-10">
          
          {/* Testimonial 1 */}
          <div className="min-w-[320px] md:min-w-[450px] bg-background p-10 border border-white/5 rounded-2xl hover:border-primary/20 transition-all duration-500">
            <div className="flex text-primary mb-8 space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="fill-primary text-primary w-4 h-4" />
              ))}
            </div>
            <p className="font-body-lg italic text-on-surface mb-10 leading-relaxed opacity-90">"The attention to detail in my custom infinity name necklace was exceptional. Truly the best sterling silver store in Chennai."</p>
            <div className="flex items-center space-x-4 border-t border-white/5 pt-8">
              <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-primary border border-white/10">A</div>
              <div>
                <p className="font-label-caps text-[12px] text-on-surface uppercase tracking-widest">Ananya R.</p>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-[0.1em]">Verified Curator</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="min-w-[320px] md:min-w-[450px] bg-background p-10 border border-white/5 rounded-2xl hover:border-primary/20 transition-all duration-500">
            <div className="flex text-primary mb-8 space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="fill-primary text-primary w-4 h-4" />
              ))}
            </div>
            <p className="font-body-lg italic text-on-surface mb-10 leading-relaxed opacity-90">"Ordered a gift for my wife and she loved the 92.5 hallmark certificate and the premium packaging. Insured delivery was fast."</p>
            <div className="flex items-center space-x-4 border-t border-white/5 pt-8">
              <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-primary border border-white/10">K</div>
              <div>
                <p className="font-label-caps text-[12px] text-on-surface uppercase tracking-widest">Karthik S.</p>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-[0.1em]">Verified Buyer</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="min-w-[320px] md:min-w-[450px] bg-background p-10 border border-white/5 rounded-2xl hover:border-primary/20 transition-all duration-500">
            <div className="flex text-primary mb-8 space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="fill-primary text-primary w-4 h-4" />
              ))}
            </div>
            <p className="font-body-lg italic text-on-surface mb-10 leading-relaxed opacity-90">"Highly professional bespoke service. I gave them a rough sketch and they created something better than I imagined."</p>
            <div className="flex items-center space-x-4 border-t border-white/5 pt-8">
              <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center font-bold text-primary border border-white/10">M</div>
              <div>
                <p className="font-label-caps text-[12px] text-on-surface uppercase tracking-widest">Meera K.</p>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-[0.1em]">Chennai</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full pt-24 pb-12 bg-black border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          
          <div className="md:col-span-1 space-y-8">
            <div className="font-display-lg text-primary text-[24px]">Infinity Silver</div>
            <p className="font-body-md text-on-surface-variant leading-relaxed opacity-70">Elevating the spirit through premium 92.5 Sterling Silver, masterfully curated for the modern individual.</p>
            <div className="flex space-x-6">
              <Globe className="text-on-surface-variant hover:text-primary cursor-pointer w-5 h-5" strokeWidth={1.5} />
              <Share2 className="text-on-surface-variant hover:text-primary cursor-pointer w-5 h-5" strokeWidth={1.5} />
            </div>
          </div>
          
          <div className="space-y-8">
            <h4 className="font-label-caps text-[11px] text-on-surface uppercase tracking-[0.25em]">Collections</h4>
            <ul className="space-y-4">
              <li><Link className="font-body-md text-on-surface-variant text-[14px] hover:text-primary transition-colors opacity-70" href="#">The Bespoke Studio</Link></li>
              <li><Link className="font-body-md text-on-surface-variant text-[14px] hover:text-primary transition-colors opacity-70" href="#">Limited Editions</Link></li>
              <li><Link className="font-body-md text-on-surface-variant text-[14px] hover:text-primary transition-colors opacity-70" href="#">Bestsellers</Link></li>
              <li><Link className="font-body-md text-on-surface-variant text-[14px] hover:text-primary transition-colors opacity-70" href="#">New Season</Link></li>
            </ul>
          </div>
          
          <div className="space-y-8">
            <h4 className="font-label-caps text-[11px] text-on-surface uppercase tracking-[0.25em]">Atelier Services</h4>
            <ul className="space-y-4">
              <li><Link className="font-body-md text-on-surface-variant text-[14px] hover:text-primary transition-colors opacity-70" href="#">Shipping &amp; Logistics</Link></li>
              <li><Link className="font-body-md text-on-surface-variant text-[14px] hover:text-primary transition-colors opacity-70" href="#">Track Heritage Piece</Link></li>
              <li><Link className="font-body-md text-on-surface-variant text-[14px] hover:text-primary transition-colors opacity-70" href="#">Authenticity &amp; Care</Link></li>
              <li><Link className="font-body-md text-on-surface-variant text-[14px] hover:text-primary transition-colors opacity-70" href="#">Private Concierge</Link></li>
            </ul>
          </div>
          
          <div className="space-y-8">
            <h4 className="font-label-caps text-[11px] text-on-surface uppercase tracking-[0.25em]">Our Boutique</h4>
            <p className="font-body-md text-on-surface-variant text-[14px] leading-relaxed opacity-70">
              No.65, Chella Pillayar Koil St,<br/>
              Royapettah, Chennai - 600014.
            </p>
            <p className="font-body-md text-on-surface-variant text-[14px] opacity-70">Flagship: Chennai, India</p>
          </div>
          
        </div>
        
        <div className="mt-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center border-t border-white/5 pt-12">
          <p className="font-label-caps text-[9px] text-on-surface-variant uppercase tracking-[0.4em] opacity-40">
            © 2024 Infinity Silver Boutique. 92.5 Sterling Authenticity Guaranteed.
          </p>
        </div>
      </footer>
    </>
  );
}
