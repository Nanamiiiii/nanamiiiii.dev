import type { NextPage } from 'next'
import { Box, Container, Heading, Tag, TagLeftIcon } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { 
  SiVisualstudiocode, 
  SiNeovim, 
  SiApple, 
  SiWindows, 
  SiArchlinux, 
  SiRuby, 
  SiRubyonrails, 
  SiRust, 
  SiC, 
  SiCplusplus, 
  SiGo, 
  SiCsharp, 
  SiPython, 
  SiTypescript, 
  SiVim, 
  SiJavascript, 
  SiHaskell, 
  SiOcaml, 
  SiDotnet,
  SiKubernetes,
  SiDocker,
  SiQemu,
  SiAmazonaws,
  SiMicrosoftazure,
  SiVmware
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

const Dev: NextPage = () => {
  return (
    <Layout title="Dev">
      <Container>
        <Heading as="h3" fontSize={25} mt={2} mb={4}>
          Development
        </Heading>
        <Heading as="h4" fontSize={20} mb={6} variant="section-title">
          Virtualization
        </Heading>
        <Box display="flex" justifyContent="center" py={2}>
          <Tag colorScheme='blue' mx={2}>
            <TagLeftIcon as={SiKubernetes} />
            Kubernetes
          </Tag>
          <Tag colorScheme='cyan' mx={2}>
            <TagLeftIcon as={SiDocker} />
            Docker
          </Tag>
          <Tag colorScheme='green' mx={2}>
            <TagLeftIcon as={SiVmware} />
            VMware
          </Tag>
          <Tag colorScheme='orange' mx={2}>
            <TagLeftIcon as={SiQemu} />
            QEMU KVM
          </Tag>
        </Box>

        <Heading as="h4" fontSize={20} mb={6} variant="section-title">
          Language
        </Heading>
        <Heading as="h5" fontSize={18} mb={2}>
          Awesome
        </Heading>
        <Box display="flex" justifyContent="center" py={2}>
          <Tag colorScheme='cyan' mx={2}>
            <TagLeftIcon as={SiGo} />
            Go
          </Tag>
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
        </Box>
        <Heading as="h5" fontSize={18} mt={4} mb={2}>
          Be used to
        </Heading>
        <Box display="flex" justifyContent="center" py={2}>
          <Tag colorScheme='teal' mx={2}>
            <TagLeftIcon as={SiCsharp} />
            C#
          </Tag>
          <Tag colorScheme='orange' mx={2}>
            <TagLeftIcon as={FaJava} />
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
          Cloud
        </Heading>
        <Box display="flex" justifyContent="center" py={2}>
          <Tag colorScheme='orange' mx={2}>
            <TagLeftIcon as={SiAmazonaws} />
            AWS
          </Tag>
          <Tag colorScheme='blue' mx={2}>
            <TagLeftIcon as={SiMicrosoftazure} />
            Azure
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
          <Tag colorScheme='cyan' mx={2}>
            <TagLeftIcon as={SiWindows} />
            Windows
          </Tag>
          <Tag colorScheme='cyan' mx={2}>
            <TagLeftIcon as={SiWindows} />
            Windows Server
          </Tag>
          <Tag colorScheme='gray' mx={2}>
            <TagLeftIcon as={SiApple} />
            macOS
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
      </Container>
    </Layout>
  )
}

export default Dev
