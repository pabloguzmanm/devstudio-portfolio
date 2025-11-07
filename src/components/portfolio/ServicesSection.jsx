import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, Globe, Zap, Database, Search } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Desarrollo Web',
    description: 'Aplicaciones web modernas y escalables con las últimas tecnologías.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Smartphone,
    title: 'Apps Móviles',
    description: 'Experiencias móviles nativas y multiplataforma de alto rendimiento.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Globe,
    title: 'E-Commerce',
    description: 'Plataformas de comercio electrónico potentes y fáciles de usar.',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: Zap,
    title: 'Optimización',
    description: 'Mejoramos el rendimiento y la velocidad de tu plataforma existente.',
    gradient: 'from-green-500 to-teal-500'
  },
  {
    icon: Database,
    title: 'Backend & APIs',
    description: 'Arquitecturas backend robustas y APIs RESTful escalables.',
    gradient: 'from-indigo-500 to-blue-500'
  },
  {
    icon: Search,
    title: 'Posicionamiento Web',
    description: 'Estrategias SEO avanzadas para mejorar tu visibilidad en Google y atraer más clientes.',
    gradient: 'from-emerald-500 to-teal-500'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Nuestros Servicios
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Soluciones integrales de desarrollo para impulsar tu negocio al siguiente nivel
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
              
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full transition-all duration-300 group-hover:border-white/20">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Animated corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}