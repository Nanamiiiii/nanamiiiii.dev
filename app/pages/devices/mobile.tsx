import { NextPage } from "next"
import { Container, Heading, Center, UnorderedList, ListItem, Tag, Divider } from "@chakra-ui/react"
import { Title, DevPort } from "../../components/device"
import Layout from "../../components/layouts/article"
import P from '../../components/paragraph'

const Mobile: NextPage = () => {
    return (
        <Layout title="Mobile & Others">
            <Container>
                <Title>
                    Mobile & Others
                </Title>
                <Heading as="h4" fontSize={18} my={6}>
                    <Center>Mobile</Center>
                </Heading>

                <DevPort src="/images/devices/mobile.png" alt="mobile" />

                <UnorderedList spacing={2} my={6}>
                    <ListItem display="flex" alignItems="center">
                        Sony Xperia 1 III XQ-BC42
                        &nbsp;
                        <Tag size='sm'>SIM Free</Tag>
                        &nbsp;
                        <Tag size='sm'>2021</Tag> 
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                        Galaxy A7 SM-A750C
                        &nbsp;
                        <Tag size='sm'>Rakuten</Tag>
                        &nbsp;
                        <Tag size='sm'>2020</Tag> 
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                        Sony Xperia XZ3 SO-01L
                        &nbsp;
                        <Tag size='sm'>docomo</Tag>
                        &nbsp;
                        <Tag size='sm'>2019</Tag> 
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                        Sony Xperia Z3 SO-01G
                        &nbsp;
                        <Tag size='sm'>docomo</Tag>
                        &nbsp;
                        <Tag size='sm'>2015</Tag> 
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                        Sony Xperia AX SO-01E
                        &nbsp;
                        <Tag size='sm'>docomo</Tag>
                        &nbsp;
                        <Tag size='sm'>2013</Tag> 
                    </ListItem>
                </UnorderedList>

                <Center><Tag size="lg" variant='solid' colorScheme="pink">Xperia is Awesome</Tag></Center>

                <Divider mt={6} />

                <Heading as="h4" fontSize={18} my={6}>
                    <Center>Audio</Center>
                </Heading>

                <DevPort src="/images/devices/audio.png" alt="audio" />

                <UnorderedList spacing={2} my={6}>
                    <ListItem display="flex" alignItems="center">
                        Sony WF-1000XM4
                        &nbsp;
                        <Tag size='sm'>Wireless</Tag>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                        PowerBeats White
                        &nbsp;
                        <Tag size='sm'>Wireless</Tag>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                        Final E3000
                        &nbsp;
                        <Tag size='sm'>Wired</Tag>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                        Razer Kraken Kitty Edition
                        &nbsp;
                        <Tag size='sm'>Wired</Tag>
                    </ListItem>
                </UnorderedList>
                <Divider />

                <Heading as="h4" fontSize={18} my={6}>
                    <Center>Tablet</Center>
                </Heading>

                <UnorderedList spacing={2} my={6}>
                    <ListItem display="flex" alignItems="center">
                        Apple iPad Air 4th Gen
                        &nbsp;
                        <Tag size='sm'>64GB</Tag>
                        &nbsp;
                        <Tag size='sm'>w/ Apple Pencil 2nd Gen</Tag>
                        &nbsp;
                        <Tag size='sm'>2021</Tag>
                    </ListItem>
                    <ListItem display="flex" alignItems="center">
                        Apple iPad 7th Gen
                        &nbsp;
                        <Tag size='sm'>32GB</Tag>
                        &nbsp;
                        <Tag size='sm'>w/ Apple Pencil 1st Gen</Tag>
                        &nbsp;
                        <Tag size='sm'>2019</Tag>
                    </ListItem>
                </UnorderedList>
            </Container>
        </Layout>
    )
}

export default Mobile