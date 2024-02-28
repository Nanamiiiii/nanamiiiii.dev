import {
  Box,
  Container,
  HStack,
  Heading,
  Tag,
  Link,
  SimpleGrid,
} from '@chakra-ui/react'
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import { Metadata, ResolvingMetadata } from 'next'
import getConfig from 'next/config'
import { BlogEntry } from '../../../../components/blog'
import Layout from '../../../../components/layouts/article'
import { Pagenation } from '../../../../components/pagenation'
import { getTags, getVisibleArticles } from '../../../../lib/newt'
import type { Article, ArticleTag } from '../../../../types/blog'

const { publicRuntimeConfig } = getConfig()

export const dynamicParams = false

export const generateStaticParams = async () => {
  const articles = await getVisibleArticles()
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i)
  return range(
    1,
    Math.ceil(articles.length / publicRuntimeConfig.pagenation),
  ).map(repo => ({
    id: `${repo}`,
  }))
}

export const generateMetadata = async (
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  return {
    title: 'Page ' + params.id,
    description: "Myuu's trashcan",
    openGraph: {
      ...(await parent).openGraph,
      url: 'https://myuu.dev/blogs/page/' + params.id,
    },
  }
}

type Props = {
  params: {
    id: string
  }
}

const Blogs = async ({ params }: Props) => {
  const articles = await getVisibleArticles()
  const tags = await getTags()
  const pageNum = Number(params.id)

  const entryStart = (pageNum - 1) * publicRuntimeConfig.pagenation
  const entryEnd = pageNum * publicRuntimeConfig.pagenation

  dayjs.extend(utc)
  dayjs.extend(timezone)
  dayjs.tz.setDefault('Asia/Tokyo')

  const formatDate = (datestr: string) => {
    const jstdate = dayjs(datestr).tz()
    return jstdate.format('YYYY-MM-DD HH:mm:ss')
  }

  return (
    <Layout>
      <Container maxWidth="100%" fontSize="18px">
        <Heading as="h3" fontSize={25} mt={2} mb={4} fontWeight="300">
          Myuu&rsquo;s Trashcan
        </Heading>
        <Box pt={5} pb={10} textAlign="center" fontStyle="italic">
          &quot;Garbage&quot; &nbsp; &quot;掃きだめ&quot; &nbsp;
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
        <Box justifyContent="center" display="flex" pb={5}>
          <HStack overflow="auto">
          {tags.map((tag, idx) => (
            <Link key={idx} href={`/blogs/tag/${tag.slug}/1`}>
              <Tag
                key={idx}
                variant="subtle"
                colorScheme="cyan"
                flexShrink="0"
                whiteSpace="nowrap"
              >
                {tag.name}
              </Tag>
            </Link>
          ))}
          </HStack>
        </Box>
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
        <SimpleGrid
          columns={{ sm: 1, md: 2 }}
          spacing="10px"
          gap="10px"
          pb={5}
          justifyItems="center"
        >
          {articles
            .slice(entryStart, entryEnd)
            .map((article: Article, idx: number) => (
              <BlogEntry
                key={idx}
                id={article.slug}
                title={article.title}
                tags={article.tags.map((val: ArticleTag) => val.name)}
                dateString={formatDate(article._sys.createdAt)}
              />
            ))}
        </SimpleGrid>
        <Pagenation totalCounts={articles.length} nowPage={pageNum} />
      </Container>
    </Layout>
  )
}

export default Blogs
