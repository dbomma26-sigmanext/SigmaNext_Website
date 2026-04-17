/**
 * Asset Constants
 * Using relative root paths (/) to ensure the browser fetches from the public directory directly.
 * Standardized filenames for maximum reliability.
 */

export const ASSETS = {
  LOGO: {
    PRIMARY: '/logo.png?v=1',
    SECONDARY: 'https://img.logoipsum.com/264.svg', // Professional SVG
    EXTERNAL: 'https://cdn.pixabay.com/photo/2017/01/31/13/14/animal-2023924_1280.png', 
    FALLBACK_TEXT: 'SIGMA'
  },
  VECTORS: {
    HERO_VIDEO: {
      PRIMARY: '/hero.mp4?v=1', // Your new uploaded video
      SECONDARY: '/hero-legacy.mp4', // Your original video
      FALLBACK: 'https://www.w3schools.com/html/mov_bbb.mp4' // Bunny as guaranteed backup
    }
  },
  ICONS: {
    CHATBOT: {
      PRIMARY: '/bot.png?v=1',
      SECONDARY: 'https://cdn-icons-png.flaticon.com/512/4712/4712035.png',
      FALLBACK: 'https://api.iconify.design/lucide:bot.svg?color=%230066cc'
    }
  }
};
