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
    EXTERNAL: 'https://raw.githubusercontent.com/sigma-next/assets/main/logo.png', // Placeholder for a real repo if exists
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
      FALLBACK: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-blue-circuit-board-4430-large.mp4' 
    }
  },
  ICONS: {
    CHATBOT: {
      PRIMARY: chatbotIcon,
      SECONDARY: '/chatbot-icon.png',
      FALLBACK: 'https://api.iconify.design/lucide:bot.svg?color=%23ffffff'
    }
  }
};
