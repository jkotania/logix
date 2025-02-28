'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Tutaj dodaj logikę wysyłania formularza
    console.log(formData);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'contact@logix.com' },
    { icon: '📞', label: 'Telefon', value: '+48 123 456 789' },
    { icon: '📍', label: 'Adres', value: 'ul. Przykładowa 1, 00-000 Warszawa' },
    { icon: '⏰', label: 'Godziny pracy', value: 'Pon-Pt: 9:00 - 17:00' }
  ];

  const socialMedia = [
    { icon: <FaLinkedin className="text-xl" />, label: 'LinkedIn', href: '#' },
    { icon: <FaFacebook className="text-xl" />, label: 'Facebook', href: '#' },
    { icon: <FaGithub className="text-xl" />, label: 'GitHub', href: '#' }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 p-8 shadow-2xl"
        >
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-4xl font-bold text-white mb-4 text-center"
          >
            Kontakt
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-center mb-12 max-w-2xl mx-auto"
          >
            Masz pytania? Skontaktuj się z nami. Nasz zespół jest gotowy, aby pomóc Ci w realizacji Twojego projektu.
          </motion.p>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-semibold text-white mb-6">Dane kontaktowe</h2>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors"
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <p className="text-sm text-gray-400">{item.label}</p>
                        <p>{item.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Social Media</h2>
                <div className="flex space-x-4">
                  {socialMedia.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.href}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                    >
                      <span className="text-xl">{item.icon}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.form 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              onSubmit={handleSubmit} 
              className="space-y-6"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-4 py-8"
                >
                  <span className="text-5xl">✨</span>
                  <h3 className="text-xl font-semibold text-white">Dziękujemy za wiadomość!</h3>
                  <p className="text-gray-300">Odpowiemy najszybciej jak to możliwe.</p>
                </motion.div>
              ) : (
                <>
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Imię i nazwisko"
            required
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Adres email"
            required
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Numer telefonu (opcjonalnie)"
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Temat"
            required
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Treść wiadomości"
            required
            rows={5}
            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
          />
        </div>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all"
        >
          Wyślij wiadomość
        </motion.button>
      </>
              )}
            </motion.form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}