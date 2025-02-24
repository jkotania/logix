import Link from "next/link";
export default function StartPage() {
  return (
    <div className="grid grid-rows-[80px_1fr] min-h-screen -mb-12">
      <nav className="w-full"></nav>
      <main className="w-full flex items-center">
        <div className="max-w-4xl mx-auto px-4 w-full py-12 md:py-20 flex-1 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 md:mb-8 text-center">
            Rozpocznij Współpracę
          </h1>

          <div className="grid md:grid-cols-2 gap-4 md:gap-8 mx-auto w-full">
            <div className="rounded-xl bg-white/5 p-8 border border-white/10 transition-all flex flex-col">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Nowy Projekt
              </h2>
              <p className="text-gray-300 mb-6">
                Zacznij od wypełnienia briefu projektowego, abyśmy mogli lepiej
                poznać Twoje potrzeby.
              </p>
              <Link
                href="/new-project"
                className="mt-auto px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors w-fit"
              >
                Wypełnij brief
              </Link>
            </div>

            <div className="rounded-xl bg-white/5 p-8 border border-white/10 transition-all flex flex-col">
              <h2 className="text-2xl font-semibold text-white mb-4">
                Konsultacja
              </h2>
              <p className="text-gray-300 mb-6">
                Umów się na bezpłatną konsultację z naszym ekspertem w dogodnym
                terminie.
              </p>
              <Link
                href="/consultation"
                className="mt-auto px-4 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors w-fit"
              >
                Wybierz termin
              </Link>
            </div>
          </div>

          <div className="mt-8 md:mt-16 text-center">
            <h3 className="text-lg md:text-xl text-gray-400 mb-2 md:mb-4">
              Masz pytania?
            </h3>
            <Link
              href="/contact"
              className="text-blue-500 hover:text-blue-400 transition-colors"
            >
              Skontaktuj się z nami bezpośrednio
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
