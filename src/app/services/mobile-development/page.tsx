"use client";
import { motion } from 'framer-motion';

export default function MobileDevelopment() {
  const features = [
    {
      title: "Aplikacje iOS",
      description: "Natywne aplikacje dla iPhone i iPad",
      details: ["Swift i SwiftUI", "Integracja z iOS SDK", "Apple Store publikacja", "Push Notifications"],
      icon: "🍎"
    },
    {
      title: "Aplikacje Android",
      description: "Natywne aplikacje dla systemu Android",
      details: ["Kotlin i Java", "Material Design", "Google Play publikacja", "Background Services"],
      icon: "🤖"
    },
    {
      title: "Aplikacje hybrydowe",
      description: "Cross-platformowe rozwiązania mobilne",
      details: ["React Native", "Flutter", "Jeden kod = dwie platformy", "Szybkie wdrożenie"],
      icon: "🔄"
    }
  ];

  const technologies = [
    "Swift", "Kotlin", "React Native", "Flutter", "Firebase",
    "REST API", "GraphQL", "Push Notifications", "Google Maps", "Payment Gates"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <div className="min-h-screen pt-24 sm:pt-16 flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 p-4 sm:p-6 shadow-2xl"
        >
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl sm:text-4xl font-bold text-white mb-4 sm:mb-6"
          >
            Mobile Development
          </motion.h1>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 sm:space-y-8"
          >
            <section>
              <p className="text-gray-300 text-sm sm:text-lg">
                Tworzymy wydajne i intuicyjne aplikacje mobilne, 
                które spełniają najwyższe standardy użyteczności i designu.
                Nasze rozwiązania są skrojone pod potrzeby Twojego biznesu.
              </p>
            </section>

            <section className="grid md:grid-cols-3 gap-4 sm:gap-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-4 sm:p-6 hover:bg-white/10 transition-all"
                >
                  <div className="text-2xl sm:text-4xl mb-6 sm:mb-8 text-center">{feature.icon}</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-4 text-center">{feature.title}</h3>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center text-sm sm:text-base">{feature.description}</p>
                  <ul className="text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-center">
                        <span className="mr-2">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </section>

            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 text-center">Używane technologie</h2>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                {technologies.map((tech, index) => (
                  <motion.span 
                    key={index}
                    variants={itemVariants}
                    className="px-3 py-1 sm:px-4 sm:py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 hover:bg-white/10 transition-all text-sm sm:text-base"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </section>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
