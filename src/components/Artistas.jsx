import { useState } from 'react'
import { Instagram } from 'lucide-react'
import { useLang } from '../LanguageContext'
import imgSofia from '../assets/sofia.jpeg'
import imgCristina from '../assets/cristina.jpeg'
import imgMark from '../assets/mark.jpeg'
import imgCristian from '../assets/cristian.jpeg'

const artistas = [
  {
    nombre: 'Sofía Spiral',
    especialidad: { es: 'Tatuadora', en: 'Tattoo Artist' },
    instagram: 'sofiaspiral',
    img: imgSofia,
    descripcion: { es: 'Pendiente de rellenar.', en: 'Coming soon.' },
    estilos: { es: 'Pendiente de rellenar', en: 'Coming soon' },
  },
  {
    nombre: 'Cristina Castillo',
    especialidad: { es: 'Tatuadora', en: 'Tattoo Artist' },
    instagram: 'crisstinacastillo_',
    img: imgCristina,
    descripcion: { es: 'Pendiente de rellenar.', en: 'Coming soon.' },
    estilos: { es: 'Pendiente de rellenar', en: 'Coming soon' },
  },
  {
    nombre: 'Krea',
    especialidad: { es: 'Tatuador', en: 'Tattoo Artist' },
    instagram: 'krea.lmk',
    img: imgMark,
    descripcion: { es: 'Pendiente de rellenar.', en: 'Coming soon.' },
    estilos: { es: 'Pendiente de rellenar', en: 'Coming soon' },
  },
  {
    nombre: 'Control Zeta',
    especialidad: { es: 'Eliminación de tatuajes', en: 'Tattoo Removal' },
    instagram: 'controlzeta_laser',
    img: imgCristian,
    descripcion: { es: 'Pendiente de rellenar.', en: 'Coming soon.' },
    estilos: { es: 'Pendiente de rellenar', en: 'Coming soon' },
  },
]

const INK_DROPS = [
  { left: '15%', delay: '0s',    size: 7  },
  { left: '35%', delay: '0.08s', size: 5  },
  { left: '55%', delay: '0.04s', size: 9  },
  { left: '72%', delay: '0.12s', size: 6  },
  { left: '85%', delay: '0.06s', size: 8  },
  { left: '25%', delay: '0.16s', size: 5  },
  { left: '63%', delay: '0.1s',  size: 6  },
]

function ArtistaCard({ artista, lang }) {
  const [flipped, setFlipped] = useState(false)

  const handleClick = () => {
    setFlipped(f => !f)
  }

  return (
    <div
      className="flip-card h-[420px] cursor-pointer"
      onClick={handleClick}
    >
      <div className={`flip-card-inner ${flipped ? 'flipped' : ''}`}>

        {/* FRONT */}
        <div className="flip-card-front bg-[#1a1a1a] border border-gray-800 overflow-hidden">
          <img
            src={artista.img}
            alt={artista.nombre}
            className="w-full h-72 object-cover object-top"
          />
          <div className="p-5 flex items-center justify-between">
            <div>
              <p className="text-[#b91c1c] text-xs tracking-[0.3em] uppercase mb-1">
                {artista.especialidad[lang]}
              </p>
              <h3 className="text-white text-xl font-semibold">{artista.nombre}</h3>
            </div>
            <a
              href={`https://instagram.com/${artista.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-gray-500 hover:text-[#b91c1c] transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* BACK */}
        <div className="flip-card-back overflow-hidden">
          {/* Foto borrosa de fondo */}
          <img
            src={artista.img}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-top blur-sm scale-110"
          />
          {/* Capa glass */}
          <div className="absolute inset-0 bg-black/65 backdrop-blur-sm" />
          {/* Contenido */}
          <div className="relative z-10 p-6 flex flex-col justify-between h-full">
            <div>
              <p className="text-[#b91c1c] text-xs tracking-[0.4em] uppercase mb-1">
                {artista.especialidad[lang]}
              </p>
              <h3 className="text-white text-2xl font-semibold mb-4">{artista.nombre}</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-5">
                {artista.descripcion[lang]}
              </p>
              <div className="border-t border-white/10 pt-4">
                <p className="text-[#b91c1c] text-xs tracking-widest uppercase mb-1">
                  {lang === 'es' ? 'Estilos' : 'Styles'}
                </p>
                <p className="text-gray-400 text-sm">{artista.estilos[lang]}</p>
              </div>
            </div>
            <a
              href={`https://instagram.com/${artista.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-2 text-[#b91c1c] text-sm hover:underline tracking-wide mt-4"
            >
              <Instagram size={14} />
              @{artista.instagram}
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default function Artistas() {
  const { t, lang } = useLang()

  return (
    <section id="artistas" className="py-24 bg-[#111111]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="block h-px w-16 bg-[#b91c1c]" />
            <span className="text-[#b91c1c] text-xs tracking-[0.4em] uppercase">{t.artistas.tag}</span>
            <span className="block h-px w-16 bg-[#b91c1c]" />
          </div>
          <h2 className="font-display text-5xl md:text-7xl text-white tracking-wider">
            {t.artistas.titulo}
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            {t.artistas.subtitulo}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {artistas.map((artista) => (
            <ArtistaCard key={artista.nombre} artista={artista} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  )
}
