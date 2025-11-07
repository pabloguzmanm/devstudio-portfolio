// src/components/portfolio/ProjectsSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Sitio Web IA',
    description: 'Sitio web moderno optimizado con inteligencia artificial.',
    image: '/proyecto1.png',
    tags: ['PHP', 'JavaScript', 'CSS', 'HTML'],
    url: 'https://www.dubist.io'
  },
  {
    title: 'Plataforma E-Commerce',
    description: 'Plataforma E-Commerce con integración de woocommerce.',
    image: '/proyecto2.png',
    tags: ['PHP', 'JavaScript', 'WooCommerce', 'CSS', 'HTML','MySQL'],
    url: 'https://www.fulfillmed.cl'
  },
  {
    title: 'Landing Page',
    description: 'Landing Page para profesores en linea.',
    image: '/proyecto3.png',
    tags: ['PHP', 'JavaScript', 'CSS', 'HTML'],
    url: 'https://www.profesores.dubist.io/'
  },
  {
    title: 'Sitio Web',
    description: 'Sitio web corporativo.',
    image: '/proyecto4.png',
    tags: ['PHP', 'JavaScript', 'CSS', 'HTML', 'MySQL'],
    url: 'https://www.ceciliaporta.cl'
  },
  {
    title: 'Landing Page',
    description: 'Landing Page para emprendimiento.',
    image: '/proyecto5.png',
    tags: ['Astro', 'Vite', 'HTML', 'CSS', 'JavaScript','Markdown'],
    url: 'https://www.delomai.cl'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const item = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }
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
            <motion.a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={item}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl block cursor-pointer bg-white/5 backdrop-blur-sm border border-white/10"
            >
              {/* IMAGEN CON ZOOM */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              </div>

              {/* CONTENIDO */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </div>
                
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}