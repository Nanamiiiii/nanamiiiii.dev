import type { NextPage } from 'next'
import NextLink from 'next/link'
import { Text, Container, Box, Heading, Image, useColorModeValue, Link } from "@chakra-ui/react"
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ItemizeName, ItemizeSection } from '../components/itemize'
import Layout from '../components/layouts/article'

const LinkText = ({ href, children }) => {
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
          <Box flexShrink={0} mt={{ base: 2, md: 1 }} mb={{ base: 3, md: 3 }} ml={{ md: 6 }} align="center">
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
            <p>Create Movie & Application</p>
            <p>A Student of Waseda Univ.</p>
          </Box>

        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Hobby
          </Heading>
          <ItemizeSection>
            <ItemizeName>VideoGame</ItemizeName>
            Especially FPS (Call of Duty, Apex Legends...)
          </ItemizeSection>
          <ItemizeSection>
            <ItemizeName><LinkText href="/works">Movie Creation</LinkText></ItemizeName>
            MotionGraphics, FPS Montage etc...
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

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Interest
          </Heading>
          <Paragraph>Computer Architecture / Operating System </Paragraph>
          <Paragraph>Virtualization / Infrastructure / Cyber Security</Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Social
          </Heading>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
