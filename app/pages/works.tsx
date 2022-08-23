import type { NextPage } from 'next'
import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkContents, ContentsGrid } from '../components/contents-grid'
import Layout from '../components/layouts/article'

import tinysvThumb from '../public/images/works/tinysv_thumb.png'
import nwcThumb from '../public/images/works/networkwebcamera_thumb.png'
import voidThumb from '../public/images/works/void.png'
import mirageThumb from '../public/images/works/mirage.png'
import wfesThumb from '../public/images/works/wasefes_cm_2021.png'
import helloThumb from '../public/images/works/hello.png'
import amberThumb from '../public/images/works/amberscash.png'
import teatimeThumb from '../public/images/works/teatime.png'
import babyThumb from '../public/images/works/baby.png'
import birdolThumb from '../public/images/works/birdol.png'

const Works: NextPage = () => {
  return (
    <Layout title="">
      <Container>
        <Heading as="h3" fontSize={25} mb={6}>
          Works
        </Heading>
        <Heading as="h4" fontSize={20} mb={4}>
          Applications
        </Heading>

        <SimpleGrid columns={[1, 2, 2]} gap={6} mb={6}>
          <Section delay="0.1">
            <WorkContents id="tinysv" title="tinysv" thumbnail={tinysvThumb}>
              Minimal extensive server application
            </WorkContents>
          </Section>
          <Section delay="0.1">
            <WorkContents id="networkwebcam" title="NetworkWebCamera" thumbnail={nwcThumb}>
              Client and Server application to use Android Smartphone as WebCamera
            </WorkContents>
          </Section>
        </SimpleGrid>

        <Heading as="h4" fontSize={20} mb={4}>
          Participate
        </Heading>
        
        <SimpleGrid columns={[1, 2, 2]} gap={6} mb={6}>
          <Section delay="0.15">
            <WorkContents id="birdol" title="Birdol March" thumbnail={birdolThumb}>
              Social Game Project
            </WorkContents>
          </Section>
        </SimpleGrid>

        <Heading as="h4" fontSize={20} mb={4}>
          Movies
        </Heading>

        <SimpleGrid columns={[1, 2, 2]} gap={6} mb={6}>
          <Section delay="0.2">
            <ContentsGrid href="https://vimeo.com/657539057" title="mirage" thumbnail={mirageThumb}>
              2021.11 / Vocaloid MV
            </ContentsGrid>
          </Section>
          <Section delay="0.2">
            <ContentsGrid href="https://vimeo.com/643014253" title="void" thumbnail={voidThumb}>
              2021.11 / Vocaloid MV
            </ContentsGrid>
          </Section>
          <Section delay="0.2">
            <ContentsGrid href="https://vimeo.com/657528799" title="MISW Waseda-Sai 2021" thumbnail={wfesThumb}>
              2021.10 / MotionGraphics
            </ContentsGrid>
          </Section>
          <Section delay="0.2">
            <ContentsGrid href="https://vimeo.com/573561720" title="Hello" thumbnail={helloThumb}>
              2021.7 / MotionGraphics
            </ContentsGrid>
          </Section>
          <Section delay="0.2">
            <ContentsGrid href="https://nico.ms/sm37790855" title="AmberScash" thumbnail={amberThumb}>
              2020.11 / Vocaloid MV
            </ContentsGrid>
          </Section>
          <Section delay="0.2">
            <ContentsGrid href="https://youtu.be/iL3Px_BIiEc" title="Teatime" thumbnail={teatimeThumb}>
              2019.12 / AMV
            </ContentsGrid>
          </Section>
          <Section delay="0.2">
            <ContentsGrid href="https://nico.ms/sm35900824" title="baby" thumbnail={babyThumb}>
              2019.11 / Vocaloid MV
            </ContentsGrid>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
