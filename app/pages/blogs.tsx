import { Box, Card, CardBody, CardHeader, Container, HStack, Heading, Tag, Text, VStack, Link } from "@chakra-ui/react"
import { InferGetStaticPropsType, NextPage } from "next"
import NextLink from "next/link"
import Layout from "../components/layouts/article"
import { Pagenation } from "../components/pagenation"
import { client } from "../lib/cms-client"
import type { Blog, Category } from "../types/blog"

export const getStaticProps = async () => {
  const blog = await client.get({ endpoint: "blogs", queries: { limit: 10 } })
  const category = await client.get({ endpoint: "categories" })

  return {
    props: {
      blogs: blog.contents,
      categories: category.contents,
      totalCounts: blog.totalCount
    }
  }
}

type BlogProps = {
  blogs: Blog[]
  categories: Category[]
  totalCounts: number
}

type BlogEntryProps = {
  id: string
  title: string
  tags: string[]
  dateString: string
}

const BlogEntry = ({ id, title, tags, dateString }: BlogEntryProps) => {
  return (
    <Card width="80%" variant='outline' size='sm' backgroundColor='#00000000'>
      <CardHeader pb={0}>
        <HStack spacing={2} pb={2}>
          {tags.map((tag: string, idx: number) => <Tag key={idx} variant="subtle" colorScheme="cyan">{tag}</Tag>)}
        </HStack>
        <Heading fontSize="20px">
          <Link as={NextLink} href={`/blogs/${id}`} pl={1}>{title}</Link>
        </Heading>
      </CardHeader>
      <CardBody>
        <Text textAlign='right' textColor="gray" fontStyle="italic">{dateString}</Text>
      </CardBody>
    </Card>
  )
}

const Blogs: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  blogs,
  categories,
  totalCounts
}: BlogProps) => {
  return (
    <Layout title="Blogs">
      <Container maxWidth="100%" fontSize="18px">
        <Heading as="h3" fontSize={25} mt={2} mb={4} fontWeight="300">
          Blogs
        </Heading>
        <Box pt={5} pb={10} textAlign='center' fontStyle='italic'>
          &quot;Garbage Collection&quot; &nbsp; &quot;掃きだめ&quot; &nbsp; &quot;戯れ言&quot; <br/>
          気が向いたら検索とか整理できるようにするかも（嘘かも）
        </Box>
        <Heading as="h4" fontSize={23} fontWeight="300" textAlign="center" pb={3}>Tags</Heading>
        <HStack justifyContent="center" pb={5}>
          {
            categories.map((category, idx) => <Tag key={idx} variant="subtle" colorScheme="cyan">{category.name}</Tag>)
          }
        </HStack>
        <Heading as="h4" fontSize={23} fontWeight="300" textAlign="center" pt={5} pb={5}>Entries</Heading>
        <VStack pb={5}>
          {blogs.map((blog: Blog, idx: number) =>
            <BlogEntry 
              key={idx} 
              id={blog.id} 
              title={blog.title} 
              tags={blog.categories.map((val: Category) => val.name)} 
              dateString={new Date(blog.updatedAt).toDateString()}
            /> 
          )}
        </VStack>
        <Pagenation totalCounts={totalCounts} />
      </Container>
    </Layout>
  )
}

export default Blogs