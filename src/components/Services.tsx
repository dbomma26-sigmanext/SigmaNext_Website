import { motion } from "motion/react";
import {
  Database,
  ShieldCheck,
  BarChart3,
  Settings,
  CheckCircle2,
  Cpu,
  ArrowUpRight
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Application Management",
    description: "End-to-end lifecycle management of your enterprise applications, ensuring high availability and performance.",
    icon: Settings,
    color: "text-sigma-blue",
    bg: "bg-sigma-blue/10",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with our advanced analytics and visualization solutions.",
    icon: BarChart3,
    color: "text-sigma-blue",
    bg: "bg-sigma-blue/10",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Data Engineering",
    description: "Robust data pipelines and infrastructure designed to handle massive scale and complex data architectures.",
    icon: Database,
    color: "text-sigma-blue",
    bg: "bg-sigma-blue/10",
    image: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Cyber Security",
    description: "Comprehensive security audits, threat detection, and response strategies to protect your digital assets.",
    icon: ShieldCheck,
    color: "text-sigma-blue",
    bg: "bg-sigma-blue/10",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Quality Management",
    description: "Rigorous testing and quality assurance frameworks to ensure your software meets the highest standards.",
    icon: CheckCircle2,
    color: "text-sigma-blue",
    bg: "bg-sigma-blue/10",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "IT Consultancy",
    description: "Strategic IT roadmap development and technology stack optimization tailored to your business goals.",
    icon: Cpu,
    color: "text-sigma-blue",
    bg: "bg-sigma-blue/10",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
  },
];

export function Services() {
  return (
    <section id="services" className="h-full w-full py-8 md:py-16 px-4 md:px-6 bg-white flex flex-col justify-center pt-24 md:pt-0">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-6 md:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-5xl font-extrabold mb-2 text-slate-900"
          >
            Our Core <span className="text-sigma-blue">Expertise</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-sm md:text-lg max-w-2xl mx-auto font-medium"
          >
            We deliver high-impact technology solutions across multiple domains to help your business stay ahead of the curve.
          </motion.p>
        </div>

        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 overflow-x-auto md:overflow-x-visible pb-6 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="min-w-[85%] md:min-w-0 h-full snap-center"
            >
              <Card className="group relative hover:shadow-[0_0_50px_-12px_rgba(0,86,179,0.3)] hover:-translate-y-1 transition-all duration-500 border-slate-100 bg-white overflow-hidden h-full shadow-sm">
                <div className="relative h-24 md:h-32 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[50%] group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                </div>
                <CardHeader className="pb-1 relative z-10 -mt-6 md:-mt-8 px-4 md:px-6">
                  <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg ${service.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-500 shadow-lg border border-white/50 backdrop-blur-sm`}>
                    <service.icon className={`w-4 h-4 md:w-5 md:h-5 ${service.color}`} />
                  </div>
                  <CardTitle className="text-base md:text-lg font-bold text-slate-900 flex items-center justify-between">
                    {service.title}
                    <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 text-slate-400" />
                  </CardTitle>
                  <CardDescription className="text-xs md:text-sm leading-relaxed pt-1 text-slate-500 font-medium line-clamp-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-1 px-4 md:px-6 pb-3">
                  <div className="h-1 w-full bg-slate-50 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                      className={`h-full ${service.bg.replace('/10', '')} opacity-60`}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
