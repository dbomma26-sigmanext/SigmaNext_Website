import React from "react";
import { motion } from "motion/react";
import { ASSETS } from "@/constants/assets";
import { Play, Shield, Activity, Database } from "lucide-react";

export function VideoShowcase() {
  return (
    <section id="video-testing" className="w-full py-24 bg-slate-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sigma-blue/10 border border-sigma-blue/20 text-sigma-blue text-[10px] font-black uppercase tracking-widest mb-6"
            >
              <Activity className="w-3 h-3" />
              Video Asset Testing
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
              High-Performance <span className="text-sigma-blue">Visual Environments</span>
            </h2>
            <p className="text-slate-400 text-lg font-medium leading-relaxed">
              We benchmark across multiple visual sets, including your custom uploads, to ensure your AI interfaces 
              remain fluid, responsive, and contextually immersive.
            </p>
          </div>
          
          <div className="flex gap-4">
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
              <Database className="w-6 h-6 text-sigma-blue mb-2" />
              <p className="text-[10px] font-bold text-slate-500 uppercase">Local Assets</p>
              <p className="text-xl font-black">Verified</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
              <Shield className="w-6 h-6 text-emerald-500 mb-2" />
              <p className="text-[10px] font-bold text-slate-500 uppercase">Stability</p>
              <p className="text-xl font-black">99.9%</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ASSETS.VECTORS.TEST_VIDEOS.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-video rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl"
            >
              <video
                src={video.url}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-sigma-blue/20 backdrop-blur-md flex items-center justify-center border border-sigma-blue/30 group-hover:bg-sigma-blue group-hover:text-white transition-all duration-300">
                    <Play className="w-3 h-3 fill-current" />
                  </div>
                  <h3 className="font-bold text-sm tracking-wide">{video.title}</h3>
                </div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                    {video.id.replace('-', ' ')}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
