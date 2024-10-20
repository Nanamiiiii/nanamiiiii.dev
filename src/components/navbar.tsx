'use client'
import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Logo from './logo'

const LinkItem = ({ href, children }: { href: string; children: any }) => {
  return (
    <Link as={NextLink} href={href} p={2} color="#202023" passHref>
      {children}
    </Link>
  )
}

const LinkItemExt = ({ href, children }: { href: string; children: any }) => {
  return (
    <Link href={href} p={2} color="#202023" isExternal>
      {children}
    </Link>
  )
}

export const Navbar = (props: any) => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#f0f8fc40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.lg"
        flex-wrap="wrap"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
          fontWeight="300"
        >
          <LinkItem href="/">Home</LinkItem>
          <LinkItem href="/skill">Skill</LinkItem>
          <LinkItem href="/works">Works</LinkItem>
          <LinkItemExt href="https://notes.myuu.dev">Blogs</LinkItemExt>
        </Stack>

        <Box display="flex" flex={1} alignItems="center" justifyContent="right">
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={NextLink} href="/" passHref>
                  Home
                </MenuItem>
                <MenuItem as={NextLink} href="/skill" passHref>
                  Skill
                </MenuItem>
                <MenuItem as={NextLink} href="/works" passHref>
                  Works
                </MenuItem>
                <MenuItem as="a" href="https://notes.myuu.dev">
                  Blogs
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
