import { motion } from 'motion/react';
import { useEffect, useState, useRef } from 'react';
import { Code2, Palette, Database, Wrench, Zap } from 'lucide-react';

const skillCategories = [
  {
    name: 'Languages',
    icon: Code2,
    color: 'from-violet-500 to-purple-500',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'Java', level: 85 },
      { name: 'C++', level: 80 },
    ],
  },
  {
    name: 'Frontend',
    icon: Palette,
    color: 'from-pink-500 to-rose-500',
    skills: [
      { name: 'React.js', level: 50 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'JavaScript', level: 85 },
      { name: 'Tailwind', level: 88 },
    ],
  },
  {
    name: 'Backend',
    icon: Zap,
    color: 'from-emerald-500 to-teal-500',
    skills: [
      { name: 'Node.js', level: 82 },
      { name: 'Express', level: 80 },
      { name: 'Flask', level: 85 },
      { name: 'FastAPI', level: 80 },
    ],
  },
  {
    name: 'Databases',
    icon: Database,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'MySQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'PostgreSQL', level: 78 },
    ],
  },
  {
    name: 'Tools',
    icon: Wrench,
    color: 'from-orange-500 to-amber-500',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'VS Code', level: 85 },
      { name: 'RESTful APIs', level: 88 },
      { name: 'DSA', level: 82 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-violet-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-transparent rounded-full blur-3xl" />
      </div>

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
              Tech Stack
            </span>
          </motion.div>
          <h2 className="font-['Space_Grotesk'] text-4xl sm:text-5xl mb-4 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <SkillCategory
              key={category.name}
              category={category}
              index={categoryIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCategory({
  category,
  index,
}: {
  category: typeof skillCategories[0];
  index: number;
}) {
  const Icon = category.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-violet-500 dark:hover:border-violet-500 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      {/* Icon header */}
      <div className="flex items-center gap-3 mb-6">
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className={`p-3 rounded-xl bg-gradient-to-br ${category.color} shadow-lg`}
        >
          <Icon className="text-white" size={24} />
        </motion.div>
        <h3 className="font-['Space_Grotesk'] text-xl text-gray-900 dark:text-white">
          {category.name}
        </h3>
      </div>

      {/* Skills list */}
      <div className="space-y-4">
        {category.skills.map((skill, skillIndex) => (
          <SkillBar
            key={skill.name}
            skill={skill}
            delay={index * 0.1 + skillIndex * 0.05}
            gradient={category.color}
          />
        ))}
      </div>

      {/* Hover effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity pointer-events-none`} />
    </motion.div>
  );
}

function SkillBar({
  skill,
  delay,
  gradient,
}: {
  skill: { name: string; level: number };
  delay: number;
  gradient: string;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-700 dark:text-gray-300">
          {skill.name}
        </span>
        <motion.span 
          className={`text-sm font-medium bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ delay: delay + 0.5 }}
        >
          {skill.level}%
        </motion.span>
      </div>
      <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className={`h-full bg-gradient-to-r ${gradient} rounded-full relative`}
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${skill.level}%` : 0 }}
          transition={{ duration: 1, delay, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
              delay: delay + 1,
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}
