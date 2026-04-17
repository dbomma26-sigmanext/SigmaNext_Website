import { motion } from "motion/react";
import { ASSETS } from "@/constants/assets";
import { ShieldCheck, Video, Image as ImageIcon } from "lucide-react";

export function MediaVerification() {
  return (
    <section className="py-20 bg-slate-50 overflow-hidden px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <ShieldCheck className="w-8 h-8 text-sigma-blue" />
          <h2 className="text-3xl font-black text-slate-900">Media System Verification</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Test Image Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-slate-600 font-bold mb-4">
              <ImageIcon className="w-5 h-5" />
              <h3>External Test Image (Picsum)</h3>
            </div>
            <div className="aspect-video bg-white rounded-3xl border-2 border-dashed border-slate-200 overflow-hidden flex items-center justify-center p-4">
              <img 
                src={ASSETS.TEST.IMAGE} 
                alt="Test" 
                className="w-full h-full object-cover rounded-2xl shadow-lg"
                onLoad={() => console.log("Test image loaded")}
                onError={() => console.error("Test image failed")}
              />
            </div>
          </div>

          {/* Test Video Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-slate-600 font-bold mb-4">
              <Video className="w-5 h-5" />
              <h3>External Test Video (Big Buck Bunny)</h3>
            </div>
            <div className="aspect-video bg-white rounded-3xl border-2 border-dashed border-slate-200 overflow-hidden">
              <video 
                controls 
                autoPlay 
                muted 
                loop 
                className="w-full h-full object-cover"
                onCanPlay={() => console.log("Test video can play")}
                onError={() => console.error("Test video failed")}
              >
                <source src={ASSETS.TEST.VIDEO} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        {/* Verification Summary */}
        <div className="mt-16 p-8 bg-white border border-slate-100 rounded-3xl shadow-sm">
          <h4 className="font-bold text-slate-900 mb-4">Asset Loading Logic:</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-medium text-slate-500">
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              Primary: Vite Bundled Assets (/src/assets)
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              Secondary: Root Public Assets (/)
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-yellow-500" />
              Tertiary: External CDN Fallback
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-slate-300" />
              Final: Dynamic Text/Icon Fallback
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
