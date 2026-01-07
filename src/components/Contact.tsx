import { motion } from 'motion/react';
import { Mail, Phone, Github, Send, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isFocused, setIsFocused] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! This is a demo - in production, this would send an email.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'atharvj938@gmail.com',
      href: 'mailto:atharvj938@gmail.com',
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-7058582723',
      href: 'tel:+917058582723',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/atharv290',
      href: 'https://github.com/atharv290',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pune, Maharashtra',
      href: '#',
      gradient: 'from-blue-500 to-cyan-500',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-500/10 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-purple-500/10 to-transparent rounded-full blur-3xl animate-float-delayed" />
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
              Let&apos;s Connect
            </span>
          </motion.div>
          <h2 className="font-['Space_Grotesk'] text-4xl sm:text-5xl mb-4 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s discuss how we can work together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
              <h3 className="font-['Space_Grotesk'] text-2xl mb-4">
                Contact Information
              </h3>
              <p className="text-white/80 mb-8">
                Feel free to reach out through any of these channels. I&apos;m always open to discussing new projects and opportunities.
              </p>

              <div className="flex items-center gap-2 text-white/70 text-sm mb-8">
                <Clock size={16} />
                <span>Usually responds within 24 hours</span>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-3 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all group"
                  >
                    <div className="p-2 bg-white/20 rounded-lg group-hover:scale-110 transition-transform">
                      <info.icon size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-white/70">{info.label}</p>
                      <p className="text-sm">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg"
            >
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm mb-2 text-gray-700 dark:text-gray-300">
                      Your Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setIsFocused({ ...isFocused, name: true })}
                        onBlur={() => setIsFocused({ ...isFocused, name: false })}
                        required
                        className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border-2 rounded-xl focus:outline-none transition-all ${
                          isFocused.name
                            ? 'border-violet-500 shadow-lg shadow-violet-500/20'
                            : 'border-gray-200 dark:border-gray-700'
                        }`}
                        placeholder="Your Name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm mb-2 text-gray-700 dark:text-gray-300">
                      Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setIsFocused({ ...isFocused, email: true })}
                        onBlur={() => setIsFocused({ ...isFocused, email: false })}
                        required
                        className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border-2 rounded-xl focus:outline-none transition-all ${
                          isFocused.email
                            ? 'border-violet-500 shadow-lg shadow-violet-500/20'
                            : 'border-gray-200 dark:border-gray-700'
                        }`}
                        placeholder="example@gmail.com"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm mb-2 text-gray-700 dark:text-gray-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setIsFocused({ ...isFocused, subject: true })}
                    onBlur={() => setIsFocused({ ...isFocused, subject: false })}
                    required
                    className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border-2 rounded-xl focus:outline-none transition-all ${
                      isFocused.subject
                        ? 'border-violet-500 shadow-lg shadow-violet-500/20'
                        : 'border-gray-200 dark:border-gray-700'
                    }`}
                    placeholder="How can I help you?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm mb-2 text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setIsFocused({ ...isFocused, message: true })}
                    onBlur={() => setIsFocused({ ...isFocused, message: false })}
                    required
                    rows={6}
                    className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border-2 rounded-xl focus:outline-none transition-all resize-none ${
                      isFocused.message
                        ? 'border-violet-500 shadow-lg shadow-violet-500/20'
                        : 'border-gray-200 dark:border-gray-700'
                    }`}
                    placeholder="Describe your message here..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl hover:shadow-violet-500/50 transition-all flex items-center justify-center gap-2 group"
                >
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  <span className="font-['Space_Grotesk']">Send Message</span>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
