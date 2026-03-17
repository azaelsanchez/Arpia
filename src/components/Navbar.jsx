import { useState, useEffect } from 'react'
import { Menu, X, Instagram, MessageCircle } from 'lucide-react'
import logo from '../assets/logonav.png'
import flagEs from '../assets/es.svg'
import flagEn from '../assets/en.svg'
import { useLang } from '../LanguageContext'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { lang, toggleLang, t } = useLang()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => setIsOpen(false)

  const navLinks = [
    { label: t.nav.quienes, href: '#quienes-somos' },
    { label: t.nav.artistas, href: '#artistas' },
    { label: t.nav.trabajos, href: '#trabajos' },
    { label: t.nav.contacto, href: '#contacto' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0d0d0d]/95 backdrop-blur-sm shadow-lg shadow-black/30' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Arpia Tattoo logo"
            className="h-28 w-auto invert"
          />
        </a>

        {/* Desktop links + language switcher */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium tracking-widest uppercase text-gray-400 hover:text-[#b91c1c] transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Language toggle */}
          <div className="flex items-center gap-1 bg-[#1a1a1a] border border-gray-700 rounded-sm p-1">
            <button onClick={() => lang !== 'es' && toggleLang()} aria-label="Español"
              className={`overflow-hidden rounded-sm transition-all duration-200 ${lang === 'es' ? 'opacity-100 ring-1 ring-[#b91c1c]' : 'opacity-30 hover:opacity-60'}`}>
              <img src={flagEs} alt="Español" className="h-4 w-6 object-cover block" />
            </button>
            <button onClick={() => lang !== 'en' && toggleLang()} aria-label="English"
              className={`overflow-hidden rounded-sm transition-all duration-200 ${lang === 'en' ? 'opacity-100 ring-1 ring-[#b91c1c]' : 'opacity-30 hover:opacity-60'}`}>
              <img src={flagEn} alt="English" className="h-4 w-6 object-cover block" />
            </button>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a href="https://instagram.com/arpiatattoo" target="_blank" rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#b91c1c] transition-colors" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="https://wa.me/34611466867" target="_blank" rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#25D366] transition-colors" aria-label="WhatsApp">
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        {/* Mobile: language + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <div className="flex items-center gap-1 bg-[#1a1a1a] border border-gray-700 rounded-sm p-1">
            <button onClick={() => lang !== 'es' && toggleLang()} aria-label="Español"
              className={`overflow-hidden rounded-sm transition-all duration-200 ${lang === 'es' ? 'opacity-100 ring-1 ring-[#b91c1c]' : 'opacity-30 hover:opacity-60'}`}>
              <img src={flagEs} alt="Español" className="h-4 w-6 object-cover block" />
            </button>
            <button onClick={() => lang !== 'en' && toggleLang()} aria-label="English"
              className={`overflow-hidden rounded-sm transition-all duration-200 ${lang === 'en' ? 'opacity-100 ring-1 ring-[#b91c1c]' : 'opacity-30 hover:opacity-60'}`}>
              <img src={flagEn} alt="English" className="h-4 w-6 object-cover block" />
            </button>
          </div>
          <button
            className="text-gray-300 hover:text-[#b91c1c] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menú"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        } bg-[#0d0d0d]/98 backdrop-blur-sm`}
      >
        <ul className="flex flex-col px-6 pb-6 gap-5 pt-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleLinkClick}
                className="block text-base font-medium tracking-widest uppercase text-gray-300 hover:text-[#b91c1c] transition-colors duration-200 border-b border-gray-800 pb-4"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
