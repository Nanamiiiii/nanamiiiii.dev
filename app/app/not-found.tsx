import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
} from '@chakra-ui/react'
import { NextPage } from 'next'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'

const NotFound: NextPage = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h1">404 Not Found</Heading>
        <Text>そんなものはなかった…</Text>
        <Divider my={6} />

        <Box display="flex" my={6} justifyContent="center">
          <NextLink href="/" passHref>
            <Button colorScheme="purple">Go Home</Button>
          </NextLink>
        </Box>
      </Container>
    </Layout>
  )
}

export default NotFound
