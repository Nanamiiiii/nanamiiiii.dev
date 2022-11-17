import Logo from './logo'
import NextLink from 'next/link'
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
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ href, path, children }: { href: string, path: string, children: any }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={active ? '#b0d0d9' : undefined }
        color={active ? '#202023' : inactiveColor }
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = (props: any) => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container display="flex" p={2} maxW="container.md" flex-wrap="wrap" alignItems="center" justifyContent="space-between">
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
        >
          <LinkItem href="/dev" path={path}>
            Development
          </LinkItem>
          <LinkItem href="/devices" path={path}>
            Devices
          </LinkItem>
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
        </Stack>

        <Box display="flex" flex={1} alignItems="center" justifyContent="right">
          <Box ml={2} display={{ base: 'inline-block', md: 'none'}}>
            <Menu>
              <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label="Options" />
                <MenuList>
                  <NextLink href="/" passHref>
                    <MenuItem as={Link}>Home</MenuItem>
                  </NextLink>
                  <NextLink href="/dev" passHref>
                    <MenuItem as={Link}>Development</MenuItem>
                  </NextLink>
                  <NextLink href="/devices" passHref>
                    <MenuItem as={Link}>Devices</MenuItem>
                  </NextLink>
                  <NextLink href="/works" passHref>
                    <MenuItem as={Link}>Works</MenuItem>
                  </NextLink>
                </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
