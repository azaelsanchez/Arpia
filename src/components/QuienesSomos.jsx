import { useLang } from '../LanguageContext'
import nosotros from '../assets/nosotros.jpeg'

export default function QuienesSomos() {
  const { t } = useLang()

  return (
    <section
      id="quienes-somos"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] via-[#111111] to-[#0d0d0d]" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b91c1c' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Texto */}
        <div className="text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
            <span className="block h-px w-16 bg-[#b91c1c]" />
            <span className="text-[#b91c1c] text-xs tracking-[0.4em] uppercase">{t.quienes.tag}</span>
          </div>

          <h1 className="font-display text-6xl md:text-7xl text-white tracking-wider mb-8 leading-none">
            {t.quienes.titulo}
          </h1>

          <p
            className="text-gray-300 text-lg leading-relaxed mb-6"
            dangerouslySetInnerHTML={{
              __html: t.quienes.p1.replace('<b>', '<span class="text-[#b91c1c] font-semibold">').replace('</b>', '</span>'),
            }}
          />

          <p className="text-gray-500 text-base leading-relaxed mb-10">
            {t.quienes.p2}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#artistas"
              className="px-8 py-3 bg-[#b91c1c] text-black font-semibold tracking-widest uppercase text-sm hover:bg-[#991b1b] hover:scale-105 hover:shadow-lg hover:shadow-[#b91c1c]/40 transition-all duration-200"
            >
              {t.quienes.btnArtistas}
            </a>
            <a
              href="#contacto"
              className="px-8 py-3 border border-[#b91c1c] text-[#b91c1c] font-semibold tracking-widest uppercase text-sm hover:bg-[#b91c1c]/10 hover:scale-105 hover:shadow-lg hover:shadow-[#b91c1c]/30 transition-all duration-200"
            >
              {t.quienes.btnCita}
            </a>
          </div>
        </div>

        {/* Imagen */}
        <div className="relative">
          <div className="absolute -inset-2 bg-[#b91c1c]/10 blur-xl rounded-sm" />
          <img
            src={nosotros}
            alt="Arpia Tattoo estudio"
            className="relative w-full h-[600px] object-cover border border-[#b91c1c]/20" style={{ objectPosition: 'center -5px' }}
          />
        </div>

      </div>
    </section>
  )
}
