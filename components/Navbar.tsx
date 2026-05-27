"use client";

import { ShoppingBag, User, Menu } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleAuth = () => {
    toast("Authentication Service", { description: "User portal is currently in preview." });
  };

  const handleCart = () => {
    toast("Cart Empty", { description: "Your bespoke pieces will appear here." });
  };

  return (
    <motion.nav 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-outline-variant/20 shadow-lg" : "bg-transparent border-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-display-lg text-primary tracking-tighter italic text-[24px] md:text-[32px] cursor-pointer"
        >
          Infinity Silver
        </div>
        
        <div className="hidden md:flex space-x-stack-lg items-center">
          <button
            onClick={() => scrollTo("collections")}
            className="font-button text-button uppercase text-primary border-b-2 border-primary pb-1 hover:text-white transition-colors"
          >
            Collections
          </button>
          <button
            onClick={() => scrollTo("bespoke")}
            className="font-button text-button uppercase text-on-surface-variant hover:text-primary transition-colors"
          >
            Bespoke Studio
          </button>
          <button
            onClick={() => scrollTo("reviews")}
            className="font-button text-button uppercase text-on-surface-variant hover:text-primary transition-colors"
          >
            Reviews
          </button>
          <button
            onClick={() => scrollTo("footer")}
            className="font-button text-button uppercase text-on-surface-variant hover:text-primary transition-colors"
          >
            About Us
          </button>
        </div>
        
        <div className="flex items-center space-x-stack-md">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={handleCart} className="text-primary hover:text-white transition-colors" aria-label="Cart">
            <ShoppingBag size={24} />
          </motion.button>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={handleAuth} className="text-primary hover:text-white transition-colors" aria-label="Profile">
            <User size={24} />
          </motion.button>
          <button className="md:hidden text-primary" aria-label="Menu">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
