import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Building2, 
  ShieldCheck, 
  HeartPulse, 
  Factory, 
  Hotel, 
  ShoppingBag, 
  Film, 
  Zap, 
  Cpu,
  X,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const industries = [
  {
    id: "banking",
    title: "Banking & Financial Services",
    description: "Digital transformation for modern banking, fintech, and investment platforms.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&w=800&q=80",
    fullContent: "We architect robust financial data ecosystems focusing on high-availability design and secure ETL pipelines. Our expertise covers enterprise datawarehousing (EDW), rigorous data governance for regulatory compliance, and advanced analytics for real-time risk reporting and fraud detection. We ensure seamless maintenance of mission-critical financial systems."
  },
  {
    id: "insurance",
    title: "Insurance",
    description: "Streamlining claims, underwriting, and customer engagement with data-driven solutions.",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
    fullContent: "Our insurance solutions leverage modern data architecture to automate claims processing. We design scalable ETL workflows to integrate disparate data sources into unified datawarehouses. Our focus includes data quality governance, predictive modeling for underwriting, and comprehensive reporting dashboards for operational visibility and security."
  },
  {
    id: "healthcare",
    title: "Health Care & Life Sciences",
    description: "Innovative technology for patient care, clinical research, and health data management.",
    icon: HeartPulse,
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
    fullContent: "We design HIPAA-compliant data architectures for healthcare providers. Our services include secure ETL for clinical data integration, robust data governance for patient privacy, and enterprise Datawarehouse solutions. We provide advanced analytics for clinical research reporting and long-term maintenance of health information systems."
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    description: "Smart factory solutions, supply chain optimization, and industrial IoT integration.",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    fullContent: "We architect industrial IoT data designs to enable smart manufacturing. Our expertise includes real-time ETL for sensor data, supply chain data management, and centralized Datawarehouse systems. We focus on data governance for operational consistency, predictive maintenance reporting, and secure industrial network design."
  },
  {
    id: "hospitality",
    title: "Hospitality",
    description: "Enhancing guest experiences and operational efficiency for hotels and travel services.",
    icon: Hotel,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    fullContent: "Our hospitality data architecture focuses on guest 360-degree views. We implement efficient ETL processes for booking and loyalty data, ensuring strong data governance and security. Our Datawarehouse solutions enable sophisticated revenue management reporting and analytics to drive personalized guest experiences."
  },
  {
    id: "retail",
    title: "Retail",
    description: "Omnichannel commerce, inventory management, and personalized retail analytics.",
    icon: ShoppingBag,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    fullContent: "We design omnichannel retail data architectures that synchronize inventory and sales. Our services include high-volume ETL for transaction data, robust data management for supply chains, and cloud-based Datawarehouse solutions. We emphasize data governance for customer privacy and advanced analytics for market trend reporting."
  },
  {
    id: "media",
    title: "Media & Entertainment",
    description: "Digital content delivery, streaming platforms, and audience engagement tools.",
    icon: Film,
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",
    fullContent: "We architect scalable content delivery data designs. Our expertise covers streaming data ETL, audience behavior data management, and secure Datawarehouse implementations. We focus on data governance for content rights, real-time engagement reporting, and high-performance system maintenance."
  },
  {
    id: "energy",
    title: "Energy & Utilities",
    description: "Smart grid management, renewable energy integration, and utility optimization.",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
    fullContent: "We design smart grid data architectures for optimized utility management. Our services include real-time ETL for consumption data, secure data management for critical infrastructure, and enterprise Datawarehouse solutions. We prioritize data governance for grid reliability and comprehensive sustainability reporting."
  },
  {
    id: "semiconductors",
    title: "Semi Conductors",
    description: "Advanced engineering solutions for chip design, manufacturing, and supply chain.",
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    fullContent: "We architect specialized data designs for semiconductor manufacturing. Our expertise includes complex ETL for yield analysis, secure supply chain data management, and robust Datawarehouse systems. We focus on data governance for IP protection, manufacturing performance reporting, and secure system maintenance."
  }
];

export function Industries() {
  const [selectedIndustry, setSelectedIndustry] = useState<typeof industries[0] | null>(null);

  return (
    <section id="industries" className="h-full w-full py-12 md:py-16 px-6 bg-slate-50 flex flex-col justify-center pt-24 md:pt-0">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-8 md:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold mb-3 text-slate-900"
          >
            Industries We <span className="text-sigma-blue">Serve</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto font-medium"
          >
            We deliver deep domain expertise and innovative technology solutions across a wide spectrum of industries.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setSelectedIndustry(industry)}
              className="group cursor-pointer relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={industry.image} 
                  alt={industry.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <div className="p-1.5 bg-white/20 backdrop-blur-md rounded-lg">
                    <industry.icon className="w-3.5 h-3.5 text-white" />
                  </div>
                  <h3 className="text-xs md:text-sm font-bold truncate">{industry.title}</h3>
                </div>
                <div className="flex items-center gap-1 text-sigma-blue font-bold text-[10px]">
                  Details <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full Write-up Modal */}
      <AnimatePresence>
        {selectedIndustry && (
          <div className="fixed inset-0 z-[100] flex items-start md:items-center justify-center px-6 overflow-y-auto py-12 md:py-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIndustry(null)}
              className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-3xl bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col max-h-[90vh] md:max-h-none"
            >
              <button 
                onClick={() => setSelectedIndustry(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-50 p-2 bg-white/80 backdrop-blur-md hover:bg-slate-100 rounded-full shadow-lg transition-all"
              >
                <X className="w-5 h-5 md:w-6 md:h-6 text-slate-600" />
              </button>
              
              <div className="overflow-y-auto scrollbar-hide">
                <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-64 md:h-auto">
                  <img 
                    src={selectedIndustry.image} 
                    alt={selectedIndustry.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-10 md:p-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-sigma-blue/10 rounded-2xl">
                      <selectedIndustry.icon className="w-8 h-8 text-sigma-blue" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900">{selectedIndustry.title}</h3>
                  </div>
                  <div className="space-y-6">
                    <p className="text-slate-600 leading-relaxed text-lg font-medium">
                      {selectedIndustry.description}
                    </p>
                    <div className="h-px w-full bg-slate-100" />
                    <p className="text-slate-500 leading-relaxed">
                      {selectedIndustry.fullContent}
                    </p>
                    <Button 
                      onClick={() => setSelectedIndustry(null)}
                      className="w-full rounded-full py-6 text-lg font-bold bg-gradient-to-b from-white via-slate-100 to-slate-200 text-slate-900 border border-slate-200 hover:from-white hover:to-slate-100 transition-all duration-300 shadow-md"
                    >
                      Close Details
                    </Button>
                  </div>
                </div>
              </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
