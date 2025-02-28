"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Web Development',
    description: 'Tworzymy nowoczesne i responsywne strony internetowe oraz aplikacje webowe. Wykorzystujemy najnowsze technologie i frameworki, aby zapewnić najwyższą jakość i wydajność.',
    features: [
      'Strony i aplikacje React/Next.js',
      'Sklepy e-commerce',
      'Systemy CMS',
      'Optymalizacja SEO'
    ],
    link: '/services/web-development',
    icon: '🌐'
  },
  {
    title: 'Mobile Development',
    description: 'Projektujemy i tworzymy aplikacje mobilne na platformy iOS i Android. Dbamy o intuicyjność interfejsu i wysoką wydajność aplikacji.',
    features: [
      'Aplikacje natywne iOS/Android',
      'Cross-platform (React Native)',
      'Integracje API',
      'Wsparcie i maintenance'
    ],
    link: '/services/mobile-development',
    icon: '📱'
  },
  {
    title: 'UX Design',
    description: 'Projektujemy intuicyjne i użyteczne interfejsy użytkownika. Stawiamy na nowoczesny design i najlepsze praktyki UX.',
    features: [
      'Projektowanie UI/UX',
      'Prototypowanie',
      'Testy użyteczności',
      'Design systemowy'
    ],
    link: '/services/ux-design',
    icon: '🎨'
  }
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen pt-24 sm:pt-16 flex justify-center items-center"> {/* Zmieniony padding top i usunięte flex */}
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 p-4 sm:p-8 shadow-2xl"
        >
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8"
          >
            Nasze usługi
          </motion.h1>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4 sm:space-y-6"
          >
            <motion.p 
              variants={itemVariants}
              className="text-gray-300 mx-auto mb-8 sm:mb-12 leading-relaxed text-sm sm:text-base"
            >
              Oferujemy kompleksowe rozwiązania technologiczne dla Twojego biznesu. 
              Nasze usługi łączą innowacyjne podejście z wieloletnim doświadczeniem,
              zapewniając najwyższą jakość realizacji projektów.
            </motion.p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link href={service.link}>
                    <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-4 sm:p-8 h-full hover:bg-white/10 transition-all">
                      <motion.div 
                        className="text-3xl sm:text-4xl mb-6 sm:mb-12 text-center"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        {service.icon}
                      </motion.div>
                      <h2 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">
                        {service.title}
                      </h2>
                      <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                        {service.description}
                      </p>
                      <ul className="text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
                        {service.features.map((feature, i) => (
                          <motion.li 
                            key={i}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 + (i * 0.1) }}
                            className="flex"
                          >
                            <span className="mr-2">•</span>
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
