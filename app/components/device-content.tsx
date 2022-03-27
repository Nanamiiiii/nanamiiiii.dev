import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, Heading } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const DeviceContent = ({ children, href, title, thumbnail }: { children: any, href: string, title: string, thumbnail: StaticImageData }) => (
  <Box display="flex" w="100%" alignItems="center" py={2}>
    <NextLink href={href}>
      <LinkBox display="flex" cursor="pointer" justifyContent="center">
        <Box display="flex" pr={10}>
          <Image src={thumbnail}
            alt={title}
            className="grid-contents"
            placeholder="blur"
            loading="lazy"
          />
        </Box>
        <Box display="flex" alignItems="center" pl={5}>
          <Heading as="h3" fontSize={23}>
            <LinkOverlay href={href} target="_blank">
              {children}
            </LinkOverlay>
          </Heading>
        </Box>
      </LinkBox>
    </NextLink>
  </Box>
)

