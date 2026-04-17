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
      FALLBACK: 'https://cdn.pixabay.com/video/2023/11/02/187514-880479708_large.mp4' // High-reliability AI Neural Network White
    },
    TEST_VIDEOS: [
      { id: 'user-primary', url: heroVideo, title: 'Main Hero Upload' },
      { id: 'user-legacy', url: heroLegacyVideo, title: 'Legacy Hero Upload' },
      // AI & Tech White Background Collection (20 Verified Items)
      { id: 'ai-white-01', url: 'https://cdn.pixabay.com/video/2023/11/02/187514-880479708_large.mp4', title: 'Neural Flow System' },
      { id: 'ai-white-02', url: 'https://cdn.pixabay.com/video/2024/02/12/199320-910243178_large.mp4', title: 'Cybernetic Logic' },
      { id: 'ai-white-03', url: 'https://videos.pexels.com/video-files/8524330/8524330-hd_1920_1080_25fps.mp4', title: 'Neural Pulse System' },
      { id: 'ai-white-04', url: 'https://videos.pexels.com/video-files/3130182/3130182-hd_1920_1080_30fps.mp4', title: 'Digital Stream Dynamics' },
      { id: 'ai-white-05', url: 'https://cdn.pixabay.com/video/2024/01/15/196720-903422616_large.mp4', title: 'Interface Systems' },
      { id: 'ai-white-06', url: 'https://cdn.pixabay.com/video/2023/10/22/186064-877232230_large.mp4', title: 'Network Evolution' },
      { id: 'ai-white-07', url: 'https://videos.pexels.com/video-files/4709425/4709425-hd_1920_1080_24fps.mp4', title: 'Abstract Data Logic' },
      { id: 'ai-white-08', url: 'https://videos.pexels.com/video-files/3129668/3129668-hd_1920_1080_30fps.mp4', title: 'Neural Core Network' },
      { id: 'ai-white-09', url: 'https://videos.pexels.com/video-files/3130284/3130284-hd_1920_1080_30fps.mp4', title: 'Quantum Tech Motion' },
      { id: 'ai-white-10', url: 'https://videos.pexels.com/video-files/4491539/4491539-hd_1920_1080_25fps.mp4', title: 'Data Synergy Grid' },
      { id: 'ai-white-11', url: 'https://cdn.pixabay.com/video/2022/10/16/135061-760779958_large.mp4', title: 'Clean Logic' },
      { id: 'ai-white-12', url: 'https://videos.pexels.com/video-files/3141208/3141208-hd_1920_1080_25fps.mp4', title: 'Synthetic Flow' },
      { id: 'ai-white-13', url: 'https://cdn.pixabay.com/video/2021/04/12/70860-537463236_large.mp4', title: 'Data Structure' },
      { id: 'ai-white-14', url: 'https://videos.pexels.com/video-files/8533221/8533221-hd_1920_1080_25fps.mp4', title: 'Tech Innovation Pro' },
      { id: 'ai-white-15', url: 'https://cdn.pixabay.com/video/2022/01/21/105051-667746183_large.mp4', title: 'Neural Network' },
      { id: 'ai-white-16', url: 'https://cdn.pixabay.com/video/2022/05/24/117937-713217442_large.mp4', title: 'Logic Stream' },
      { id: 'ai-white-17', url: 'https://videos.pexels.com/video-files/3129957/3129957-hd_1920_1080_25fps.mp4', title: 'Global Connectivity AI' },
      { id: 'ai-white-18', url: 'https://cdn.pixabay.com/video/2022/08/21/128697-742233989_large.mp4', title: 'Core Processing' },
      { id: 'ai-white-19', url: 'https://videos.pexels.com/video-files/5473971/5473971-hd_1920_1080_25fps.mp4', title: 'Network Pulse Dynamics' },
      { id: 'ai-white-20', url: 'https://cdn.pixabay.com/video/2023/10/01/183115-870425783_large.mp4', title: 'Innovation Web' }
    ]
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
  }
};
