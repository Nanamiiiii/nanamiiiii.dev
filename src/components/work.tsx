'use client'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { Heading, Box, Link, Badge } from '@chakra-ui/react'
import NextImage, { StaticImageData } from 'next/image'
import NextLink from 'next/link'

export const Title = ({ children }: { children: any }) => (
  <Box fontWeight="300">
    <Link as={NextLink} href="/works" fontStyle="italic" passHref>
      Works
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
      mb={4}
      fontWeight="300"
    >
      {children}
    </Heading>
  </Box>
)

export const WorkImage = ({
  src,
  alt,
}: {
  src: StaticImageData
  alt: string
}) => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    width={{ base: '100%', sm: '90%', md: '80%', lg: '70%' }}
    mx="auto"
  >
    <NextImage
      src={src}
      alt={alt}
      placeholder="blur"
      loading="lazy"
      style={{
        borderRadius: '10px',
        marginBottom: '1rem',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    />
  </Box>
)

export const WorkImagePad = ({
  src,
  alt,
  pad,
}: {
  src: StaticImageData
  alt: string
  pad: number
}) => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    width={{ base: '400px', lg: '100%' }}
    mx="auto"
  >
    <NextImage
      src={src}
      alt={alt}
      placeholder="blur"
      loading="lazy"
      style={{
        borderRadius: '10px',
        marginBottom: '1rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: `var(--chakra-space-${pad})`,
        boxShadow: 'var(--chakra-shadows-sm)',
      }}
    />
  </Box>
)

export const Meta = ({ children }: { children: any }) => (
  <Badge colorScheme="blue" mr={2} fontSize="14px" fontWeight="400">
    {children}
  </Badge>
)
