import Link from 'next/link';

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
  return (
    <div className="min-h-[calc(100vh+3rem)] pt-16 pb-12 flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4">
        <div className="rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 p-8 shadow-2xl">
          <h1 className="text-4xl font-bold text-white mb-8">Nasze usługi</h1>
          
          <div className="space-y-6">
            <p className="text-gray-300 mx-auto mb-12 leading-relaxed">
              Oferujemy kompleksowe rozwiązania technologiczne dla Twojego biznesu. 
              Nasze usługi łączą innowacyjne podejście z wieloletnim doświadczeniem,
              zapewniając najwyższą jakość realizacji projektów.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Link href={service.link} key={index}>
                  <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-8 h-full hover:bg-white/10 transition-all">
                    <div className="text-4xl mb-12 text-center">{service.icon}</div>
                    <h2 className="text-xl font-semibold text-white mb-4">{service.title}</h2>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    <ul className="text-gray-300 space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex">
                          <span className="mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
