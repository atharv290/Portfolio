import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, MapPin, TrendingUp, Award, X, Download } from 'lucide-react';
import { useState } from 'react';

export function Experience() {
  const [showCertificate, setShowCertificate] = useState(false);

  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
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
              Professional Journey
            </span>
          </motion.div>
          <h2 className="font-['Space_Grotesk'] text-4xl sm:text-5xl mb-4 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Building expertise through hands-on industry experience
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Timeline line with gradient */}
            <div className="absolute left-6 md:left-10 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 via-purple-500 to-pink-500" />

            {/* Experience Card */}
            <div className="relative pl-16 md:pl-24 pb-12">
              {/* Animated timeline dot */}
              <motion.div 
                className="absolute left-[1.1rem] md:left-[2.1rem] top-3 w-5 h-5 rounded-full bg-gradient-to-br from-violet-500 to-purple-500 ring-4 ring-white dark:ring-gray-900 shadow-lg"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 to-purple-500"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>

              <motion.div
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 hover:border-violet-500 dark:hover:border-violet-500 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className="p-3 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl shadow-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Briefcase className="text-white" size={24} />
                    </motion.div>
                    <div>
                      <h3 className="font-['Space_Grotesk'] text-xl md:text-2xl text-gray-900 dark:text-white mb-1">
                        Full Stack Development Intern
                      </h3>
                      <p className="text-lg bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                        Sumago Infotech
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Calendar size={16} className="text-violet-500" />
                      <span>June 2023 - July 2023</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <MapPin size={16} className="text-violet-500" />
                      <span>Remote</span>
                    </div>
                  </div>
                </div>

                {/* Key achievements */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="text-violet-500" size={20} />
                    <h4 className="font-['Space_Grotesk'] text-gray-900 dark:text-white">
                      Key Responsibilities
                    </h4>
                  </div>
                  <div className="space-y-3">
                    {[
                      'Developed end-to-end web modules under senior developer guidance using HTML, CSS, JavaScript, and backend frameworks',
                      'Gained hands-on experience in API development, database handling, and deploying scalable applications',
                      'Collaborated with peers to deliver functional prototypes within deadlines'
                    ].map((responsibility, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex gap-3 group/item"
                      >
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 flex-shrink-0 group-hover/item:scale-150 transition-transform" />
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {responsibility}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Tech stack */}
                <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-sm text-gray-600 dark:text-gray-400 mr-2">Technologies:</span>
                    {['HTML', 'CSS', 'JavaScript', 'Backend Frameworks', 'RESTful APIs', 'Database Management'].map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-3 py-1 text-xs bg-gradient-to-r from-violet-500/10 to-purple-500/10 text-violet-600 dark:text-violet-400 rounded-lg border border-violet-500/20"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Certificate Button */}
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowCertificate(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-lg hover:from-violet-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-xl"
                  >
                    <Award size={18} />
                    <span>View Internship Certificate</span>
                  </motion.button>
                </div>

                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity pointer-events-none" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {showCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowCertificate(false)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-br from-violet-500 to-purple-500 rounded-lg">
                    <Award className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-['Space_Grotesk'] text-xl text-gray-900 dark:text-white">
                      Internship Certificate
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Sumago Infotech • June - July 2023
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowCertificate(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <X className="text-gray-600 dark:text-gray-400" size={24} />
                </button>
              </div>

              {/* Certificate Image */}
              <div className="relative overflow-auto max-h-[70vh] p-4">
                <div className="flex flex-col items-center">
                  {/* Placeholder for certificate image - Replace with your actual certificate image */}
                  <div className="w-full max-w-3xl aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-xl border-4 border-dashed border-gray-300 dark:border-gray-600 flex flex-col items-center justify-center p-8 mb-4">
                    <Award size={64} className="text-gray-400 dark:text-gray-500 mb-4" />
                    <p className="text-gray-500 dark:text-gray-400 text-center text-lg mb-2">
                      Your Internship Certificate Image
                    </p>
                    <p className="text-gray-400 dark:text-gray-500 text-center text-sm">
                      
                    </p>
                  </div>
                  
                  {/* Image description */}
                  <div className="text-center max-w-2xl">
                    <h4 className="font-['Space_Grotesk'] text-lg text-gray-900 dark:text-white mb-2">
                      Certificate of Completion
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      This certificate is awarded to <span className="font-semibold text-violet-600 dark:text-violet-400">Atharva Joshi</span> for successfully completing the Full Stack Development Internship at Sumago Infotech.
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center mb-4">
                      {['Full Stack Development', 'Web Development', 'API Integration', 'Database Management'].map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex justify-between items-center p-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => setShowCertificate(false)}
                  className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Close
                </button>
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-lg hover:from-violet-600 hover:to-purple-600 transition-all"
                  >
                    <Download size={18} />
                    Download Certificate
                  </motion.button>
                  <button
                    onClick={() => setShowCertificate(false)}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    Done
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}