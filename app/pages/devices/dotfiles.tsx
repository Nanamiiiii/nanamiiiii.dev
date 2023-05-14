import {
  Box,
  Container,
  Heading,
  Center,
  List,
  ListItem,
  Divider,
  Text,
  Button,
  UnorderedList,
} from '@chakra-ui/react'
import { NextPage } from 'next'
import { IoLogoGithub } from 'react-icons/io5'
import { Title, DevPort, Meta } from '../../components/device'
import Layout from '../../components/layouts/article'
import P from '../../components/paragraph'

const Dotfiles: NextPage = () => {
  return (
    <Layout title="Dotfiles">
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
        <P>includes i3wm, Neovim, Zsh, tmux, etc...</P>

        <Heading as="h4" fontSize={20} my={6} fontWeight="400">
          <Center>Desktop env.</Center>
        </Heading>

        <DevPort src="/images/devices/desktop_env_20230302.png" alt="i3-de" />

        <List my={6} ml={4}>
          <ListItem display="flex" mb={1} alignItems="center">
            <Meta>Window Manager</Meta>
            i3wm
          </ListItem>
          <ListItem display="flex" mb={1} alignItems="center">
            <Meta>Status Bar</Meta>
            Polybar
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
          <Center>Terminal / Neovim</Center>
        </Heading>

        <DevPort src="/images/devices/neovim_env.png" alt="term-vim" />

        <List my={6} pl={4}>
          <ListItem fontWeight="400" fontSize={20} mb={1}>Terminal</ListItem>
          <List pl={4}>
            <ListItem display="flex" mb={1} alignItems="center">
              <Meta>Emulator</Meta>
              Alacritty
            </ListItem>
            <ListItem display="flex" mb={1} alignItems="center">
              <Meta>Mux</Meta>
              tmux
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
          <ListItem fontWeight="400" fontSize={20} mb={1}>NeoVim</ListItem>
          <List pl={4}>
            <ListItem display="flex" mb={1} alignItems="center">
              <Meta>Plugin Manager</Meta>
              dein.vim
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
              ddc.vim
            </ListItem>
            <ListItem display="flex" mb={1} alignItems="center">
              <Meta>Fuzzy Finder</Meta>
              fzf.vim
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
              deol.nvim
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

export default Dotfiles
