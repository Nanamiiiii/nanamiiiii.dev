import type { NextPage } from 'next'
import NextLink from 'next/link'
import { Box, Container, Heading, SimpleGrid, Divider, Text, Button, Tag, TagLabel, TagLeftIcon, TagRightIcon, TagCloseButton } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkContents, ContentsGrid } from '../components/contents-grid'
import Layout from '../components/layouts/article'
import { SiVisualstudiocode, SiNeovim, SiWindows, SiArchlinux, SiRuby, SiRubyonrails, SiRust, SiC, SiCplusplus, SiGo, SiCsharp, SiJava, SiPython, SiTypescript, SiVim, SiJavascript, SiHaskell, SiOcaml, SiDotnet } from 'react-icons/si'

const Dev: NextPage = () => {
  return (
    <Layout title="Dev">
      <Container>
        <Heading as="h3" fontSize={25} mt={2} mb={4}>
          Development
        </Heading>
        <Heading as="h4" fontSize={20} mb={6} variant="section-title">
          Programming Language
        </Heading>
        <Heading as="h5" fontSize={18} mb={2}>
          Awesome
        </Heading>
        <Box display="flex" justifyContent="center" py={2}>
          <Tag colorScheme='red' mx={2}>
            <TagLeftIcon as={SiRuby} />
            Ruby
          </Tag>
          <Tag colorScheme='orange' mx={2}>
            <TagLeftIcon as={SiRust} />
            Rust
          </Tag>
          <Tag colorScheme='blue' mx={2}>
            <TagLeftIcon as={SiC} />
            C
          </Tag>
          <Tag colorScheme='purple' mx={2}>
            <TagLeftIcon as={SiCplusplus} />
            C++
          </Tag>
          <Tag colorScheme='gray' mx={2}>
            Shell script
          </Tag>
        </Box>
        <Heading as="h5" fontSize={18} mt={4} mb={2}>
          Be used to
        </Heading>
        <Box display="flex" justifyContent="center" py={2}>
          <Tag colorScheme='cyan' mx={2}>
            <TagLeftIcon as={SiGo} />
            Go
          </Tag>
          <Tag colorScheme='teal' mx={2}>
            <TagLeftIcon as={SiCsharp} />
            C#
          </Tag>
          <Tag colorScheme='orange' mx={2}>
            <TagLeftIcon as={SiJava} />
            Java
          </Tag>
          <Tag colorScheme='brown' mx={2}>
            <TagLeftIcon as={SiPython} />
            Python
          </Tag>
        </Box>
        <Heading as="h5" fontSize={18} mt={4} mb={2}>
          Simply can write  
        </Heading>
        <Box display="flex" justifyContent="center" py={2}>
          <Tag colorScheme='navy' mx={2}>
            <TagLeftIcon as={SiTypescript} />
            Typescript
          </Tag>
          <Tag colorScheme='yellow' mx={2}>
            <TagLeftIcon as={SiJavascript} />
            Javascript
          </Tag>
          <Tag colorScheme='green' mx={2}>
            <TagLeftIcon as={SiVim} />
            Vim script
          </Tag>
        </Box>
        <Box display="flex" justifyContent="center" py={2}>
          <Tag colorScheme='cyan' mx={2}>
            <TagLeftIcon as={SiHaskell} />
            Haskell
          </Tag>
          <Tag colorScheme='gray' mx={2}>
            <TagLeftIcon as={SiOcaml} />
            Ocaml
          </Tag>
        </Box>

        <Heading as="h4" fontSize={20} mb={6} variant="section-title">
          Framework
        </Heading>
        <Box display="flex" justifyContent="center" py={2}>
          <Tag colorScheme='purple' mx={2}>
            <TagLeftIcon as={SiDotnet} />
            .NET
          </Tag>
          <Tag colorScheme='red' mx={2}>
            <TagLeftIcon as={SiRubyonrails} />
            Rails
          </Tag>
        </Box>

        <Heading as="h4" fontSize={20} mb={6} variant="section-title">
          Operating System
        </Heading>
        <Box display="flex" justifyContent="center" py={2}>
          <Tag colorScheme='blue' mx={2}>
            <TagLeftIcon as={SiArchlinux} />
            ArchLinux
          </Tag>
          is GOD
        </Box>
        <Box display="flex" justifyContent="center" py={2}>
          Destroy
          <Tag colorScheme='cyan' mx={2}>
            <TagLeftIcon as={SiWindows} />
            Windows
          </Tag>
        </Box>

        <Heading as="h4" fontSize={20} mb={6} variant="section-title">
          Editor
        </Heading>
        <Box display="flex" justifyContent="center" py={2}>
          <Tag colorScheme='green' mx={2}>
            <TagLeftIcon as={SiNeovim} />
            Neovim
          </Tag>
          <Tag colorScheme='green' mx={2}>
            <TagLeftIcon as={SiVim} />
            Vim
          </Tag>
          <Tag colorScheme='blue' mx={2}>
            <TagLeftIcon as={SiVisualstudiocode} />
            VSCode
          </Tag>
        </Box>
      </Container>
    </Layout>
  )
}

export default Dev
