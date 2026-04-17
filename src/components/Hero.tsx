import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-slate-900 pt-24 md:pt-0">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover brightness-75 contrast-125 select-none"
          onCanPlay={() => console.log("Video can play")}
          onError={(e) => console.error("Video element error", e)}
        >
          <source
            src="/hero-banner.mp4?v=2026"
            type="video/mp4"
          />
          {/* Fallback external link if local fails */}
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-blue-circuit-board-4430-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-slate-900/40" />
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
            <a href="#services">
              <Button size="lg" variant="outline" className="rounded-full px-6 md:px-10 h-10 md:h-14 text-sm md:text-lg font-bold border-slate-200 bg-white/50 backdrop-blur-sm text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 group">
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
