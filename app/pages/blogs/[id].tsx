import { Container, HStack, Heading, Tag, Text } from "@chakra-ui/react";
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import Layout from "../../components/layouts/article";
import { MarkdownTemplate } from "../../components/markdown";
import { client } from "../../lib/cms-client";
import { Blog } from "../../types/blog";

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const data = await client.get({ endpoint: "blogs" });
  const paths = data.contents.map((content: Blog) => `/blogs/${content.id}`);
  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
  const id = context.params?.id;
  const data = await client.get({ endpoint: "blogs", contentId: id });
  return {
    props: {
      blog: data,
    },
  };
}

type Props = {
  blog: Blog
}

const BlogArticle: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ blog }: Props) => {
  return (
    <Layout title={blog.title}>
      <Container maxWidth="100%">
        <Text fontStyle='italic' textColor="gray">Myuu&rsquo;s garbage</Text>
        <Heading as="h3" fontSize={30} mt={2} mb={2} fontWeight="300">
          {blog.title}
        </Heading>
        <HStack spacing={2} pb={2}>
          {
            blog.categories.map((category, idx) => <Tag key={idx} variant="subtle" colorScheme="cyan">{category.name}</Tag>)
          }
        </HStack>
        <MarkdownTemplate source={blog.content} />
      </Container>
    </Layout>
  )
}

export default BlogArticle