import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  Text,
  IconButton,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  VStack,
  Card,
  CardHeader,
  CardBody,
} from '@chakra-ui/react'
import type { Metadata, NextPage, ResolvingMetadata } from 'next'
import NextLink from 'next/link'
import {
  SiTwitter,
  SiGithub,
  SiInstagram,
  SiFacebook,
  SiVimeo,
  SiLinkedin,
} from 'react-icons/si'
import { ItemizeName, ItemizeSection } from '../components/itemize'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import { getPublications } from '../lib/newt'
import { Publication } from '../types/blog'

export const generateMetadata = async (
  props: any,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  return {
    title: 'Myuu.dev',
    description: "Myuu's Website",
    openGraph: {
      ...(await parent).openGraph,
      url: 'https://myuu.dev',
    },
  }
}

const LinkText = ({ href, children }: { href: string; children: any }) => {
  return (
    <Link as={NextLink} href={href} bg="undefined" color="gray200" passHref>
      {children}
    </Link>
  )
}

const AchievementsCard = ({
  title,
  booktitle,
  children,
}: {
  title: string
  booktitle: string
  children: any
}) => {
  return (
    <Card
      variant="outline"
      size="sm"
      width="100%"
      backgroundColor="#00000000"
      fontFamily="Hack, monospace"
    >
      <CardHeader pb="0">
        <Heading fontSize="18px" fontFamily="Hack, monospace">
          {title}
        </Heading>
        <Text fontSize="16px">{children}</Text>
      </CardHeader>
      <CardBody>
        <Text color="gray" as="i" fontSize="16px">
          {booktitle}
        </Text>
      </CardBody>
    </Card>
  )
}

const PubSection = ({
  reviewed,
  noreview,
  journal,
  thesis,
}: {
  reviewed: Publication[]
  noreview: Publication[]
  journal: Publication[]
  thesis: Publication[]
}) => {
  const PubItem = ({ items, name }: { items: Publication[]; name: string }) => {
    if (items.length == 0) return <></>
    return (
      <AccordionItem>
        <Heading as="h4" fontSize="18px" fontWeight="300">
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              {name}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </Heading>
        <AccordionPanel>
          <VStack>
            {items.map((pub, idx) => {
              const date = new Date(pub.publishedOn).toDateString().split(' ')
              return (
                <AchievementsCard
                  title={pub.title}
                  booktitle={`${pub.publishedTo}, ${date[1]} ${date[3]}`}
                  key={`${name}-${idx}`}
                >
                  {pub.author.map((author, idx) => {
                    if (author.data.myname) {
                      if (idx == 0) {
                        return <u key={idx}>{author.data.name}</u>
                      } else {
                        return (
                          <span key={idx}>
                            , <u>{author.data.name}</u>
                          </span>
                        )
                      }
                    } else {
                      if (idx == 0) {
                        return <span key={idx}>{author.data.name}</span>
                      } else {
                        return <span key={idx}>, {author.data.name}</span>
                      }
                    }
                  })}
                </AchievementsCard>
              )
            })}
          </VStack>
        </AccordionPanel>
      </AccordionItem>
    )
  }
  return (
    <>
      <Heading as="h3" variant="section-title" fontSize={20} fontWeight="300">
        Publications
      </Heading>
      <Accordion allowMultiple>
        <PubItem items={reviewed} name="Peer Reviewed" />
        <PubItem items={noreview} name="No Review" />
        <PubItem items={journal} name="Journal" />
        <PubItem items={thesis} name="Thesis" />
      </Accordion>
    </>
  )
}

