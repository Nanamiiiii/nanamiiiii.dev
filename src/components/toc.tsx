'use client'
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  BoxProps,
  Link,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react'
import { parse } from 'node-html-parser'
import { FaRegCircle, FaAngleRight } from 'react-icons/fa'
import { LiaAngleRightSolid, LiaAngleDoubleRightSolid } from 'react-icons/lia'
import { MdToc } from 'react-icons/md'
import rehypeParse from 'rehype-parse'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import { unified } from 'unified'

type TocProps = {
  source: string
} & BoxProps

export type Headings = 'h1' | 'h2' | 'h3' | 'h4'

export type TocItem = {
  text: string
  id: string
  lv: Headings
  inner: TocItem[]
}

const iconMap = {
  h1: {
    icon: FaAngleRight,
    color: 'blue.300',
    size: '18px',
    mb: '2.5px',
  },
  h2: {
    icon: LiaAngleRightSolid,
    color: 'blue.300',
    size: '12px',
    mb: '0.5em',
  },
  h3: {
    icon: LiaAngleDoubleRightSolid,
    color: 'blue.300',
    size: '12px',
    mb: '0.5em',
  },
  h4: {
    icon: FaRegCircle,
    color: 'blue.100',
    size: '12px',
    mb: '0.5em',
  },
  fallback: {
    icon: FaAngleRight,
    color: 'blue.300',
    size: '18px',
    mb: '2.5px',
  },
}

const unescapeHtml = (str: string) => {
  if (typeof str !== 'string') return str

  const patterns: { [index: string]: string } = {
    '&lt;': '<',
    '&gt;': '>',
    '&amp;': '&',
    '&quot;': '"',
    '&#x27;': "'",
    '&#x60;': '`',
  }

  return str.replace(/&(lt|gt|amp|quot|#x27|#x60);/g, function (match) {
    return patterns[match]
  })
}

const renderTocItem = (tocs: TocItem[], indent: number) => {
  const finalRender: JSX.Element[] = []
  tocs.forEach(item => {
    finalRender.push(
      <ListItem key={item.text}>
        <ListIcon
          as={iconMap[item.lv].icon}
          mb={iconMap[item.lv].mb}
          color={iconMap[item.lv].color}
          fontSize={iconMap[item.lv].size}
          mr={1}
        />
        <Link href={`#${item.id}`} scrollMarginTop={50}>
          {unescapeHtml(item.text)}
        </Link>
        {item.inner.length != 0 ? (
          <List ml={indent}>{renderTocItem(item.inner, indent)}</List>
        ) : (
          <></>
        )}
      </ListItem>,
    )
  })
  return finalRender
}

export const MarkdownToc = (props: TocProps) => {
  const processor = unified()
    .use(rehypeParse, { fragment: true })
    .use(rehypeSlug)
    .use(rehypeStringify)
  const parsedHtml = processor.processSync(props.source).toString()

  //const doc = new JSDOM(parsedHtml).window.document
  //const doc = new DOMParser().parseFromString(parsedHtml, 'text/html')
  const doc = parse(parsedHtml)
  const elems = doc.querySelectorAll('h1, h2, h3, h4')
  const tocs: TocItem[] = []
  elems.forEach(elem => {
    const lv = (elem.tagName.toLowerCase() as Headings) || 'h1'
    const content = elem.innerHTML || ''
    let len = tocs.length
    let lastOuter: TocItem[] = tocs
    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (len == 0 || lastOuter[len - 1].lv === lv) {
        lastOuter.push({ text: content, id: elem.id, lv: lv, inner: [] })
        break
      }
      lastOuter = lastOuter[len - 1].inner
      len = lastOuter.length
    }
  })

  return (
    <Box display="flex" justifyContent="center">
      <Accordion allowToggle borderColor="#00000000" width="100%">
        <AccordionItem>
          <AccordionButton
            fontSize="14px"
            textAlign="center"
            justifyContent="center"
          >
            <MdToc />
            <Box ml={2}>Table of Contents</Box>
          </AccordionButton>
          <AccordionPanel>
            <List>{renderTocItem(tocs, 5)}</List>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  )
}
