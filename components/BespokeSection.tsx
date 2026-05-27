import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BespokeSection() {
  return (
    <section className="bg-black border-y border-white/5">
      <div className="flex flex-col md:flex-row items-center">
        
        <div className="w-full md:w-1/2 aspect-square md:h-[800px] overflow-hidden relative">
          <img 
            alt="Bespoke jewelry design process" 
            className="w-full h-full object-cover grayscale opacity-60 hover:scale-110 transition-transform duration-[8000ms]" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCONURte8kUn1TijUbFZXBksBIYg6eLNnik26zqiGIHBWGLVZgrvpOFiPi74Qfs_Y3DYjTqVfxc_YLAS7GSn8hyq2Ihf274JAvCQacRpxeB8Qt7XgU0e2XBdEh5838oAxACpSGdA1258i2o42QpFlC_xLWWxvrjnHB8zXJmOf--azecJz84M7jeREMqgt-WNw8TiUCwqpDsI1J6xR4pdFk8ycVHBKAvUAjt_Or3FfZ8R8zFbX8nwYIfeRUI67rvY7ZRFS3wydGa1TY"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 md:from-transparent via-transparent to-transparent"></div>
        </div>
        
        <div className="w-full md:w-1/2 p-margin-mobile md:p-margin-desktop space-y-10">
          <span className="font-label-caps text-[12px] text-primary uppercase tracking-[0.4em]">The Infinity Atelier</span>
          <h2 className="font-headline-lg text-on-surface leading-tight text-[40px] md:text-[56px]">
            If You Can Dream It,<br/><span className="italic font-normal serif">We Can Craft It.</span>
          </h2>
          <p className="font-body-lg text-on-surface-variant leading-relaxed max-w-lg opacity-80">
            Specializing in customized jewelry tailored to your unique story. Share your reference design or idea with our master artisans, and watch it transform from a sketch to a silver masterpiece.
          </p>
          <div className="pt-4">
            <Link 
              href="https://wa.me/918608730000"
              className="inline-flex items-center space-x-6 border border-primary/40 text-primary px-12 py-6 font-button text-[12px] uppercase tracking-[0.2em] hover:bg-primary hover:text-background transition-all group"
            >
              <span>Start Your Commission</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform w-[18px] h-[18px]" strokeWidth={1.5} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
