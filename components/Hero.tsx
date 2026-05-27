"use client";

import { motion } from "framer-motion";
import { toast } from "sonner";
import Link from "next/link";

export default function Hero() {
  const scrollToCollections = () => {
    document.getElementById("collections")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleConsult = () => {
    toast.success("Studio artisan consultation booked!", {
      description: "We will connect you to our WhatsApp expert momentarily.",
    });
    setTimeout(() => {
      window.open("https://wa.me/918608730000", "_blank");
    }, 1500);
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1 }}
          animate={{ scale: 1.15 }}
          transition={{ duration: 25, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          alt="Infinity Silver Hero"
          className="w-full h-full object-cover opacity-60"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDG3zu-K7vCXMLyVcNqWwkAR5Rj176C-ml-i7fkj7Iov4vllkbnWp8BQBNKNqb1dQGntMVMW0L6kZTvfL-25xQFpT1rAOow2NwPB_KeH-P8a77OryPl0YLTaoxoOdSwri4028WEiHSDfsun1wAE_yvJdEj-08sWm3Ii1VNBmMCuOBPjFx4JkMxXxHWspMzUPYricHCBWiJith76rbu4viM4CafYdLC7DXps20tM5qN5CTFuRCpQAN944NEjOd2zjYL8r7X9KHDOaGI"
        />
        <div className="absolute inset-0 luxury-gradient"></div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="relative z-10 text-center px-margin-mobile max-w-4xl mt-24"
      >
        <div className="mb-4 inline-flex items-center gap-1.5 w-fit bg-neutral-900 border border-neutral-800 text-neutral-400 px-3 py-1 text-[12px] rounded-full font-label-caps">
          <span className="text-[14px]">💎</span> Finest 92.5 Sterling Silver Store
        </div>
        
        <h1 className="font-headline-lg-mobile md:font-headline-lg md:text-display-lg text-on-surface mb-stack-md tracking-tight">
          Crafted for Eternity. <br className="hidden md:block" />
          <span className="italic font-normal">Customised for You.</span>
        </h1>
        
        <p className="font-body-lg text-on-surface-variant mb-stack-lg max-w-2xl mx-auto">
          Bespoke 92.5 sterling silver studio in Royapettah, Chennai. Tailored masterpieces designed locally, delivered Pan-India.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-stack-md">
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#131313" }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToCollections}
            className="w-full md:w-auto bg-on-surface text-background px-8 py-4 font-button uppercase tracking-widest transition-colors"
          >
            Explore Collections
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05, borderColor: "#ffffff", color: "#ffffff", backgroundColor: "rgba(255,255,255,0.05)" }}
            whileTap={{ scale: 0.95 }}
            onClick={handleConsult}
            className="w-full md:w-auto border border-outline-variant bg-transparent text-on-surface px-8 py-4 font-button uppercase tracking-widest transition-all"
          >
            Consult Studio Artisan
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
