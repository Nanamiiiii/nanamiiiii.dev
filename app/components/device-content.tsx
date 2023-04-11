import {
  Box,
  LinkBox,
  LinkOverlay,
  Heading,
  SimpleGrid,
  Text,
  AspectRatio,
} from '@chakra-ui/react'
import { css } from '@emotion/react'
import Image from 'next/image'
import NextLink from 'next/link'

const ContentStyle = css`
  cursor: pointer;

  &:hover .image-overlay {
    opacity: 1;
    transform: scale(1.02, 1.02);
    transition-duration: 0.3s;
  }
`

export const DeviceContent = ({
  children,
  href,
  title,
  thumbnail,
}: {
  children: any
  href: string
  title: string
  thumbnail: import('next/dist/client/image').StaticImageData
}) => (
  <Box
    display="flex"
    w="100%"
    alignItems="center"
    borderRadius="5px"
    css={ContentStyle}
  >
    <LinkBox display="flex" cursor="pointer" justifyContent="center">
      <SimpleGrid columns={[2, 2, 2]} gap={3} justifyContent="center">
        <Box
          className="image-overlay"
          pos="absolute"
          top={0}
          left={0}
          height="100%"
          width="100%"
          opacity={0}
          transition=".5s ease"
          backgroundColor="#c4e8f2a0"
          pointerEvents="none"
          borderRadius="15px"
        ></Box>
        <Box display="flex" alignItems="center" px={3} py={3} zIndex={1}>
          <Image
            src={thumbnail}
            alt={title}
            className="grid-contents"
            placeholder="blur"
            loading="lazy"
          />
        </Box>
        <Box
          display="flex"
          alignItems="center"
          px={3}
          justifyContent="center"
          zIndex={1}
        >
          <Heading as="h3" fontSize={18} fontWeight="300">
            <LinkOverlay as={NextLink} href={href} passHref>
              {children}
            </LinkOverlay>
          </Heading>
        </Box>
      </SimpleGrid>
    </LinkBox>
  </Box>
)
