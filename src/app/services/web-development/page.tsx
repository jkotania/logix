export default function WebDevelopment() {
  const features = [
    {
      title: "Strony wizytówki",
      description: "Profesjonalne strony internetowe dla firm",
      details: ["Responsywny design", "Optymalizacja SEO", "System CMS", "Integracja social media"],
      icon: "🌍"
    },
    {
      title: "Sklepy internetowe",
      description: "Kompleksowe rozwiązania e-commerce",
      details: ["Systemy płatności", "Zarządzanie produktami", "Integracje z dostawcami", "Analityka sprzedaży"],
      icon: "🛍️"
    },
    {
      title: "Aplikacje webowe",
      description: "Zaawansowane aplikacje internetowe",
      details: ["Single Page Applications", "Progressive Web Apps", "Real-time updates", "Systemy zarządzania"],
      icon: "⚡"
    }
  ];

  const technologies = [
    "React", "Next.js", "TypeScript", "Node.js", "PostgreSQL",
    "Tailwind CSS", "Docker", "AWS", "MongoDB", "Redis"
  ];

  return (
    <div className="min-h-[calc(100vh+3rem+6rem)] pt-16 pb-12 flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 p-8 shadow-2xl">
          <h1 className="text-4xl font-bold text-white mb-8">Web Development</h1>
          
          <div className="space-y-12">
            <section className="">
              <p className="text-gray-300 text-lg">
                Tworzymy nowoczesne i responsywne strony internetowe oraz aplikacje webowe, 
                które pomagają naszym klientom osiągać ich cele biznesowe. 
                Wykorzystujemy najnowsze technologie i najlepsze praktyki programistyczne.
              </p>
            </section>

            <section className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-all">
                  <div className="text-4xl mb-12 text-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 text-center">{feature.title}</h3>
                  <p className="text-gray-300 mb-6 text-center">{feature.description}</p>
                  <ul className="text-gray-300 space-y-2">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-center">
                        <span className="mr-2">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-semibold text-white mb-6 text-center">Technologie</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 hover:bg-white/10 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
