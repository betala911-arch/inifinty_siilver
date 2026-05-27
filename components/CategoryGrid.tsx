"use client";

import { motion } from "framer-motion";
import { toast } from "sonner";
import Link from "next/link";
import { ArrowRight, Gem } from "lucide-react";

export default function CategoryGrid() {
  const handleExplore = (category: string) => {
    toast(`Exploring ${category}`, {
      description: "Loading curated masterpieces from the vault...",
      icon: <Gem className="text-primary w-4 h-4" />
    });
  };

  return (
    <section id="collections" className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto scroll-mt-20">
      <div className="flex flex-col md:flex-row justify-between items-end mb-stack-lg gap-stack-md">
        <div>
          <span className="font-label-caps text-label-caps text-primary uppercase tracking-[0.2em]">Our Collections</span>
          <h2 className="font-headline-lg text-on-surface mt-stack-xs">Curated Masterpieces</h2>
        </div>
        <button 
          onClick={() => handleExplore("All Categories")}
          className="font-button text-button text-primary border-b border-primary pb-1 hover:text-white hover:border-white transition-colors group flex items-center gap-2"
        >
          View All Categories
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Large Card */}
        <motion.div 
          whileHover={{ scale: 0.99 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="md:col-span-8 group relative aspect-square md:aspect-auto md:h-[600px] overflow-hidden bg-surface-container-highest cursor-pointer rounded-sm"
          onClick={() => handleExplore("Personalised & Bespoke")}
        >
          <img
            alt="Bespoke Collection"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlXZBGdBTB-6byEhFNtFb1qQ2IrsBDZCtLNzXfE_t_lb31y95iHDrcvY_ByXxVPILYbMZ3jWRAwH4wdqmw_GPHn0H-EtsoBenA6oJdM0IdUkx1JtoK1QbwMT-3dd1VEejIeH0fR2xvNJhIyvb3ctmaIXJRboKQgzZqNpDWeSBIIDEkRmb-LcCxdmdulK0nAlbUZyJF89ooyBk5cwDwFZzCxIHUBoQ1gDbAKP6nn9_vN-8KF_R2Eu1e3ny68p7-Uc7k1_0XpbxthT0"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500"></div>
          <div className="absolute bottom-10 left-10 text-on-surface transform transition-transform duration-500 group-hover:-translate-y-2">
            <span className="font-label-caps text-[10px] bg-primary text-background px-2 py-1 uppercase mb-2 inline-block">Handcrafted</span>
            <h3 className="font-headline-md text-[32px] mb-4">Personalised &amp; Bespoke</h3>
            <button className="font-button uppercase tracking-widest text-[12px] border border-on-surface px-6 py-2 bg-transparent hover:bg-on-surface hover:text-background transition-all group-hover:bg-on-surface group-hover:text-background">
              Explore
            </button>
          </div>
        </motion.div>
        
        {/* Small Cards Column */}
        <div className="md:col-span-4 flex flex-col gap-gutter">
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="group relative flex-1 overflow-hidden bg-surface-container-highest min-h-[288px] cursor-pointer rounded-sm"
            onClick={() => handleExplore("Ladies Rings")}
          >
            <img
              alt="Ladies Collection"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6de07NTZDby_igQaVuSNTKPnry5SKDiuHtRUTeh2todezp-1g-Obl1IOugkB9BgatjBm0RretOuFeEK9LEFMYNlNhdxR-6r6E880YxeZCb5u8tnjJCBSwYxKttOT7WBmO1OiLMFcRKETIqHftnCXNlde9-7ttu3Ep3nxT4m0bPxVwUOo_NeAQ2b4bidlvvtf2rq4QkL3IfTc6h0cLx9lc7eBQtAav2i6Gh9pyDcVfDk1U1y2ao6_ACCLwbxSHxpkc9Gerujjrq5Y"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
            <div className="absolute bottom-6 left-6 transform transition-transform duration-500 group-hover:-translate-y-1">
              <h3 className="font-headline-md text-on-surface text-[24px]">Ladies Rings</h3>
              <div className="h-[1px] w-0 bg-primary mt-2 transition-all duration-500 group-hover:w-full"></div>
            </div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="group relative flex-1 overflow-hidden bg-surface-container-highest min-h-[288px] cursor-pointer rounded-sm"
            onClick={() => handleExplore("Premium Pendants")}
          >
            <img
              alt="Pendants Collection"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3VY5REahRUBN0iVw2bRKELJsUujdeclkj-F0A6h8a9pQVHZl8eVm0vbAtusyBPY9DHbR06V_i0C4XPQTfHZFjUbeHn_fJcTcvSRHp7_zhpne1few_sDMN_pcwDmcKV5R3oFD0MhTk6nvTYqXjpVgvs7cllOAGCjgAzXNxdcvZTPohUh4GJf1y2ea3j0JqtsqXP7iD2oZFnzneGEOUB1lWDYUT3gPNyki70AskmC7dzWDzzzW8RcXUq20v399yWFgGbFnV-cC4THg"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
            <div className="absolute bottom-6 left-6 transform transition-transform duration-500 group-hover:-translate-y-1">
              <h3 className="font-headline-md text-on-surface text-[24px]">Premium Pendants</h3>
              <div className="h-[1px] w-0 bg-primary mt-2 transition-all duration-500 group-hover:w-full"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
