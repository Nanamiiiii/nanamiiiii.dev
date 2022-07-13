import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, Heading, SimpleGrid } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const DeviceContent = ({ children, href, title, thumbnail }: { children: any, href: string, title: string, thumbnail: import('next/dist/client/image').StaticImageData }) => (
  <Box display="flex" w="100%" alignItems="center">
    <NextLink href={href} passHref>
      <LinkBox display="flex" cursor="pointer" justifyContent="center">
        <SimpleGrid columns={[2,2,2]} gap={3} justifyContent="center">
          <Box display="flex" alignItems="center" px={3}>
            <Image src={thumbnail}
              alt={title}
              className="grid-contents"
              placeholder="blur"
              loading="lazy"
            />
          </Box>
          <Box display="flex" alignItems="center" px={3} justifyContent="center">
            <Heading as="h3" fontSize={18}>
              <LinkOverlay href={href} target="_blank">
                {children}
              </LinkOverlay>
            </Heading>
          </Box>
        </SimpleGrid>
      </LinkBox>
    </NextLink>
  </Box>
)
