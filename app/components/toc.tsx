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
import { FaRegCircle, FaAngleRight } from 'react-icons/fa'
import { LiaAngleRightSolid, LiaAngleDoubleRightSolid } from 'react-icons/lia'
import { MdToc } from 'react-icons/md'

type TocProps = {
  tocItems: TocItem[]
} & BoxProps

export type Headings = 'h1' | 'h2' | 'h3' | 'h4'

export type TocItem = {
  text: string
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

const renderTocItem = (tocs: TocItem[], indent: number) => {
  const finalRender: JSX.Element[] = []
  tocs.forEach((item, idx) => {
    finalRender.push(
      <ListItem key={item.text}>
        <ListIcon
          as={iconMap[item.lv].icon}
          mb={iconMap[item.lv].mb}
          color={iconMap[item.lv].color}
          fontSize={iconMap[item.lv].size}
          mr={1}
        />
        <Link href={`#${item.text}`} scrollMarginTop={50}>
          {item.text}
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
            <List>{renderTocItem(props.tocItems, 5)}</List>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  )
}
