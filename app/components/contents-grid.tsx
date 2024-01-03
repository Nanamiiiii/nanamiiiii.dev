'use client'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global, css } from '@emotion/react'
import Image, { StaticImageData } from 'next/image'
import NextLink from 'next/link'

export const ContentsGrid = ({
  children,
  href,
  title,
  thumbnail,
}: {
  children: any
  href: string
  title: string
  thumbnail: StaticImageData
}) => {
  return (
    <Box
      display="flex"
      w="100%"
      alignItems="center"
      borderRadius="5px"
      css={ContentStyle}
    >
      <LinkBox cursor="pointer" p={2}>
        <Box
          className="image-overlay"
          pos="absolute"
          top={0}
          left={0}
          height="100%"
          width="100%"
          opacity={0}
          transition=".5s ease"
          border="solid"
          borderColor="#c4e8f2"
          pointerEvents="none"
          borderRadius="15px"
        ></Box>
        <Image
          src={thumbnail}
          alt={title}
          className="grid-contents"
          placeholder="blur"
          loading="lazy"
        />
        <LinkOverlay href={href} target="_blank">
          <Text mt={2} fontSize={18} textAlign="center">
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={16} textAlign="center">
          {children}
        </Text>
      </LinkBox>
    </Box>
  )
}

const ContentStyle = css`
  cursor: pointer;

  &:hover .image-overlay {
    opacity: 1;
    transform: scale(1.02, 1.02);
    transition-duration: 0.3s;
  }
`

export const WorkContents = ({
  children,
  id,
  title,
  thumbnail,
}: {
  children: any
  id: string
  title: string
  thumbnail: StaticImageData
}) => (
  <Box
    display="flex"
    w="100%"
    alignItems="center"
    borderRadius="5px"
    css={ContentStyle}
  >
    <LinkBox cursor="pointer" px={2} py={2}>
      <Box
        className="image-overlay"
        pos="absolute"
        top={0}
        left={0}
        height="100%"
        width="100%"
        opacity={0}
        transition=".5s ease"
        border="solid"
        borderColor="#c4e8f2"
        pointerEvents="none"
        borderRadius="15px"
      ></Box>
      <Image
        src={thumbnail}
        alt={title}
        className="grid-contents"
        placeholder="blur"
      />
      <LinkOverlay as={NextLink} href={`/works/${id}`} passHref>
        <Text mt={2} fontSize={18} textAlign="center" zIndex={1}>
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={16} textAlign="center">
        {children}
      </Text>
    </LinkBox>
  </Box>
)

export const ContentsGridStyle = () => (
  <Global
    styles={`
    .grid-contents {
      border-radius: 10px;
    }
    `}
  />
)
