'use client'
import {
  Container,
  Heading,
  Center,
  List,
  ListItem,
  Divider,
} from '@chakra-ui/react'
import { Title, DevPort, Meta } from '../../../components/device'
import Layout from '../../../components/layouts/article'

export const Component = () => {
  return (
    <Layout>
      <Container maxWidth="100%" fontSize="18px" fontWeight="300">
        <Title>Displays</Title>

        <Heading as="h4" fontSize={20} my={6} fontWeight="400">
          <Center>ASUS ProArt PA279CRV</Center>
        </Heading>

        <List my={6} ml={4}>
          <ListItem display="flex" mb={1} alignItems="center">
            <Meta>RESOLUTION</Meta>
            <span>3840x2160</span>
          </ListItem>
          <ListItem display="flex" mb={1} alignItems="center">
            <Meta>TYPE</Meta>
            <span>IPS / Non-Glare</span>
          </ListItem>
          <ListItem display="flex" mb={1} alignItems="center">
            <Meta>REFRESH RATE</Meta>
            <span>60Hz</span>
          </ListItem>
          <ListItem display="flex" mb={1} alignItems="center">
            <Meta>RESPONSE</Meta>
            <span>5ms</span>
          </ListItem>
          <ListItem display="flex" mb={1} alignItems="center">
            <Meta>COLOR</Meta>
            <span>AdobeRGB 99% / DCI-P3 99% / DisplayHDR</span>
          </ListItem>
        </List>

        <Divider />
        <Heading as="h4" fontSize={20} my={6} fontWeight="400">
          <Center>DELL U2720QM</Center>
        </Heading>

        <DevPort src="/images/devices/display.png" alt="dell4k" />

        <List my={6} ml={4}>
          <ListItem display="flex" mb={1} alignItems="center">
            <Meta>RESOLUTION</Meta>
            <span>3840x2160</span>
          </ListItem>
          <ListItem display="flex" mb={1} alignItems="center">
            <Meta>TYPE</Meta>
            <span>IPS / Non-Glare</span>
          </ListItem>
          <ListItem display="flex" mb={1} alignItems="center">
            <Meta>REFRESH RATE</Meta>
            <span>60Hz</span>
          </ListItem>
          <ListItem display="flex" mb={1} alignItems="center">
            <Meta>RESPONSE</Meta>
            <span>8ms</span>
          </ListItem>
          <ListItem display="flex" mb={1} alignItems="center">
            <Meta>COLOR</Meta>
            <span>DCI-P3 95% / sRGB 99% / DisplayHDR</span>
          </ListItem>
        </List>

        <Divider />

        <Heading as="h4" fontSize={20} my={6} fontWeight="400">
          <Center>HP OMEN 27i QHD</Center>
        </Heading>

        <DevPort src="/images/no_img.png" alt="omen" />

        <List my={6} ml={4}>
          <ListItem display="flex" mb={1} alignItems="center">
            <Meta>RESOLUTION</Meta>
            <span>2560x1440</span>
          </ListItem>
          <ListItem display="flex" mb={1} alignItems="center">
            <Meta>TYPE</Meta>
            <span>Nano IPS / Non-Glare</span>
          </ListItem>
          <ListItem display="flex" mb={1} alignItems="center">
            <Meta>REFRESH RATE</Meta>
            <span>165Hz</span>
          </ListItem>
          <ListItem display="flex" mb={1} alignItems="center">
            <Meta>RESPONSE</Meta>
            <span>1ms</span>
          </ListItem>
          <ListItem display="flex" mb={1} alignItems="center">
            <Meta>COLOR</Meta>
            <span>DCI-P3 98%</span>
          </ListItem>
          <ListItem display="flex" mb={1} alignItems="center">
            <Meta>OTHER</Meta>
            <span>NVIDIA G-SYNC</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}
