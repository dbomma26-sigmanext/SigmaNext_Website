/**
 * Asset Constants
 * Using direct public paths as PRIMARY to ensure stability on Vercel deployments.
 */

export const ASSETS = {
  LOGO: {
    PRIMARY: '/sigma-logo.png?v=3',
    SECONDARY: 'https://cdn.pixabay.com/photo/2017/01/31/13/14/animal-2023924_1280.png', 
    EXTERNAL: 'https://img.logoipsum.com/296.svg', 
    FALLBACK_TEXT: 'SIGMA'
  },
  VECTORS: {
    HERO_VIDEO: {
      PRIMARY: '/Updated_Banner_vedio_2.mp4?v=1',
      SECONDARY: '/hero-banner.mp4?v=3',
      FALLBACK: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-blue-circuit-board-4430-large.mp4'
    }
  },
  ICONS: {
    CHATBOT: {
      PRIMARY: '/chatbot-icon.png?v=3',
      SECONDARY: 'https://cdn-icons-png.flaticon.com/512/4712/4712035.png', // Stable high-res bot icon
      FALLBACK: 'https://api.iconify.design/lucide:bot.svg?color=%230066cc'
    }
  }
};
