import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import PrivacyPolicy from './PrivacyPolicy.jsx'
import AboutUs from './AboutUs.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privatlivspolitik" element={<PrivacyPolicy />} />
        <Route path="/om-os" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
