import re

with open('server.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Add import for blogPosts
import_stmt = 'import { blogPosts } from "./src/data/blog";\n'

if import_stmt not in content:
    content = content.replace('import express from "express";', 'import express from "express";\n' + import_stmt)

sitemap_code = """
  // Sitemap generation
  app.get("/sitemap.xml", (req, res) => {
    const baseUrl = "https://nasharhub.com";
    const staticUrls = [
      "/",
      "/seo-services",
      "/paid-ads-services",
      "/web-dev-services",
      "/saudi",
      "/blog",
      "/website-onboarding",
      "/ai",
      "/policy",
      "/saudi/riyadh",
      "/saudi/jeddah",
      "/saudi/dammam",
      "/saudi/mecca",
      "/saudi/medina",
      "/services/google",
      "/services/meta",
      "/services/snapchat",
      "/services/tiktok"
    ];

    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    // Add static URLs
    staticUrls.forEach(url => {
      xml += `
  <url>
    <loc>${baseUrl}${url}</loc>
    <changefreq>weekly</changefreq>
    <priority>${url === '/' ? '1.0' : '0.8'}</priority>
  </url>`;
    });

    // Add blog posts
    blogPosts.forEach(post => {
      xml += `
  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${post.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
    });

    xml += `\n</urlset>`;

    res.header('Content-Type', 'application/xml');
    res.send(xml);
  });
"""

if 'app.get("/sitemap.xml"' not in content:
    content = content.replace('// API routes FIRST', '// API routes FIRST' + sitemap_code)

with open('server.ts', 'w', encoding='utf-8') as f:
    f.write(content)
