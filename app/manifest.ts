import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'أبو ثابت للنجارة',
    short_name: 'أبو ثابت للنجارة',
    description: 'أفضل خدمات النجارة والديكورات الخشبية في الرياض',
    start_url: '/',
    display: 'standalone',
    background_color: '#FDFAF6',
    theme_color: '#8B4513',
    icons: [
      {
        src: '/logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
