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
} from '@chakra-ui/react'
import highlight from 'highlight.js'

import 'highlight.js/styles/tokyo-night-dark.css'
import React, {
  AnchorHTMLAttributes,
  BlockquoteHTMLAttributes,
  FC,
  Fragment,
  HTMLAttributes,
  LiHTMLAttributes,
} from 'react'
import * as jsxRuntime from 'react/jsx-runtime'
import rehypeParse from 'rehype-parse'
import rehypeReact from 'rehype-react'
import type { Options as RehypeReactOptions } from 'rehype-react'
import { unified } from 'unified'

type MarkdownTemplateProps = {
  source: string
} & BoxProps

const h1 = {
  component: Text,
  props: {
    mt: '24px',
    mb: '16px',
    lineHeight: 1.25,

    color: '#202020',
    fontWeight: '600',
    pb: '.3em',
    fontSize: '1.8em',
    borderBottom: '1px solid #E7ECF2',
  },
}

const h2 = {
  component: Text,
  props: {
    mt: '24px',
    mb: '16px',
    lineHeight: 1.25,

    color: '#202020',
    fontWeight: '600',
    pb: '.3em',
    fontSize: '1.5em',
    borderBottom: '1px solid #E7ECF2',
  },
}

const h3 = {
  component: Text,
  props: {
    mt: '24px',
    mb: '16px',
    lineHeight: 1.25,

    color: '#202020',
    fontWeight: '600',
    fontSize: '1.25em',
  },
}

const h4 = {
  component: Text,
  props: {
    mt: '12px',
    mb: '8px',
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
    mb: '10px',
    fontSize: '16px',
    color: '##000',
  },
}

const ul = {
  component: UnorderedList,
  props: {
    color: '#000',
    mt: 0,
    mb: 0,
    pl: '2em',
    lineHeight: '1.6',
  },
}

const ol = {
  component: OrderedList,
  props: {
    color: '#000',
    mt: 0,
    mb: 0,
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
    mb: '10px',
  },
}

const MdHeading1: FC<HTMLAttributes<HTMLHeadingElement>> = ({ children }) => {
  return (
    <Text as="h1" id={String(children)} scrollMarginTop={20} {...h1.props}>
      {children}
    </Text>
  )
}

const MdHeading2: FC<HTMLAttributes<HTMLHeadingElement>> = ({ children }) => {
  return (
    <Text as="h2" id={String(children)} scrollMarginTop={20} {...h2.props}>
      {children}
    </Text>
  )
}

const MdHeading3: FC<HTMLAttributes<HTMLHeadingElement>> = ({ children }) => {
  return (
    <Text as="h3" id={String(children)} scrollMarginTop={20} {...h3.props}>
      {children}
    </Text>
  )
}

const MdHeading4: FC<HTMLAttributes<HTMLHeadingElement>> = ({ children }) => {
  return (
    <Text as="h4" id={String(children)} scrollMarginTop={20} {...h4.props}>
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

const MdCodeblock: FC<HTMLAttributes<HTMLElement>> = ({ children }) => {
  const highlightCode = highlight.highlightAuto(String(children)).value
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
}

const MdInlineCode: FC<HTMLAttributes<HTMLElement>> = ({ children }) => {
  return <ChakraCode {...code.props}>{children}</ChakraCode>
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
          minW="25%"
          maxW={{ base: '100%', md: '40%' }}
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

export const MarkdownTemplate = (props: MarkdownTemplateProps) => {
  const processor = unified()
    .use(rehypeParse, { fragment: true })
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
        codeblk: MdCodeblock,
        code: MdInlineCode,
        blockquote: MdQuote,
        linkcard: MdLinkCard,
      },
    } as RehypeReactOptions)
  return <Box {...props}>{processor.processSync(props.source).result}</Box>
}
