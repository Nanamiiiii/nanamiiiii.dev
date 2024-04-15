'use client'
import {
  Box,
  Container,
  Heading,
  Center,
  List,
  ListItem,
  Button,
} from '@chakra-ui/react'
import { IoLogoGithub } from 'react-icons/io5'
import { Title, DevPort, Meta } from '../../../components/device'
import Layout from '../../../components/layouts/article'
import P from '../../../components/paragraph'

import linuxDesktop from '../../../public/images/devices/desktop_env_20240208.png'
import macDesktop from '../../../public/images/devices/mac_desktop_202404.webp'
import neovim from '../../../public/images/devices/neovim_env.png'

export const Component = () => {
  return (
    <Layout>
      <Container maxWidth="100%" fontSize="18px" fontWeight="300">
        <Title>dotfiles</Title>

        <Box display="flex" justifyContent="center" alignItems="center" mb={6}>
          <Button
            colorScheme="blue"
            mt={5}
            as="a"
            href="https://github.com/Nanamiiiii/dotfiles"
            target="_blank"
            fontWeight="300"
          >
            <IoLogoGithub />
            &nbsp; My dotfiles
          </Button>
        </Box>

        <P>My dotfiles is published above.</P>
        <P>includes i3wm, yabai, Neovim, Zsh, tmux, etc...</P>

        <Heading as="h4" fontSize={20} my={6} fontWeight="400">
          <Center>Linux Desktop env.</Center>
        </Heading>

        <DevPort src={linuxDesktop} alt="i3-de" />

        <List my={6} ml={4}>
          <ListItem display="flex" mb={1} alignItems="center">
            <Meta>Window Manager</Meta>
            i3wm
          </ListItem>
          <ListItem display="flex" mb={1} alignItems="center">
            <Meta>Status Bar</Meta>
            i3blocks
          </ListItem>
          <ListItem display="flex" mb={1} alignItems="center">
            <Meta>Launcher</Meta>
            Rofi
          </ListItem>
          <ListItem display="flex" mb={1} alignItems="center">
            <Meta>Notification</Meta>
            deadd notification center
          </ListItem>
          <ListItem display="flex" mb={1} alignItems="center">
            <Meta>Theme</Meta>
            TokyoNight / My Custom Theme (Blue based)
          </ListItem>
          <ListItem display="flex" mb={1} alignItems="center">
            <Meta>INPUT</Meta>
            fcitx5-skk
          </ListItem>
          <ListItem display="flex" mb={1} alignItems="center">
            <Meta>File Manager</Meta>
            ranger / dolphin
          </ListItem>
          <ListItem display="flex" mb={1} alignItems="center">
            <Meta>Browser</Meta>
            Mozilla FireFox (sometimes Vivaldi)
          </ListItem>
        </List>

        <Heading as="h4" fontSize={20} my={6} fontWeight="400">
          <Center>macOS Desktop env.</Center>
        </Heading>

        <DevPort src={macDesktop} alt="mac-de" />

        <List my={6} ml={4}>
          <ListItem display="flex" mb={1} alignItems="center">
            <Meta>Window Manager</Meta>
            yabai
          </ListItem>
          <ListItem display="flex" mb={1} alignItems="center">
            <Meta>Key Binding</Meta>
            skhd
          </ListItem>
          <ListItem display="flex" mb={1} alignItems="center">
            <Meta>Status Bar</Meta>
            Sketchybar
          </ListItem>
          <ListItem display="flex" mb={1} alignItems="center">
            <Meta>Launcher</Meta>
            Raycast
          </ListItem>
          <ListItem display="flex" mb={1} alignItems="center">
            <Meta>Input</Meta>
            ATOK
          </ListItem>
        </List>

        <Heading as="h4" fontSize={20} my={6} fontWeight="400">
          <Center>Terminal / Neovim</Center>
        </Heading>

        <DevPort src={neovim} alt="term-vim" />

        <List my={6} pl={4}>
          <ListItem fontWeight="400" fontSize={20} mb={1}>
            Terminal
          </ListItem>
          <List pl={4}>
            <ListItem display="flex" mb={1} alignItems="center">
              <Meta>Emulator</Meta>
              WezTerm
            </ListItem>
            <ListItem display="flex" mb={1} alignItems="center">
              <Meta>Mux</Meta>
              WezTerm MUX / tmux
            </ListItem>
            <ListItem display="flex" mb={1} alignItems="center">
              <Meta>Shell</Meta>
              Zsh
            </ListItem>
            <ListItem display="flex" mb={1} alignItems="center">
              <Meta>Shell Plugin</Meta>
              Zinit
            </ListItem>
            <ListItem display="flex" mb={1} alignItems="center">
              <Meta>Prompt</Meta>
              Starship
            </ListItem>
          </List>
        </List>

        <List my={6} pl={4}>
          <ListItem fontWeight="400" fontSize={20} mb={1}>
            NeoVim
          </ListItem>
          <List pl={4}>
            <ListItem display="flex" mb={1} alignItems="center">
              <Meta>Plugin Manager</Meta>
              Lazy.nvim
            </ListItem>
            <ListItem display="flex" mb={1} alignItems="center">
              <Meta>Filer</Meta>
              NeoTree
            </ListItem>
            <ListItem display="flex" mb={1} alignItems="center">
              <Meta>LSP</Meta>
              nvim-lsp
            </ListItem>
            <ListItem display="flex" mb={1} alignItems="center">
              <Meta>Completion</Meta>
              nvim-cmp
            </ListItem>
            <ListItem display="flex" mb={1} alignItems="center">
              <Meta>Fuzzy Finder</Meta>
              telescope.nvim
            </ListItem>
            <ListItem display="flex" mb={1} alignItems="center">
              <Meta>Status Line</Meta>
              Lualine
            </ListItem>
            <ListItem display="flex" mb={1} alignItems="center">
              <Meta>Snippet</Meta>
              vsnip
            </ListItem>
            <ListItem display="flex" mb={1} alignItems="center">
              <Meta>Term Ext.</Meta>
              FTerm.nvim
            </ListItem>
            <ListItem display="flex" mb={1} alignItems="center">
              <Meta>Input</Meta>
              skkeleton
            </ListItem>
          </List>
        </List>
      </Container>
    </Layout>
  )
}
