import ParticlesComponent from "@/components/Particles";
import Link from "next/link";
import LearnMoreButton from "@/components/LearnMoreButton";

export default function Home() {
  return (
    <>
      <ParticlesComponent />
      <div className="grid grid-rows-[80px_1fr] min-h-screen">
        <nav className="w-full"></nav>

        <main className="w-full">
          {/* Hero section (full screen) */}
          <div className="relative w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center text-center px-6">
            {/* Tło karty */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="max-w-6xl w-full mx-4">
                <div className="relative rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 p-8 shadow-2xl transform transition-all duration-300">
                  {/* Zawartość karty */}
                  <div className="space-y-12">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-400">
                      Nowoczesne Rozwiązania
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                      Tworzymy przyszłość poprzez innowacyjne technologie i
                      kreatywne podejście
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
                      <Link
                        href="/start"
                        className="px-8 py-4 rounded-full bg-white backdrop-blur-sm border border-white/20 text-black hover:bg-white/30 transition-all flex items-center justify-center gap-2"
                      >
                        <span>Rozpocznij</span>
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </Link>

                      <LearnMoreButton />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tło gradientowe */}
            <div className="absolute inset-0 overflow-hidden -z-10">
              <div className="absolute inset-0 bg-gradient-radial from-stone-800/20 to-black" />
            </div>
          </div>

          {/* Cards section */}
          <div
            id="cards-section"
            className="min-h-[calc(100vh-80px-48px)] max-w-6xl mx-auto px-4 py-4"
          >
            <div className="grid grid-rows-3 gap-4 h-full">
              {/* Karta 1 */}
              <div className="rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 p-4 hover:bg-white/10 transition-all">
                <div className="h-8 w-8 text-white mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                </div>
                <h2 className="text-lg font-semibold text-white mb-2">
                  Web Development
                </h2>
                <p className="text-gray-300 text-sm mb-2">
                  Tworzymy nowoczesne i responsywne strony internetowe oraz
                  aplikacje webowe.
                </p>
                <ul className="text-gray-300 text-sm space-y-1 mb-3">
                  <li>• Strony wizytówka</li>
                  <li>• Sklepy internetowe</li>
                  <li>• Aplikacje webowe</li>
                </ul>
                <a
                  href="/services/web-development"
                  className="text-blue-500 text-sm hover:text-blue-400 transition-colors"
                >
                  Dowiedz się więcej
                </a>
              </div>

              {/* Karta 2 */}
              <div className="rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 p-4 hover:bg-white/10 transition-all">
                <div className="h-8 w-8 text-white mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                    />
                  </svg>
                </div>
                <h2 className="text-lg font-semibold text-white mb-2">
                  Mobile Development
                </h2>
                <p className="text-gray-300 text-sm mb-2">
                  Projektujemy i tworzymy aplikacje mobilne na platformy iOS i
                  Android. Zapewniamy wysoką jakość i użyteczność.
                </p>
                <ul className="text-gray-300 text-sm space-y-1 mb-3">
                  <li>• Aplikacje natywne</li>
                  <li>• Aplikacje hybrydowe</li>
                  <li>• Testowanie i wdrożenie</li>
                </ul>
                <a
                  href="/services/mobile-development"
                  className="text-blue-500 text-sm hover:text-blue-400 transition-colors"
                >
                  Dowiedz się więcej
                </a>
              </div>

              {/* Karta 3 */}
              <div className="rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 p-4 hover:bg-white/10 transition-all">
                <div className="h-8 w-8 text-white mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5"
                    />
                  </svg>
                </div>
                <h2 className="text-lg font-semibold text-white mb-2">
                  UX Design
                </h2>
                <p className="text-gray-300 text-sm mb-2">
                  Projektujemy intuicyjne i użyteczne interfejsy użytkownika.
                  Dbamy o najlepsze doświadczenia użytkowników.
                </p>
                <ul className="text-gray-300 text-sm space-y-1 mb-3">
                  <li>• Badania użytkowników</li>
                  <li>• Projektowanie interfejsów</li>
                  <li>• Testowanie użyteczności</li>
                </ul>
                <a
                  href="/services/ux-design"
                  className="text-blue-500 text-sm hover:text-blue-400 transition-colors"
                >
                  Dowiedz się więcej
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
