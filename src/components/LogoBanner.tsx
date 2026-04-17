import React from "react";
import { motion } from "motion/react";
import { ASSETS } from "@/constants/assets";

export function LogoBanner() {
  const partners = [...ASSETS.PARTNERS, ...ASSETS.PARTNERS]; // Duplicate for infinite scroll

  return (
    <section className="w-full py-16 bg-white overflow-hidden border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <h2 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Powering Innovation With</h2>
        <p className="text-slate-900 font-bold text-lg">World Class Partners & Technology</p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <motion.div
          className="flex whitespace-nowrap gap-16 md:gap-24 items-center animate-scroll"
          animate={{
            x: [0, -1920],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {partners.map((partner, index) => (
            <div 
              key={`${partner.name}-${index}`} 
              className="flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-8 md:h-12 w-auto object-contain max-w-[120px] md:max-w-[150px]"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </motion.div>

        {/* Gradient overlays for smooth fade */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
