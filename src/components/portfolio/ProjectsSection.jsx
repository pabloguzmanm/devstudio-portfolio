import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Sitio Web IA',
    description: 'Sitio web moderno optimizado con inteligencia artificial.',
    image: '/proyecto1.png',
    tags: ['PHP', 'JavaScript', 'CSS', 'HTML'],
    gradient: 'from-blue-600 to-cyan-600'
  },
  {
    title: 'Plataforma E-Commerce',
    description: 'Plataforma E-Commerce con integración de woocommerce.',
    image: '/proyecto2.png',
    tags: ['PHP', 'JavaScript', 'WooCommerce', 'CSS', 'HTML','MySQL'],
    gradient: 'from-purple-600 to-pink-600'
  },
  {
    title: 'Landing Page',
    description: 'Landing Page para profesores en linea.',
    image: '/proyecto3.png',
    tags: ['PHP', 'JavaScript', 'CSS', 'HTML'],
    gradient: 'from-orange-600 to-red-600'
  },
  {
    title: 'Sitio Web',
    description: 'Sitio web corporativo.',
    image: '/proyecto4.png',
    tags: ['PHP', 'JavaScript', 'CSS', 'HTML', 'MySQL'],
    gradient: 'from-green-600 to-teal-600'
  },
  {
    title: 'Landing Page',
    description: 'Landing Page para emprendimiento.',
    image: '/proyecto5.png',
    tags: ['Astro', 'Vite', 'HTML', 'CSS', 'JavaScript','Markdown'],
    gradient: 'from-yellow-600 to-cyan-600'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Proyectos Destacados
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Algunos de nuestros trabajos más recientes que muestran nuestra experiencia
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10`} />
              
              {/* Image container */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative bg-white/5 backdrop-blur-sm border-t border-white/10 p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
                    {project.title}
                  </h3>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    className={`p-2 rounded-lg bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-all duration-300`}
                  >
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </motion.div>
                </div>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: tagIndex * 0.1 }}
                      className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Hover border effect */}
              <div className={`absolute inset-0 border-2 border-transparent group-hover:border-gradient rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Botón "Ver Todos los Proyectos" ELIMINADO */}
      </div>
    </section>
  );
}