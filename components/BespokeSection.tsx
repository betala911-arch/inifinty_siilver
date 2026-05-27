import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BespokeSection() {
  return (
    <section id="bespoke" className="px-margin-mobile md:px-margin-desktop scroll-mt-24">
      <div className="bg-gradient-to-b from-neutral-900/60 to-neutral-950 border border-neutral-800 rounded-3xl p-8 md:p-16 my-12 text-center max-w-7xl mx-auto hover:border-neutral-700 transition-colors duration-500">
        <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest block mb-6">
          The Infinity Studio
        </span>
        <h2 className="font-headline-lg text-on-surface leading-tight mb-6">
          If You Can Dream It, <br className="hidden md:block" />
          <span className="italic font-normal">We Can Craft It.</span>
        </h2>
        <p className="font-body-lg text-on-surface-variant leading-relaxed max-w-2xl mx-auto mb-10">
          From reference sketch to pure silver reality. Collaborate directly with our Chennai store designers to bring your custom silver pieces to life.
        </p>
        <Link
          href="https://wa.me/918608730000?text=Hi%20Infinity%20Silver%20Store,%20I'm%20interested%20in%20customizing%20a%20piece%20of%20jewelry!"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-stack-md bg-transparent border border-primary text-primary px-10 py-5 font-button uppercase tracking-widest hover:bg-primary hover:text-background transition-all group w-fit mx-auto"
        >
          <span>Start Customizing via WhatsApp</span>
          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
        </Link>
      </div>
    </section>
  );
}
