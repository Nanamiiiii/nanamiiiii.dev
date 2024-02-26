import { MetadataRoute } from 'next'
 
const sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      url: 'https://myuu.dev',
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 1,
    },
    {
      url: 'https://myuu.dev/skill',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://myuu.dev/blogs',
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.5,
    },
    {
      url: 'https://myuu.dev/env',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://myuu.dev/works',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]
}

export default sitemap