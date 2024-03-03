'use client'
import {
  Container,
  Badge,
  List,
  ListItem,
  ListIcon,
  Button,
  Box,
  Heading,
  UnorderedList,
  Center,
} from '@chakra-ui/react'
import { FaJava } from 'react-icons/fa'
import { IoLogoGithub, IoLogoAndroid, IoLogoWindows } from 'react-icons/io5'
import { SiLinux, SiMacos } from 'react-icons/si'
import P from '../../../components/paragraph'
import { Title, WorkImage, Meta } from '../../../components/work'

import capture1 from '../../../public/images/works/nwc_1.png'
import capture2 from '../../../public/images/works/nwc_3.png'
import capture3 from '../../../public/images/works/nwc_4.png'

export const Component = () => {
  return (
    <Container maxWidth="100%" fontSize="18px" fontWeight="300">
      <Title>
        NetworkWebCamera <Badge>2021</Badge>
      </Title>

      <Box display="flex" justifyContent="center" alignItems="center" mb={6}>
        <P>
          Applications to use Android Smartphone as WebCamera on Multi-Platform
          Computer.
        </P>
      </Box>

      <Box display="flex" justifyContent="center" alignItems="center" mb={6}>
        <Button
          colorScheme="blue"
          mt={5}
          mr={3}
          as="a"
          href="https://github.com/Nanamiiiii/NetworkWebCamera"
          target="_blank"
          fontWeight="300"
        >
          <IoLogoGithub />
          &nbsp; CamApp
        </Button>
        <Button
          colorScheme="green"
          mt={5}
          ml={3}
          as="a"
          href="https://github.com/Nanamiiiii/NetworkWebCameraHost"
          target="_blank"
          fontWeight="300"
        >
          <IoLogoGithub />
          &nbsp; ServerApp
        </Button>
      </Box>

      <List
        w={{ base: '90%', sm: '60%', md: '50%', lg: '40%' }}
        mx="auto"
        my={4}
      >
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
          <span>
            <ListIcon as={FaJava} />
            Java
          </span>
        </ListItem>
        <ListItem>
          <Meta>Latest Ver.</Meta>
          <span>
            <Badge>Cam</Badge>
            &nbsp;&nbsp; 0.2.0 (2022/8/16) &nbsp;&nbsp;&nbsp;&nbsp;
            <Badge>Server</Badge>
            &nbsp;&nbsp; 0.2.0 (2022/8/16)
          </span>
        </ListItem>
        <ListItem>
          <Meta>License</Meta>
          <span>MIT</span>
        </ListItem>
        <ListItem>
          <Meta>Status</Meta>
          <span>Only bumping JDK & SDK</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={20} mt={6} fontWeight="400">
        <Center>Features</Center>
      </Heading>

      <UnorderedList
        w={{ base: '90%', sm: '70%', md: '60%', lg: '50%' }}
        mx="auto"
        mb={4}
        mt={2}
      >
        <ListItem>
          <Badge>Cam</Badge>
          &nbsp; Using Camera2 API
        </ListItem>
        <ListItem>
          <Badge>Cam</Badge>
          &nbsp; Multiple resolutions
        </ListItem>
        <ListItem>
          <Badge>Cam</Badge>
          &nbsp; Motion-JPEG like format
        </ListItem>
        <ListItem>
          <Badge>Server</Badge>
          &nbsp; JavaFX GUI
        </ListItem>
        <ListItem>
          <Badge>Server</Badge>
          &nbsp; Show NIC information
        </ListItem>
        <ListItem>Can disconnect from both</ListItem>
      </UnorderedList>

      <Heading as="h4" fontSize={20} mt={6} mb={2} fontWeight="400">
        <Center>Screenshots</Center>
      </Heading>

      <WorkImage src={capture1} alt="nwc1" />
      <WorkImage src={capture2} alt="nwc3" />
      <WorkImage src={capture3} alt="nwc4" />
    </Container>
  )
}
