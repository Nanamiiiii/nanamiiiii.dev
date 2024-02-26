import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/blogs/pages', '/blogs/tag'],
    },
    sitemap: ['https://myuu.dev/sitemap.xml', 'https://myuu.dev/blogs/sitemap.xml'],
  }
}