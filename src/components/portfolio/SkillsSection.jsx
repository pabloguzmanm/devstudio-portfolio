// src/components/portfolio/SkillsSection.jsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Database, Palette, Cloud, Search } from 'lucide-react'; // Search = SEO
import Image from 'next/image';

// === CATEGORÍAS ACTUALIZADAS: Seguridad → Posicionamiento Web ===
const skillCategories = [
  {
    icon: Code2,
    title: 'Lenguajes',
    gradient: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'JavaScript', src: '/icons/javascript-original.svg' },
      { name: 'TypeScript', src: '/icons/typescript-original.svg' },
      { name: 'Python', src: '/icons/python-original.svg' },
      { name: 'Java', src: '/icons/java-original.svg' }
    ]
  },
  {
    icon: Layout,
    title: 'Frameworks',
    gradient: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'React', src: '/icons/react-original.svg' },
      { name: 'Node.js', src: '/icons/nodejs-original.svg' },
      { name: 'Next.js', src: '/icons/nextjs-original.svg' },
      { name: 'Vue.js', src: '/icons/vuejs-original.svg' }
    ]
  },
  {
    icon: Database,
    title: 'Bases de Datos',
    gradient: 'from-green-500 to-teal-500',
    skills: [
      { name: 'PostgreSQL', src: '/icons/postgresql-original.svg' },
      { name: 'MongoDB', src: '/icons/mongodb-original.svg' },
      { name: 'Redis', src: '/icons/redis-original.svg' },
      { name: 'MySQL', src: '/icons/mysql-original.svg' }
    ]
  },
  {
    icon: Palette,
    title: 'Diseño',
    gradient: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Figma', src: '/icons/figma-original.svg' },
      { name: 'Adobe XD', src: '/icons/xd-plain.svg' },
      { name: 'Sketch', src: '/icons/sketch-original.svg' },
      { name: 'Photoshop', src: '/icons/photoshop-plain.svg' }
    ]
  },
  {
    icon: Cloud,
    title: 'DevOps',
    gradient: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'AWS', src: '/icons/aws-original.svg' },
      { name: 'Docker', src: '/icons/docker-original.svg' },
      { name: 'Kubernetes', src: '/icons/kubernetes-plain.svg' },
      { name: 'CI/CD', src: '/icons/gitlab-original.svg' }
    ]
  },
  {
    icon: Search, // Ícono de lupa = SEO
    title: 'Posicionamiento Web',
    gradient: 'from-emerald-500 to-teal-600',
    skills: [
      { name: 'SEO', src: '/icons/seo.svg' },
      { name: 'Google Analytics', src: '/icons/google_analytics-icon.svg' },
      { name: 'SEMrush', src: '/icons/semrush.svg' },
      { name: 'Google Ads', src: '/icons/Google_Ads_logo.png' }
    ]
  }
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.15 } } };
const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Nuestras Competencias
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Dominamos las tecnologías más demandadas
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, i) => (
            <motion.div key={i} variants={item} whileHover={{ y: -8 }} className="group relative">
              <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity`} />
              
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full group-hover:border-white/20 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.gradient} flex items-center justify-center shadow-lg`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.15, y: -4 }}
                      viewport={{ once: true }}
                      transition={{ delay: j * 0.1 }}
                      className="flex flex-col items-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all"
                    >
                      <div className="w-8 h-8 mb-2 relative">
                        <Image
                          src={skill.src}
                          alt={skill.name}
                          width={32}
                          height={32}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-xs font-medium text-gray-300">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}