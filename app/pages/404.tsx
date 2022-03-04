import { NextPage } from 'next'
import NextLink from 'next/link'
import {
  Box, 
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound: NextPage = () => {
  return (
    <Container>
      <Heading as="h1">404 Not Found</Heading>
      <Text>そんなものはなかった…</Text>
      <Divider my={6} />

      <Box my={6} align="center">
        <NextLink href="/">
          <Button colorScheme="cyan">Go Home</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound