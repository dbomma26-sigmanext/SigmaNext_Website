import React from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Play } from "lucide-react";
import { ASSETS } from "@/constants/assets";

export function Hero() {
  const scrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const elem = document.getElementById("services");
    if (elem) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elemRect = elem.getBoundingClientRect().top;
      const elemPosition = elemRect - bodyRect;
      const offsetPosition = elemPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      window.history.pushState(null, "", "#services");
    }
  };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-slate-900 pt-24 md:pt-0">
      {/* Video Background */}
      <div id="hero-video-container" className="absolute inset-0 z-0 h-full w-full bg-[#0a1128]">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover brightness-[0.8] contrast-[1.2] select-none scale-105"
          onCanPlay={() => {
            console.log("Hero background video is active");
          }}
          onError={(e) => {
            const video = e.currentTarget;
            console.error("Video element global error - checking alternate sources");
            if (video.networkState === video.NETWORK_NO_SOURCE) {
               console.warn("No sources resolved, forcing fallback background");
               const container = document.getElementById("hero-video-container");
               if (container) container.style.background = '#0a1128';
            }
          }}
        >
          {/* Attempt 1: Your uploaded banner video (Primary source via Vite Import) */}
          <source
            src={ASSETS.VECTORS.HERO_VIDEO.PRIMARY}
            type="video/mp4"
            onError={() => console.warn("Primary imported source failed - trying Pexels fallback")}
          />
          {/* Attempt 2: Requested Pexels AI Animation (Reliable cloud backup) */}
          <source
            src={ASSETS.VECTORS.HERO_VIDEO.SECONDARY}
            type="video/mp4"
            onError={() => console.warn("Pexels fallback failed - trying alternate local backup")}
          />
          {/* Attempt 3: Legacy local source (Backup via Vite Import) */}
          <source
            src={ASSETS.VECTORS.HERO_VIDEO.BACKUP_LOCAL}
            type="video/mp4"
            onError={() => console.warn("Legacy backup failed - trying working cloud fallback")}
          />
          {/* Attempt 4: The Guaranteed working video from Pexels (Connectivity) */}
          <source
            src={ASSETS.VECTORS.HERO_VIDEO.FALLBACK}
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-slate-900/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-16 md:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4 md:mb-10 leading-tight drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]">
            Let's <span className="text-sigma-blue underline decoration-sigma-blue/50 underline-offset-[8px]">grow</span> business together
          </h1>
          <p className="text-sm sm:text-base md:text-xl text-white/90 max-w-3xl mx-auto mb-6 md:mb-12 leading-relaxed font-bold drop-shadow-[0_1px_10px_rgba(0,0,0,0.5)]">
            <span className="text-sigma-blue">Sigma</span><span className="text-sigma-yellow italic">Next</span> provides cutting-edge application management, data analytics, and cyber security solutions to drive your business forward in the AI era.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#services" onClick={scrollToServices}>
              <Button size="lg" className="rounded-full px-10 md:px-14 h-12 md:h-14 text-base md:text-lg font-bold bg-gradient-to-b from-white via-slate-100 to-slate-300 text-slate-900 hover:from-white hover:to-slate-200 border border-slate-200 transition-all duration-300 group shadow-[0_4px_15px_-3px_rgba(0,0,0,0.1),0_10px_20px_-5px_rgba(0,0,0,0.2)]">
                Explore Services
                <ChevronRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
