import { motion } from "motion/react";
import { Target, Eye, Shield, Award, Zap, Crosshair, Cpu, Truck } from "lucide-react";

const principles = [
  {
    title: "Our Mission",
    description: "To accelerate intelligent transformation through precision engineering and deep technical expertise, empowering enterprises to thrive in the AI era.",
    icon: Target,
    color: "text-sigma-blue",
    bg: "bg-sigma-blue/10"
  },
  {
    title: "Our Vision",
    description: "To be the global catalyst for future-ready growth, setting the standard for accuracy, innovation, and measurable impact in technology consultancy.",
    icon: Eye,
    color: "text-sigma-blue",
    bg: "bg-sigma-blue/10"
  },
  {
    title: "Ethics & Values",
    description: "Built on integrity, transparency, and accountability. We operate with a discipline that ensures excellence in every engagement.",
    icon: Shield,
    color: "text-sigma-blue",
    bg: "bg-sigma-blue/10"
  }
];

const pillars = [
  {
    title: "Commitment",
    description: "Unwavering dedication to our clients' long-term success and value creation.",
    icon: Award
  },
  {
    title: "Precision",
    description: "Meticulous accuracy and discipline in every line of code and strategic roadmap.",
    icon: Crosshair
  },
  {
    title: "Technology",
    description: "Leveraging a world-class ecosystem to build resilient and scalable solutions.",
    icon: Cpu
  },
  {
    title: "Delivery",
    description: "Consistent, high-impact results delivered with clarity and professional excellence.",
    icon: Truck
  }
];

export function About() {
  return (
    <section id="about" className="h-full w-full py-12 md:py-16 px-6 overflow-hidden bg-white flex flex-col justify-center pt-24 md:pt-0">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12 md:mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sigma-blue font-bold tracking-[0.2em] uppercase text-[10px] mb-2 block"
          >
            About <span className="text-sigma-blue">Sigma</span><span className="text-sigma-yellow italic">Next</span>
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-slate-900 mb-4"
          >
            The Catalyst for <span className="text-sigma-blue">Intelligent</span> Growth
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-slate-500 max-w-3xl mx-auto font-medium"
          >
            <span className="text-sigma-blue">Sigma</span><span className="text-sigma-yellow italic">Next</span> is a premier technology consultancy dedicated to precision engineering and strategic innovation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 md:mb-16">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-500"
            >
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl ${p.bg} flex items-center justify-center mb-6`}>
                <p.icon className={`w-5 h-5 md:w-6 md:h-6 ${p.color}`} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">{p.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium line-clamp-3">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden border border-slate-100">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sigma-blue/5 rounded-full blur-3xl" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight">
                Our Core Pillars of <span className="text-sigma-blue">Professional Excellence</span>
              </h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 font-medium">
                We operate at the intersection of talent and discipline. Our approach is defined by four fundamental pillars that ensure every engagement delivers long-term value.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-2 p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-2">
                    <pillar.icon className="w-4 h-4 text-sigma-blue" />
                    <h4 className="text-sm md:text-base font-bold text-slate-900">{pillar.title}</h4>
                  </div>
                  <p className="text-slate-500 text-[10px] md:text-xs leading-relaxed font-medium line-clamp-2">
                    {pillar.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

