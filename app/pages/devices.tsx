import type { NextPage } from 'next'
import Section from '../components/section'
import { Container, Heading, SimpleGrid, } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { DeviceContent } from '../components/device-content'

import devicePc from '../public/images/devices/pc.png'
import deviceDisplay from '../public/images/devices/display.png'
import deviceKey from '../public/images/devices/keyboard.png'
import deviceMob from '../public/images/devices/mobile.png'

const Devices: NextPage = () => {
  return (
    <Layout title="Devices">
      <Container>
        <Heading as="h3" fontSize={25} mt={2} mb={4}>
          Devices
        </Heading>
        <SimpleGrid columns={[1, 1, 1]} gap={6} mb={6}>
          <Section delay="0.1">
            <DeviceContent href="/devices/pc" title="PC" thumbnail={devicePc}>
              Computer
            </DeviceContent>
          </Section>
        </SimpleGrid>
        <SimpleGrid columns={[1, 1, 1]} gap={6} mb={6}>
          <Section delay="0.1">
            <DeviceContent href="/devices/display" title="Display" thumbnail={deviceDisplay}>
              Display
            </DeviceContent>
          </Section>
        </SimpleGrid>
        <SimpleGrid columns={[1, 1, 1]} gap={6} mb={6}>
          <Section delay="0.1">
            <DeviceContent href="/devices/keymou" title="Keyboard&Mouse" thumbnail={deviceKey}>
              Keyboard & Mouse
            </DeviceContent>
          </Section>
        </SimpleGrid>
        <SimpleGrid columns={[1, 1, 1]} gap={6} mb={6}>
          <Section delay="0.1">
            <DeviceContent href="/devices/mobile" title="Mobile&Others" thumbnail={deviceMob}>
              Mobile & Others
            </DeviceContent>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Devices
