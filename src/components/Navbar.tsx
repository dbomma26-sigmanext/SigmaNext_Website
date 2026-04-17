import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ASSETS } from "@/constants/assets";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Expertise", href: "#services" },
  { name: "Industries", href: "#industries" },
  { name: "Technology", href: "#technology" },
  { name: "About", href: "#about" },
  { name: "Careers", href: "#careers" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const container = document.getElementById("main-scroll-container");
    const handleScroll = () => {
      if (container) {
        setIsScrolled(container.scrollTop > 50);
      }
    };
    container?.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-6",
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-100 py-1.5 md:py-3 shadow-lg"
          : "bg-transparent py-3 md:py-8"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 group max-w-[140px] md:max-w-none">
          <div className="relative">
            <img 
              src={ASSETS.LOGO.PRIMARY} 
              alt="SigmaNext Logo" 
              referrerPolicy="no-referrer"
              className={cn(
                "w-auto object-contain transition-all duration-500 group-hover:scale-105",
                isScrolled ? "h-7 md:h-12" : "h-10 md:h-20"
              )}
              onLoad={(e) => {
                console.log("Logo loaded successfully");
                (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'none';
              }}
              onError={(e) => {
                const img = e.currentTarget;
                if (!img.dataset.triedSecondary) {
                  img.dataset.triedSecondary = "true";
                  img.src = ASSETS.LOGO.SECONDARY;
                } else if (!img.dataset.triedExternal) {
                  img.dataset.triedExternal = "true";
                  img.src = ASSETS.LOGO.EXTERNAL;
                } else {
                  console.log("All logo images failed, showing text fallback");
                  img.style.display = 'none';
                  const textLogo = img.parentElement?.nextElementSibling as HTMLElement;
                  if (textLogo) textLogo.style.display = 'flex';
                }
              }}
            />
          </div>
          <div className="hidden items-center gap-2">
            <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">Σ</span>
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-900">
              <span className="text-sigma-blue">Sigma</span><span className="text-sigma-yellow italic">Next</span><span className="text-slate-400">.ai</span>
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12 ml-16">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "text-base font-bold transition-all relative group",
                  isScrolled ? "text-slate-500" : "text-white",
                  "hover:text-sigma-blue"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 bg-sigma-blue transition-all duration-300 group-hover:w-full",
                  !isScrolled && "bg-white"
                )} />
              </a>
            ))}
          </div>
          <a href="#contact">
            <Button size="lg" variant="outline" className="rounded-full px-8 font-bold border-slate-200 text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300">
              Get Started <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background border-b border-border p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xl font-bold text-slate-900 hover:text-sigma-blue"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full rounded-full font-bold py-6 text-lg">Get Started</Button>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
