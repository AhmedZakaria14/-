interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  image?: string;
}

export const updateSEO = ({ title, description, keywords, url, image }: SEOProps) => {
  document.title = title;

  const updateMetaTag = (name: string, content: string) => {
    let element = document.querySelector(`meta[name="${name}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute('name', name);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  const updateOgTag = (property: string, content: string) => {
    let element = document.querySelector(`meta[property="${property}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute('property', property);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  const updateTwitterTag = (name: string, content: string) => {
    let element = document.querySelector(`meta[name="${name}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute('name', name);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  };

  updateMetaTag('description', description);
  if (keywords) {
    updateMetaTag('keywords', keywords);
  }
  
  updateOgTag('og:title', title);
  updateOgTag('og:description', description);
  updateTwitterTag('twitter:title', title);
  updateTwitterTag('twitter:description', description);

  if (url) {
    updateOgTag('og:url', url);
    updateTwitterTag('twitter:url', url);
  }
  
  if (image) {
    updateOgTag('og:image', image);
    updateTwitterTag('twitter:image', image);
  }
};
