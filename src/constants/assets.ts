/**
 * Asset Constants
 * Using direct public paths as PRIMARY to ensure stability on Vercel deployments.
 */

export const ASSETS = {
  LOGO: {
    PRIMARY: '/sigma-logo.png?v=4',
    SECONDARY: 'https://img.logoipsum.com/296.svg', // Professional SVG fallback
    EXTERNAL: 'https://cdn.pixabay.com/photo/2017/01/31/13/14/animal-2023924_1280.png', 
    FALLBACK_TEXT: 'SIGMA'
  },
  VECTORS: {
    HERO_VIDEO: {
      PRIMARY: 'https://www.w3schools.com/html/mov_bbb.mp4', // Bunny video as requested
      SECONDARY: '/Updated_Banner_vedio_2.mp4',
      FALLBACK: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-blue-circuit-board-4430-large.mp4'
    }
  },
  ICONS: {
    CHATBOT: {
      PRIMARY: '/chatbot-icon.png?v=4',
      SECONDARY: 'https://api.iconify.design/lucide:bot.svg?color=%230066cc', // High quality SVG
      FALLBACK: 'https://cdn-icons-png.flaticon.com/512/4712/4712035.png'
    }
  }
};
