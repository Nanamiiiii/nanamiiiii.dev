import 'server-only'
import { createClient } from 'newt-client-js'
import { cache } from 'react'
import { Publication, type Article, type ArticleTag } from '../types/blog'

const cdnClient = createClient({
  spaceUid: process.env.NEWT_SPACE_UID || '',
  token: process.env.NEWT_CDN_API_TOKEN || '',
  apiType: 'cdn',
})

const apiClient = createClient({
  spaceUid: process.env.NEWT_SPACE_UID || '',
  token: process.env.NEWT_API_TOKEN || '',
  apiType: 'api',
})

export const getArticles = cache(async () => {
  const { items } = await cdnClient.getContents<Article>({
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
})

export const getVisibleArticles = cache(async () => {
  const { items } = await cdnClient.getContents<Article>({
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
})

export const getTags = cache(async () => {
  const { items } = await cdnClient.getContents<ArticleTag>({
    appUid: 'blog',
    modelUid: 'tag',
    query: {
      select: ['_id', '_sys', 'name', 'slug'],
    },
  })
  return items
})

export const getArticleBySlug = cache(
  async (slug: string, isDraft?: boolean) => {
    const client = isDraft ? apiClient : cdnClient
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
  },
)

export const getPublications = cache(async () => {
  const { items } = await cdnClient.getContents<Publication>({
    appUid: 'profile',
    modelUid: 'publication',
    query: {
      select: [
        '_id',
        '_sys',
        'title',
        'author',
        'publishedTo',
        'publishedOn',
        'publishedType',
      ],
    },
  })
  return items
})
