import { motion } from "motion/react";
import { 
  Terminal, 
  Cloud, 
  Snowflake as SnowflakeIcon, 
  Database, 
  Flame, 
  Cpu, 
  Box, 
  Hexagon, 
  Layers,
  Brain,
  Zap,
  HardDrive
} from "lucide-react";

const techIcons = [
  { icon: Terminal, name: "Python", color: "text-sigma-blue", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { icon: Cloud, name: "AWS", color: "text-sigma-blue", image: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" },
  { icon: SnowflakeIcon, name: "Snowflake", color: "text-sigma-blue", image: "https://www.vectorlogo.zone/logos/snowflake/snowflake-icon.svg" },
  { icon: Layers, name: "Databricks", color: "text-sigma-blue", image: "https://www.vectorlogo.zone/logos/databricks/databricks-icon.svg" },
  { icon: Database, name: "PostgreSQL", color: "text-sigma-blue", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { icon: HardDrive, name: "MongoDB", color: "text-sigma-blue", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { icon: Zap, name: "Redis", color: "text-sigma-blue", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { icon: Brain, name: "PyTorch", color: "text-sigma-blue", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
  { icon: Cpu, name: "TensorFlow", color: "text-sigma-blue", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { icon: Flame, name: "Scikit-learn", color: "text-sigma-blue", image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
  { icon: Box, name: "Docker", color: "text-sigma-blue", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { icon: Hexagon, name: "Kubernetes", color: "text-sigma-blue", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
];

export function TechEcosystem() {
  return (
    <section id="technology" className="h-full w-full py-12 md:py-16 px-6 bg-white overflow-hidden flex flex-col justify-center pt-24 md:pt-0">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight tracking-tighter text-slate-900"
          >
            Our Technology <span className="text-sigma-blue">Ecosystem</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            We leverage the most advanced tools and frameworks to build scalable, high-performance solutions for the modern enterprise.
          </motion.p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-6">
          {techIcons.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="group relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 flex flex-col items-center justify-center transition-all duration-500 group-hover:bg-white group-hover:border-sigma-blue/30 group-hover:shadow-[0_20px_40px_-15px_rgba(0,86,179,0.15)] p-3 md:p-4">
                {/* Background Logo Symbol */}
                <img 
                  src={tech.image} 
                  alt={tech.name}
                  className="absolute inset-0 w-full h-full object-contain p-4 md:p-8 opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  referrerPolicy="no-referrer"
                />
                
                <span className="absolute bottom-2 md:bottom-4 text-[8px] md:text-[10px] font-black uppercase tracking-widest text-slate-600 transition-all duration-300 relative z-10">
                  {tech.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
