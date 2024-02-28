"use client"
import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Heading,
  Link,
  Tag,
  Text,
} from '@chakra-ui/react'
import NextLink from 'next/link'

type BlogEntryProps = {
  id: string
  title: string
  tags: string[]
  dateString: string
}

export const BlogEntry = ({ id, title, tags, dateString }: BlogEntryProps) => {
  return (
    <Card width="100%" variant="outline" size="sm" backgroundColor="#00000000">
      <CardHeader pb={0}>
        <HStack spacing={2} pb={2}>
          {tags.map((tag: string, idx: number) => (
            <Tag key={idx} variant="subtle" colorScheme="cyan">
              {tag}
            </Tag>
          ))}
        </HStack>
        <Heading fontSize="20px">
          <Link as={NextLink} href={`/blogs/${id}`}>
            {title}
          </Link>
        </Heading>
      </CardHeader>
      <CardBody display="flex" alignItems="flex-end" justifyContent="right">
        <Text textColor="gray" fontStyle="italic">
          {dateString}
        </Text>
      </CardBody>
    </Card>
  )
}

export const BlogTitle = ({ children }: { children: any }) => (
  <Box>
    <Link as={NextLink} href="/blogs" fontStyle="italic" passHref>
      Myuu&rsquo;s Trashcan
    </Link>
    <span>
      &nbsp;
      <ChevronRightIcon />
      &nbsp;
    </span>
    <Heading
      display="inline-block"
      as="h3"
      fontSize={20}
      fontWeight="300"
      mb={4}
    >
      {children}
    </Heading>
  </Box>
)
