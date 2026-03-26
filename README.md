# 🖤 Arpia Tattoo — Web Oficial

> Sitio web del estudio de tatuajes **Arpia Tattoo**, ubicado en Benimaclet, Valencia.
> Desarrollado en **React + Vite + Tailwind CSS**.

---

## ✨ Características

- 🌐 **Bilingüe** — Español / English con cambio instantáneo
- 📸 **Feed de Instagram en tiempo real** — se actualiza automáticamente cuando el estudio sube fotos
- 🖼️ **Lightbox** — galería de trabajos con navegación entre imágenes (teclado y click)
- 📱 **Responsive** — menú hamburger en móvil, adaptado a todos los tamaños
- 💬 **Contacto por WhatsApp** — botón directo sin formularios
- 🎨 **Tema oscuro** con acentos en rojo

---

## 🗂️ Secciones

| Sección | Descripción |
|---|---|
| **Quiénes somos** | Presentación del estudio con foto |
| **Artistas** | Cards con flip de cada artista/servicio |
| **Trabajos** | Feed de Instagram con lightbox |
| **Contacto** | WhatsApp y ubicación en mapa |

---

## 🚀 Desarrollo local

```bash
# Instalar dependencias
npm install

# Arrancar servidor de desarrollo
npm run dev

# Build para producción
npm run build
```

---

## 📸 Conectar Instagram (feed en tiempo real)

La cuenta de Instagram debe ser **Creator o Business**.
El token **nunca se expone al frontend** — pasa por una Vercel Function (`api/instagram.js`) que hace de proxy.

Consulta el archivo `INSTAGRAM_SETUP.txt` para los pasos completos.

En producción, añade la variable en Vercel:
- **Settings → Environment Variables → `INSTAGRAM_TOKEN`**

---

## 🛠️ Stack

| Tecnología | Versión |
|---|---|
| React | 19.2 |
| Vite | 8 |
| Tailwind CSS | 3 |
| Lucide React | latest |

---

## 📁 Estructura

```
src/
├── assets/              # Logo, fotos artistas, banderas
├── components/
│   ├── Navbar.jsx       # Navegación + selector de idioma
│   ├── QuienesSomos.jsx # Sección hero con foto del estudio
│   ├── Artistas.jsx     # Cards de los artistas (efecto flip)
│   ├── InstagramFeed.jsx# Galería + lightbox
│   ├── Contacto.jsx     # WhatsApp + ubicación
│   └── Footer.jsx       # Pie de página
├── i18n.js              # Textos en ES y EN
├── LanguageContext.jsx  # Contexto de idioma global
└── App.jsx
api/
└── instagram.js         # Vercel Function proxy para Instagram
```

---

## 📍 Estudio

**C/ del Poeta Ricard Sanmartí, 4 — Benimaclet, 46020 València**

| | |
|---|---|
| 📱 WhatsApp | [+34 611 466 867](https://wa.me/34611466867) |
| 📸 Instagram | [@arpiatattoo](https://instagram.com/arpiatattoo) |

---

## 👥 Equipo

| Nombre | Especialidad | Instagram |
|---|---|---|
| Sofía Spiral | Tatuadora | [@sofiaspiral](https://instagram.com/sofiaspiral) |
| Cristina Castillo | Tatuadora | [@crisstinacastillo_](https://instagram.com/crisstinacastillo_) |
| Krea | Tatuador | [@krea.lmk](https://instagram.com/krea.lmk) |
| Control Zeta | Eliminación de tatuajes | [@controlzeta_laser](https://instagram.com/controlzeta_laser) |
