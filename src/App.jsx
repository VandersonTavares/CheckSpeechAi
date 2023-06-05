import './App.css'

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Solutions from "./components/Solutions"
import Clients from "./components/Clients"
import Prices from "./components/Prices"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import CookieConsent from "./components/CookieConsent"

function App() {

  return (
    <>
      <CookieConsent />
      <Navbar />
      <Hero />
      <Solutions />
      <Clients />
      <Prices />
      <Contact />
      <Footer />
    </>
  )
}

export default App
