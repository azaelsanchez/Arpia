import { useEffect, useState, useCallback } from 'react'
import { Instagram, AlertCircle, X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import { useLang } from '../LanguageContext'

const INSTAGRAM_USERNAME = 'arpiatattoo'

const PLACEHOLDER_POSTS = Array.from({ length: 9 }, (_, i) => ({
  id: String(i),
  media_url: `https://placehold.co/800x800/1a1a1a/b91c1c?text=Trabajo+${i + 1}`,
  permalink: '#',
  media_type: 'IMAGE',
  caption: `Trabajo ${i + 1} del estudio`,
}))

async function fetchInstagramPosts() {
  const res = await fetch('/api/instagram')
  if (!res.ok) throw new Error('Error al cargar Instagram')
  const data = await res.json()
  return data.data.filter((p) => p.media_type !== 'VIDEO' || p.thumbnail_url)
}

// ── Lightbox ─────────────────────────────────────────────────────────────────
function Lightbox({ posts, index, onClose, onPrev, onNext }) {
  const post = posts[index]

  // Cerrar con Escape, navegar con flechas
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, onPrev, onNext])

  // Bloquear scroll del body mientras el modal está abierto
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const imgSrc = post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Contenedor central — evita que el click se propague al fondo */}
      <div
        className="relative flex flex-col items-center max-w-3xl w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-gray-400 hover:text-white transition-colors"
          aria-label="Cerrar"
        >
          <X size={28} />
        </button>

        {/* Imagen */}
        <img
          src={imgSrc}
          alt={post.caption || 'Trabajo de tatuaje'}
          className="max-h-[80vh] w-full object-contain"
        />

        {/* Caption + link Instagram */}
        {post.caption && post.caption !== 'Trabajo del estudio' && (
          <p className="mt-4 text-gray-400 text-sm text-center max-w-lg line-clamp-3 px-2">
            {post.caption}
          </p>
        )}

        {post.permalink && post.permalink !== '#' && (
          <a
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1 text-[#b91c1c] text-xs hover:underline"
          >
            <ExternalLink size={12} />
            Ver en Instagram
          </a>
        )}

        {/* Contador */}
        <p className="mt-3 text-gray-600 text-xs">
          {index + 1} / {posts.length}
        </p>
      </div>

      {/* Flechas de navegación */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors disabled:opacity-20"
        aria-label="Anterior"
      >
        <ChevronLeft size={40} />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNext() }}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
        aria-label="Siguiente"
      >
        <ChevronRight size={40} />
      </button>
    </div>
  )
}

// ── Componente principal ──────────────────────────────────────────────────────
export default function InstagramFeed() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const { t } = useLang()

  useEffect(() => {
    fetchInstagramPosts()
      .then((data) => setPosts(data.slice(0, 9)))
      .catch(() => setPosts(PLACEHOLDER_POSTS))
      .finally(() => setLoading(false))
  }, [])

  const openLightbox = (index) => setLightboxIndex(index)
  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const prevImage = useCallback(() =>
    setLightboxIndex((i) => (i - 1 + posts.length) % posts.length), [posts.length])
  const nextImage = useCallback(() =>
    setLightboxIndex((i) => (i + 1) % posts.length), [posts.length])

  return (
    <section id="trabajos" className="py-24 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="block h-px w-16 bg-[#b91c1c]" />
            <span className="text-[#b91c1c] text-xs tracking-[0.4em] uppercase">{t.trabajos.tag}</span>
            <span className="block h-px w-16 bg-[#b91c1c]" />
          </div>
          <h2 className="font-display text-5xl md:text-7xl text-white tracking-wider mb-4">
            {t.trabajos.titulo}
          </h2>
          <a
            href={`https://instagram.com/${INSTAGRAM_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#b91c1c] hover:underline text-sm tracking-widest uppercase"
          >
            <Instagram size={16} />
            @{INSTAGRAM_USERNAME}
          </a>
        </div>


        {/* Grid */}
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="aspect-square bg-[#1a1a1a] animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {posts.map((post, i) => (
              <button
                key={post.id}
                onClick={() => openLightbox(i)}
                className="group relative aspect-square overflow-hidden bg-[#1a1a1a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b91c1c]"
              >
                <img
                  src={post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url}
                  alt={post.caption || 'Trabajo de tatuaje'}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                  <Instagram
                    size={28}
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Ver más en Instagram */}
        <div className="text-center mt-10">
          <a
            href={`https://instagram.com/${INSTAGRAM_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border border-[#b91c1c] text-[#b91c1c] font-semibold tracking-widest uppercase text-sm hover:bg-[#b91c1c]/10 hover:scale-105 hover:shadow-lg hover:shadow-[#b91c1c]/30 transition-all duration-200"
          >
            <Instagram size={16} />
            {t.trabajos.verMas}
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          posts={posts}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </section>
  )
}
