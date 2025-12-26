import { motion } from 'motion/react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: 'PhotoShare – Full-Stack Photography Management Platform',
    tech: ['Flask', 'MySQL', 'scikit-learn', 'HTML/CSS', 'JavaScript', 'Bootstrap'],
    description: 'Developed a full-stack platform enabling photographers to upload, manage, and sell photos with secure role-based authentication. Integrated a Linear Regression model to auto-estimate photography costs using event, location, and service parameters.',
    highlights: [
      'Secure role-based authentication',
      'ML-powered cost estimation',
      'Photo management system'
    ],
    liveLink: 'https://pdl-v2.onrender.com/',
    github: 'https://github.com/atharv290/PDL-V2',
    image: 'src/components/PhotoShare.png',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    title: 'FHIR-Based Medical Terminology Integrator',
    tech: ['FastAPI', 'Python', 'React.js', 'FHIR R4 APIs'],
    description: 'Built a healthcare interoperability system that maps traditional AYUSH/NAMASTE medical terms to ICD-11 codes using FHIR R4. Implemented ABHA/OAuth 2.0 compliant authentication with multilingual real-time mapping.',
    highlights: [
      'Reduced coding time by 90%',
      'FHIR R4 compliance',
      'Multilingual support'
    ],
    liveLink: 'https://ayushbytes.vercel.app/',
    github: 'https://github.com/atharv290/FHIR_Microservice',
    image: 'src/components/ayushbytes.png',
    gradient: 'from-emerald-500 to-teal-500',
  }
];

export function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-block mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 text-violet-600 dark:text-violet-400 text-sm">
              Featured Work
            </span>
          </motion.div>
          <h2 className="font-['Space_Grotesk'] text-4xl sm:text-5xl mb-4 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Projects & Solutions
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Transforming ideas into impactful digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              isHovered={hoveredIndex === index}
              onHover={() => setHoveredIndex(index)}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  isHovered,
  onHover,
  onLeave,
}: {
  project: typeof projects[0];
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="group relative"
    >
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative h-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300"
      >
        {/* Project Image with overlay */}
        <div className="relative h-64 overflow-hidden">
          <motion.img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.6 }}
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 mix-blend-multiply`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            className="absolute top-4 right-4"
          >
            <div className={`px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent border border-white/20`}>
              Featured
            </div>
          </motion.div>
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-['Space_Grotesk'] text-xl text-gray-900 dark:text-white group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all">
              {project.title}
            </h3>
            <motion.div
              animate={{ rotate: isHovered ? 45 : 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ArrowUpRight className="text-gray-400 group-hover:text-violet-500" size={20} />
            </motion.div>
          </div>

          <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Highlights */}
          <div className="mb-4 space-y-1">
            {project.highlights.map((highlight, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400"
              >
                <div className={`w-1 h-1 rounded-full bg-gradient-to-r ${project.gradient}`} />
                {highlight}
              </motion.div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-violet-500 transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3">
            {project.liveLink !== '#' && (
              <motion.a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r ${project.gradient} text-white rounded-xl shadow-md hover:shadow-lg transition-all text-sm`}
              >
                <ExternalLink size={14} />
                Live Demo
              </motion.a>
            )}
            {project.github !== '#' && (
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-4 py-2.5 border-2 border-gray-300 dark:border-gray-600 rounded-xl hover:border-violet-500 transition-all text-sm"
              >
                <Github size={14} />
              </motion.a>
            )}
          </div>
        </div>

        {/* Animated border gradient */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
          style={{
            background: `linear-gradient(135deg, transparent 0%, rgba(139, 92, 246, 0.1) 100%)`,
          }}
        />
      </motion.div>
    </motion.div>
  );
}
