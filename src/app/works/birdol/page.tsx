import { Metadata, NextPage, ResolvingMetadata } from 'next'
import Layout from '../../../components/layouts/article'
import { Component } from './component'

export const generateMetadata = async (
  props: any,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  return {
    title: 'Birdol',
    description: 'A game of bringing up bishoujo based on wild birds',
    openGraph: {
      ...(await parent).openGraph,
      url: 'https://myuu.dev/works/birdol',
    },
  }
}

const Work: NextPage = () => {
  return (
    <Layout>
      <Component />
    </Layout>
  )
}

export default Work
