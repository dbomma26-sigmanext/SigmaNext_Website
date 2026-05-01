import { motion } from "motion/react";
import {
  Database,
  ShieldCheck,
  BarChart3,
  Settings,
  CheckCircle2,
  Cpu,
  ArrowUpRight,
  Code
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
    title: "Java Development",
    description: "Expert Java development services building scalable, robust backend systems and enterprise-grade applications.",
    icon: Code,
    color: "text-sigma-blue",
    bg: "bg-sigma-blue/10",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
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
  {
    title: "Mobile Apps",
    description: "Custom mobile application development for iOS and Android, focusing on user experience and performance.",
    icon: ArrowUpRight,
    color: "text-sigma-blue",
    bg: "bg-sigma-blue/10",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Data Science",
    description: "Leverage machine learning and predictive modeling to solve complex business problems with data.",
    icon: BarChart3,
    color: "text-sigma-blue",
    bg: "bg-sigma-blue/10",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=1200&q=80"
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
            Our <span className="text-sigma-blue">Best-in-class</span> Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-sm md:text-lg max-w-2xl mx-auto font-medium"
          >
            We deliver leading software and high-impact technology solutions across multiple domains with trustable results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="h-full"
            >
              <Card className="group relative hover:shadow-[0_20px_50px_-12px_rgba(0,86,179,0.2)] transition-all duration-500 border-slate-100 bg-white overflow-hidden h-full shadow-sm rounded-3xl">
                {/* Decorative sparkles on hover */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <motion.div 
                    animate={{ scale: [0, 1, 0], rotate: 45 }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="text-sigma-yellow"
                  >
                    ✨
                  </motion.div>
                </div>

                <div className="relative h-28 md:h-36 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0 brightness-95 group-hover:brightness-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                  <div className="absolute inset-0 bg-sigma-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <CardHeader className="pb-1 relative z-10 -mt-10 md:-mt-12 px-6">
                  <div className={`w-12 h-12 rounded-2xl ${service.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500 shadow-xl border-2 border-white backdrop-blur-md`}>
                    <service.icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <CardTitle className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-sigma-blue transition-colors duration-300 flex items-center justify-between">
                    {service.title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 text-sigma-blue" />
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed pt-2 text-slate-500 font-medium line-clamp-3">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-2 px-6 pb-6">
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, delay: 0.5 + index * 0.1 }}
                      className={`h-full bg-gradient-to-r from-sigma-blue to-sigma-yellow opacity-80`}
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
