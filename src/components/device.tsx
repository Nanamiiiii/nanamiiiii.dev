import { ChevronRightIcon } from '@chakra-ui/icons'
import { Heading, Box, Link, Badge } from '@chakra-ui/react'
import NextImage, { StaticImageData } from 'next/image'
import NextLink from 'next/link'

export const Title = ({ children }: { children: any }) => (
  <Box>
    <Link as={NextLink} href="/env" fontStyle="italic" passHref>
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

export const DevPort = ({
  src,
  alt,
}: {
  src: StaticImageData
  alt: string
}) => (
  <NextImage
    src={src}
    alt={alt}
    placeholder="blur"
    loading="lazy"
    style={{
      borderRadius: '10px',
      marginBottom: '1rem',
    }}
  />
)

export const DevPortPad = ({
  src,
  alt,
  pad,
}: {
  src: StaticImageData
  alt: string
  pad: number
}) => (
  <NextImage
    src={src}
    alt={alt}
    placeholder="blur"
    loading="lazy"
    style={{
      borderRadius: '10px',
      marginBottom: '1rem',
      padding: `var(--chakra-space-${pad})`,
      boxShadow: 'var(--chakra-shadows-sm)',
    }}
  />
)

export const Meta = ({ children }: { children: any }) => (
  <Badge colorScheme="blue" mr={2} fontSize="14px" fontWeight="400">
    {children}
  </Badge>
)
