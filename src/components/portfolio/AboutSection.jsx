import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Rocket } from 'lucide-react';

const stats = [
  { icon: Users, label: 'Clientes Felices', value: '200+' },
  { icon: Rocket, label: 'Proyectos Completados', value: '350+' },
  { icon: Target, label: 'Años de Experiencia', value: '10+' }
];

const fadeInUp = {
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

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  show: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Sobre Nosotros
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Un equipo apasionado dedicado a crear experiencias digitales excepcionales
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
          {/* Left content */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-cyan-500 rounded-2xl blur-2xl opacity-20" />
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Nuestra Misión
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Transformamos ideas en soluciones digitales innovadoras que impulsan 
                  el crecimiento de nuestros clientes. Con más de una década de experiencia, 
                  combinamos creatividad, tecnología de vanguardia y un profundo entendimiento 
                  del negocio para entregar resultados excepcionales.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-20" />
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Nuestra Visión
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Ser el socio tecnológico de referencia para empresas que buscan innovar 
                  y destacar en el mundo digital. Nos esforzamos por estar siempre a la 
                  vanguardia de las tendencias tecnológicas y las mejores prácticas de la industria.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right image */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-cyan-500 to-blue-500 rounded-2xl blur-3xl opacity-20" />
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl overflow-hidden border border-white/20"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
              
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0, rotate: -10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute bottom-8 right-8 bg-gradient-to-r from-green-600 to-cyan-600 rounded-2xl p-6 shadow-2xl"
              >
                <div className="text-3xl font-bold text-white">10+</div>
                <div className="text-sm text-white/80">Años</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats - Premios eliminados */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-cyan-500 rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center transition-all duration-300 group-hover:border-white/20">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300"
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                  className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"
                >
                  {stat.value}
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  className="text-gray-400 text-sm"
                >
                  {stat.label}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}