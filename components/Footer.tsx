import { Star, BarChart, Globe } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer" className="w-full pt-section-gap pb-10 bg-surface-container-lowest dark:bg-surface-container-lowest border-t border-outline-variant/10 scroll-mt-10">
      
      {/* Testimonials */}
      <div id="reviews" className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-16 text-center scroll-mt-24">
        <h2 className="font-headline-lg text-on-surface mb-2">Wall of Love</h2>
        <p className="font-body-md text-on-surface-variant mb-10">Trusted by thousands across India</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* Testimonial 1 */}
          <div className="bg-surface-container p-8 border border-outline-variant/10 rounded-xl">
            <div className="flex text-primary mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="fill-primary text-primary" size={16} />
              ))}
            </div>
            <p className="font-body-md italic text-on-surface mb-6 leading-relaxed">
              "Excellent custom work at affordable rates. Truly the best sterling silver store in Chennai."
            </p>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center font-bold text-primary">A</div>
              <div>
                <p className="font-label-caps text-on-surface">Ananya R.</p>
                <p className="text-[10px] text-on-surface-variant">Verified Buyer</p>
              </div>
            </div>
          </div>
          
          {/* Testimonial 2 */}
          <div className="bg-surface-container p-8 border border-outline-variant/10 rounded-xl">
            <div className="flex text-primary mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="fill-primary text-primary" size={16} />
              ))}
            </div>
            <p className="font-body-md italic text-on-surface mb-6 leading-relaxed">
              "Highly patient and accommodating owners in Royapettah. Ordered a gift for my wife and she loved the 92.5 hallmark quality."
            </p>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center font-bold text-primary">K</div>
              <div>
                <p className="font-label-caps text-on-surface">Karthik S.</p>
                <p className="text-[10px] text-on-surface-variant">Verified Buyer</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-surface-container p-8 border border-outline-variant/10 rounded-xl">
            <div className="flex text-primary mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="fill-primary text-primary" size={16} />
              ))}
            </div>
            <p className="font-body-md italic text-on-surface mb-6 leading-relaxed">
              "Highly professional bespoke service. I gave them a rough sketch and they created something better than I imagined."
            </p>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center font-bold text-primary">M</div>
              <div>
                <p className="font-label-caps text-on-surface">Meera K.</p>
                <p className="text-[10px] text-on-surface-variant">Chennai</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto border-t border-outline-variant/10 pt-16">
        <div className="md:col-span-1 space-y-stack-md">
          <div className="font-headline-md text-primary">Infinity Silver</div>
          <p className="font-body-md text-on-surface-variant">Premium 92.5 Sterling Silver curated for the modern individual.</p>
          <div className="flex space-x-4">
            <BarChart className="text-on-surface-variant hover:text-primary cursor-pointer" size={20} />
            <Globe className="text-on-surface-variant hover:text-primary cursor-pointer" size={20} />
          </div>
        </div>
        
        <div className="space-y-stack-md">
          <h4 className="font-label-caps text-label-caps text-on-surface uppercase">Shop</h4>
          <ul className="space-y-2">
            <li><Link className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">New Arrivals</Link></li>
            <li><Link className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Personalised</Link></li>
            <li><Link className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Bestsellers</Link></li>
            <li><Link className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Gift Cards</Link></li>
          </ul>
        </div>
        
        <div className="space-y-stack-md">
          <h4 className="font-label-caps text-label-caps text-on-surface uppercase">Customer Care</h4>
          <ul className="space-y-2">
            <li><Link className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Shipping Policy</Link></li>
            <li><Link className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Track Order</Link></li>
            <li><Link className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Privacy Policy</Link></li>
            <li><Link className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#">Contact Us</Link></li>
          </ul>
        </div>
        
        <div className="space-y-stack-md">
          <h4 className="font-label-caps text-label-caps text-on-surface uppercase">Our Studio</h4>
          <p className="font-body-md text-on-surface-variant leading-relaxed">
            No.65, Chella Pillayar Koil St, Pudupakkam,<br />
            Royapettah, Chennai, Tamil Nadu 600014<br />
            (Near Express Avenue Mall)
          </p>
          <p className="font-body-md text-on-surface-variant">Store Locator: Chennai</p>
          <p className="font-body-md text-primary">Open until 9:30 PM</p>
        </div>
      </div>
      
      <div className="mt-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center border-t border-outline-variant/5 pt-10">
        <p className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-widest opacity-80">
          © 2024 Infinity Silver Store. 92.5 Sterling Authenticity Guaranteed.
        </p>
      </div>
    </footer>
  );
}
