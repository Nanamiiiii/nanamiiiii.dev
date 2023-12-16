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
