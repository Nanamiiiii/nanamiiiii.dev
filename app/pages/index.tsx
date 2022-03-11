import type { NextPage } from 'next'
import NextLink from 'next/link'
import { Text, Container, Box, Heading, Image, useColorModeValue, Link, List, ListItem, Button } from "@chakra-ui/react"
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ItemizeName, ItemizeSection } from '../components/itemize'
import Layout from '../components/layouts/article'
import { AiFillTwitterCircle, AiFillYoutube, AiOutlineInstagram } from 'react-icons/ai'
import { IoLogoGithub } from 'react-icons/io5'
import { BsFacebook } from 'react-icons/bs'

const LinkText = ({ href, children }: { href: string, children: any }) => {
  return (
    <NextLink href={href}>
      <Link
        bg='undefined'
        color={useColorModeValue('gray200', 'whiteAlpha.900')}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Home: NextPage = () => {
  return (
    <Layout title="">
      <Container>
        <Box display={{ md: 'flex' }} justifyContent='center' alignItems='center'>
          <Box flexShrink={0} mt={{ base: 3, md: 3 }} mb={{ base: 5, md: 5 }} ml={{ md: 6 }} display="flex" justifyContent="center" alignItems="center">
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

        <Box display={{ md: 'flex' }} mb={10}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Nanamiiiii - Akihiro Saiki
            </Heading>
            <p>Create Movie & Write some code</p>
            <p>A Student of Waseda Univ.</p>
          </Box>

        </Box>

        <Section delay={"0.1"}>
          <Heading as="h3" variant="section-title">
            Love
          </Heading>
          <ItemizeSection>
            <ItemizeName>VideoGame</ItemizeName>
            Especially FPS (Call of Duty, Apex Legends...)
          </ItemizeSection>
          <ItemizeSection>
            <ItemizeName><LinkText href="/works">Movie Creation</LinkText></ItemizeName>
            MotionGraphics, <Link href="https://www.youtube.com/c/kokoromyuu" target="_blank">FPS Montage</Link> etc...
          </ItemizeSection>
          <ItemizeSection>
            <ItemizeName><LinkText href="/devices">DIY PC</LinkText></ItemizeName>
            Create Custom PCs & Collect Devices
          </ItemizeSection>
          <ItemizeSection>
            <ItemizeName>Badminton</ItemizeName>
            Play & Watch
          </ItemizeSection>
        </Section>

        <Section delay={"0.2"}>
          <Heading as="h3" variant="section-title">
            Interest
          </Heading>
          <Paragraph>Computer Architecture / Operating System </Paragraph>
          <Paragraph>Virtualization / Infrastructure / Cyber Security</Paragraph>
        </Section>

        <Section delay={"0.3"}>
          <Heading as="h3" variant="section-title">
            Social
          </Heading>
          <Box display="flex" justifyContent="center" py={2}>
            <Link href='https://twitter.com/Nanamii_i' target="_blank">
              <Button variant="outline" colorScheme="twitter" leftIcon={<AiFillTwitterCircle />} mx={2}>
                Twitter
              </Button>
            </Link>
            <Link href='https://github.com/Nanamiiiii' target="_blank">
              <Button variant="outline" colorScheme="blackAlpha" leftIcon={<IoLogoGithub />} mx={2}>
                GitHub
              </Button>
            </Link>
            <Link href='https://youtube.com/kokoromyuu' target="_blank">
              <Button variant="outline" colorScheme="red" leftIcon={<AiFillYoutube />} mx={2}>
                YouTube
              </Button>
            </Link>
          </Box>
          <Box display="flex" justifyContent="center" py={2}>
            <Link href='https://www.instagram.com/s.akihiro_lx/' target="_blank">
              <Button variant="outline" colorScheme="pink" leftIcon={<AiOutlineInstagram />} mx={2}>
                Instagram
              </Button>
            </Link>
            <Link href='https://github.com/Nanamiiiii' target="_blank">
              <Button variant="outline" colorScheme="facebook" leftIcon={<BsFacebook />} mx={2}>
                facebook
              </Button>
            </Link>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
