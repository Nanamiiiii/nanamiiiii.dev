import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const ContentsGrid = ({ children, href, title, thumbnail }) => (
  <Box w="100%" align='center'>
    <LinkBox cursor="pointer">
      <Image src={thumbnail}
        alt={title}
        className="grid-contents"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2} fontSize={17}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const WorkContents = ({ children, id, title, thumbnail }) => (
  <Box w="100%" align="center">
    <NextLink href={`/works/${id}`}>
      <LinkBox cursor="pointer">
        <Image src={thumbnail}
          alt={title}
          className="grid-contents"
          placeholder="blur"
        />
        <LinkOverlay href={`/works/${id}`}>
          <Text mt={2} fontSize={17}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
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
