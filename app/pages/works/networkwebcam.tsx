import type { NextPage } from 'next'
import NextLink from 'next/link'
import Section from '../../components/section'
import { Box, Container, Heading, SimpleGrid, Divider, Text, Button } from '@chakra-ui/react'
import { WorkContents, ContentsGrid } from '../../components/contents-grid'
import Layout from '../../components/layouts/article'

const Work: NextPage = () => {
  return (
    <Layout title="NetworkWebCamera">
      <Container>
        <Heading as="h1">Under Construction</Heading>
        <Text>フロントエンド分からん…orz</Text>
        <Divider my={6} />

        <Box display="flex" my={6} justifyContent="center">
          <NextLink href="/works">
            <Button colorScheme="purple">Go Works</Button>
          </NextLink>
        </Box>
      </Container>
    </Layout>
  )
}

export default Work

