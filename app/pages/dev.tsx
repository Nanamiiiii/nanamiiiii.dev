import type { NextPage } from 'next'
import NextLink from 'next/link'
import { Box, Container, Heading, SimpleGrid, Divider, Text, Button } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkContents, ContentsGrid } from '../components/contents-grid'
import Layout from '../components/layouts/article'

const Dev: NextPage = () => {
  return (
    <Layout title="Dev">
      <Container>
        <Heading as="h1">Under Construction</Heading>
        <Text>フロントエンド分からん…orz</Text>
        <Divider my={6} />

        <Box display="flex" my={6} justifyContent="center">
          <NextLink href="/">
            <Button colorScheme="purple">Go Home</Button>
          </NextLink>
        </Box>
      </Container>
    </Layout>
  )
}

export default Dev
