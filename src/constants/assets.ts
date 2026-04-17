/**
 * Asset Constants
 * Using relative root paths (/) to ensure the browser fetches from the public directory directly.
 * Standardized filenames for maximum reliability.
 */

export const ASSETS = {
  LOGO: {
    PRIMARY: '/logo.png',
    SECONDARY: 'https://img.logoipsum.com/264.svg', // Professional tech logo
    EXTERNAL: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgNDAiPjx0ZXh0IHg9IjEwIiB5PSIzMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXdlaWdodD0iYm9sZCIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzAwNTZiMyI+U0lHTUE8L3RleHQ+PHRleHQgeD0iOTUiIHk9IjMwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtd2VpZ2h0PSJib2xkIiBmb250LXNpemU9IjI0IiBmb250LXN0eWxlPSJpdGFsaWMiIGZpbGw9IiNFQUIzMDgiPk5FWFQ8L3RleHQ+PC9zdmc+', // "SigmaNext" SVG
    FALLBACK_TEXT: 'SIGMA'
  },
  VECTORS: {
    HERO_VIDEO: {
      PRIMARY: '/hero.mp4', // Your new uploaded video
      SECONDARY: '/hero-legacy.mp4', // Your original video
      FALLBACK: 'https://www.w3schools.com/html/mov_bbb.mp4' // Bunny as guaranteed backup
    }
  },
  ICONS: {
    CHATBOT: {
      PRIMARY: '/bot.png',
      SECONDARY: 'https://cdn-icons-png.flaticon.com/512/4712/4712035.png',
      FALLBACK: 'https://api.iconify.design/lucide:bot.svg?color=%230066cc'
    }
  }
};
