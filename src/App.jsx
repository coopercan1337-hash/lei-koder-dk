import './index.css'
import { Link } from 'react-router-dom'
import CookieConsent from './CookieConsent'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold text-blue-700">LEI-Guiden.dk</a>
          <div className="hidden md:flex space-x-6">
            <a href="/" className="hover:text-blue-600 transition-colors">Forside</a>
            <a href="#hvad-er-lei" className="hover:text-blue-600 transition-colors">Hvad er LEI?</a>
            <a href="#sammenlign" className="hover:text-blue-600 transition-colors">Sammenlign</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Få den billigste LEI kode til din virksomhed
          </h1>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Sammenlign udbydere og spar penge på din LEI registrering i dag. Vi har fundet de bedste priser i Danmark.
          </p>
          <a 
            href="#sammenlign" 
            className="inline-block bg-white text-blue-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Se prissammenligning →
          </a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Comparison Section */}
        <section id="sammenlign" className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-2">Top anbefalede LEI udbydere</h2>
            <p className="text-gray-600 mb-8">Opdateret Februar 2026 - Vi har sammenlignet pris, hastighed og service</p>
            
            <div className="space-y-6">
              {/* Provider 1 */}
              <article className="flex flex-col md:flex-row md:items-center justify-between border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-md transition-all">
                <div className="mb-4 md:mb-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-xl">LEI Service</h3>
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">Anbefalet</span>
                  </div>
                  <p className="text-gray-600 mb-2">Hurtig validering og dansk kundesupport. Godkendt af GLEIF.</p>
                  <ul className="text-sm text-gray-500 space-y-1">
                    <li>✓ Registrering på 1-2 hverdage</li>
                    <li>✓ Dansk support</li>
                    <li>✓ Nem fornyelse</li>
                  </ul>
                </div>
                <div className="text-left md:text-right">
                  <span className="block text-3xl font-bold text-green-600 mb-2">385 DKK</span>
                  <span className="block text-sm text-gray-500 mb-3">pr. år inkl. moms</span>
                  <a 
                    href="https://www.partner-ads.com/dk/klikads.php?id=8664&builtin=1" 
                    rel="noopener sponsored"
                    className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                  >
                    Gå til LEI Service →
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* What is LEI Section */}
        <section id="hvad-er-lei" className="mb-16">
          <article className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">Hvad er en LEI kode?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              En <strong>LEI kode</strong> (Legal Entity Identifier) er en unik 20-cifret kode der identificerer juridiske enheder på de globale finansielle markeder. Koden blev introduceret efter finanskrisen for at øge gennemsigtigheden i finansielle transaktioner.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Hvis din virksomhed handler med værdipapirer som aktier, obligationer eller derivater, er det et <strong>lovkrav</strong> at have en aktiv LEI kode. Uden en gyldig LEI kan din bank ikke gennemføre transaktionerne.
            </p>
            
            <h3 className="text-2xl font-bold mt-8 mb-4">Hvornår skal du bruge en LEI?</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Handel med værdipapirer</strong> - aktier, obligationer, fonde</li>
              <li>• <strong>Derivathandel</strong> - futures, optioner, swaps</li>
              <li>• <strong>Rapportering til myndigheder</strong> - EMIR, MiFID II</li>
              <li>• <strong>International forretning</strong> - identifikation over landegrænser</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">Sådan får du en LEI kode</h3>
            <ol className="space-y-2 text-gray-700 list-decimal list-inside">
              <li>Vælg en godkendt LEI-udbyder fra vores sammenligning</li>
              <li>Udfyld ansøgningen med din virksomheds oplysninger</li>
              <li>Betal gebyret (typisk 300-500 DKK årligt)</li>
              <li>Modtag din LEI inden for 1-3 hverdage</li>
            </ol>
          </article>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Ofte stillede spørgsmål om LEI</h2>
          <div className="space-y-4">
            <details className="bg-white rounded-lg shadow p-6 cursor-pointer group">
              <summary className="font-bold text-lg flex justify-between items-center">
                Hvor længe er en LEI kode gyldig?
                <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                En LEI kode er gyldig i ét år og skal fornyes årligt. De fleste udbydere sender en påmindelse inden udløb.
              </p>
            </details>
            <details className="bg-white rounded-lg shadow p-6 cursor-pointer group">
              <summary className="font-bold text-lg flex justify-between items-center">
                Kan jeg overføre min LEI til en anden udbyder?
                <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Ja, du kan frit overføre din eksisterende LEI til en ny udbyder ved fornyelse. Din LEI-kode forbliver den samme.
              </p>
            </details>
            <details className="bg-white rounded-lg shadow p-6 cursor-pointer group">
              <summary className="font-bold text-lg flex justify-between items-center">
                Hvad koster en LEI kode?
                <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Prisen varierer mellem 300-600 DKK årligt afhængig af udbyder. Vi anbefaler at sammenligne priser før du vælger.
              </p>
            </details>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-white mb-4">LEI-Guiden.dk</h4>
              <p className="text-sm">
                Vi hjælper danske virksomheder med at finde den bedste og billigste LEI-udbyder.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="hover:text-white transition-colors">Forside</a></li>
                <li><a href="#hvad-er-lei" className="hover:text-white transition-colors">Hvad er LEI?</a></li>
                <li><a href="#sammenlign" className="hover:text-white transition-colors">Sammenlign priser</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Information</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/privatlivspolitik" className="hover:text-white transition-colors">Privatlivspolitik</Link></li>
                <li><Link to="/om-os" className="hover:text-white transition-colors">Om os</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2026 LEI-Guiden.dk - Alle rettigheder forbeholdes</p>
            <p className="mt-2 text-gray-500">
              Denne side indeholder affiliate links. Vi modtager provision ved køb gennem vores links.
            </p>
          </div>
        </div>
      </footer>

      {/* Cookie Consent */}
      <CookieConsent />
    </div>
  )
}

export default App
