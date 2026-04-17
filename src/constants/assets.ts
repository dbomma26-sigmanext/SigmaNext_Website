/**
 * Asset Constants
 * Using direct public paths as PRIMARY to ensure stability on Vercel deployments.
 */

export const ASSETS = {
  LOGO: {
    PRIMARY: '/sigma-logo.png',
    SECONDARY: 'https://cdn.pixabay.com/photo/2017/01/31/13/14/animal-2023924_1280.png', // Stable external logo fallback
    EXTERNAL: 'https://img.logoipsum.com/296.svg', 
    FALLBACK_TEXT: 'SIGMA'
  },
  VECTORS: {
    HERO_VIDEO: {
      PRIMARY: '/hero-banner.mp4',
      SECONDARY: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-blue-circuit-board-4430-large.mp4',
      FALLBACK: 'https://cdn.pixabay.com/video/2016/09/21/5361-183768853_tiny.mp4' // Tech-themed abstract video
    }
  },
  ICONS: {
    CHATBOT: {
      PRIMARY: '/chatbot-icon.png',
      SECONDARY: 'https://api.iconify.design/lucide:bot.svg?color=%230066cc',
      FALLBACK: 'https://api.iconify.design/lucide:message-square.svg?color=%230066cc'
    }
  }
};
