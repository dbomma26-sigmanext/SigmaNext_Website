import logoPng from "@/assets/sigma-logo.png";
import chatbotIcon from "@/assets/chatbot-icon.png";
import heroBannerMp4 from "@/assets/hero-banner.mp4";
import updatedVideo2 from "@/assets/Updated_Banner_vedio_2.mp4";

/**
 * Asset Constants
 * Using direct imports to let Vite handle production bundling and hashing.
 */

export const ASSETS = {
  LOGO: {
    PRIMARY: logoPng,
    SECONDARY: 'https://img.logoipsum.com/264.svg', // High-fidelity tech logo
    EXTERNAL: 'https://cdn.pixabay.com/photo/2017/01/31/13/14/animal-2023924_1280.png', 
    FALLBACK_TEXT: 'SIGMA'
  },
  VECTORS: {
    HERO_VIDEO: {
      PRIMARY: updatedVideo2,
      SECONDARY: heroBannerMp4,
      FALLBACK: 'https://www.w3schools.com/html/mov_bbb.mp4' // Bunny video as reliable fallback
    }
  },
  ICONS: {
    CHATBOT: {
      PRIMARY: chatbotIcon,
      SECONDARY: 'https://cdn-icons-png.flaticon.com/512/4712/4712035.png',
      FALLBACK: 'https://api.iconify.design/lucide:bot.svg?color=%230066cc'
    }
  }
};
