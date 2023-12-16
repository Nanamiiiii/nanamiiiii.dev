import { createClient } from 'newt-client-js'
import type { Article, ArticleTag } from '../types/blog'

const client = createClient({
  spaceUid: process.env.NEWT_SPACE_UID || '',
  token: process.env.NEWT_CDN_API_TOKEN || '',
  apiType: 'cdn',
})

export const getArticles = async () => {
  const { items } = await client.getContents<Article>({
    appUid: 'blog',
    modelUid: 'article',
    query: {
      select: [
        '_id',
        '_sys',
        'title',
        'slug',
        'meta',
        'body',
        'tags',
        'visibility',
      ],
    },
  })
  return items
}

export const getVisibleArticles = async () => {
  const { items } = await client.getContents<Article>({
    appUid: 'blog',
    modelUid: 'article',
    query: {
      select: [
        '_id',
        '_sys',
        'title',
        'slug',
        'meta',
        'body',
        'tags',
        'visibility',
      ],
    },
  })
  const visibleArticles = items.reduce((acm: Article[], current: Article) => {
    if (current.visibility) {
      acm.push(current)
    }
    return acm
  }, [])
  return visibleArticles
}

export const getTags = async () => {
  const { items } = await client.getContents<ArticleTag>({
    appUid: 'blog',
    modelUid: 'tag',
    query: {
      select: ['_id', '_sys', 'name', 'slug'],
    },
  })
  return items
}

export const getArticleBySlug = async (slug: string) => {
  const article = await client.getFirstContent<Article>({
    appUid: 'blog',
    modelUid: 'article',
    query: {
      slug,
      select: [
        '_id',
        '_sys',
        'title',
        'slug',
        'meta',
        'body',
        'tags',
        'visibility',
      ],
    },
  })
  return article
}
