import {
  Box,
  Container,
  Divider,
  Heading,
  ListItem,
  Tag,
  TagLeftIcon,
  Text,
  UnorderedList,
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import { FaJava } from 'react-icons/fa'
import {
  SiVisualstudiocode,
  SiNeovim,
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
  SiVmware,
  SiGooglecloud,
  SiRedhat,
  SiUbuntu,
  SiKalilinux,
  SiFedora,
  SiLua,
} from 'react-icons/si'
import Layout from '../components/layouts/article'

const Skill: NextPage = () => {
  return (
    <Layout title="Skill" desc="Introduction of my skill" path="/skill">
      <Container maxWidth="100%" fontSize="18px">
        <Heading as="h3" fontSize={25} mt={2} mb={4} fontWeight="300">
          Development Skills
        </Heading>

        <Heading
          as="h4"
          fontSize={20}
          mb={4}
          variant="section-title"
          fontWeight="300"
        >
          Programming
        </Heading>
        <Heading as="h5" fontSize={18} mb={2} fontWeight="300">
          Awesome
        </Heading>
        <Box display="flex" py={2} pl={4}>
          <Tag colorScheme="orange" mx={2}>
            <TagLeftIcon as={SiRust} />
            Rust
          </Tag>
          <Tag colorScheme="cyan" mx={2}>
            <TagLeftIcon as={SiGo} />
            Go
          </Tag>
          <Tag colorScheme="blue" mx={2}>
            <TagLeftIcon as={SiC} />C
          </Tag>
          <Tag colorScheme="purple" mx={2}>
            <TagLeftIcon as={SiCplusplus} />
            C++
          </Tag>
          <Tag colorScheme="orange" mx={2}>
            RISC-V Assembly
          </Tag>
        </Box>
        <Heading as="h5" fontSize={18} mt={4} mb={2} fontWeight="300">
          Be used to
        </Heading>
        <Box display="flex" py={2} pl={4}>
          <Tag colorScheme="red" mx={2}>
            <TagLeftIcon as={SiRuby} />
            Ruby
          </Tag>
          <Tag colorScheme="teal" mx={2}>
            <TagLeftIcon as={SiCsharp} />
            C#
          </Tag>
          <Tag colorScheme="orange" mx={2}>
            <TagLeftIcon as={FaJava} />
            Java
          </Tag>
          <Tag colorScheme="brown" mx={2}>
            <TagLeftIcon as={SiPython} />
            Python
          </Tag>
        </Box>

        <Heading as="h5" fontSize={18} mt={4} mb={2} fontWeight="300">
          Simply can write
        </Heading>
        <Box display="flex" py={2} pl={4}>
          <Tag colorScheme="navy" mx={2}>
            <TagLeftIcon as={SiTypescript} />
            Typescript
          </Tag>
          <Tag colorScheme="yellow" mx={2}>
            <TagLeftIcon as={SiJavascript} />
            Javascript
          </Tag>
          <Tag colorScheme="green" mx={2}>
            <TagLeftIcon as={SiVim} />
            Vim script
          </Tag>
        </Box>
        <Box display="flex" py={2} pl={4}>
          <Tag colorScheme="purple" mx={2}>
            <TagLeftIcon as={SiLua} />
            Lua
          </Tag>
          <Tag colorScheme="cyan" mx={2}>
            <TagLeftIcon as={SiHaskell} />
            Haskell
          </Tag>
          <Tag colorScheme="gray" mx={2}>
            <TagLeftIcon as={SiOcaml} />
            Ocaml
          </Tag>
        </Box>

        <Heading as="h5" fontSize={18} mt={4} mb={2} fontWeight="300">
          Framework
        </Heading>
        <Box display="flex" py={2} pl={4}>
          <Tag colorScheme="purple" mx={2}>
            <TagLeftIcon as={SiDotnet} />
            .NET
          </Tag>
          <Tag colorScheme="red" mx={2}>
            <TagLeftIcon as={SiRubyonrails} />
            Rails
          </Tag>
        </Box>

        <Heading
          as="h4"
          fontSize={20}
          mb={4}
          variant="section-title"
          fontWeight="300"
        >
          Virtualization
        </Heading>
        <Box display="flex" py={2} pl={4}>
          <Tag colorScheme="blue" mx={2}>
            <TagLeftIcon as={SiKubernetes} />
            Kubernetes
          </Tag>
          <Tag colorScheme="cyan" mx={2}>
            <TagLeftIcon as={SiDocker} />
            Docker
          </Tag>
          <Tag colorScheme="green" mx={2}>
            <TagLeftIcon as={SiVmware} />
            VMware
          </Tag>
          <Tag colorScheme="orange" mx={2}>
            <TagLeftIcon as={SiQemu} />
            QEMU KVM
          </Tag>
        </Box>

        <Heading
          as="h4"
          fontSize={20}
          mb={6}
          variant="section-title"
          fontWeight="300"
        >
          Cloud
        </Heading>
        <Box display="flex" py={2} pl={4}>
          <Tag colorScheme="orange" mx={2}>
            <TagLeftIcon as={SiAmazonaws} />
            AWS
          </Tag>
          <Tag colorScheme="cyan" mx={2}>
            <TagLeftIcon as={SiGooglecloud} />
            GCP
          </Tag>
          <Tag colorScheme="blue" mx={2}>
            <TagLeftIcon as={SiMicrosoftazure} />
            Azure
          </Tag>
        </Box>

        <Heading
          as="h4"
          fontSize={20}
          mb={6}
          variant="section-title"
          fontWeight="300"
        >
          Operating System
        </Heading>
        <Box display="flex" py={2} pl={4}>
          <Tag colorScheme="blue" mx={2}>
            <TagLeftIcon as={SiArchlinux} />
            ArchLinux
          </Tag>
          <Tag colorScheme="red" mx={2}>
            <TagLeftIcon as={SiRedhat} />
            RHEL
          </Tag>
          <Tag colorScheme="blue" mx={2}>
            <TagLeftIcon as={SiFedora} />
            Fedora
          </Tag>
          <Tag colorScheme="orange" mx={2}>
            <TagLeftIcon as={SiUbuntu} />
            Ubuntu
          </Tag>
        </Box>
        <Box display="flex" py={2} pl={4}>
          <Tag colorScheme="navy" mx={2}>
            <TagLeftIcon as={SiKalilinux} />
            Kali Linux
          </Tag>
          <Tag colorScheme="cyan" mx={2}>
            <TagLeftIcon as={SiWindows} />
            Windows
          </Tag>
        </Box>

        <Heading
          as="h4"
          fontSize={20}
          mb={6}
          variant="section-title"
          fontWeight="300"
        >
          Editor
        </Heading>
        <Box display="flex" py={2} pl={4} mb={6}>
          <Tag colorScheme="green" mx={2}>
            <TagLeftIcon as={SiNeovim} />
            Neovim
          </Tag>
          <Tag colorScheme="green" mx={2}>
            <TagLeftIcon as={SiVim} />
            Vim
          </Tag>
          <Tag colorScheme="blue" mx={2}>
            <TagLeftIcon as={SiVisualstudiocode} />
            VSCode
          </Tag>
        </Box>

        <Divider />

        <Heading as="h3" fontSize={25} mt={6} mb={2} fontWeight="300">
          Qualifications
        </Heading>
        <Box display="flex" py={2} pl={2}>
          <UnorderedList>
            <ListItem>
              IPA 情報処理安全確保支援士 (2022/10, Not Registered)
            </ListItem>
            <ListItem>IPA 応用情報技術者試験 (2020/10)</ListItem>
          </UnorderedList>
        </Box>
      </Container>
    </Layout>
  )
}

export default Skill
