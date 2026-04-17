import { motion } from "motion/react";
import { CheckCircle2, Users, Target, Layers, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Highly Skilled Talent",
    description: "A team of engineers, data specialists, and cybersecurity experts who operate with precision, accountability, and a commitment to excellence.",
    icon: Users,
    color: "text-sigma-blue",
    bg: "bg-sigma-blue/10"
  },
  {
    title: "Results-Originated Solutions",
    description: "Every engagement begins with outcomes in mind — engineered to be scalable, secure, and aligned with your business goals.",
    icon: Target,
    color: "text-sigma-blue",
    bg: "bg-sigma-blue/10"
  },
  {
    title: "End-to-End Expertise",
    description: "From Application Management to Data Engineering, Data Science, Cybersecurity, and AI-Led Engineering, we deliver integrated solutions that drive real transformation.",
    icon: Layers,
    color: "text-sigma-blue",
    bg: "bg-sigma-blue/10"
  },
  {
    title: "Unwavering Commitment",
    description: "We stand by our work, our clients, and our promise to deliver clarity, confidence, and long-term value.",
    icon: ShieldCheck,
    color: "text-sigma-blue",
    bg: "bg-sigma-blue/10"
  }
];

export function WhyChooseUs() {
  return (
    <section className="h-full w-full py-12 md:py-16 px-6 bg-slate-50/50 overflow-hidden flex flex-col justify-center pt-24 md:pt-0">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-slate-900 leading-tight">
              Why Choose <span className="text-sigma-blue">Sigma</span><span className="text-sigma-yellow italic">Next</span>
            </h2>
            <p className="text-base md:text-lg text-slate-600 mb-6 leading-relaxed font-medium">
              At <span className="text-sigma-blue">Sigma</span><span className="text-sigma-yellow italic">Next</span>, we bring together precision engineering, deep technical expertise, and a results-driven mindset to help enterprises accelerate intelligent transformation.
            </p>
            
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 mb-6">
              <p className="text-lg md:text-xl font-bold text-slate-900 italic leading-relaxed">
                "<span className="text-sigma-blue">Sigma</span><span className="text-sigma-yellow italic">Next</span> is more than a technology partner — we are your catalyst for intelligent, future-ready growth."
              </p>
            </div>

            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">What sets us apart:</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 md:p-8 rounded-[2rem] border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group"
              >
                <div className={`w-10 h-10 md:w-14 md:h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <feature.icon className={`w-5 h-5 md:w-7 md:h-7 ${feature.color}`} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium line-clamp-3">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
