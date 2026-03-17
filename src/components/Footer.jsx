import { useLang } from '../LanguageContext'
import logoFoot from '../assets/logofoot.png'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="bg-[#0d0d0d] border-t border-gray-800 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 text-sm text-gray-600">
        <img src={logoFoot} alt="Arpia Tattoo" className="h-32 w-auto invert" />
        <p>© {new Date().getFullYear()} Arpia Tattoo. {t.footer.derechos}</p>
        <p className="text-gray-700 text-xs">
          Desarrollado por{' '}
          <a
            href="https://github.com/azaelsanchez"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500 transition-colors"
          >
            Azael Sánchez
          </a>
        </p>
      </div>
    </footer>
  )
}
