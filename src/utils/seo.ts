interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  image?: string;
  structuredData?: any;
}

export const updateSEO = ({ title, description, keywords, url, image, structuredData }: SEOProps) => {
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

  if (structuredData) {
    const schemaId = 'dynamic-schema';
    let script = document.getElementById(schemaId);
    if (!script) {
      script = document.createElement('script');
      script.id = schemaId;
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);
  }
};
