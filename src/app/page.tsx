export default function Home() {
  return (
    <div className="grid grid-rows-[80px_1fr] min-h-screen">
      <nav className="w-full"></nav>

      <main className="w-full">
        {/* Hero section (full screen) */}
        <div className="relative w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center text-center px-4">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-radial from-stone-800/20 to-black z-0" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-400">
            Nowoczesne Rozwiązania
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-8 relative z-10">
            Tworzymy przyszłość poprzez innowacyjne technologie i kreatywne
            podejście
          </p>

          <div className="relative z-10 flex gap-4">
            <button className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-white hover:bg-white/20 transition-all">
              Rozpocznij
            </button>
            <button className="px-6 py-3 rounded-full bg-white text-black hover:bg-gray-100 transition-all">
              Dowiedz się więcej
            </button>
          </div>
        </div>

        {/* Cards section */}
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="flex flex-col gap-8">
            {/* Karta 1 */}
            <div className="rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-all">
              <div className="h-10 w-10 text-white mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-white mb-4">
                Web Development
              </h2>
              <p className="text-gray-300 mb-4">
                Tworzymy nowoczesne i responsywne strony internetowe oraz
                aplikacje webowe. Oferujemy kompleksowe usługi, od projektu po
                wdrożenie.
              </p>
              <ul className="text-gray-300 mb-4">
                <li>Strony wizytówki</li>
                <li>Sklepy internetowe</li>
                <li>Aplikacje webowe</li>
              </ul>
              <a
                href="/services/web-development"
                className="text-blue-500 hover:text-blue-400 transition-colors"
              >
                Dowiedz się więcej
              </a>
            </div>

            {/* Karta 2 */}
            <div className="rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-all">
              <div className="h-10 w-10 text-white mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-white mb-4">
                Mobile Development
              </h2>
              <p className="text-gray-300 mb-4">
                Projektujemy i tworzymy aplikacje mobilne na platformy iOS i
                Android. Zapewniamy wysoką jakość i użyteczność.
              </p>
              <ul className="text-gray-300 mb-4">
                <li>Aplikacje natywne</li>
                <li>Aplikacje hybrydowe</li>
                <li>Testowanie i wdrożenie</li>
              </ul>
              <a
                href="/services/mobile-development"
                className="text-blue-500 hover:text-blue-400 transition-colors"
              >
                Dowiedz się więcej
              </a>
            </div>

            {/* Karta 3 */}
            <div className="rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-all">
              <div className="h-10 w-10 text-white mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-white mb-4">
                UX Design
              </h2>
              <p className="text-gray-300 mb-4">
                Projektujemy intuicyjne i użyteczne interfejsy użytkownika.
                Dbamy o najlepsze doświadczenia użytkowników.
              </p>
              <ul className="text-gray-300 mb-4">
                <li>Badania użytkowników</li>
                <li>Projektowanie interfejsów</li>
                <li>Testowanie użyteczności</li>
              </ul>
              <a
                href="/services/ux-design"
                className="text-blue-500 hover:text-blue-400 transition-colors"
              >
                Dowiedz się więcej
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
