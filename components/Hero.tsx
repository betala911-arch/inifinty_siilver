import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-start md:justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          alt="Infinity Silver Hero Editorial" 
          className="w-full h-full object-cover animate-[ken-burns_10s_ease-in-out_infinite_alternate]" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHtBJb9mfMPvpms-JES-mxiEIQ5Qx1YtinfrqJE_BLWuVVfo38mmQdLWWk980HIS8lLyoCt_KuCVA6nmQ9YDqIluE7wt0LQHsYBS_j5wFYJ5OLGyEP8e8jHtMsigpLhcD_bBHCzAVj7u_YK4km9Dy_2bHgJIhgU1ZZX9vEI53adKFPaZlAHCrn_Sy1wVJHnOIXhkTNkfeXiC0EOSA-CjBlGF3yIodl2Fw08khFcMZiaCAOVIGGWOvN9WKk8HnvsqbeqilrUwhRc6s"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
      </div>
      <div className="relative z-10 text-left md:text-center px-margin-mobile md:px-margin-desktop max-w-5xl md:mx-auto pt-20">
        <span className="block font-display-lg text-primary/60 text-[24px] md:text-[32px] italic tracking-widest mb-4">
          Infinity
        </span>
        <h1 className="font-headline-lg-mobile md:font-headline-lg md:text-display-lg text-on-surface mb-stack-lg tracking-tight leading-tight">
          Finest 92.5 Sterling Silver, <br/><span className="italic font-normal serif">Crafted for Eternity.</span>
        </h1>
        <p className="font-body-lg text-on-surface-variant mb-12 max-w-xl md:mx-auto opacity-90">
          From timeless daily wear to bespoke custom designs. Handcrafted in Chennai, delivered Pan-India with insured shipping.
        </p>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-center gap-6">
          <Link href="#" className="w-full md:w-auto text-center bg-primary text-background px-12 py-5 font-button uppercase text-[11px] tracking-[0.25em] hover:bg-white transition-all duration-500 border border-primary">
            Explore Collection
          </Link>
          <Link href="#" className="w-full md:w-auto text-center border border-primary/50 text-on-surface px-12 py-5 font-button uppercase text-[11px] tracking-[0.25em] hover:bg-white/5 transition-all duration-500 backdrop-blur-sm">
            Bespoke Design
          </Link>
        </div>
      </div>
    </section>
  );
}
