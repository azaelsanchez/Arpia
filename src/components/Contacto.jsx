import { MessageCircle, MapPin } from 'lucide-react'
import { useLang } from '../LanguageContext'

// ─── CONFIGURACIÓN ───────────────────────────────────────────────────────────
const WHATSAPP_NUMBER = '34611466867'
const WHATSAPP_MESSAGE = 'Hola! Me gustaría pedir información sobre un tatuaje 🖤'
const INSTAGRAM_USERNAME = 'arpiatattoo'
// ─────────────────────────────────────────────────────────────────────────────

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

export default function Contacto() {
  const { t } = useLang()

  return (
    <section id="contacto" className="py-24 bg-[#111111]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="block h-px w-16 bg-[#b91c1c]" />
            <span className="text-[#b91c1c] text-xs tracking-[0.4em] uppercase">{t.contacto.tag}</span>
            <span className="block h-px w-16 bg-[#b91c1c]" />
          </div>
          <h2 className="font-display text-5xl md:text-7xl text-white tracking-wider mb-4">
            {t.contacto.titulo}
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto text-base leading-relaxed">
            {t.contacto.subtitulo}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* WhatsApp CTA */}
          <div className="bg-[#1a1a1a] border border-gray-800 p-8 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#25D366]/10 flex items-center justify-center mb-5">
              <MessageCircle size={32} className="text-[#25D366]" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">{t.contacto.whatsappTitle}</h3>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
              {t.contacto.whatsappDesc}
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-[#25D366] text-black font-bold tracking-widest uppercase text-sm hover:bg-[#1ebe5a] transition-colors duration-200"
            >
              <MessageCircle size={18} />
              {t.contacto.whatsappBtn}
            </a>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6">
            {/* Horario — comentado: el estudio trabaja por citas, sin horario fijo
            <div className="bg-[#1a1a1a] border border-gray-800 p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock size={18} className="text-[#b91c1c]" />
                <h3 className="text-white font-semibold tracking-wide">{t.contacto.horario}</h3>
              </div>
              <ul className="flex flex-col gap-2">
                {t.contacto.horarios.map((h) => (
                  <li key={h.dias} className="flex justify-between text-sm">
                    <span className="text-gray-400">{h.dias}</span>
                    <span className={h.horas === 'Cerrado' || h.horas === 'Closed' ? 'text-gray-600' : 'text-white font-medium'}>
                      {h.horas}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            */}

            {/* Ubicación */}
            <div className="bg-[#1a1a1a] border border-gray-800 p-6">
              <div className="flex items-center gap-2 mb-3">
                <MapPin size={18} className="text-[#b91c1c]" />
                <h3 className="text-white font-semibold tracking-wide">{t.contacto.ubicacion}</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                C/ del Poeta Ricard Sanmartí, 4<br />
                Benimaclet, 46020 València
              </p>
              <iframe
                title="Arpia Tattoo"
                src="https://maps.google.com/maps?q=C%2F+del+Poeta+Ricard+Sanmart%C3%AD%2C+4%2C+Benimaclet%2C+46020+Val%C3%A8ncia&output=embed"
                width="100%"
                height="180"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
