import { motion } from 'motion/react';
import { GraduationCap, Calendar, Award, Trophy } from 'lucide-react';

const education = [
  {
    degree: 'B.Tech in Computer Engineering',
    institution: 'AISSMS Institute Of Information Technology, Pune',
    duration: 'Sep 2024 – May 2027',
    grade: 'CGPA: 7.85',
    icon: GraduationCap,
    gradient: 'from-violet-500 to-purple-500',
    status: 'Current',
  },
  {
    degree: 'Diploma in Computer Engineering',
    institution: 'Government Polytechnic Jintur, Parbhani',
    duration: 'Aug 2021 - May 2024',
    grade: 'Percentage: 86%',
    icon: Trophy,
    gradient: 'from-emerald-500 to-teal-500',
    status: 'Completed',
  },
  {
    degree: 'SSC',
    institution: 'Bhartiya Bal Vidya Mandir, Parbhani',
    duration: 'Jun 2020 – Apr 2021',
    grade: 'Percentage: 90.40%',
    icon: Award,
    gradient: 'from-blue-500 to-cyan-500',
    status: 'Completed',
  },
];

export function Education() {
  return (
    <section id="education" className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-gradient-to-r from-violet-500/10 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-gradient-to-l from-purple-500/10 to-transparent rounded-full blur-3xl animate-float-delayed" />
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
              Academic Background
            </span>
          </motion.div>
          <h2 className="font-['Space_Grotesk'] text-4xl sm:text-5xl mb-4 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Education Journey
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Academic excellence and continuous learning
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line with gradient */}
            <div className="absolute left-6 md:left-10 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 via-purple-500 to-pink-500" />

            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-16 md:pl-24 pb-12 last:pb-0"
              >
                {/* Animated timeline dot */}
                <motion.div 
                  className={`absolute left-[1.1rem] md:left-[2.1rem] top-3 w-5 h-5 rounded-full bg-gradient-to-br ${edu.gradient} ring-4 ring-white dark:ring-gray-950 shadow-lg z-10`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300, delay: index * 0.2 + 0.2 }}
                >
                  <motion.div
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${edu.gradient}`}
                    animate={{ 
                      scale: [1, 1.8, 1],
                      opacity: [0.5, 0, 0.5]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                  />
                </motion.div>

                <motion.div
                  whileHover={{ y: -5, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-violet-500 dark:hover:border-violet-500 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    {/* Icon */}
                    <motion.div 
                      className={`p-3 bg-gradient-to-br ${edu.gradient} rounded-xl shadow-lg flex-shrink-0`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <edu.icon className="text-white" size={28} />
                    </motion.div>

                    <div className="flex-1">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-['Space_Grotesk'] text-lg md:text-xl text-gray-900 dark:text-white">
                              {edu.degree}
                            </h3>
                            <motion.span
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.2 + 0.4 }}
                              className={`px-2 py-1 text-xs rounded-full ${
                                edu.status === 'Current' 
                                  ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 border border-green-500/20'
                                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                              }`}
                            >
                              {edu.status}
                            </motion.span>
                          </div>
                          <p className="text-gray-700 dark:text-gray-300">
                            {edu.institution}
                          </p>
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className={`px-4 py-2 bg-gradient-to-r ${edu.gradient} bg-clip-text text-transparent border-2 border-gray-200 dark:border-gray-700 rounded-xl text-sm`}
                        >
                          {edu.grade}
                        </motion.div>
                      </div>

                      {/* Duration */}
                      <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <Calendar size={14} className="text-violet-500" />
                        <span>{edu.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Hover gradient effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${edu.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity pointer-events-none`} />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
