import type { NextPage } from 'next'
import { Container, Box, Heading } from "@chakra-ui/react"

const Home: NextPage = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center"> 
        Nanamiiiii&apos;s prof
      </Box>
      
      <Box display={{md:'flex'}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Nanamiiiii
          </Heading>
          <p>Create Movie & Application</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Home
