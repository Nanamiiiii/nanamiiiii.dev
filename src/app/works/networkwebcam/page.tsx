import { Metadata, NextPage, ResolvingMetadata } from 'next'
import Layout from '../../../components/layouts/article'
import { Component } from './component'

export const generateMetadata = async (
  props: any,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  return {
    title: 'NetworkWebCamera',
    description:
      'Applications to use Android Smartphone as WebCamera on Multi-Platform Computer.',
    openGraph: {
      ...(await parent).openGraph,
      url: 'https://myuu.dev/works/networkwebcam',
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
