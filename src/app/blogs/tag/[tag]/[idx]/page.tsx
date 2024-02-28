import {
  Box,
  Container,
  HStack,
  Heading,
  Tag,
  Link,
  TagLabel,
  TagCloseButton,
  SimpleGrid,
} from '@chakra-ui/react'
import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import { Metadata, ResolvingMetadata } from 'next'
import getConfig from 'next/config'
import { notFound } from 'next/navigation'
import { BlogEntry } from '../../../../../components/blog'
import Layout from '../../../../../components/layouts/article'
import { Pagenation } from '../../../../../components/pagenation'
import {
  getTag,
  getTags,
  getVisibleArticlesByTag,
} from '../../../../../lib/newt'
import type { Article, ArticleTag } from '../../../../../types/blog'

const { publicRuntimeConfig } = getConfig()

export const dynamicParams = false

export const generateStaticParams = async ({
  params: { tag },
}: {
  params: { tag: string }
}) => {
  const articles = await getVisibleArticlesByTag(tag)
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i)
  return range(
    1,
    Math.ceil(articles.length / publicRuntimeConfig.pagenation),
  ).map(repo => ({
    idx: `${repo}`,
  }))
}

export const generateMetadata = async (
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  return {
    title: 'Tag:' + params.tag + ' - Page ' + params.idx,
    description: "Myuu's trashcan",
    openGraph: {
      ...(await parent).openGraph,
      url: `https://myuu.dev/blogs/tag/${params.tag}/${params.idx}`,
    },
  }
}

type Props = {
  params: {
    tag: string
    idx: string
  }
}

const Blogs = async ({ params }: Props) => {
  const articles = await getVisibleArticlesByTag(params.tag)
  const tags = await getTags()
  const selectTag = await getTag(params.tag)
  if (!selectTag) notFound()
  const pageNum = Number(params.idx)

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
          Tag
        </Heading>
        <HStack pb={5} justifyContent="space-between" overflowX="auto">
          {tags.map((tag, idx) => {
            if (tag.slug == selectTag.slug) {
              return (
                <Tag
                  key={idx}
                  variant="solid"
                  colorScheme="cyan"
                  flexShrink="0"
                  whiteSpace="nowrap"
                >
                  <TagLabel>{tag.name}</TagLabel>
                  <TagCloseButton as="a" href="/blogs" />
                </Tag>
              )
            } else {
              return (
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
              )
            }
          })}
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
