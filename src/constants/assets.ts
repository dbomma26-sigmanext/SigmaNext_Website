import logoPng from "@/assets/sigma-logo.png";
import chatbotIcon from "@/assets/chatbot-icon.png";
import heroBannerMp4 from "@/assets/hero-banner.mp4";

/**
 * Asset Constants
 * Using multiple sources to ensure reliability across environments (Local, AI Studio, Vercel)
 */

export const ASSETS = {
  LOGO: {
    PRIMARY: logoPng,
    SECONDARY: '/sigma-logo.png',
    EXTERNAL: 'https://img.logoipsum.com/296.svg', // Stable professional placeholder
    FALLBACK_TEXT: 'SIGMA'
  },
  TEST: {
    IMAGE: 'https://picsum.photos/seed/sigma/800/600',
    VIDEO: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  VECTORS: {
    HERO_VIDEO: {
      PRIMARY: heroBannerMp4,
      SECONDARY: '/hero-banner.mp4',
      FALLBACK: 'https://www.w3schools.com/html/mov_bbb.mp4' // Use the one that worked in user's test as fallback
    }
  },
  ICONS: {
    CHATBOT: {
      PRIMARY: chatbotIcon,
      SECONDARY: '/chatbot-icon.png',
      FALLBACK: 'https://api.iconify.design/lucide:bot.svg?color=%230066cc'
    }
  }
};
