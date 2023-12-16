export type Blog = {
  id: string
  content: string
  title: string
  categories: Category[]
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
}

export type Category = {
  id: string
  name: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
}

export type Article = {
  _id: string
  _sys: {
    createdAt: string
    updatedAt: string
    raw: {
      createdAt: string
      updatedAt: string
      firstPublishedAt: string
      publishedAt: string
    }
  }
  title: string
  slug: string
  meta: {
    title: string
    description: string
    ogImage: {
      _id: string
      src: string
      fileType: string
      fileSize: number
      fileName: string
      width: number
      height: number
    }
  }
  body: string
  visibility: boolean
  tags: ArticleTag[]
}

export type ArticleTag = {
  _id: string
  _sys: {
    createdAt: string
    updatedAt: string
    raw: {
      createdAt: string
      updatedAt: string
      firstPublishedAt: string
      publishedAt: string
    }
  }
  name: string
  slug: string
}
