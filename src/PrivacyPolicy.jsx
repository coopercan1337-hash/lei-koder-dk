import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-blue-700">LEI-Guiden.dk</Link>
          <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">← Tilbage til forsiden</Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <article className="bg-white rounded-lg shadow-sm p-8 prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-6">Privatlivspolitik</h1>
          <p className="text-gray-600 mb-8">Senest opdateret: 1. februar 2026</p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduktion</h2>
            <p className="text-gray-700 leading-relaxed">
              LEI-Guiden.dk ("vi", "os", "vores") respekterer dit privatliv og er forpligtet til at beskytte dine personoplysninger. 
              Denne privatlivspolitik forklarer, hvordan vi indsamler, bruger og beskytter dine data, når du besøger vores website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">2. Hvilke oplysninger indsamler vi?</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">Automatisk indsamlede data</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>IP-adresse</li>
              <li>Browsertype og version</li>
              <li>Besøgstidspunkt</li>
              <li>Sider du besøger på vores site</li>
              <li>Henvisende website (hvorfra du kom til os)</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">Cookies</h3>
            <p className="text-gray-700 leading-relaxed">
              Vi bruger cookies til at forbedre din oplevelse og analysere trafikken på vores website. 
              Du kan acceptere eller afvise cookies via vores cookie-banner.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">3. Hvordan bruger vi dine oplysninger?</h2>
            <p className="text-gray-700 leading-relaxed">Vi bruger de indsamlede data til:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-3">
              <li>At forbedre vores website og brugeroplevelse</li>
              <li>At analysere trafikmønstre og popularitet af indhold</li>
              <li>At spore effektiviteten af vores affiliate-links</li>
              <li>At overholde juridiske forpligtelser</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">4. Affiliate links</h2>
            <p className="text-gray-700 leading-relaxed">
              Vores website indeholder affiliate links til tredjepartsudbydere. Når du klikker på disse links og foretager et køb, 
              modtager vi en kommission uden ekstra omkostninger for dig. Disse tredjepartsudbydere kan indsamle deres egne data 
              i henhold til deres egne privatlivspolitikker.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">5. Deling af data</h2>
            <p className="text-gray-700 leading-relaxed">
              Vi deler ikke dine personlige oplysninger med tredjeparter, undtagen:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-3">
              <li>Med dit samtykke</li>
              <li>Når det kræves af loven</li>
              <li>Med vores affiliate-partnere (anonymiserede data)</li>
              <li>Med analyseudbydere for at forbedre vores service</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">6. Dine rettigheder (GDPR)</h2>
            <p className="text-gray-700 leading-relaxed">I henhold til GDPR har du ret til:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-3">
              <li><strong>Indsigt:</strong> At få adgang til de data, vi har om dig</li>
              <li><strong>Rettelse:</strong> At få rettet forkerte data</li>
              <li><strong>Sletning:</strong> At få slettet dine data ("retten til at blive glemt")</li>
              <li><strong>Begrænsning:</strong> At begrænse behandlingen af dine data</li>
              <li><strong>Dataportabilitet:</strong> At modtage dine data i et struktureret format</li>
              <li><strong>Indsigelse:</strong> At gøre indsigelse mod behandling af dine data</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">7. Datasikkerhed</h2>
            <p className="text-gray-700 leading-relaxed">
              Vi implementerer passende tekniske og organisatoriske sikkerhedsforanstaltninger for at beskytte dine data 
              mod uautoriseret adgang, ændring, videregivelse eller destruktion.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">8. Opbevaring af data</h2>
            <p className="text-gray-700 leading-relaxed">
              Vi opbevarer dine data kun så længe, det er nødvendigt for de formål, de blev indsamlet til, 
              eller som krævet af lovgivningen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">9. Ændringer til denne politik</h2>
            <p className="text-gray-700 leading-relaxed">
              Vi kan opdatere denne privatlivspolitik fra tid til anden. Væsentlige ændringer vil blive kommunikeret 
              via vores website. Seneste opdateringsdato fremgår øverst på siden.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">10. Kontakt os</h2>
            <p className="text-gray-700 leading-relaxed">
              Hvis du har spørgsmål til denne privatlivspolitik eller ønsker at udøve dine rettigheder, 
              er du velkommen til at kontakte os via kontaktoplysningerne på vores <Link to="/om-os" className="text-blue-600 hover:underline">Om os-side</Link>.
            </p>
          </section>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 mt-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-sm">&copy; 2026 LEI-Guiden.dk - Alle rettigheder forbeholdes</p>
        </div>
      </footer>
    </div>
  )
}
