import React from "react";
import { motion } from "motion/react";

interface SparkleBrandProps {
  className?: string;
  withSparkles?: boolean;
}

export function SparkleBrand({ className = "", withSparkles = false }: SparkleBrandProps) {
  return (
    <span className={`relative inline-block group cursor-default transition-all duration-500 hover:scale-105 ${className}`}>
      <span className="relative z-10 transition-all duration-300 group-hover:brightness-110 drop-shadow-[0_0_8px_rgba(0,86,179,0.2)]">
        <span className="text-sigma-blue">Sigma</span><span className="text-sigma-yellow italic">Next</span>
      </span>
      {/* Shine overlay that follows the text shape */}
      <span className="absolute inset-0 z-20 animate-text-shine pointer-events-none select-none">
        SigmaNext
      </span>
      {withSparkles && (
        <>
          <motion.span 
            animate={{ scale: [0, 1, 0], rotate: [0, 90, 180], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="absolute -top-2 -right-3 text-sigma-yellow"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l2.5 9.5 9.5 2.5-9.5 2.5-2.5 9.5-2.5-9.5-9.5-2.5 9.5-2.5z"/></svg>
          </motion.span>
          <motion.span 
            animate={{ scale: [0, 1, 0], rotate: [0, -90, -180], opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 1.5 }}
            className="absolute -bottom-1 -left-2 text-sigma-blue"
          >
            <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l2.5 9.5 9.5 2.5-9.5 2.5-2.5 9.5-2.5-9.5-9.5-2.5 9.5-2.5z"/></svg>
          </motion.span>
        </>
      )}
    </span>
  );
}
