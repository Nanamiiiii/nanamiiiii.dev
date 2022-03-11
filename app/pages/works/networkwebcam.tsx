import { NextPage } from 'next'
import { Container, Badge, List, ListItem, ListIcon, Button, Box, Heading, UnorderedList, Center } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, WorkImagePad, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { IoLogoGithub, IoLogoAndroid, IoLogoWindows } from 'react-icons/io5'
import { SiJava, SiLinux, SiMacos } from 'react-icons/si'

const Work: NextPage = () => {
  return (
    <Layout title="NetworkWebCamera">
      <Container>
        <Title>
          NetworkWebCamera <Badge>2021</Badge>
        </Title>

        <P>
          Applications to use Android Smartphone as WebCamera on Multi-Platform Computer.
        </P>
        <Box display='flex' justifyContent='center' alignItems='center' mb={6}>
          <Button colorScheme="blue" mt={5} mr={3} as="a" href="https://github.com/Nanamiiiii/NetworkWebCamera" target="_blank">
            <IoLogoGithub />
            &nbsp;
            CamApp
          </Button>
          <Button colorScheme="green" mt={5} ml={3} as="a" href="https://github.com/Nanamiiiii/NetworkWebCameraHost" target="_blank">
            <IoLogoGithub />
            &nbsp;
            ServerApp
          </Button>
        </Box>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <Badge>Cam</Badge>
            &nbsp;&nbsp;
            <ListIcon as={IoLogoAndroid} />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Badge>Server</Badge>
            &nbsp;&nbsp;
            <ListIcon as={SiLinux} />
            <ListIcon as={IoLogoWindows} />
            <ListIcon as={SiMacos} />
          </ListItem>
          <ListItem>
            <Meta>Language</Meta>
            <span><ListIcon as={SiJava} />Java</span>
          </ListItem>
          <ListItem>
            <Meta>Latest Ver.</Meta>
            <span>
              <Badge>Cam</Badge>
              &nbsp;&nbsp;
              2021.7.5
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Badge>Server</Badge>
              &nbsp;&nbsp;
              2021.7.5
            </span>
          </ListItem>
          <ListItem>
            <Meta>Lisence</Meta>
            <span>MIT</span>
          </ListItem>
          <ListItem>
            <Meta>Status</Meta>
            <span>End of development</span>
          </ListItem>
        </List>

        <Heading as="h4" fontSize={18} mt={6}>
          <Center>Features</Center>
        </Heading>

        <UnorderedList mb={4} mt={2}>
          <ListItem>
            <Badge>Cam</Badge>
            &nbsp;
            Using Camera2 API
          </ListItem>
          <ListItem>
            <Badge>Cam</Badge>
            &nbsp;
            Multiple resolutions
          </ListItem>
          <ListItem>
            <Badge>Cam</Badge>
            &nbsp;
            Motion-JPEG like format
          </ListItem>
          <ListItem>
            <Badge>Server</Badge>
            &nbsp;
            JavaFX GUI
          </ListItem>
          <ListItem>
            <Badge>Server</Badge>
            &nbsp;
            Show NIC information
          </ListItem>
          <ListItem>
            Can disconnect from both
          </ListItem>
        </UnorderedList>

        <Heading as="h4" fontSize={18} mt={6} mb={2}>
          <Center>Screenshots</Center>
        </Heading>

        <WorkImage src="/images/works/nwc_1.png" alt="nwc1"/>
        <WorkImage src="/images/works/nwc_3.png" alt="nwc3"/>
        <WorkImage src="/images/works/nwc_4.png" alt="nwc4"/>

      </Container>
    </Layout>
  )
}

export default Work

