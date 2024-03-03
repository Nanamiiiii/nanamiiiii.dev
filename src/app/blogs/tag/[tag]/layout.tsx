import { getTags } from '../../../../lib/newt'

export const generateStaticParams = async () => {
  const tags = await getTags()
  return tags.map(tag => ({
    tag: tag.slug,
  }))
}

const BlogTagLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

export default BlogTagLayout
