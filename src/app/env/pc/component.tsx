'use client'
import {
  Container,
  Heading,
  Center,
  List,
  ListIcon,
  Tag,
  TagLeftIcon,
  Text,
  ListItem,
  Divider,
} from '@chakra-ui/react'
import {
  SiUbuntu,
  SiNvidia,
  SiSamsung,
  SiCorsair,
  SiIntel,
  SiArchlinux,
  SiWindows,
  SiAsus,
  SiRedhat,
  SiTruenas,
  SiMacos,
  SiApple,
} from 'react-icons/si'
import { Title, DevPort, Meta } from '../../../components/device'
import Layout from '../../../components/layouts/article'

export const Component = () => {
  return (
    <Layout>
      <Container maxWidth="100%" fontSize="18px" fontWeight="300">
        <Title>Computers</Title>

        <Heading as="h4" fontSize={20} my={6} fontWeight="400">
          <Center>Workstation</Center>
        </Heading>

        <DevPort src="/images/devices/pc.png" alt="mainpc" />

        <List my={6} ml={4}>
          <ListItem display="flex" mb={2} alignItems="center">
            <Meta>
              <Text>OS</Text>
            </Meta>
            <Tag size="sm" variant="outline" colorScheme="cyan" mx={1}>
              <TagLeftIcon as={SiWindows} />
              Windows11 Pro
            </Tag>
            <Tag size="sm" variant="outline" colorScheme="blue" mx={1}>
              <TagLeftIcon as={SiArchlinux} />
              ArchLinux
            </Tag>
          </ListItem>

          <ListItem display="flex" mb={2} alignItems="center">
            <Meta>
              <Text>MB</Text>
            </Meta>
            <span>MSI MPG Z690 FORCE WIFI</span>
          </ListItem>

          <ListItem display="flex" mb={2} alignItems="center">
            <Meta>
              <Text>CPU</Text>
            </Meta>
            <ListIcon as={SiIntel} />
            <span>Intel Core i7-12700K</span>
          </ListItem>

          <ListItem display="flex" mb={2} alignItems="center">
            <Meta>
              <Text>RAM</Text>
            </Meta>
            <ListIcon as={SiCorsair} />
            <span>Corsair Vengence DDR5-5200 32GB × 2</span>
          </ListItem>

          <ListItem display="flex" mb={2} alignItems="center">
            <Meta>
              <Text>GPU</Text>
            </Meta>
            <ListIcon as={SiNvidia} />
            <span>MSI GeForce RTX™ 3070 Ti SUPRIM X 8G</span>
          </ListItem>

          <ListItem display="flex" mb={2} alignItems="center">
            <Meta>
              <Text>Storage</Text>
            </Meta>
            <List>
              <ListItem display="flex" alignItems="center">
                <ListIcon as={SiSamsung} />
                <span>Samsung SSD 970 EVO Plus 500GB</span>
                <Tag size="sm" variant="outline" colorScheme="gray" mx={1}>
                  NVMe
                </Tag>
              </ListItem>
              <ListItem display="flex" alignItems="center">
                <ListIcon as={SiSamsung} />
                <span>Samsung SSD 980 1TB</span>
                <Tag size="sm" variant="outline" colorScheme="gray" mx={1}>
                  NVMe
                </Tag>
              </ListItem>
              <ListItem display="flex" alignItems="center">
                <span>Crucial SSD MX300 525GB</span>
                <Tag size="sm" variant="outline" colorScheme="gray" mx={1}>
                  SATA
                </Tag>
              </ListItem>
              <ListItem display="flex" alignItems="center">
                <span>KINGSTON SSD Q500 480GB</span>
                <Tag size="sm" variant="outline" colorScheme="gray" mx={1}>
                  SATA
                </Tag>
              </ListItem>
              <ListItem display="flex" alignItems="center">
                <span>WesternDigital WD40EZAZ 4TB</span>
                <Tag size="sm" variant="outline" colorScheme="gray" mx={1}>
                  SATA
                </Tag>
              </ListItem>
              <ListItem display="flex" alignItems="center">
                <span>WesternDigital WD40EZRZ 4TB</span>
                <Tag size="sm" variant="outline" colorScheme="gray" mx={1}>
                  SATA
                </Tag>
              </ListItem>
            </List>
          </ListItem>
          <ListItem display="flex" mb={2} alignItems="center">
            <Meta>
              <Text>Cooling</Text>
            </Meta>
            <span>NZXT Kraken X63 White</span>
          </ListItem>
          <ListItem display="flex" mb={2} alignItems="center">
            <Meta>
              <Text>PSU</Text>
            </Meta>
            <span>CoolerMaster V850 Gold V2 White Edition</span>
          </ListItem>
          <ListItem display="flex" mb={2} alignItems="center">
            <Meta>
              <Text>CASE</Text>
            </Meta>
            <span>NZXT H710i White</span>
          </ListItem>
        </List>
        <Divider />

        <Heading as="h4" fontSize={20} my={6} fontWeight="400">
          <Center>Storage & VM Server</Center>
        </Heading>

        <List my={6} ml={4}>
          <ListItem display="flex" mb={2} alignItems="center">
            <Meta>
              <Text>OS</Text>
            </Meta>
            <Tag size="sm" variant="outline" colorScheme="blue" mx={1}>
              <TagLeftIcon as={SiTruenas} />
              TrueNAS
            </Tag>
          </ListItem>

          <ListItem display="flex" mb={2} alignItems="center">
            <Meta>
              <Text>MB</Text>
            </Meta>
            <ListIcon as={SiAsus} />
            <span>ASUS ROG STRIX Z390-F GAMING</span>
          </ListItem>

          <ListItem display="flex" mb={2} alignItems="center">
            <Meta>
              <Text>CPU</Text>
            </Meta>
            <ListIcon as={SiIntel} />
            <span>Intel Core i7-9700K</span>
          </ListItem>

          <ListItem display="flex" mb={2} alignItems="center">
            <Meta>
              <Text>RAM</Text>
            </Meta>
            <ListIcon as={SiCorsair} />
            <span>Corsair Vengence DDR4-2666 16GB × 4</span>
          </ListItem>

          <ListItem display="flex" mb={2} alignItems="center">
            <Meta>
              <Text>GPU</Text>
            </Meta>
            <ListIcon as={SiNvidia} />
            <span>GeForce GT 1030 2GB</span>
          </ListItem>

          <ListItem display="flex" mb={2} alignItems="center">
            <Meta>
              <Text>Storage</Text>
            </Meta>
            <List>
              <ListItem display="flex" alignItems="center">
                <span>Sillicon Power SP512GBP34A60M28 512GB</span>
                <Tag size="sm" variant="outline" colorScheme="gray" mx={1}>
                  NVMe
                </Tag>
              </ListItem>
              <ListItem display="flex" alignItems="center">
                <span>WesternDigital WD1003FZEX 1TB</span>
                <Tag size="sm" variant="outline" colorScheme="gray" mx={1}>
                  SATA
                </Tag>
              </ListItem>
              <ListItem display="flex" alignItems="center">
                <span>WesternDigital WD80EAZZ 8TB x 2</span>
                <Tag size="sm" variant="outline" colorScheme="gray" mx={1}>
                  SATA
                </Tag>
              </ListItem>
            </List>
          </ListItem>
          <ListItem display="flex" mb={2} alignItems="center">
            <Meta>
              <Text>Cooling</Text>
            </Meta>
            <span>SCYTHE 無限五 Rev.C</span>
          </ListItem>
          <ListItem display="flex" mb={2} alignItems="center">
            <Meta>
              <Text>PSU</Text>
            </Meta>
            <ListIcon as={SiCorsair} />
            <span>Corsair RM750x White</span>
          </ListItem>
          <ListItem display="flex" mb={2} alignItems="center">
            <Meta>
              <Text>CASE</Text>
            </Meta>
            <span>CoolerMaster MasterBox Q500L</span>
          </ListItem>
        </List>

        <Divider />

        <Heading as="h4" fontSize={20} my={6} fontWeight="400">
          <Center>Laptop</Center>
        </Heading>

        <List my={6} ml={4}>
          <ListItem display="flex" mb={2} alignItems="center">
            <Meta>
              <Text>MODEL</Text>
            </Meta>
            <span>Apple MacBook Pro 14-inch (2021)</span>
          </ListItem>
          <ListItem display="flex" mb={2} alignItems="center">
            <Meta>
              <Text>OS</Text>
            </Meta>
            <Tag size="sm" variant="outline" colorScheme="cyan" mx={1}>
              <TagLeftIcon as={SiMacos} />
              macOS 14 Sonoma
            </Tag>
          </ListItem>
          <ListItem display="flex" mb={2} alignItems="center">
            <Meta>
              <Text>CPU</Text>
            </Meta>
            <ListIcon as={SiApple} />
            <span>Apple M1 Pro</span>
          </ListItem>
          <ListItem display="flex" mb={2} alignItems="center">
            <Meta>
              <Text>RAM</Text>
            </Meta>
            <span>16GB</span>
          </ListItem>
          <ListItem display="flex" mb={2} alignItems="center">
            <Meta>
              <Text>GPU</Text>
            </Meta>
            <ListIcon as={SiApple} />
            <span>Apple M1 Pro 10-Core</span>
          </ListItem>
          <ListItem display="flex" mb={2} alignItems="center">
            <Meta>
              <Text>STORAGE</Text>
            </Meta>
            <span>512GB</span>
          </ListItem>
        </List>

        <Divider />

        <Heading as="h4" fontSize={20} my={6} fontWeight="400">
          <Center>Kubernetes Worker</Center>
        </Heading>

        <List my={6} ml={4}>
          <ListItem display="flex" mb={2} alignItems="center">
            <Meta>
              <Text>MODEL</Text>
            </Meta>
            CHUWI CoreBox
          </ListItem>
          <ListItem display="flex" mb={2} alignItems="center">
            <Meta>
              <Text>OS</Text>
            </Meta>
            <Tag size="sm" variant="outline" colorScheme="red" mx={1}>
              <TagLeftIcon as={SiRedhat} />
              RedHat Enterprise Linux 9.2
            </Tag>
          </ListItem>
          <ListItem display="flex" mb={2} alignItems="center">
            <Meta>
              <Text>CPU</Text>
            </Meta>
            <ListIcon as={SiIntel} />
            <span>Intel Core i5-8259U</span>
          </ListItem>
          <ListItem display="flex" mb={2} alignItems="center">
            <Meta>
              <Text>RAM</Text>
            </Meta>
            <span>DDR4-2666 16GB</span>
          </ListItem>
          <ListItem display="flex" mb={2} alignItems="center">
            <Meta>
              <Text>GPU</Text>
            </Meta>
            <ListIcon as={SiIntel} />
            <span>Intel Iris Plus Graphics 655</span>
          </ListItem>
          <ListItem display="flex" mb={2} alignItems="center">
            <Meta>
              <Text>STORAGE</Text>
            </Meta>
            <List>
              <ListItem display="flex" alignItems="center">
                <span>M.2 SSD 500GB</span>
                <Tag size="sm" variant="outline" colorScheme="gray" mx={1}>
                  NVMe
                </Tag>
              </ListItem>
              <ListItem display="flex" alignItems="center">
                <ListIcon as={SiSamsung} />
                <span>Samsung SSD 860 EVO</span>
                <Tag size="sm" variant="outline" colorScheme="gray" mx={1}>
                  SATA
                </Tag>
              </ListItem>
            </List>
          </ListItem>
        </List>

        <Divider />

        <Heading as="h4" fontSize={20} my={6} fontWeight="400">
          <Center>Kubernetes Control-Plane</Center>
        </Heading>

        <List my={6} ml={4}>
          <ListItem display="flex" mb={2} alignItems="center">
            <Meta>
              <Text>MODEL</Text>
            </Meta>
            Raspberry Pi 4 Model-B 8GB
          </ListItem>
          <ListItem display="flex" mb={2} alignItems="center">
            <Meta>
              <Text>OS</Text>
            </Meta>
            <Tag size="sm" variant="outline" colorScheme="orange" mx={1}>
              <TagLeftIcon as={SiUbuntu} />
              Ubuntu Server 22.04
            </Tag>
          </ListItem>
          <ListItem display="flex" mb={2} alignItems="center">
            <Meta>
              <Text>SOC</Text>
            </Meta>
            <span>Broadcom BCM2711</span>
          </ListItem>
          <ListItem display="flex" mb={2} alignItems="center">
            <Meta>
              <Text>RAM</Text>
            </Meta>
            <span>LPDDR4-3200 8GB</span>
          </ListItem>
          <ListItem display="flex" mb={2} alignItems="center">
            <Meta>
              <Text>Storage</Text>
            </Meta>
            <List>
              <ListItem display="flex" alignItems="center">
                SanDisk microSDXC 128GB
              </ListItem>
            </List>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}
