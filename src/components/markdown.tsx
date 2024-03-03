import {
  BoxProps,
  Box,
  Text,
  UnorderedList,
  ListItem,
  Link,
  Code as ChakraCode,
  OrderedList,
  Card,
  Image,
  CardBody,
  Heading,
  HStack,
  LinkBox,
  LinkOverlay,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import highlight from 'highlight.js'

import 'highlight.js/styles/tokyo-night-dark.css'
import NextImage from 'next/image'
import { getPlaiceholder } from "plaiceholder"
import React, {
  AnchorHTMLAttributes,
  BlockquoteHTMLAttributes,
  FC,
  Fragment,
  HTMLAttributes,
  ImgHTMLAttributes,
  LiHTMLAttributes,
} from 'react'
import * as jsxRuntime from 'react/jsx-runtime'
import rehypeParse from 'rehype-parse'
import rehypeReact from 'rehype-react'
import type { Options as RehypeReactOptions } from 'rehype-react'
import rehypeSlug from 'rehype-slug'
import { match } from 'ts-pattern'
import { unified } from 'unified'

type CodeBlockProps = HTMLAttributes<HTMLElement> & {
  lang?: string
}

type AlertProps = HTMLAttributes<HTMLElement> & {
  variant: 'tips' | 'info' | 'notice' | 'warn'
  title?: string
}

const h1 = {
  component: Text,
  props: {
    mt: '1.5em',
    mb: '0.5em',
    lineHeight: 1.25,

    color: '#202020',
    fontWeight: '600',
    pb: '.3em',
    fontSize: '1.8em',
    borderBottom: '2px solid #D7DCE2',
  },
}

const h2 = {
  component: Text,
  props: {
    mt: '1.5em',
    mb: '0.5em',
    lineHeight: 1.25,

    color: '#202020',
    fontWeight: '600',
    pb: '.3em',
    fontSize: '1.5em',
    borderBottom: '1.5px solid #D7DCE2',
  },
}

const h3 = {
  component: Text,
  props: {
    mt: '1.5em',
    mb: '0.5em',
    lineHeight: 1.25,

    color: '#202020',
    fontWeight: '600',
    fontSize: '1.25em',
  },
}

const h4 = {
  component: Text,
  props: {
    mt: '1.5em',
    mb: '0.5em',
    lineHeight: 1.25,

    color: '#202020',
    fontWeight: '600',
    fontSize: '1.125em',
  },
}

const p = {
  component: Text,
  props: {
    lineHeight: '1.5',
    mt: '0.8em',
    mb: '0.8em',
    fontSize: '16px',
    color: '##000',
  },
}

const ul = {
  component: UnorderedList,
  props: {
    color: '#000',
    mt: '0em',
    mb: '0em',
    pl: '2em',
    lineHeight: '1.6',
  },
}

const ol = {
  component: OrderedList,
  props: {
    color: '#000',
    mt: '0em',
    mb: '0em',
    pl: '2em',
    lineHeight: '1.6',
  },
}

const a = {
  component: Link,
  props: {
    isExternal: true,
    textDecoration: 'none',
    color: '#0058B3',
    _hover: {
      textDecoration: 'none',
      color: '#4593e6',
    },
  },
}

const code = {
  props: {
    fontSize: '14px',
    px: '0.2em',
    mx: '0.2rem',
    display: 'inline',
  },
}

const preCode = {
  props: {
    fontSize: '14px',
    mt: '0.8em',
    mb: '0.8em',
  },
}

const img = {
  props: {
    p: '0.5em',
    ml: 'auto',
    mr: 'auto',
  },
}

const MdHeading1: FC<HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  id,
}) => {
  return (
    <Text as="h1" id={id} scrollMarginTop={20} {...h1.props}>
      {children}
    </Text>
  )
}

const MdHeading2: FC<HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  id,
}) => {
  return (
    <Text as="h2" id={id} scrollMarginTop={20} {...h2.props}>
      {children}
    </Text>
  )
}

const MdHeading3: FC<HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  id,
}) => {
  return (
    <Text as="h3" id={id} scrollMarginTop={20} {...h3.props}>
      {children}
    </Text>
  )
}

const MdHeading4: FC<HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  id,
}) => {
  return (
    <Text as="h4" id={id} scrollMarginTop={20} {...h4.props}>
      {children}
    </Text>
  )
}

const MdUnorderedList: FC<HTMLAttributes<HTMLUListElement>> = ({
  children,
}) => {
  return <UnorderedList {...ul.props}>{children}</UnorderedList>
}

const MdOrderedList: FC<HTMLAttributes<HTMLOListElement>> = ({ children }) => {
  return <OrderedList {...ol.props}>{children}</OrderedList>
}

const MdListItem: FC<LiHTMLAttributes<HTMLElement>> = ({ children }) => {
  return <ListItem>{children}</ListItem>
}

const MdLink: FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  children,
  href,
}) => {
  return (
    <Link {...a.props} href={href}>
      {children}
    </Link>
  )
}

const MdParagraph: FC<HTMLAttributes<HTMLParagraphElement>> = ({
  children,
}) => {
  return <Text {...p.props}>{children}</Text>
}

