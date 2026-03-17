import { useLang } from '../LanguageContext'
import imgSofia from '../assets/sofia.jpeg'
import imgCristina from '../assets/cristina.jpeg'
import imgMark from '../assets/mark.jpeg'
import imgCristian from '../assets/cristian.jpeg'

const artistas = [
  {
    nombre: 'Sofía',
    especialidad: { es: 'Tatuadora', en: 'Tattoo Artist' },
    instagram: 'sofiaspiral',
    img: imgSofia,
  },
  {
    nombre: 'Cristina',
    especialidad: { es: 'Tatuadora', en: 'Tattoo Artist' },
    instagram: 'crisstinacastillo_',
    img: imgCristina,
  },
  {
    nombre: 'Mark',
    especialidad: { es: 'Tatuador', en: 'Tattoo Artist' },
    instagram: 'krea.Imk',
    img: imgMark,
  },
  {
    nombre: 'Cristian',
    especialidad: { es: 'Eliminación de tatuajes', en: 'Tattoo Removal' },
    instagram: 'controlzeta_laser',
    img: imgCristian,
  },
]

export default function Artistas() {
  const { t, lang } = useLang()

  return (
    <section id="artistas" className="py-24 bg-[#111111]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="block h-px w-16 bg-[#a855f7]" />
            <span className="text-[#a855f7] text-xs tracking-[0.4em] uppercase">{t.artistas.tag}</span>
            <span className="block h-px w-16 bg-[#a855f7]" />
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
            <div
              key={artista.nombre}
              className="group bg-[#1a1a1a] overflow-hidden border border-gray-800 hover:border-[#a855f7]/40 transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={artista.img}
                  alt={artista.nombre}
                  className="w-full h-72 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <p className="text-[#a855f7] text-xs tracking-[0.3em] uppercase mb-1">
                  {artista.especialidad[lang]}
                </p>
                <h3 className="text-white text-xl font-semibold mb-3">{artista.nombre}</h3>
                <a
                  href={`https://instagram.com/${artista.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 text-sm hover:text-[#a855f7] transition-colors tracking-wide"
                >
                  @{artista.instagram}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
