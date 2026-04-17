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
      PRIMARY: heroVideo, 
      SECONDARY: 'https://videos.pexels.com/video-files/18069165/18069165-hd_1920_1080_24fps.mp4', 
      BACKUP_LOCAL: heroLegacyVideo,
      FALLBACK: 'https://videos.pexels.com/video-files/3129957/3129957-hd_1920_1080_25fps.mp4' // Removed Bunny, using working Pexels Connectivity as final fallback
    },
    TEST_VIDEOS: [
      { id: 'user-primary', url: heroVideo, title: 'Main Hero Upload' },
      { id: 'user-legacy', url: heroLegacyVideo, title: 'Legacy Hero Upload' },
      { id: 'tech-abstract', url: 'https://videos.pexels.com/video-files/7547447/7547447-hd_1920_1080_25fps.mp4', title: 'Tech Abstract' },
      { id: 'data-grid', url: 'https://videos.pexels.com/video-files/4491539/4491539-hd_1920_1080_25fps.mp4', title: 'Data Grid' },
      { id: 'ai-neural', url: 'https://videos.pexels.com/video-files/8091524/8091524-hd_1920_1080_25fps.mp4', title: 'AI Neural Network' },
      { id: 'connectivity', url: 'https://videos.pexels.com/video-files/3129957/3129957-hd_1920_1080_25fps.mp4', title: 'Global Connectivity' }
    ]
  },
  PARTNERS: [
    { name: 'Nvidia', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg' },
    { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
    { name: 'Google Cloud', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg' },
    { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
    { name: 'OpenAI', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg' },
    { name: 'Databricks', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.png' }
  ],
  ICONS: {
    CHATBOT: {
      PRIMARY: '/bot.png',
      SECONDARY: 'https://cdn-icons-png.flaticon.com/512/4712/4712035.png',
      FALLBACK: 'https://api.iconify.design/lucide:bot.svg?color=%230066cc'
    }
  }
};
