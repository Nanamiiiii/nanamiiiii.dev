import { ChevronRightIcon } from '@chakra-ui/icons'
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import NextLink from 'next/link'

export const Title = ({ children }: { children: any }) => (
  <Box>
    <Link as={NextLink} href="/myenv" passHref>
      My Env.
    </Link>
    <span>
      &nbsp;
      <ChevronRightIcon />
      &nbsp;
    </span>
    <Heading
      display="inline-block"
      as="h3"
      fontSize={20}
      fontWeight="300"
      mb={4}
    >
      {children}
    </Heading>
  </Box>
)

export const DevPort = ({ src, alt }: { src: string; alt: string }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const DevPortPad = ({
  src,
  alt,
  pad,
}: {
  src: string
  alt: string
  pad: number
}) => (
  <Image
    boxShadow="sm"
    borderRadius="lg"
    w="full"
    src={src}
    alt={alt}
    mb={4}
    p={pad}
  />
)

export const Meta = ({ children }: { children: any }) => (
  <Badge colorScheme="blue" mr={2} fontSize="14px" fontWeight="400">
    {children}
  </Badge>
)
