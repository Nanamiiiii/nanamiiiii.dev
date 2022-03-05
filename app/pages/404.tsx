import { NextPage } from 'next'
import NextLink from 'next/link'
import { Box, Heading, Text, Container, Divider, Button } from '@chakra-ui/react'

const NotFound: NextPage = () => {
  return (
    <Container>
      <Heading as="h1">404 Not Found</Heading>
      <Text>そんなものはなかった…</Text>
      <Divider my={6} />

      <Box display="flex" my={6} justifyContent="center">
        <NextLink href="/">
          <Button colorScheme="purple">Go Home</Button>
        </NextLink>
      </Box>
    </Container>
  )
}

export default NotFound
