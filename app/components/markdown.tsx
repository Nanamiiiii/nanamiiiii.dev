import {
  BoxProps,
  Box,
  Text,
  UnorderedList,
  ListItem,
  Link,
  Code as ChakraCode,
} from '@chakra-ui/react'
import highlight from 'highlight.js';
import parse, { domToReact, HTMLReactParserOptions } from 'html-react-parser'

import 'highlight.js/styles/tokyo-night-dark.css'

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

const li = {
  component: ListItem,
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
      fontSize: "14px",
      px: "0.2em",
      mx: "0.2rem",
      display: 'inline',
  },
}

const preCode = {
  props: {
    fontSize: "14px",
    mb: "10px",
  }
}


const options: HTMLReactParserOptions = {
  replace: (domNode: any) => {
    if (domNode.type === 'tag') {
      if (domNode.name === 'h1') {
        return (
          <Text as="h1" {...h1.props}>
            {domToReact(domNode.children, options)}
          </Text>
        )
      }
      if (domNode.name === 'h2') {
        return (
          <Text as="h2" {...h2.props}>
            {domToReact(domNode.children, options)}
          </Text>
        )
      }
      if (domNode.name === 'h3') {
        return (
          <Text as="h3" {...h3.props}>
            {domToReact(domNode.children, options)}
          </Text>
        )
      }
      if (domNode.name === 'h4') {
        return (
          <Text as="h4" {...h4.props}>
            {domToReact(domNode.children, options)}
          </Text>
        )
      }
      if (domNode.name === 'ul') {
        return (
          <UnorderedList {...ul.props}>
            {domToReact(domNode.children, options)}
          </UnorderedList>
        )
      }
      if (domNode.name === 'li') {
        return <ListItem>{domToReact(domNode.children, options)}</ListItem>
      }
      if (domNode.name === 'a') {
        return (
          <Link {...a.props} href={domNode.attribs.href}>
            {domToReact(domNode.children, options)}
          </Link>
        )
      }
      if (domNode.name === 'p') {
        return <Text {...p.props}>{domToReact(domNode.children, options)}</Text>
      }
      if (domNode.name === 'code') {
        if (domNode.parent.name === 'pre') {
          const highlightCode = highlight.highlightAuto(domToReact(domNode.children) as string).value
          return (
            <Box as="code" className="hljs" borderRadius={10} overflowX="scroll" {...preCode.props}>
                {parse(highlightCode)}
            </Box>
          )
        } else {
          return (
            <ChakraCode {...code.props}>
                {domToReact(domNode.children, options)}
            </ChakraCode>
          )
        }
      }
    }
  },
}

export const MarkdownTemplate = (props: MarkdownTemplateProps) => {
  return <Box {...props}>{parse(props.source, options)}</Box>
}
