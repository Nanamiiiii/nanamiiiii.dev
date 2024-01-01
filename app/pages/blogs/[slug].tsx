import {
  Container,
  Divider,
  HStack,
  Heading,
  Table,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Text,
  Tr,
} from '@chakra-ui/react'
import { JSDOM } from 'jsdom'
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import Layout from '../../components/layouts/article'
import { MarkdownTemplate } from '../../components/markdown'
import { Headings, MarkdownToc, TocItem } from '../../components/toc'
import { getArticleBySlug, getArticles } from '../../lib/newt'
import { Article } from '../../types/blog'

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const articles = await getArticles()
  const paths = articles.map((article: Article) => `/blogs/${article.slug}`)
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<Props, Params> = async context => {
  const slug = context.params?.slug
  const article = await getArticleBySlug(slug)
  if (article == null) {
    throw new Error('reference to non-existent entry')
  }
  const doc = new JSDOM(article.body).window.document
  const elems = doc.querySelectorAll<HTMLElement>('h1, h2, h3, h4')
  const tocs: TocItem[] = []
  elems.forEach(elem => {
    const lv = (elem.tagName.toLowerCase() as Headings) || 'h1'
    const content = elem.innerHTML || ''
    let len = tocs.length
    let lastOuter: TocItem[] = tocs
    while (true) {
      if (len == 0 || lastOuter[len - 1].lv === lv) {
        lastOuter.push({ text: content, lv: lv, inner: [] })
        break
      }
      lastOuter = lastOuter[len - 1].inner
      len = lastOuter.length
    }
  })

  return {
    props: {
      article: article,
      tocItems: tocs,
      slug: slug,
    },
  }
}

type Props = {
  article: Article
  tocItems: TocItem[]
  slug: string
}

const BlogArticle: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  article,
  tocItems,
  slug,
}: Props) => {
  const formatDigit = (n: number) => {
    if (n < 10) {
      return `0${Math.floor(n)}`
    }
    return `${Math.floor(n)}`
  }
  const formatDate = (datestr: string) => {
    const date = new Date(datestr)
    return `${date.toDateString()} ${formatDigit(
      date.getHours(),
    )}:${formatDigit(date.getMinutes())}:${formatDigit(date.getSeconds())}`
  }
  return (
    <Layout title={article.title} desc={article.meta.description} path={'/blogs/' + slug}>
      <Container maxWidth="100%">
        <Text fontStyle="italic" textColor="gray">
          Myuu&rsquo;s garbage
        </Text>
        <Heading as="h3" fontSize={30} mt={2} mb={2} fontWeight="300">
          {article.title}
        </Heading>
        <HStack spacing={2} pb={3}>
          {article.tags.map((tag, idx) => (
            <Tag key={idx} variant="subtle" colorScheme="cyan">
              {tag.name}
            </Tag>
          ))}
        </HStack>
        <Divider />
        <TableContainer fontWeight="400" fontSize="14px" pb={2} pt={2}>
          <Table variant="unstyled" size="sm">
            <Tbody>
              <Tr>
                <Td>Create</Td>
                <Td>{formatDate(article._sys.createdAt)}</Td>
              </Tr>
              <Tr>
                <Td>Last Update</Td>
                <Td>{formatDate(article._sys.updatedAt)}</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <Divider />
        <MarkdownToc tocItems={tocItems} />
        <Divider />
        <MarkdownTemplate source={article.body} pt={5} />
      </Container>
    </Layout>
  )
}

export default BlogArticle
