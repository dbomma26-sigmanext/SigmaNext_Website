import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ASSETS } from "@/constants/assets";
import { cn } from "@/lib/utils";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-slate-100 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">
          <div className="space-y-8">
            <div className="flex items-center gap-2 group">
              <img 
                src={ASSETS.LOGO.PRIMARY} 
                alt="SigmaNext Logo" 
                className="h-12 w-auto object-contain transition-all duration-500 group-hover:scale-105"
                onError={(e) => {
                  const img = e.currentTarget;
                  if (!img.dataset.triedSecondary) {
                    img.dataset.triedSecondary = "true";
                    img.src = ASSETS.LOGO.SECONDARY;
                  } else if (!img.dataset.triedExternal) {
                    img.dataset.triedExternal = "true";
                    img.src = ASSETS.LOGO.EXTERNAL;
                  } else {
                    img.style.display = 'none';
                    const textFallback = img.parentElement?.querySelector('.footer-logo-fallback') as HTMLElement;
                    if (textFallback) textFallback.classList.remove('hidden');
                  }
                }}
              />
              <div className="footer-logo-fallback hidden flex items-center gap-2">
                <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">Σ</span>
                </div>
                <span className="text-xl font-black tracking-tighter text-slate-900">
                  <span className="text-sigma-blue">Sigma</span><span className="text-sigma-yellow italic">Next</span>
                </span>
              </div>
            </div>
            <p className="text-slate-500 leading-relaxed font-medium">
              Your Partner In Intelligent Transformation. Empowering businesses with next-gen technology solutions and AI-driven consultancy.
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-11 h-11 rounded-xl border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-sigma-yellow hover:text-slate-900 hover:border-sigma-yellow transition-all duration-300 shadow-sm"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-extrabold text-slate-900 text-lg mb-8 uppercase tracking-widest">Quick Links</h3>
            <ul className="space-y-5">
              {["Home", "Services", "About", "Careers", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-slate-500 font-bold hover:text-sigma-yellow transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-extrabold text-slate-900 text-lg mb-8 uppercase tracking-widest">Contact</h3>
            <ul className="space-y-5">
              <li className="text-slate-500 font-bold">
                <span className="block text-slate-900 text-xs uppercase tracking-widest mb-1">Email</span>
                Contact@SigmaNext.ai
              </li>
              <li className="text-slate-500 font-bold">
                <span className="block text-slate-900 text-xs uppercase tracking-widest mb-1">Phone</span>
                +1-469-918-2081
              </li>
              <li className="text-slate-500 font-bold">
                <span className="block text-slate-900 text-xs uppercase tracking-widest mb-1">Address</span>
                405 State Highway 121, Suite A250, Lewisville, Texas, USA, 75067
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-slate-400 text-sm font-bold">
            © <span className="text-sigma-blue">Sigma</span><span className="text-sigma-yellow italic">Next</span>.ai. All rights reserved.
          </p>
          <div className="flex items-center gap-10 text-sm text-slate-400 font-bold">
            <Button
              onClick={scrollToTop}
              variant="secondary"
              className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-sigma-yellow hover:text-slate-900 transition-all duration-300 shadow-sm p-0"
            >
              <ArrowUp className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
