import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

export function constructMetadata({
  title,
  description,
  path = '',
  image = '/logo.png',
}: SEOProps): Metadata {
  const baseUrl = 'https://najjarriyadh.com';
  const url = `${baseUrl}${path}`;

  return {
    title: `${title} | أبو ثابت للنجارة`,
    description,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
      languages: {
        'ar-SA': url,
      },
    },
    openGraph: {
      title: `${title} | أبو ثابت للنجارة`,
      description,
      url,
      siteName: 'أبو ثابت للنجارة',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'ar_SA',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | أبو ثابت للنجارة`,
      description,
      images: [image],
    },
  };
}
