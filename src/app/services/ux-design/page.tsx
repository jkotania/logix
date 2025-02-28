"use client";
import { motion } from 'framer-motion';

export default function UXDesign() {
  const features = [
    {
      title: "Badania UX",
      description: "Kompleksowa analiza i badanie potrzeb użytkowników",
      details: ["Wywiady z użytkownikami", "Testy użyteczności", "Analiza konkurencji", "User journey mapping"],
      icon: "🔍"
    },
    {
      title: "UI Design",
      description: "Projektowanie nowoczesnych interfejsów użytkownika",
      details: ["Design systemy", "Style guide", "Responsive design", "Dostępność (WCAG)"],
      icon: "✨"
    },
    {
      title: "Prototypowanie",
      description: "Tworzenie interaktywnych prototypów i makiet",
      details: ["Makiety Lo-Fi i Hi-Fi", "Prototypy klikalne", "User flow", "Design iterations"],
      icon: "🎯"
    }
  ];

  const tools = [
    "Figma", "Adobe XD", "Sketch", "InVision", "Maze",
    "Hotjar", "UserTesting", "Miro", "Zeplin", "Abstract"
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
            UX Design
          </motion.h1>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 sm:space-y-8"
          >
            <motion.section variants={itemVariants}>
              <p className="text-gray-300 text-sm sm:text-lg">
                Projektujemy intuicyjne i estetyczne interfejsy użytkownika, 
                które zapewniają najlepsze doświadczenia dla użytkowników.
                Łączymy kreatywność z badaniami i najlepszymi praktykami UX/UI.
              </p>
            </motion.section>

            <section className="grid md:grid-cols-3 gap-4 sm:gap-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-4 sm:p-6 hover:bg-white/10 transition-all"
                >
                  <motion.div 
                    className="text-2xl sm:text-4xl mb-6 sm:mb-8 text-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-4 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 sm:mb-6 text-center text-sm sm:text-base">
                    {feature.description}
                  </p>
                  <ul className="text-gray-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
                    {feature.details.map((detail, i) => (
                      <motion.li 
                        key={i} 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 + (i * 0.1) }}
                        className="flex items-center"
                      >
                        <span className="mr-2">•</span>
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </section>

            <motion.section variants={itemVariants}>
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 text-center">
                Narzędzia
              </h2>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                {tools.map((tool, index) => (
                  <motion.span 
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 sm:px-4 sm:py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 hover:bg-white/10 transition-all text-sm sm:text-base"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </motion.section>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
