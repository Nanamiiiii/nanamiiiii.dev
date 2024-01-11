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

type SysInfo = {
  createdAt: string
  updatedAt: string
  raw: {
    createdAt: string
    updatedAt: string
    firstPublishedAt: string
    publishedAt: string
  }
}

type MetaData = {
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

type Author = {
  _id: string
  type: string
  data: {
    name: string
    myname: boolean
  }
}

type PubType = 'reviewed' | 'no-review' | 'journal' | 'thesis'

export type Article = {
  _id: string
  _sys: SysInfo
  title: string
  slug: string
  meta: MetaData
  body: string
  visibility: boolean
  tags: ArticleTag[]
}

export type ArticleTag = {
  _id: string
  _sys: SysInfo
  name: string
  slug: string
}

export type Publication = {
  _id: string
  _sys: SysInfo
  title: string
  author: Author[]
  publishedTo: string
  publishedOn: string
  publishedType: PubType
}
