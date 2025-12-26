import { Github, Mail, Phone, Heart, ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Branding */}
          <div className="md:col-span-2">
            <motion.h3 
              className="font-['Space_Grotesk'] text-3xl mb-4 bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Atharva Joshi
            </motion.h3>
            <p className="text-gray-400 text-sm mb-6 max-w-md leading-relaxed">
              Computer Engineering student passionate about building innovative web solutions 
              and solving real-world problems with clean, efficient code.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Github, href: 'https://github.com/atharv290', label: 'GitHub' },
                { icon: Mail, href: 'mailto:atharvj938@gmail.com', label: 'Email' },
                { icon: Phone, href: 'tel:+917058582723', label: 'Phone' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-white/5 rounded-lg hover:bg-gradient-to-br hover:from-violet-500/20 hover:to-purple-500/20 transition-all group"
                  aria-label={social.label}
                >
                  <social.icon size={20} className="text-gray-400 group-hover:text-violet-400 transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-['Space_Grotesk'] mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Projects', 'Experience', 'Skills', 'Education', 'Contact'].map((link, index) => (
                <motion.li 
                  key={link}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector(`#${link.toLowerCase()}`);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-sm text-gray-400 hover:text-violet-400 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-violet-400 group-hover:w-4 transition-all" />
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-['Space_Grotesk'] mb-4 text-white">Get in Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:atharvj938@gmail.com"
                className="flex items-start gap-2 text-sm text-gray-400 hover:text-violet-400 transition-colors group"
              >
                <Mail size={16} className="mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="break-all">atharvj938@gmail.com</span>
              </a>
              <a
                href="tel:+917058582723"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-violet-400 transition-colors group"
              >
                <Phone size={16} className="flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span>+91-7058582723</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400 flex items-center gap-2">
            Crafted with <Heart size={16} className="text-red-500 fill-red-500 animate-pulse" /> 
            by Atharva Joshi © {currentYear}
          </p>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-gradient-to-br from-violet-500 to-purple-500 rounded-lg hover:shadow-lg hover:shadow-violet-500/50 transition-all group"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500" />
    </footer>
  );
}
