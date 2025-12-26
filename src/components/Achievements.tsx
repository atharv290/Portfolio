import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Award, Star, Sparkles, X, Download, Image as ImageIcon } from 'lucide-react';
import { useState } from 'react';

const achievements = [
  {
    title: '1st Prize',
    subtitle: 'Technical Exhibition',
    institution: 'Government Polytechnic Jintur, Parbhani',
    icon: Trophy,
    color: 'from-yellow-400 via-amber-500 to-orange-500',
    iconBg: 'from-yellow-500 to-orange-500',
    certificate: true,
    description: 'Awarded 1st prize in the annual technical exhibition for innovative project presentation.',
    date: '2023'
  },
  {
    title: 'Top 3 in Class',
    subtitle: 'Academic Excellence',
    institution: 'Consistent Performance',
    icon: Star,
    color: 'from-violet-400 via-purple-500 to-pink-500',
    iconBg: 'from-violet-500 to-purple-500',
    certificate: false
  },
  {
    title: 'Department Topper',
    subtitle: 'Diploma Program',
    institution: 'Computer Engineering',
    icon: Award,
    color: 'from-emerald-400 via-teal-500 to-cyan-500',
    iconBg: 'from-emerald-500 to-teal-500',
    certificate: false
  },
];

export function Achievements() {
  const [showCertificate, setShowCertificate] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handleCertificateClick = (achievement) => {
    setSelectedCertificate(achievement);
    setShowCertificate(true);
  };

  const closeCertificate = () => {
    setShowCertificate(false);
    setTimeout(() => setSelectedCertificate(null), 300);
  };

  return (
    <section id="achievements" className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      {/* Floating elements */}
      <motion.div
        className="absolute top-20 right-20 text-violet-500/20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Sparkles size={64} />
      </motion.div>

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
              Recognition
            </span>
          </motion.div>
          <h2 className="font-['Space_Grotesk'] text-4xl sm:text-5xl mb-4 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Awards & Achievements
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Recognition for dedication and outstanding performance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`relative h-full bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-violet-500 dark:hover:border-violet-500 shadow-lg hover:shadow-2xl transition-all duration-300 text-center overflow-hidden ${
                  achievement.certificate ? 'cursor-pointer' : ''
                }`}
                onClick={() => achievement.certificate && handleCertificateClick(achievement)}
              >
                {/* Certificate indicator */}
                {achievement.certificate && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute top-3 right-3 z-10"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-sm animate-pulse" />
                      <ImageIcon 
                        size={20} 
                        className="relative text-white p-1 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full"
                      />
                    </div>
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-ping" />
                  </motion.div>
                )}

                {/* Background gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Decorative corner */}
                <motion.div
                  className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${achievement.color} opacity-10 rounded-bl-full`}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                />

                {/* Icon with animation */}
                <div className="mb-6 flex justify-center relative">
                  <motion.div 
                    className={`relative p-5 bg-gradient-to-br ${achievement.iconBg} rounded-2xl shadow-xl ${
                      achievement.certificate ? 'group-hover:scale-110' : ''
                    } transition-transform duration-300`}
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.6 }}
                  >
                    <achievement.icon className="text-white" size={36} />
                    
                    {/* Pulsing ring */}
                    <motion.div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${achievement.iconBg}`}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3
                      }}
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className={`font-['Space_Grotesk'] text-xl md:text-2xl mb-1 bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                    {achievement.title}
                  </h3>
                  <p className="text-gray-900 dark:text-white mb-3">
                    {achievement.subtitle}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {achievement.institution}
                  </p>
                  
                  {/* Certificate click hint */}
                  {achievement.certificate && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-xs text-yellow-600 dark:text-yellow-400 flex items-center justify-center gap-1 mt-2"
                    >
                      <ImageIcon size={12} />
                      Click to view certificate
                    </motion.div>
                  )}

                  {/* Decorative line */}
                  <motion.div
                    className={`mt-6 h-1 w-0 mx-auto bg-gradient-to-r ${achievement.color} rounded-full group-hover:w-16 transition-all duration-500`}
                  />
                </div>

                {/* Shimmer effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  style={{ willChange: 'transform' }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 grid grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {[
            { number: '3+', label: 'Major Awards' },
            { number: '86%', label: 'Diploma Score' },
            { number: 'Top 3', label: 'Class Rank' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="text-center p-4"
            >
              <div className="text-3xl font-['Space_Grotesk'] bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {showCertificate && selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeCertificate}
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
                  <div className={`p-2 bg-gradient-to-br ${selectedCertificate.iconBg} rounded-lg`}>
                    <selectedCertificate.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="font-['Space_Grotesk'] text-xl text-gray-900 dark:text-white">
                      {selectedCertificate.title} Certificate
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {selectedCertificate.subtitle} • {selectedCertificate.institution}
                    </p>
                  </div>
                </div>
                <button
                  onClick={closeCertificate}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <X className="text-gray-600 dark:text-gray-400" size={24} />
                </button>
              </div>

              {/* Certificate Image */}
              <div className="relative overflow-auto max-h-[70vh] p-6">
                <div className="flex flex-col items-center">
                  {/* Placeholder for certificate image - Replace with your actual certificate image */}
                  <div className="w-full max-w-3xl aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-xl border-4 border-dashed border-gray-300 dark:border-gray-600 flex flex-col items-center justify-center p-8 mb-6">
                    <div className={`p-6 bg-gradient-to-br ${selectedCertificate.iconBg} rounded-2xl mb-4 shadow-xl`}>
                      <Trophy size={48} className="text-white" />
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-center text-lg mb-2">
                      {selectedCertificate.title} Certificate Image
                    </p>
                    <p className="text-gray-400 dark:text-gray-500 text-center text-sm">
                      {selectedCertificate.description || 'Replace this with your actual certificate image'}
                    </p>
                  </div>
                  
                  {/* Certificate details */}
                  <div className="text-center max-w-2xl">
                    <div className={`font-['Space_Grotesk'] text-2xl bg-gradient-to-r ${selectedCertificate.color} bg-clip-text text-transparent mb-3`}>
                      Certificate of Achievement
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg">
                      This certificate is proudly awarded to <span className="font-bold">Atharva Joshi</span> for outstanding achievement in
                    </p>
                    <div className="flex flex-col items-center gap-2 mb-6">
                      <div className={`text-3xl font-bold bg-gradient-to-r ${selectedCertificate.color} bg-clip-text text-transparent`}>
                        {selectedCertificate.title}
                      </div>
                      <div className="text-xl text-gray-900 dark:text-white">
                        {selectedCertificate.subtitle}
                      </div>
                      <div className="text-gray-600 dark:text-gray-400">
                        {selectedCertificate.institution}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-500">
                        Award Date: {selectedCertificate.date || '2023'}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 justify-center mb-6">
                      {['Technical Excellence', 'Innovation', 'Presentation Skills', 'Project Development'].map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-gradient-to-r from-amber-100 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-900/30 text-amber-700 dark:text-amber-300 rounded-full text-sm">
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
                  onClick={closeCertificate}
                  className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Close
                </button>
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-lg hover:from-yellow-600 hover:to-orange-600 transition-all"
                  >
                    <Download size={18} />
                    Download Certificate
                  </motion.button>
                  <button
                    onClick={closeCertificate}
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