import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  TrendingUp,
  Award,
  X,
  Download,
} from "lucide-react";
import { useState } from "react";

/* ---------------- TYPES ---------------- */
type CertificateItem = {
  title: string;
  issuer: string;
  period: string;
  image: string;
};

/* ---------------- DATA ---------------- */
const certificates: CertificateItem[] = [
  {
    title: "Full Stack Development Internship",
    issuer: "Sumago Infotech",
    period: "June – July 2023",
    image: "/images/sumagocertificate.jpg",
  },
  {
    title: "NodeJs + ExpressJs + MongoDB",
    issuer: "knowledgegate",
    period: "2026",
    image: "images/knowledgeGate.jpg",
  },
];

export function Certificate() {
  const [selectedCertificate, setSelectedCertificate] =
    useState<CertificateItem | null>(null);

  return (
    <section
      id="certificates"
      className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 text-violet-600 dark:text-violet-400 text-sm">
            Certifications
          </span>

          <h2 className="mt-4 font-['Space_Grotesk'] text-4xl sm:text-5xl bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Certifications & Internship
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Verified credentials showcasing hands-on industry experience and
            continuous learning.
          </p>
        </motion.div>

        {/* Certificate Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl">
                  <Award className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-['Space_Grotesk'] text-xl text-gray-900 dark:text-white">
                    {cert.title}
                  </h3>
                  <p className="text-violet-600 dark:text-violet-400">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
                <Calendar size={16} />
                <span>{cert.period}</span>
              </div>

              <button
                onClick={() => setSelectedCertificate(cert)}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-500 to-purple-500 text-white rounded-lg hover:from-violet-600 hover:to-purple-600 transition-all shadow-md"
              >
                <Award size={18} />
                View Certificate
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{ scale: 0.85, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.85, y: 40 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
                <div>
                  <h3 className="font-['Space_Grotesk'] text-xl text-gray-900 dark:text-white">
                    {selectedCertificate.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {selectedCertificate.issuer} •{" "}
                    {selectedCertificate.period}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Image */}
              <div className="p-6 overflow-auto max-h-[70vh] flex justify-center">
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  style={{
                        width: "600px", // force small size
                        maxWidth: "90%", // responsive fallback
                        height: "auto",
                      }}
                  className="rounded-lg shadow-md max-w-full border"
                />
              </div>

              {/* Footer */}
              <div className="flex justify-end gap-3 p-4 border-t dark:border-gray-700">
                <a
                  href={selectedCertificate.image}
                  download
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                  <Download size={16} />
                  Download
                </a>

                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="px-4 py-2 bg-violet-500 text-white rounded-lg hover:bg-violet-600"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
