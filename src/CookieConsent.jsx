import { useState, useEffect } from 'react'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setShowBanner(false)
  }

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-6 shadow-2xl z-50">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm md:text-base">
            Vi bruger cookies til at forbedre din oplevelse på vores site og til at analysere trafik. 
            Ved at klikke "Accepter" samtykker du til vores brug af cookies.{' '}
            <a href="/privatlivspolitik" className="underline hover:text-blue-400">
              Læs mere
            </a>
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={handleReject}
            className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium transition-colors text-sm md:text-base"
          >
            Afvis
          </button>
          <button
            onClick={handleAccept}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg font-medium transition-colors text-sm md:text-base"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  )
}
