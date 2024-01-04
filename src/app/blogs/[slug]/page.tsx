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
import { Metadata } from 'next'
import Layout from '../../../components/layouts/article'
import { MarkdownTemplate } from '../../../components/markdown'
import { Headings, MarkdownToc, TocItem } from '../../../components/toc'
import { getArticleBySlug, getArticles } from '../../../lib/newt'
import { Article } from '../../../types/blog'

export const generateStaticParams = async () => {
  const articles = await getArticles()
  return articles.map((article: Article) => ({ slug: `${article.slug}` }))
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const article = await getArticleBySlug(params.slug)
  if (article == null) {
    throw new Error('reference to non-existent entry')
  }
  return {
    title: article.title,
    description: article.meta.description,
  }
}

type OgpMeta = {
  url: string
  title: string
  description: string
  image: string
}

type Props = {
  params: {
    slug: string
  }
}

const BlogArticle = async ({ params }: Props) => {
  const slug = params.slug

  const article = await getArticleBySlug(slug)
  if (article == null) {
    throw new Error('reference to non-existent entry')
  }

  // Generate ToC
  const doc = new JSDOM(article.body).window.document
  const elems = doc.querySelectorAll<HTMLElement>('h1, h2, h3, h4')
  const tocs: TocItem[] = []
  elems.forEach(elem => {
    const lv = (elem.tagName.toLowerCase() as Headings) || 'h1'
    const content = elem.innerHTML || ''
    let len = tocs.length
    let lastOuter: TocItem[] = tocs
    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (len == 0 || lastOuter[len - 1].lv === lv) {
        lastOuter.push({ text: content, lv: lv, inner: [] })
        break
      }
      lastOuter = lastOuter[len - 1].inner
      len = lastOuter.length
    }
  })

  // Fetch OGP
  const linkPara = /<p>(https?:\/\/.+?)<\/p>/gu
  const links = Array.from(article.body.matchAll(linkPara)) || []
  let cardDatas: OgpMeta[] = []
  const temps = await Promise.all(
    links.map(async link => {
      const metas = await fetch(link[1])
        .then(res => res.text())
        .then(text => {
          const metaData: OgpMeta = {
            url: link[1],
            title: '',
            description: '',
            image: '',
          }
          const doms = new JSDOM(text)
          const metas = Array.from(
            doms.window.document.getElementsByTagName('meta'),
          )
          for (const meta of metas) {
            const np =
              meta.getAttribute('name') || meta.getAttribute('property')
            if (typeof np !== 'string') continue
            if (np === 'og:title') {
              metaData.title = meta.getAttribute('content') || ''
            }
            if (np === 'og:description') {
              metaData.description = (meta.getAttribute('content') || '').slice(
                0,
                100,
              )
            }
            if (np === 'og:image') {
              metaData.image = meta.getAttribute('content') || ''
            }
          }
          return metaData
        })
        .catch(e => {
          console.log(e)
        })
      return metas
    }),
  )
  cardDatas = temps.filter(temp => temp !== undefined) as OgpMeta[]

  // Replace potential linkcard node
  article.body = article.body.replaceAll(linkPara, (match, p1) => {
    for (let i = 0; i < cardDatas.length; i++) {
      if (cardDatas[i].url === p1) {
        const ogpTitle = cardDatas[i].title
        const ogpDesc = cardDatas[i].description
        const ogpImage = cardDatas[i].image
        return `<linkcard href="${p1}" title="${ogpTitle}" desc="${ogpDesc}" img="${ogpImage}"></linkcard>`
      }
    }
    return `<a href="${p1}">${p1}</a>`
  })

  // Replace Codeblock
  const codeBlkPattern = /<pre><code.*?>(.*?)<\/code><\/pre>/gus
  article.body = article.body.replaceAll(codeBlkPattern, (match, p1) => {
    return `<codeblk>${p1}</codeblk>`
  })

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
    <Layout>
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
        <MarkdownToc tocItems={tocs} />
        <Divider />
        <MarkdownTemplate source={article.body} pt={5} />
      </Container>
    </Layout>
  )
}

export default BlogArticle
