import re

with open('src/utils/seo.ts', 'r', encoding='utf-8') as f:
    content = f.read()

canonical_code = """
  if (url) {
    updateOgTag('og:url', url);
    updateTwitterTag('twitter:url', url);
    
    // Add canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }
"""

content = re.sub(r'  if \(url\) \{\s*updateOgTag\(\'og:url\', url\);\s*updateTwitterTag\(\'twitter:url\', url\);\s*\}', canonical_code, content)

with open('src/utils/seo.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Updated seo.ts")
