import {
  Container,
  Heading,
  Center,
  UnorderedList,
  ListItem,
  Tag,
  Divider,
} from '@chakra-ui/react'
import { NextPage } from 'next'
import { Title, DevPort } from '../../components/device'
import Layout from '../../components/layouts/article'

const KeyMouse: NextPage = () => {
  return (
    <Layout title="Keyboard & Mouse" desc='Keyboard & Mouse' path='/devices/keymou'>
      <Container maxWidth="100%" fontSize="18px" fontWeight="300">
        <Title>Keyboard & Mouse</Title>
        <Heading as="h4" fontSize={20} my={6} fontWeight="400">
          <Center>Keyboard</Center>
        </Heading>

        <DevPort src="/images/devices/keyboard.png" alt="keyboard" />

        <UnorderedList spacing={2} my={6}>
          <ListItem display="flex" alignItems="center">
            HHKB Professional HYBRID Type-S Yuki &nbsp;
            <Tag size="sm">US</Tag>
            &nbsp;
            <Tag size="sm">60%</Tag>
            &nbsp;
            <Tag size="sm">2022</Tag>
          </ListItem>
          <ListItem display="flex" alignItems="center">
            Ducky One 3 Fuji w/ VAXEE KC &nbsp;
            <Tag size="sm">US</Tag>
            &nbsp;
            <Tag size="sm">Full</Tag>
            &nbsp;
            <Tag size="sm">2022</Tag>
          </ListItem>
          <ListItem display="flex" alignItems="center">
            Keychron K3 &nbsp;
            <Tag size="sm">US</Tag>
            &nbsp;
            <Tag size="sm">TKL</Tag>
            &nbsp;
            <Tag size="sm">2022</Tag>
          </ListItem>
        </UnorderedList>

        <Divider />

        <Heading as="h4" fontSize={20} my={6} fontWeight="400">
          <Center>Mouse</Center>
        </Heading>

        <DevPort src="/images/devices/mouse.png" alt="mouse" />

        <UnorderedList spacing={2} my={6}>
          <ListItem display="flex" alignItems="center">
            VAXEE XE W Wireless &nbsp;
            <Tag size="sm">2023</Tag>
          </ListItem>
          <ListItem display="flex" alignItems="center">
            Logicool G PRO X SUPERLIGHT &nbsp;
            <Tag size="sm">2022</Tag>
          </ListItem>
          <ListItem display="flex" alignItems="center">
            Logicool G304 LIGHTSPEED LILAC &nbsp;
            <Tag size="sm">2021</Tag>
          </ListItem>
          <ListItem display="flex" alignItems="center">
            Logicool MX Master 3 &nbsp;
            <Tag size="sm">2021</Tag>
          </ListItem>
          <ListItem display="flex" alignItems="center">
            Glorious Model O Matte White &nbsp;
            <Tag size="sm">2020</Tag>
          </ListItem>
          <ListItem display="flex" alignItems="center">
            Logicool G304 White &nbsp;
            <Tag size="sm">2019</Tag>
          </ListItem>
        </UnorderedList>
      </Container>
    </Layout>
  )
}

export default KeyMouse
