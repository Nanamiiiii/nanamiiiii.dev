import { MetadataRoute } from 'next'
import { getVisibleArticles } from '../../lib/newt'

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const articles = await getVisibleArticles()
  return articles.map(v => ({
    url: `https://myuu.dev/blogs/${v.slug}`,
    lastModified: new Date(v._sys.updatedAt),
    changeFrequency: 'always',
    priority: 0.5,
  }))
}

export default sitemap
