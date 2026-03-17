import { LanguageProvider } from './LanguageContext'
import Navbar from './components/Navbar'
import QuienesSomos from './components/QuienesSomos'
import Artistas from './components/Artistas'
import InstagramFeed from './components/InstagramFeed'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <QuienesSomos />
        <Artistas />
        <InstagramFeed />
        <Contacto />
      </main>
      <Footer />
    </LanguageProvider>
  )
}

export default App
