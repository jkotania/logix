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

  return (
    <div className="min-h-[calc(100vh+3rem+6rem)] pt-16 pb-12 flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 p-8 shadow-2xl">
          <h1 className="text-4xl font-bold text-white mb-8">UX Design</h1>
          
          <div className="space-y-12">
            <section className="">
              <p className="text-gray-300 text-lg">
                Projektujemy intuicyjne i estetyczne interfejsy użytkownika, 
                które zapewniają najlepsze doświadczenia dla użytkowników.
                Łączymy kreatywność z badaniami i najlepszymi praktykami UX/UI.
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
              <h2 className="text-2xl font-semibold text-white mb-6 text-center">Narzędzia</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {tools.map((tool, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 hover:bg-white/10 transition-all"
                  >
                    {tool}
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
