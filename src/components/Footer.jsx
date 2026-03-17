import { Instagram, MessageCircle } from 'lucide-react'
import { useLang } from '../LanguageContext'

const WHATSAPP_NUMBER = '34611466867'
const INSTAGRAM_USERNAME = 'arpiatattoo'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="bg-[#0d0d0d] border-t border-gray-800 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-600">
        <p className="font-display text-2xl text-white tracking-widest">ARPIA TATTOO</p>

        <p>© {new Date().getFullYear()} Arpia Tattoo. {t.footer.derechos}</p>

        <div className="flex items-center gap-4">
          <a
            href={`https://instagram.com/${INSTAGRAM_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#a855f7] transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-[#25D366] transition-colors"
            aria-label="WhatsApp"
          >
            <MessageCircle size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}
