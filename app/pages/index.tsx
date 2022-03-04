import type { NextPage } from 'next'
import { Container, Box, Heading, Image, useColorModeValue } from "@chakra-ui/react"

const Home: NextPage = () => {
  return (
    <Container>
      <Box display={{md:'flex'}} justifyContent='center' alignItems='center'>
        <Box flexShrink={0} mt={{base: 2, md: 1}} mb={{base: 3, md: 3}} ml={{md: 6 }} align="center">
          <Image 
            borderColor={useColorModeValue('gray', 'white')}
            borderWidth={4} 
            borderStyle="solid" 
            maxWidth="200px" 
            display="inline-block" 
            borderRadius="full" 
            src="/images/profile_icon.jpg" 
            alt="Profile" 
          />
        </Box>
      </Box>
      <Box display={{md:'flex'}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Nanamiiiii - Akihiro Saiki
          </Heading>
          <p>Create Movie & Application</p>
        </Box>
        
      </Box>
    </Container>
  )
}

export default Home
