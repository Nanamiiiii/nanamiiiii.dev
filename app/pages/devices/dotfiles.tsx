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
            Details are under construction...
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Dotfiles
