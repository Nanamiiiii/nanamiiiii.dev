import {
  Container,
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
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next'
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher'
import Layout from '../../components/layouts/article'
import { MarkdownTemplate } from '../../components/markdown'
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
  return {
    props: {
      article: article,
    },
  }
}

type Props = {
  article: Article
}

const BlogArticle: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  article,
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
    <Layout title={article.title}>
      <Container maxWidth="100%">
        <Text fontStyle="italic" textColor="gray">
          Myuu&rsquo;s garbage
        </Text>
        <Heading as="h3" fontSize={30} mt={2} mb={2} fontWeight="300">
          {article.title}
        </Heading>
        <HStack spacing={2} pb={2}>
          {article.tags.map((tag, idx) => (
            <Tag key={idx} variant="subtle" colorScheme="cyan">
              {tag.name}
            </Tag>
          ))}
        </HStack>
        <TableContainer fontWeight="400" fontSize="14px" pb={5}>
          <Table variant="simple" size="sm">
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
        <MarkdownTemplate source={article.body} />
      </Container>
    </Layout>
  )
}

export default BlogArticle