const Home: NextPage = async () => {
  const publications = await getPublications()
  const reviewedPub = publications.filter(
    pub => pub.publishedType === 'reviewed',
  )
  const noreviewPub = publications.filter(
    pub => pub.publishedType === 'no-review',
  )
  const journalPub = publications.filter(pub => pub.publishedType === 'journal')
  const thesisPub = publications.filter(pub => pub.publishedType === 'thesis')

  return (
    <>
      <Layout>
        <Container maxWidth="100%" fontSize="18px">
          <Box
            display={{ md: 'flex' }}
            justifyContent="center"
            alignItems="center"
          >
            <Box
              flexShrink={0}
              mt={{ base: 3, md: 3 }}
              mb={{ base: 5, md: 5 }}
              ml={{ md: 6 }}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image
                borderColor="gray"
                borderWidth={4}
                borderStyle="solid"
                maxWidth="200px"
                display="inline-block"
                borderRadius="full"
                src="/images/face_icon_web.webp"
                alt="Profile"
              />
            </Box>
          </Box>

          <Box display={{ md: 'flex' }} mb={10}>
            <Box flexGrow={1}>
              <Heading as="h2" variant="page-title" fontWeight="200">
                Akihiro Saiki
              </Heading>
              <Text fontSize="18px">
                Graduate School of Fundemental Science and Engineering, Waseda
                University
              </Text>
              <Box mt={2}>
                <Link href="https://twitter.com/Nanamii_i" target="_blank">
                  <IconButton
                    aria-label="twitter"
                    variant="ghost"
                    colorScheme="cyan"
                    icon={<SiTwitter />}
                    mx={2}
                    fontSize="18px"
                  />
                </Link>
                <Link href="https://github.com/Nanamiiiii" target="_blank">
                  <IconButton
                    aria-label="github"
                    variant="ghost"
                    colorScheme="cyan"
                    icon={<SiGithub />}
                    mx={2}
                    fontSize="18px"
                  />
                </Link>
                <Link href="https://vimeo.com/user108826812" target="_blank">
                  <IconButton
                    aria-label="vimeo"
                    variant="ghost"
                    colorScheme="cyan"
                    icon={<SiVimeo />}
                    mx={2}
                    fontSize="18px"
                  />
                </Link>
                <Link href="https://www.instagram.com/773skiz/" target="_blank">
                  <IconButton
                    aria-label="instagram"
                    variant="ghost"
                    colorScheme="cyan"
                    icon={<SiInstagram />}
                    mx={2}
                    fontSize="18px"
                  />
                </Link>
                <Link
                  href="https://www.facebook.com/akihiro.lx00"
                  target="_blank"
                >
                  <IconButton
                    aria-label="facebook"
                    variant="ghost"
                    colorScheme="cyan"
                    icon={<SiFacebook />}
                    mx={2}
                    fontSize="18px"
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/akihiro-saiki-88b846232/"
                  target="_blank"
                >
                  <IconButton
                    aria-label="Linkedin"
                    variant="ghost"
                    colorScheme="cyan"
                    icon={<SiLinkedin />}
                    mx={2}
                    fontSize="18px"
                  />
                </Link>
              </Box>
            </Box>
          </Box>

          <Section delay={'0.1'}>
            <Heading
              as="h3"
              variant="section-title"
              fontSize={20}
              fontWeight="300"
            >
              Bio
            </Heading>
            <ItemizeSection>
              <ItemizeName>Handle</ItemizeName>
              Nanamiiiii (as Dev.) / Myuu (as Creator)
            </ItemizeSection>
            <ItemizeSection>
              <ItemizeName>Origin</ItemizeName>
              Niigata, Niigata, Japan (Very good place to live!)
            </ItemizeSection>
            <ItemizeSection>
              <ItemizeName>Graduated from</ItemizeName>
              Niigata Meikun High School
            </ItemizeSection>
          </Section>

          <Section delay={'0.15'}>
            <Heading
              as="h3"
              variant="section-title"
              fontSize={20}
              fontWeight="300"
            >
              Research
            </Heading>
            Kimura Laboratory, Waseda Univ. <br />
            Advanced Processor Architecture
            <ItemizeSection>
              <ItemizeName>
                <b>Keywords</b>
              </ItemizeName>
              RISC-V / Secure Computing / Secure Boot / TEE
            </ItemizeSection>
          </Section>

          <Section delay={'0.2'}>
            <PubSection
              reviewed={reviewedPub}
              noreview={noreviewPub}
              journal={journalPub}
              thesis={thesisPub}
            />
          </Section>

          <Section delay={'0.25'}>
            <Heading
              as="h3"
              variant="section-title"
              fontSize={20}
              fontWeight="300"
            >
              Love
            </Heading>
            <ItemizeSection>
              <ItemizeName>VideoGame</ItemizeName>
              Especially FPS (Call of Duty, VALORANT...) / BIOHAZARD(Resident
              Evil)
            </ItemizeSection>
            <ItemizeSection>
              <ItemizeName>
                <LinkText href="/works">Movie Creation</LinkText>
              </ItemizeName>
              MotionGraphics, Gameplay Montage etc...
            </ItemizeSection>
            <ItemizeSection>
              <ItemizeName>
                <LinkText href="/env/pc">DIY PC</LinkText>
              </ItemizeName>
              Create Custom PCs & Collect Devices
            </ItemizeSection>
            <ItemizeSection>
              <ItemizeName>Sports</ItemizeName>
              Soccer (Love Albirex Niigata in J.League!) / Badminton
            </ItemizeSection>
            <ItemizeSection>
              <ItemizeName>Music</ItemizeName>
              Coldrain, MY FIRST STORY, SECONDWALL and <i>Dojin</i> Music
            </ItemizeSection>
            <ItemizeSection>
              <ItemizeName>Anime</ItemizeName>
              Used to watch a lot, but not so much anymore... I have no time ;(
            </ItemizeSection>
          </Section>

          <Section delay={'0.3'}>
            <Heading
              as="h3"
              variant="section-title"
              fontSize={20}
              fontWeight="300"
            >
              Interest
            </Heading>
            <Paragraph>Computer Architecture / Operating System </Paragraph>
            <Paragraph>
              Virtualization / Infrastructure / Cyber Security
            </Paragraph>
          </Section>
        </Container>
      </Layout>
    </>
  )
}

export default Home
