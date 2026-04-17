/**
 * Asset Constants
 * Using relative root paths (/) to ensure the browser fetches from the public directory directly.
 * Standardized filenames for maximum reliability.
 */

import heroVideo from '../assets/hero.mp4';
import heroLegacyVideo from '../assets/hero-legacy.mp4';

export const ASSETS = {
  LOGO: {
    PRIMARY: '/logo.png',
    SECONDARY: 'https://img.logoipsum.com/264.svg', // Professional tech logo
    EXTERNAL: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgNDAiPjx0ZXh0IHg9IjEwIiB5PSIzMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzAwNTZiMyI+U0lHTUE8L3RleHQ+PHRleHQgeD0iOTUiIHk9IjMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjI0IiBmb250LXN0eWxlPSJpdGFsaWMiIGZpbGw9IiNFQUIzMDgiPk5FWFQ8L3RleHQ+PC9zdmc+', // "SigmaNext" SVG
    FALLBACK_TEXT: 'SIGMA'
  },
  VECTORS: {
    HERO_VIDEO: {
      PRIMARY: 'https://videos.pexels.com/video-files/3130182/3130182-hd_1920_1080_30fps.mp4', // Digital Stream Dynamics
      SECONDARY: 'https://videos.pexels.com/video-files/8524330/8524330-hd_1920_1080_25fps.mp4', // AI Neural Fold White
      BACKUP_LOCAL: heroVideo, // Keep user upload as hidden fallback
      FALLBACK: 'https://cdn.pixabay.com/video/2023/11/02/187514-880479708_large.mp4'
    }
  },
  PARTNERS: [
    { name: 'Snowflake', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Snowflake_Logo.svg' },
    { name: 'Microsoft Fabric', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
    { name: 'Google Cloud', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg' },
    { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
    { name: 'OpenAI', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg' },
    { name: 'Databricks', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.png' },
    { name: 'SAP', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg' },
    { name: 'Oracle Cloud', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg' }
  ],
  ICONS: {
    CHATBOT: {
      PRIMARY: '/bot.png',
      SECONDARY: 'https://cdn-icons-png.flaticon.com/512/4712/4712035.png',
      FALLBACK: 'https://api.iconify.design/lucide:bot.svg?color=%230066cc'
    }
  },
  GALLERY: {
    EAGLE_CREST: 'https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_1280.jpg' // High-stability Eagle Crest reference
  }
};
