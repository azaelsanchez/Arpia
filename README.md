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
- 🎨 **Tema oscuro** con acentos morados

---

## 🗂️ Secciones

| Sección | Descripción |
|---|---|
| **Quiénes somos** | Presentación del estudio con foto |
| **Artistas** | Sofía, Cristina, Mark y Cristian con sus perfiles |
| **Trabajos** | Feed de Instagram con lightbox |
| **Contacto** | WhatsApp, horario y ubicación |

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
Una vez configurada, sigue estos pasos:

1. Crea una app en [developers.facebook.com](https://developers.facebook.com)
2. Añade el producto **Instagram Graph API**
3. Genera un **Long-Lived Access Token**
4. Abre `src/components/InstagramFeed.jsx` y rellena:

```js
const INSTAGRAM_TOKEN = 'TU_TOKEN_AQUI'
const INSTAGRAM_USERNAME = 'arpiatattoo'
```

---

## 🛠️ Stack

| Tecnología | Versión |
|---|---|
| React | 19 |
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
│   ├── Artistas.jsx     # Cards de los artistas
│   ├── InstagramFeed.jsx# Galería + lightbox
│   ├── Contacto.jsx     # WhatsApp + horario + ubicación
│   └── Footer.jsx       # Pie de página
├── i18n.js              # Textos en ES y EN
├── LanguageContext.jsx  # Contexto de idioma global
└── App.jsx
```

---

## 📍 Estudio

**C/ del Poeta Ricard Sanmartí, 4 — Benimaclet, 46020 València**

| | |
|---|---|
| 📱 WhatsApp | [+34 611 466 867](https://wa.me/34611466867) |
| 📸 Instagram | [@arpiatattoo](https://instagram.com/arpiatattoo) |
| 🕐 Lunes–Viernes | 11:00 – 20:00 |
| 🕐 Sábado | 11:00 – 18:00 |

---

## 👥 Artistas

| Nombre | Especialidad | Instagram |
|---|---|---|
| Sofía | Tatuadora | [@sofiaspiral](https://instagram.com/sofiaspiral) |
| Cristina | Tatuadora | [@crisstinacastillo_](https://instagram.com/crisstinacastillo_) |
| Mark | Tatuador | [@krea.Imk](https://instagram.com/krea.Imk) |
| Cristian | Eliminación de tatuajes | [@controlzeta_laser](https://instagram.com/controlzeta_laser) |
