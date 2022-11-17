import { NextPage } from 'next'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { Container, Heading, Center, List, ListIcon, Tag, TagLeftIcon, Text, ListItem, Divider } from '@chakra-ui/react'
import { Title, DevPort, Meta } from '../../components/device'
import { SiUbuntu, SiNvidia, SiKubuntu, SiSamsung, SiCorsair, SiIntel, SiArchlinux, SiWindows, SiAsus, SiRedhat } from 'react-icons/si'

const Pc: NextPage = () => {
    return (
        <Layout title="Computer">
            <Container>
                <Title>
                    Computers
                </Title>

                <Heading as="h4" fontSize={18} my={6} >
                    <Center>Windows Workstation</Center>
                </Heading>

                <DevPort src="/images/devices/pc.png" alt="mainpc" />

                <List my={6} ml={4}>
                    <ListItem display="flex" mb={2} alignItems="center">
                        <Meta><Text>OS</Text></Meta>
                        <Tag size='sm' variant='outline' colorScheme='cyan' mx={1}>
                          <TagLeftIcon as={SiWindows} />
                          Windows11 Pro
                        </Tag>
                    </ListItem>

                    <ListItem display="flex" mb={2} alignItems="center">
                        <Meta><Text>MB</Text></Meta>
                        <span>MSI MPG Z690 FORCE WIFI</span>
                    </ListItem>

                    <ListItem display="flex" mb={2} alignItems="center">
                        <Meta><Text>CPU</Text></Meta>
                        <ListIcon as={SiIntel} />
                        <span>Intel Core i7-12700K</span>
                    </ListItem>

                    <ListItem display="flex" mb={2} alignItems="center">
                        <Meta><Text>RAM</Text></Meta>
                        <ListIcon as={SiCorsair} />
                        <span>Corsair Vengence DDR5-5200 32GB × 2</span>       
                    </ListItem>

                    <ListItem display="flex" mb={2} alignItems="center">
                        <Meta><Text>GPU</Text></Meta>
                        <ListIcon as={SiNvidia} />
                        <span>MSI GeForce RTX™ 3070 Ti SUPRIM X 8G</span>
                    </ListItem>

                    <ListItem display="flex" mb={2} alignItems="center">
                        <Meta><Text>Storage</Text></Meta>
                        <List>
                            <ListItem display="flex" alignItems="center">
                                <ListIcon as={SiSamsung} />
                                <span>Samsung SSD 970 EVO Plus 500GB</span>
                                <Tag size='sm' variant='outline' colorScheme='gray' mx={1}>
                                    NVMe
                                </Tag>
                            </ListItem>
                            <ListItem display="flex" alignItems="center">
                                <ListIcon as={SiSamsung} />
                                <span>Samsung SSD 980 1TB</span>
                                <Tag size='sm' variant='outline' colorScheme='gray' mx={1}>
                                    NVMe
                                </Tag>
                            </ListItem>
                            <ListItem display="flex" alignItems="center">
                                <span>Crucial SSD MX300 525GB</span>
                                <Tag size='sm' variant='outline' colorScheme='gray' mx={1}>
                                    SATA
                                </Tag>
                            </ListItem>
                            <ListItem display="flex" alignItems="center">
                                <span>WesternDigital WD40EZAZ 4TB</span>
                                <Tag size='sm' variant='outline' colorScheme='gray' mx={1}>
                                    SATA
                                </Tag>
                            </ListItem>
                        </List>
                    </ListItem>
                    <ListItem display="flex" mb={2} alignItems="center">
                        <Meta><Text>Cooling</Text></Meta>
                        <span>NZXT Kraken X63 White</span>
                    </ListItem>
                    <ListItem display="flex" mb={2} alignItems="center">
                        <Meta><Text>PSU</Text></Meta>
                        <span>CoolerMaster V850 Gold V2 White Edition</span>
                    </ListItem>
                    <ListItem display="flex" mb={2} alignItems="center">
                        <Meta><Text>CASE</Text></Meta>
                        <span>NZXT H710i White</span>
                    </ListItem>
                </List>
                <Divider />

                <Heading as="h4" fontSize={18} my={6} >
                    <Center>Linux Workstation</Center>
                </Heading>

                <List my={6} ml={4}>
                    <ListItem display="flex" mb={2} alignItems="center">
                        <Meta><Text>OS</Text></Meta>
                        <Tag size='sm' variant='outline' colorScheme='blue' mx={1}>
                          <TagLeftIcon as={SiArchlinux} />
                          ArchLinux
                        </Tag>
                    </ListItem>

                    <ListItem display="flex" mb={2} alignItems="center">
                        <Meta><Text>MB</Text></Meta>
                        <ListIcon as={SiAsus} />
                        <span>ASUS ROG STRIX Z390-F GAMING</span>
                    </ListItem>

                    <ListItem display="flex" mb={2} alignItems="center">
                        <Meta><Text>CPU</Text></Meta>
                        <ListIcon as={SiIntel} />
                        <span>Intel Core i7-9700K</span>
                    </ListItem>

                    <ListItem display="flex" mb={2} alignItems="center">
                        <Meta><Text>RAM</Text></Meta>
                        <ListIcon as={SiCorsair} />
                        <span>Corsair Vengence DDR4-2666 16GB × 4</span>       
                    </ListItem>

                    <ListItem display="flex" mb={2} alignItems="center">
                        <Meta><Text>GPU</Text></Meta>
                        <ListIcon as={SiNvidia} />
                        <span>GeForce GT 1030 2GB</span>
                    </ListItem>

                    <ListItem display="flex" mb={2} alignItems="center">
                        <Meta><Text>Storage</Text></Meta>
                        <List>
                            <ListItem display="flex" alignItems="center">
                                <span>Crucial SSD P2 500GB</span>
                                <Tag size='sm' variant='outline' colorScheme='gray' mx={1}>
                                    NVMe
                                </Tag>
                            </ListItem>
                            <ListItem display="flex" alignItems="center">
                                <span>KINGSTON SSD Q500 480GB</span>
                                <Tag size='sm' variant='outline' colorScheme='gray' mx={1}>
                                    SATA
                                </Tag>
                            </ListItem>
                            <ListItem display="flex" alignItems="center">
                                <span>WesternDigital WD1003FZEX 1TB</span>
                                <Tag size='sm' variant='outline' colorScheme='gray' mx={1}>
                                    SATA
                                </Tag>
                            </ListItem>
                        </List>
                    </ListItem>
                    <ListItem display="flex" mb={2} alignItems="center">
                        <Meta><Text>Cooling</Text></Meta>
                        <span>SCYTHE 無限五 Rev.C</span>
                    </ListItem>
                    <ListItem display="flex" mb={2} alignItems="center">
                        <Meta><Text>PSU</Text></Meta>
                        <ListIcon as={SiCorsair} />
                        <span>Corsair RM750x White</span>
                    </ListItem>
                    <ListItem display="flex" mb={2} alignItems="center">
                        <Meta><Text>CASE</Text></Meta>
                        <span>CoolerMaster MasterBox Q500L</span>
                    </ListItem>
                </List>

                <Divider />

                <Heading as="h4" fontSize={18} my={6} >
                    <Center>Laptop</Center>
                </Heading>

                <List my={6} ml={4}>
                    <ListItem display="flex" mb={2} alignItems="center">
                        <Meta><Text>MODEL</Text></Meta>
                        <span>MSI P65-8RE-015jp</span>
                    </ListItem>
                    <ListItem display="flex" mb={2} alignItems="center">
                        <Meta><Text>OS</Text></Meta>
                        <Tag size='sm' variant='outline' colorScheme='cyan' mx={1}>
                          <TagLeftIcon as={SiWindows} />
                          Windows11 Pro
                        </Tag>
                        <Tag size='sm' variant='outline' colorScheme='teal' mx={1}>
                          <TagLeftIcon as={SiKubuntu} />
                          Kubuntu 22.04
                        </Tag>
                    </ListItem>
                    <ListItem display="flex" mb={2} alignItems="center">
                        <Meta><Text>CPU</Text></Meta>
                        <ListIcon as={SiIntel} />
                        <span>Intel Core i7-8750H</span>
                    </ListItem>
                    <ListItem display="flex" mb={2} alignItems="center">
                        <Meta><Text>RAM</Text></Meta>
                        <span>DDR4-2666 8GB × 2</span>
                    </ListItem>
                    <ListItem display="flex" mb={2} alignItems="center">
                        <Meta><Text>GPU</Text></Meta>
                        <ListIcon as={SiNvidia} />
                        <span>NVIDIA GeForce GTX 1060 Max-Q 6GB</span>
                    </ListItem>
                    <ListItem display="flex" mb={2} alignItems="center">
                        <Meta><Text>STORAGE</Text></Meta>
                        <span>WesternDigital SN520 512GB</span>
                        <Tag size='sm' variant='outline' colorScheme='gray' mx={1}>
                            NVMe
                        </Tag>
                    </ListItem>
                </List>

                <Divider />

                <Heading as="h4" fontSize={18} my={6}>
                    <Center>Kubernetes nodes host</Center>
                </Heading>

                <List my={6} ml={4}>
                    <ListItem display="flex" mb={2} alignItems="center">
                        <Meta><Text>MODEL</Text></Meta>
                        CHUWI CoreBox
                    </ListItem>
                    <ListItem display="flex" mb={2} alignItems="center">
                        <Meta><Text>OS</Text></Meta>
                        <Tag size='sm' variant='outline' colorScheme='red' mx={1}>
                          <TagLeftIcon as={SiRedhat} />
                          RedHat Enterprise Linux 9.0
                        </Tag>
                    </ListItem>
                    <ListItem display="flex" mb={2} alignItems="center">
                        <Meta><Text>CPU</Text></Meta>
                        <ListIcon as={SiIntel} />
                        <span>Intel Core i5-8259U</span>
                    </ListItem>
                    <ListItem display="flex" mb={2} alignItems="center">
                        <Meta><Text>RAM</Text></Meta>
                        <span>DDR4-2666 16GB</span>
                    </ListItem>
                    <ListItem display="flex" mb={2} alignItems="center">
                        <Meta><Text>GPU</Text></Meta>
                        <ListIcon as={SiIntel} />
                        <span>Intel Iris Plus Graphics 655</span>
                    </ListItem>
                    <ListItem display="flex" mb={2} alignItems="center">
                        <Meta><Text>STORAGE</Text></Meta>
                        <List>
                            <ListItem display="flex" alignItems="center">
                                <span>M.2 SSD 500GB</span>
                                <Tag size='sm' variant='outline' colorScheme='gray' mx={1}>
                                    NVMe
                                </Tag>
                            </ListItem>
                            <ListItem display="flex" alignItems="center">
                                <ListIcon as={SiSamsung} />
                                <span>Samsung SSD 860 EVO</span>
                                <Tag size='sm' variant='outline' colorScheme='gray' mx={1}>
                                    SATA
                                </Tag>
                            </ListItem>
                        </List>
                    </ListItem> 
                    <ListItem display="flex" mb={2} alignItems="center">
                        <Meta><Text>KVM Guest</Text></Meta>
                        <Tag size='sm' variant='outline' colorScheme='orange' mx={1}>
                          <TagLeftIcon as={SiUbuntu} />
                          Ubuntu Server 22.04
                        </Tag>
                    </ListItem>
                </List>

                <Divider />
                
                <Heading as="h4" fontSize={18} my={6}>
                    <Center>Kuberbetes Control-Plane</Center>
                </Heading>

                <List my={6} ml={4}>
                    <ListItem display="flex" mb={2} alignItems="center">
                        <Meta><Text>MODEL</Text></Meta>
                        Raspberry Pi 4 Model-B 8GB
                    </ListItem>
                    <ListItem display="flex" mb={2} alignItems="center">
                        <Meta><Text>OS</Text></Meta>
                        <Tag size='sm' variant='outline' colorScheme='orange' mx={1}>
                          <TagLeftIcon as={SiUbuntu} />
                          Ubuntu Server 22.04
                        </Tag>
                    </ListItem>
                    <ListItem display="flex" mb={2} alignItems="center">
                        <Meta><Text>SOC</Text></Meta>
                        <span>Broadcom BCM2711</span>
                    </ListItem>
                    <ListItem display="flex" mb={2} alignItems="center">
                        <Meta><Text>RAM</Text></Meta>
                        <span>LPDDR4-3200 8GB</span>
                    </ListItem>
                    <ListItem display="flex" mb={2} alignItems="center">
                        <Meta><Text>Storage</Text></Meta>
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

export default Pc

