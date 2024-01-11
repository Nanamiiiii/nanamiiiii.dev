import { Metadata, NextPage, ResolvingMetadata } from 'next'
import Layout from '../../../components/layouts/article'
import { Component } from './component'

export const generateMetadata = async (
  props: any,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  return {
    title: 'tinysv',
    description: 'A minimal & extensive web server application for Linux',
    openGraph: {
      ...(await parent).openGraph,
      url: 'https://myuu.dev/works/tinysv',
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
