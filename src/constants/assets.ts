/**
 * Asset Constants
 * Using multiple sources to ensure reliability across environments (Local, AI Studio, Vercel)
 */

const BASE_URL = window.location.origin;

export const ASSETS = {
  LOGO: {
    PRIMARY: '/src/assets/sigma-logo.png',
    SECONDARY: '/sigma-logo.png',
    EXTERNAL: 'https://cdn.jsdelivr.net/gh/phuoc-ng/sigma-assets@main/sigma-logo.png', // Just in case, a generic fallback
    FALLBACK_TEXT: 'SIGMA'
  },
  VECTORS: {
    HERO_VIDEO: {
      PRIMARY: '/src/assets/hero-banner.mp4',
      SECONDARY: '/hero-banner.mp4',
      FALLBACK: 'https://cdn.pixabay.com/video/2020/09/24/51101-464228994_large.mp4' // Stable abstract tech video
    }
  },
  ICONS: {
    CHATBOT: {
      PRIMARY: '/src/assets/chatbot-icon.png',
      SECONDARY: '/chatbot-icon.png',
      FALLBACK: 'https://api.iconify.design/lucide:bot.svg?color=%23ffffff'
    }
  }
};