const MdCodeblock: FC<CodeBlockProps> = ({ children, lang }) => {
  if (lang) {
    const highlightCode = highlight.highlight(String(children), {
      language: lang,
    }).value
    return (
      <pre>
        <Box
          as="code"
          className="hljs"
          borderRadius={10}
          overflowX="scroll"
          {...preCode.props}
          dangerouslySetInnerHTML={{ __html: highlightCode }}
        />
      </pre>
    )
  } else {
    return (
      <pre>
        <Box
          as="code"
          className="hljs"
          borderRadius={10}
          overflowX="scroll"
          {...preCode.props}
        >
          {String(children)}
        </Box>
      </pre>
    )
  }
}

const MdInlineCode: FC<HTMLAttributes<HTMLElement>> = ({ children }) => {
  return (
    <ChakraCode {...code.props} bgColor="#E0E0E0">
      {children}
    </ChakraCode>
  )
}

const MdQuote: FC<BlockquoteHTMLAttributes<HTMLQuoteElement>> = ({
  children,
}) => {
  return (
    <Box
      css={`
        margin: 1.4rem 0;
        border-left: 3px solid #9dacb7;
        padding: 2px 0 2px 0.7em;
        color: #505c64;
      `}
    >
      {children}
    </Box>
  )
}

const MdAlert: FC<AlertProps> = ({ children, variant, title }) => {
  type StatusVariant = 'error' | 'success' | 'warning' | 'info'

  const status = match<'tips' | 'info' | 'notice' | 'warn', StatusVariant>(
    variant,
  )
    .with('tips', () => 'success')
    .with('info', () => 'info')
    .with('notice', () => 'warning')
    .with('warn', () => 'error')
    .exhaustive()

  if (title) {
    return (
      <Alert status={status} my={5} borderRadius={10}>
        <AlertIcon />
        <Box>
          <AlertTitle>{title}</AlertTitle>
          <AlertDescription>{children}</AlertDescription>
        </Box>
      </Alert>
    )
  } else {
    return (
      <Alert status={status} my={5} borderRadius={10}>
        <AlertIcon />
        <Box>{children}</Box>
      </Alert>
    )
  }
}


const MdImage: FC<ImgHTMLAttributes<HTMLImageElement>> = async ({ src, alt }) => {
  if (!alt) {
    alt = ""
  }
  if (!src) {
    return (
      <Image alt={alt} {...img.props} />
    )
  }
  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  )
  const { base64, metadata: { width, height } } = await getPlaiceholder(buffer)
  return (
      <NextImage
        width={width}
        height={height}
        src={src}
        alt={alt} 
        loading='lazy'
        placeholder='blur'
        blurDataURL={base64}
        style={{
          padding: `${img.props.p}`,
          marginLeft: `${img.props.ml}`,
          marginRight: `${img.props.mr}`,
          objectFit: 'contain',
        }}
      />
  )
}

type LinkCardProps = {
  href: string
  title: string
  desc: string
  img: string
}

const MdLinkCard: FC<LinkCardProps> = ({ href, title, desc, img }) => {
  const domain = new URL(href).origin

  return (
    <LinkBox>
      <Card
        variant="outline"
        direction={{ base: 'column', md: 'row' }}
        overflow="hidden"
        size="sm"
        mb="10px"
        borderRadius={10}
        backgroundColor="#ffffff10"
        _hover={{ backgroundColor: '#60aaf020' }}
        transitionDuration="0.3s"
      >
        <Image
          objectFit="contain"
          minW="20%"
          maxW={{ base: '100%', md: '30%' }}
          src={img}
          alt={title}
        />
        <CardBody>
          <Heading fontSize="18px" pb={1}>
            {title}
          </Heading>
          <LinkOverlay href={href} isExternal={true}>
            <Text
              textColor="gray"
              pb={1}
              overflow="hidden"
              css={`
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
              `}
              display="-webkit-box"
            >
              {desc}
            </Text>
          </LinkOverlay>
          <HStack>
            <Image
              maxW="14px"
              maxH="14px"
              src={'https://www.google.com/s2/favicons?domain=' + domain}
              alt={title + 'favicon'}
            />
            <Text>{domain}</Text>
          </HStack>
        </CardBody>
      </Card>
    </LinkBox>
  )
}

export const MarkdownTemplate = async ({
  source,
  ...props
}: { source: string } & BoxProps) => {
  const processor = unified()
    .use(rehypeParse, { fragment: true })
    .use(rehypeSlug)
    .use(rehypeReact, {
      Fragment: Fragment,
      /* @ts-ignore */
      jsx: jsxRuntime.jsx,
      /* @ts-ignore */
      jsxs: jsxRuntime.jsxs,
      passNode: true,
      components: {
        h1: MdHeading1,
        h2: MdHeading2,
        h3: MdHeading3,
        h4: MdHeading4,
        ul: MdUnorderedList,
        ol: MdOrderedList,
        li: MdListItem,
        a: MdLink,
        p: MdParagraph,
        img: MdImage,
        codeblk: MdCodeblock,
        code: MdInlineCode,
        blockquote: MdQuote,
        linkcard: MdLinkCard,
        alert: MdAlert,
      },
    } as RehypeReactOptions)
  const file = await processor.process(source)
  return <Box {...props}>{file.result}</Box>
}
