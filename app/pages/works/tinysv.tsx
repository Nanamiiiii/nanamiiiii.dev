import { NextPage } from 'next'
import { Container, Badge, Link, LinkOverlay, List, ListItem, ListIcon, Button, Box } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, WorkImagePad, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { IoLogoGithub } from 'react-icons/io5'
import { SiC } from 'react-icons/si'

const Work: NextPage = () => {
  return (
    <Layout title="tinysv">
      <Container>
        <Title>
          tinysv <Badge>2021</Badge>
        </Title>
        <P>
          A <b>minimal & extensive</b> web server application for Linux.
        </P>
        <Box display='flex' justifyContent='center' alignItems='center' mb={6}>
          <Button colorScheme="blue" mt={5} as="a" href="https://github.com/Nanamiiiii/tinysv" target="_blank">
            <IoLogoGithub />
            &nbsp;
            GitHub Repo
          </Button>
        </Box>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Linux</span>
          </ListItem>
          <ListItem>
            <Meta>Language</Meta>
            <ListIcon as={SiC} />
          </ListItem>
        </List>

        <WorkImagePad src="/images/works/tinysv_1.png" alt="tinysv1" pad={3}/>
        <WorkImage src="/images/works/tinysv_2.png" alt="tinysv2" />
        <WorkImage src="/images/works/tinysv_3.png" alt="tinysv3" />
      </Container>
    </Layout>
  )
}

export default Work
