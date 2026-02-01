import { Link } from 'react-router-dom'

export default function AboutUs() {
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
          <h1 className="text-4xl font-bold mb-6">Om LEI-Guiden.dk</h1>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">Vores mission</h2>
            <p className="text-gray-700 leading-relaxed">
              LEI-Guiden.dk blev skabt for at hjælpe danske virksomheder med at finde den bedste og mest 
              overkommelige LEI-kode (Legal Entity Identifier) til deres behov. Vi ved, at det kan være 
              forvirrende at navigere i markedet for LEI-udbydere, så vi har gjort arbejdet for dig.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">Hvad gør vi?</h2>
            <p className="text-gray-700 leading-relaxed">
              Vi sammenligner de forskellige LEI-udbydere i Danmark og præsenterer information om:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-3">
              <li>Priser for registrering og fornyelse</li>
              <li>Behandlingstid</li>
              <li>Kundeservice og support</li>
              <li>Brugervenlighed</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">Gennemsigtighed</h2>
            <p className="text-gray-700 leading-relaxed">
              Dette website finansieres gennem affiliate-kommissioner. Når du klikker på et link til en 
              LEI-udbyder og foretager et køb, modtager vi en lille kommission. Dette påvirker ikke prisen 
              for dig, og vi bestræber os på at give objektive sammenligninger.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Vores anbefalinger er baseret på faktorer som pris, service og kundetilfredshed - ikke kun 
              på kommissionsstørrelse.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">Uafhængig information</h2>
            <p className="text-gray-700 leading-relaxed">
              Vi er ikke affilieret med nogen bestemt LEI-udbyder. Vores mål er at give dig den information, 
              du har brug for til at træffe en informeret beslutning baseret på dine specifikke behov.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">Opdateret information</h2>
            <p className="text-gray-700 leading-relaxed">
              Vi opdaterer løbende vores sammenligninger for at sikre, at du har adgang til den mest aktuelle 
              information om priser og services. LEI-markedet ændrer sig, og vi arbejder hårdt på at holde 
              vores data ajour.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">Kontakt</h2>
            <p className="text-gray-700 leading-relaxed">
              Har du spørgsmål, forslag eller feedback? Vi vil gerne høre fra dig.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mt-4">
              <p className="text-gray-700">
                <strong>Email:</strong> kontakt@lei-guiden.dk<br/>
                <strong>CVR:</strong> [CVR-nummer indsættes her]
              </p>
            </div>
            <p className="text-gray-600 text-sm mt-4">
              Vi bestræber os på at besvare alle henvendelser inden for 1-2 hverdage.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mt-8 mb-4">Ansvarsfraskrivelse</h2>
            <p className="text-gray-700 leading-relaxed">
              LEI-Guiden.dk fungerer som en informationsplatform. Vi er ikke ansvarlige for transaktioner 
              mellem dig og LEI-udbyderne, eller for kvaliteten af deres services. Vi anbefaler altid, at 
              du læser udbydernes egne vilkår og betingelser, før du foretager et køb.
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
