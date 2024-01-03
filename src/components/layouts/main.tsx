import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import { Navbar } from '../navbar'
import { ScrollToTop } from '../scrolltop'

const Main = ({ children, router }: { children: any; router: string }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <title>Myuu.dev</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Navbar path={router} />

      <Container maxW="container.md" pt={16}>
        {children}
      </Container>

      <ScrollToTop />
    </Box>
  )
}

export default Main
