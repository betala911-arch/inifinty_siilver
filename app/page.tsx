"use client";

import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import CategoryGrid from "@/components/CategoryGrid";
import SignaturePieces from "@/components/SignaturePieces";
import BespokeSection from "@/components/BespokeSection";
import InstagramFeed from "@/components/InstagramFeed";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100");
          entry.target.classList.remove("translate-y-10", "opacity-0");
        }
      });
    }, observerOptions);

    if (containerRef.current) {
      const sections = containerRef.current.querySelectorAll("section");
      sections.forEach((section) => {
        section.classList.add(
          "transition-all",
          "duration-1000",
          "translate-y-10",
          "opacity-0"
        );
        observer.observe(section);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <SignaturePieces />
        <CategoryGrid />
        <BespokeSection />
        <InstagramFeed />
      </main>
      <Footer />
      <MobileBottomNav />
      <FloatingWhatsApp />
    </div>
  );
}
