import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  HStack,
  Heading,
  Tag,
  Text,
  VStack,
  Link,
} from '@chakra-ui/react'
import { InferGetStaticPropsType, NextPage } from 'next'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import { Pagenation } from '../components/pagenation'
import { getTags, getVisibleArticles } from '../lib/newt'
import type { Article, ArticleTag } from '../types/blog'

export const getStaticProps = async () => {
  const articles = await getVisibleArticles()
  const tags = await getTags()
  return {
    props: {
      articles: articles,
      tags: tags,
    },
  }
}

type NewtProps = {
  articles: Article[]
  tags: ArticleTag[]
}

type BlogEntryProps = {
  id: string
  title: string
  tags: string[]
  dateString: string
}

const BlogEntry = ({ id, title, tags, dateString }: BlogEntryProps) => {
  return (
    <Card width="80%" variant="outline" size="sm" backgroundColor="#00000000">
      <CardHeader pb={0}>
        <HStack spacing={2} pb={2}>
          {tags.map((tag: string, idx: number) => (
            <Tag key={idx} variant="subtle" colorScheme="cyan">
              {tag}
            </Tag>
          ))}
        </HStack>
        <Heading fontSize="20px">
          <Link as={NextLink} href={`/blogs/${id}`}>
            {title}
          </Link>
        </Heading>
      </CardHeader>
      <CardBody>
        <Text textAlign="right" textColor="gray" fontStyle="italic">
          {dateString}
        </Text>
      </CardBody>
    </Card>
  )
}

const Blogs: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  articles,
  tags,
}: NewtProps) => {
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
    <Layout title="Blogs" desc="My blogs" path="/blogs">
      <Container maxWidth="100%" fontSize="18px">
        <Heading as="h3" fontSize={25} mt={2} mb={4} fontWeight="300">
          Blogs
        </Heading>
        <Box pt={5} pb={10} textAlign="center" fontStyle="italic">
          &quot;Garbage Collection&quot; &nbsp; &quot;掃きだめ&quot; &nbsp;
          &quot;戯れ言&quot; <br />
          気が向いたら検索とか整理できるようにするかも（嘘かも）
        </Box>
        <Heading
          as="h4"
          fontSize={23}
          fontWeight="300"
          textAlign="center"
          pb={3}
        >
          Tags
        </Heading>
        <HStack justifyContent="center" pb={5}>
          {tags.map((tag, idx) => (
            <Tag key={idx} variant="subtle" colorScheme="cyan">
              {tag.name}
            </Tag>
          ))}
        </HStack>
        <Heading
          as="h4"
          fontSize={23}
          fontWeight="300"
          textAlign="center"
          pt={5}
          pb={5}
        >
          Entries
        </Heading>
        <VStack pb={5}>
          {articles.slice(0, 10).map((article: Article, idx: number) => (
            <BlogEntry
              key={idx}
              id={article.slug}
              title={article.title}
              tags={article.tags.map((val: ArticleTag) => val.name)}
              dateString={formatDate(article._sys.updatedAt)}
            />
          ))}
        </VStack>
        <Pagenation totalCounts={articles.length} />
      </Container>
    </Layout>
  )
}

export default Blogs
