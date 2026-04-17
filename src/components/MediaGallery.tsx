import { motion } from "motion/react";
import { Image as ImageIcon, Video as VideoIcon, FileCode, CheckCircle2 } from "lucide-react";

const mediaItems = [
  {
    title: "High Dynamic Range (JPG)",
    type: "image",
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    format: ".jpg",
    support: "Universal Support"
  },
  {
    title: "Alpha Transparency (PNG)",
    type: "image",
    src: "https://www.vectorlogo.zone/logos/snowflake/snowflake-icon.svg", // SVG as proxy for testing transparent feels
    format: ".png / .svg",
    support: "Universal Support"
  },
  {
    title: "Next-Gen Format (WebP)",
    type: "image",
    src: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
    format: ".webp",
    support: "Modern Browsers"
  },
  {
    title: "Vector Graphics (SVG)",
    type: "image",
    src: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
    format: ".svg",
    support: "Infinite Scalability"
  },
  {
    title: "Motion Content (MP4)",
    type: "video",
    src: "https://videos.pexels.com/video-files/3130182/3130182-hd_1920_1080_30fps.mp4",
    format: ".mp4",
    support: "High Performance"
  },
  {
    title: "Stock Assets",
    type: "image",
    src: "https://picsum.photos/seed/tech/800/600",
    format: "Random/CDN",
    support: "Cacheable"
  }
];

export function MediaGallery() {
  return (
    <section id="gallery" className="w-full py-24 px-6 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black mb-4 text-slate-900"
          >
            Media <span className="text-sigma-blue">Gallery</span> & Support
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-lg max-w-2xl mx-auto font-medium"
          >
            Testing and showcasing the various media formats and assets supported by our Intelligent Transformation platform.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[2rem] border border-slate-100 overflow-hidden shadow-lg group hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden border-b border-slate-50">
                {item.type === "image" ? (
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                )}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-sigma-blue flex items-center gap-1 shadow-sm uppercase tracking-widest">
                  {item.type === "image" ? <ImageIcon className="w-3 h-3" /> : <VideoIcon className="w-3 h-3" />}
                  {item.format}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>{item.support}</span>
                  </div>
                  <FileCode className="w-5 h-5 text-slate-200" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
