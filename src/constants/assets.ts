/**
 * Asset Constants
 * Using direct public paths as PRIMARY to ensure stability on Vercel deployments.
 */

export const ASSETS = {
  LOGO: {
    PRIMARY: '/sigma-logo.png',
    SECONDARY: 'https://img.logoipsum.com/296.svg', // High-quality tech logo fallback
    EXTERNAL: 'https://raw.githubusercontent.com/sigma-next/assets/main/logo.png', 
    FALLBACK_TEXT: 'SIGMA'
  },
  VECTORS: {
    HERO_VIDEO: {
      PRIMARY: '/hero-banner.mp4',
      SECONDARY: 'https://www.w3schools.com/html/mov_bbb.mp4', // Verified working link from user test
      FALLBACK: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-blue-circuit-board-4430-large.mp4'
    }
  },
  ICONS: {
    CHATBOT: {
      PRIMARY: '/chatbot-icon.png',
      SECONDARY: 'https://api.iconify.design/lucide:bot.svg?color=%230066cc',
      FALLBACK: 'https://raw.githubusercontent.com/sigma-next/assets/main/chatbot.png'
    }
  }
};
