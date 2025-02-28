"use client";
import { motion } from 'framer-motion';

export default function About() {
  const stats = [
    {
      title: "Doświadczenie",
      description: "10+ lat w branży IT, setki zrealizowanych projektów i zadowolonych klientów. Specjalizujemy się w tworzeniu rozwiązań szytych na miarę.",
      icon: "🎯"
    },
    {
      title: "Projekty",
      description: "Ponad 200 zrealizowanych projektów dla klientów z różnych branż. Od startupów po duże korporacje, każdy projekt traktujemy z taką samą starannością.",
      icon: "💡"
    },
    {
      title: "Zespół",
      description: "30+ ekspertów z różnych dziedzin: programiści, designerzy, project managerowie i specjaliści UX/UI, tworzący zgrany zespół profesjonalistów.",
      icon: "👥"
    }
  ];

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
    <div className="min-h-[calc(100vh+3rem)] pt-16 pb-12 flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 p-8 shadow-2xl"
        >
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-4xl font-bold text-white mb-8"
          >
            O nas
          </motion.h1>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.section 
              variants={itemVariants}
              className="text-gray-300"
            >
              <h2 className="text-2xl font-semibold text-white mb-4">Nasza misja</h2>
              <p className="leading-relaxed">
                Dostarczamy innowacyjne rozwiązania technologiczne, które pomagają naszym klientom osiągać sukces w cyfrowym świecie. 
                Naszym celem jest tworzenie wartościowych produktów cyfrowych, które nie tylko spełniają oczekiwania, 
                ale również wyprzedzają trendy rynkowe. Stawiamy na jakość, profesjonalizm i długoterminowe partnerstwo z naszymi klientami.
              </p>
            </motion.section>

            <section className="grid md:grid-cols-3 gap-8">
              {stats.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-all"
                >
                  <motion.div 
                    className="text-4xl mb-12 text-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </section>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}