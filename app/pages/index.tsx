import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Text,
  IconButton,
  UnorderedList,
  ListItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Zen_Kaku_Gothic_New } from 'next/font/google'
import NextLink from 'next/link'
import {
  SiTwitter,
  SiGithub,
  SiYoutube,
  SiInstagram,
  SiFacebook,
  SiVimeo,
  SiLinkedin,
  SiDiscord,
} from 'react-icons/si'
import { ItemizeName, ItemizeSection } from '../components/itemize'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'

const achievementsFont = Zen_Kaku_Gothic_New({
  subsets: ['latin'],
  weight: ['300', '500'],
})

const LinkText = ({ href, children }: { href: string; children: any }) => {
  return (
    <Link
      as={NextLink}
      href={href}
      bg="undefined"
      color={useColorModeValue('gray200', 'whiteAlpha.900')}
      passHref
    >
      {children}
    </Link>
  )
}

const Home: NextPage = () => {
  return (
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
              borderColor={useColorModeValue('gray', 'white')}
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
              <Link
                href="https://www.instagram.com/s.akihiro_lx/"
                target="_blank"
              >
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
          <Heading
            as="h3"
            variant="section-title"
            fontSize={20}
            fontWeight="300"
          >
            Publications
          </Heading>
          <Accordion allowMultiple>
            <AccordionItem>
              <Heading as="h4" fontSize="18px" fontWeight="300">
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    NO Peer-Review
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </Heading>
              <AccordionPanel>
                <UnorderedList>
                  <ListItem>
                    <b>齊木 昭大</b>, 大森 侑, 木村 啓二, &quot;RISC-V
                    SoCにおけるSecure
                    Bootの実装と検証の高速化に向けた評価&quot;,
                    情報処理学会研究報告, Vol.2023-EMB-62, No.16, Mar. 2023.
                  </ListItem>
                  <ListItem>
                    梅澤拓夢, 齊木昭大, 木村啓二, &quot; RISC-V
                    KeystoneにおけるEnclaveアプリケーションキャッシュ機能の拡張&quot;,
                    信学技報, vol. 123, no. 145, CPSY2023-15, pp. 43-48,
                    2023年8月.
                  </ListItem>
                </UnorderedList>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
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
            MotionGraphics,{' '}
            <Link href="https://www.youtube.com/c/kokoromyuu" target="_blank">
              Gameplay Montage
            </Link>{' '}
            etc...
          </ItemizeSection>
          <ItemizeSection>
            <ItemizeName>
              <LinkText href="/devices/pc">DIY PC</LinkText>
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
  )
}

export default Home
