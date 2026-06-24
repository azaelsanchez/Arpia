import { useState } from 'react'
import { Instagram } from 'lucide-react'
import { useLang } from '../LanguageContext'
import imgSofia from '../assets/sofia.jpeg'
import imgCristina from '../assets/cristina.jpeg'
import imgMark from '../assets/mark.jpeg'
import imgCristian from '../assets/cristian.jpeg'
import imgHari from '../assets/logohari.jpeg'

const artistas = [
  {
    nombre: 'Sofía Spiral',
    especialidad: { es: 'Tatuadora', en: 'Tattoo Artist' },
    instagram: 'sofiaspiral',
    img: imgSofia,
    descripcion: {
      es: 'Nuestra artista especializada en tattoos a color con referencias de anime y disney. Aunque se le da bien todo: línea fina, detalles en acuarela y mucho más. Aparte de tatuar genial y ser una gran profesional del sector, te hace pasar un rato muy ameno con su carácter arrollador. Es una tía muy chula, con estilazo y no sabemos por qué... pero tiene algo con Nicolás Cage 💘',
      en: 'Our artist specialised in colour tattoos with anime and disney references. Though she excels at everything: fine line, watercolour details and much more. On top of being an amazing tattoo artist and a true professional, she makes every session a great time with her infectious personality. She\'s super cool, has amazing style and we don\'t know why... but she has a thing for Nicolas Cage 💘',
    },
    estilos: { es: 'Color · Anime · Disney · Línea fina · Acuarela', en: 'Colour · Anime · Disney · Fine line · Watercolour' },
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
    descripcion: {
      es: 'Técnico especialista en eliminación de tatuajes con 6 años de experiencia. Te asesorará en cada sesión: evolución, curación y tiempos de espera.',
      en: 'Tattoo removal specialist with 6 years of experience. He will guide you through every session: progress, aftercare and waiting times.',
    },
    estilosLabel: { es: 'Tecnología con Láser Médico', en: 'Medical Laser Technology' },
    estilos: {
      es: 'Láser Q-Switched ND:YAG con certificación médica europea. Potente, eficiente y seguro. Sin marcas ni daños en la piel.',
      en: 'Q-Switched ND:YAG laser with European medical certification. Powerful, efficient and safe. No marks or skin damage.',
    },
  },
  {
    nombre: 'Hari Piercing',
    especialidad: { es: 'Piercing', en: 'Piercing Artist' },
    instagram: 'haripiercing',
    img: imgHari,
    descripcion: {
      es: 'Sofía, con más de 10 años de experiencia en el sector del piercing, y Cristian con su meticulosidad y perfeccionismo harán que tus perforaciones siempre estén en el sitio perfecto, de la forma perfecta y con la joya perfecta.',
      en: 'Sofía, with over 10 years of experience in piercing, and Cristian with his precision and perfectionism, will ensure your piercings are always placed in exactly the right spot, in the perfect way, with the perfect jewel.',
    },
    estilos: {
      es: 'Aguja americana · Joyería de titanio grado implante · Gran variedad de formas, brillos, piedras naturales y colores.',
      en: 'American needle · Implant-grade titanium jewellery · Wide variety of shapes, finishes, natural stones and colours.',
    },
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
      className="flip-card h-[500px] cursor-pointer"
      onClick={handleClick}
    >
      <div className={`flip-card-inner ${flipped ? 'flipped' : ''}`}>

        {/* FRONT */}
        <div className="flip-card-front bg-[#1a1a1a] border border-gray-800 overflow-hidden">
          <img
            src={artista.img}
            alt={artista.nombre}
            className="w-full h-80 object-cover object-top"
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
                  {artista.estilosLabel ? artista.estilosLabel[lang] : (lang === 'es' ? 'Estilos' : 'Styles')}
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
          <h2 className="font-display text-4xl md:text-5xl lg:text-7xl text-white tracking-wider">
            {t.artistas.titulo}
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            {t.artistas.subtitulo}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artistas.slice(0, 3).map((artista) => (
            <ArtistaCard key={artista.nombre} artista={artista} lang={lang} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6 lg:w-2/3 lg:mx-auto">
          {artistas.slice(3).map((artista) => (
            <ArtistaCard key={artista.nombre} artista={artista} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  )
}
