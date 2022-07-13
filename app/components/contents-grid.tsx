import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const ContentsGrid = ({ children, href, title, thumbnail }: { children: any, href: string, title: string, thumbnail: import('next/dist/client/image').StaticImageData }) => (
  <Box display="flex" w="100%" alignItems="center">
    <LinkBox cursor="pointer">
      <Image src={thumbnail}
        alt={title}
        className="grid-contents"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2} fontSize={17} textAlign="center">{title}</Text>
      </LinkOverlay>
      <Text fontSize={14} textAlign="center">{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkContents = ({ children, id, title, thumbnail }: {children: any, id: string, title: string, thumbnail: import('next/dist/client/image').StaticImageData }) => (
  <Box display="flex" w="100%" alignItems="center">
    <NextLink href={`/works/${id}`} passHref>
      <LinkBox cursor="pointer">
        <Image src={thumbnail}
          alt={title}
          className="grid-contents"
          placeholder="blur"
        />
        <LinkOverlay href={`/works/${id}`}>
          <Text mt={2} fontSize={17} textAlign="center">
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14} textAlign="center">{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>

)

export const ContentsGridStyle = () => (
  <Global styles={`
    .grid-contents {
      border-radius: 10px;
    }
    `}
  />
)
