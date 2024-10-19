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
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  PopoverFooter,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react'
import type { Metadata, NextPage, ResolvingMetadata } from 'next'
import { IoMdMail } from 'react-icons/io'
import {
  SiX,
  SiGithub,
  SiInstagram,
  SiFacebook,
  SiVimeo,
  SiLinkedin,
  SiBluesky,
} from 'react-icons/si'
import { ItemizeName, ItemizeSection } from '../components/itemize'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import { getPublications } from '../lib/newt'
import { Publication } from '../types/blog'

import 'highlight.js/styles/tokyo-night-dark.css'

export const generateMetadata = async (
  props: any,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  return {
    title: 'Akihiro Saiki - Myuu.dev',
    description: "Myuu's Website",
    openGraph: {
      ...(await parent).openGraph,
      url: 'https://myuu.dev',
    },
  }
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
                Department of Computer Science and Engineering, Waseda
                University
              </Text>
              <Text fontSize="18px">Research Associate / Ph.D Student</Text>
              <Box mt={2}>
                <Link href="https://twitter.com/Nanamii_i" target="_blank">
                  <IconButton
                    aria-label="twitter"
                    variant="ghost"
                    colorScheme="cyan"
                    icon={<SiX />}
                    mx={2}
                    fontSize="18px"
                  />
                </Link>
                <Link href="https://bsky.app/profile/myuu.dev" target="_blank">
                  <IconButton
                    aria-label="bluesky"
                    variant="ghost"
                    colorScheme="cyan"
                    icon={<SiBluesky />}
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
                <Popover>
                  <PopoverTrigger>
                    <IconButton
                      aria-label="Mail"
                      variant="ghost"
                      colorScheme="cyan"
                      icon={<IoMdMail />}
                      mx={2}
                      fontSize="18px"
                    />
                  </PopoverTrigger>
                  <PopoverContent
                    color="white"
                    bg="blue.800"
                    borderColor="blue.800"
                  >
                    <PopoverArrow bg="blue.800" />
                    <PopoverBody textAlign="center">
                      sk [at] myuu.dev
                      <br />
                      saiki [at] kasahara.cs.waseda.ac.jp
                    </PopoverBody>
                    <PopoverFooter textAlign="center" fontSize="14px">
                      Please replace [at] to @
                    </PopoverFooter>
                  </PopoverContent>
                </Popover>
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
          </Section>

          <Section delay={'0.15'}>
            <Heading
              as="h3"
              variant="section-title"
              fontSize={20}
              fontWeight="300"
            >
              Academic Background
            </Heading>
            <ItemizeSection>
              <ItemizeName>2013.04 - 2019.03</ItemizeName>
              <Link
                href="https://www.niigata-meikun.ed.jp/"
                color="gray.800"
                isExternal
              >
                Niigata Meikun J.H.S. / H.S., Japan
              </Link>
              <ItemizeSection>
                <ItemizeName>2013.04 - 2016.03</ItemizeName>
                Niigata Meikun J.H.S.
              </ItemizeSection>
              <ItemizeSection>
                <ItemizeName>2016.04 - 2019.03</ItemizeName>
                Niigata Meikun H.S.
              </ItemizeSection>
            </ItemizeSection>
            <ItemizeSection>
              <ItemizeName>2019.04 - Now</ItemizeName>
              <Link
                href="https://www.fse.sci.waseda.ac.jp/"
                color="gray.800"
                isExternal
              >
                Waseda University, Japan
              </Link>
              <ItemizeSection>
                <ItemizeName>2019.04 - 2023.03</ItemizeName>
                School of Fundamental Science and Engineering.
              </ItemizeSection>
              <ItemizeSection>
                <ItemizeName>2023.04 - 2024.03</ItemizeName>
                Graduate School of Fundamental Science and Engineering (Master).
              </ItemizeSection>
              <ItemizeSection>
                <ItemizeName>2024.04 - Now</ItemizeName>
                Graduate School of Fundamental Science and Engineering (Ph.D).
              </ItemizeSection>
            </ItemizeSection>
          </Section>

          <Section delay={'0.2'}>
            <Heading
              as="h3"
              variant="section-title"
              fontSize={20}
              fontWeight="300"
            >
              Career
            </Heading>
            <ItemizeSection>
              <ItemizeName>2021.08 - 2024.03</ItemizeName>
              Security Engineer at Pentio Co., Ltd. (internship)
            </ItemizeSection>
            <ItemizeSection>
              <ItemizeName>2024.04 - Now</ItemizeName>
              Research Associate at Waseda University.
            </ItemizeSection>
          </Section>

          <Section delay={'0.25'}>
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

          <Section delay={'0.3'}>
            <PubSection
              reviewed={reviewedPub}
              noreview={noreviewPub}
              journal={journalPub}
              thesis={thesisPub}
            />
          </Section>

          <Section delay={'0.35'}>
            <Heading
              as="h3"
              variant="section-title"
              fontSize={20}
              fontWeight="300"
            >
              Awards
            </Heading>
            <ItemizeSection>
              <ItemizeName>2024.03</ItemizeName>
              IEICE CPSY Presentation Award for Excellent Young Researcher
            </ItemizeSection>
          </Section>

          <Section delay={'0.4'}>
            <Heading
              as="h3"
              variant="section-title"
              fontSize={20}
              fontWeight="300"
            >
              Interest
            </Heading>
            <Paragraph>Basically Low-layer Technologies</Paragraph>
            <Paragraph>Computer Architecture / Operating System </Paragraph>
            <Paragraph>
              Virtualization / Infrastructure / Cyber Security
            </Paragraph>
          </Section>

          <Section delay={'0.45'}>
            <Heading
              as="h3"
              variant="section-title"
              fontSize={20}
              fontWeight="300"
            >
              Hobbies
            </Heading>
            <UnorderedList>
              <ListItem>
                Games
                <UnorderedList>
                  <ListItem>
                    Call of Duty, VALORANT, ... (FPS makes people crazy...)
                  </ListItem>
                  <ListItem>Resident Evil (Played almost all titles.)</ListItem>
                </UnorderedList>
              </ListItem>
              <ListItem>
                Movie Creation
                <UnorderedList>
                  <ListItem>MotionGraphics</ListItem>
                  <ListItem>Gameplay Montage (past)</ListItem>
                </UnorderedList>
              </ListItem>
              <ListItem>
                PC / Gadget
                <UnorderedList>
                  <ListItem>DIY PC is awsome! (Prefer NZXT)</ListItem>
                  <ListItem>
                    Xperia (Sorry, I&apos;m using Pixel 8 Pro now...)
                  </ListItem>
                </UnorderedList>
              </ListItem>
              <ListItem>
                Sports
                <UnorderedList>
                  <ListItem>
                    Watch soccer match (Love Albirex Niigata in J.League)
                  </ListItem>
                </UnorderedList>
              </ListItem>
              <ListItem>
                Music
                <UnorderedList>
                  <ListItem>
                    Coldrain, MY FIRST STORY, SECONDWALL and <i>Dojin</i> Music
                  </ListItem>
                </UnorderedList>
              </ListItem>
              <ListItem>
                Anime
                <UnorderedList>
                  <ListItem>Especially like works around 2010.</ListItem>
                </UnorderedList>
              </ListItem>
            </UnorderedList>
          </Section>

          <Section delay={'0.5'}>
            <Heading
              as="h3"
              variant="section-title"
              fontSize={20}
              fontWeight="300"
            >
              PGP Public Key
            </Heading>
            Created new pgp key on 2024-10-03.
            <br />
            <pre>
              <Box
                as="code"
                className="hljs"
                borderRadius={10}
                overflowX="scroll"
              >
                pub ed25519 2024-10-03 [SC]
                <br />
                EF868D07BBE906673ECCF715E79A0A2575F66DA2
              </Box>
            </pre>
            <br />
            <pre>
              <Box
                as="code"
                className="hljs"
                borderRadius={10}
                overflowX="scroll"
              >
                -----BEGIN PGP PUBLIC KEY BLOCK-----
                <br />
                <br />
                mDMEZv5KGhYJKwYBBAHaRw8BAQdANqyDUJXUHiAbqdxXkgrAk6AxOeJJrSAeTZ9v
                <br />
                cFQceA60G0FraWhpcm8gU2Fpa2kgPHNrQG15dXUuZGV2PoiTBBMWCgA7FiEE74aN
                <br />
                B7vpBmc+zPcV55oKJXX2baIFAmb+ShoCGwMFCwkIBwICIgIGFQoJCAsCBBYCAwEC
                <br />
                HgcCF4AACgkQ55oKJXX2baKtYwEAoQ8Uf+3gK8Nu+qiStcEjg9PL2mhLQ3yG9jgY
                <br />
                rcK3fY4A+QHd20MZlaNTFPKAwbkdLCVS9WsMiYZf9AcfapO1aUgBuDgEZv5KGhIK
                <br />
                KwYBBAGXVQEFAQEHQPOZVouTc1WtZRiMNrucFPumvkZMC0S4UYygMLpLiUleAwEI
                <br />
                B4h4BBgWCgAgFiEE74aNB7vpBmc+zPcV55oKJXX2baIFAmb+ShoCGwwACgkQ55oK
                <br />
                JXX2baJ/AQEAoxU20tot+T1OE37dFmRXF2+wTLhg5TlHqingLNduN38A/1JZ8gIS
                <br />
                zdnT/jzk5ATqeKsz59h8u5mJPNd2Thzt7EsF
                <br />
                =dDaC
                <br />
                -----END PGP PUBLIC KEY BLOCK-----
              </Box>
            </pre>
          </Section>
        </Container>
      </Layout>
    </>
  )
}

export default Home
