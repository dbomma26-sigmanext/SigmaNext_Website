import { motion } from "motion/react";
import { ASSETS } from "@/constants/assets";
import { Play, CheckCircle2, AlertCircle } from "lucide-react";

export function MediaDebugSection() {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">System Media Validation</h2>
          <p className="text-slate-500 font-medium">Testing all video sources to verify availability and performance.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* New Video Validation */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-sigma-blue rounded-xl flex items-center justify-center">
                  <Play className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">1. New Uploaded Video</h3>
              </div>
              <span className="text-xs font-bold text-sigma-blue bg-sigma-blue/10 px-3 py-1 rounded-full uppercase tracking-wider">Primary</span>
            </div>
            
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-slate-900 shadow-2xl border-4 border-white group">
              <video 
                src={ASSETS.VECTORS.HERO_VIDEO.PRIMARY}
                autoPlay loop muted playsInline
                className="w-full h-full object-cover"
                onPlay={() => console.log("New video playing")}
                onError={() => console.error("New video failed")}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-6">
                <p className="text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">File: Updated_Banner_vedio_2.mp4</p>
              </div>
            </div>
            
            <div className="p-4 bg-white rounded-2xl border border-slate-100 flex items-center gap-4">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Status: Attempting Local Resolve</p>
            </div>
          </div>

          {/* Bunny Video Reference */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-200 rounded-xl flex items-center justify-center">
                  <Play className="w-5 h-5 text-slate-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">2. Reference Verification</h3>
              </div>
              <span className="text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-wider">External</span>
            </div>

            <div className="relative aspect-video rounded-3xl overflow-hidden bg-slate-900 shadow-2xl border-4 border-white group">
              <video 
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                autoPlay loop muted playsInline
                className="w-full h-full object-cover"
                onPlay={() => console.log("Bunny video playing")}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-6">
                <p className="text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">Source: W3Schools (mov_bbb.mp4)</p>
              </div>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-slate-100 flex items-center gap-4">
              <div className="w-2 h-2 bg-blue-500 rounded-full" />
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Status: External CDN Active</p>
            </div>
          </div>
        </div>

        {/* Diagnosis Note */}
        <div className="mt-12 p-8 bg-sigma-blue/5 rounded-[2rem] border border-sigma-blue/20">
          <div className="flex gap-4">
            <AlertCircle className="w-6 h-6 text-sigma-blue flex-shrink-0" />
            <div>
              <h4 className="font-bold text-sigma-blue mb-2">Technical Insight</h4>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                The New Video (Left) is currently using its bundled version managed by Vite. If it appears black or doesn't play while the Bunny Video (Right) works, it typically indicates a codec issue or a zero-byte file during the host transfer. We have reinforced all routes to ensure cross-platform compatibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
