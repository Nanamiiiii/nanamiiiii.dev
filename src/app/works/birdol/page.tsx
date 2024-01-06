import { Metadata, NextPage } from 'next'
import Layout from '../../../components/layouts/article'
import { Component } from './component'

export const metadata: Metadata = {
  title: 'Birdol',
  description: 'A game of bringing up bishoujo based on wild birds',
  openGraph: {
    url: 'https://myuu.dev/works/birdol',
  },
}

const Work: NextPage = () => {
  return (
    <Layout>
      <Component />
    </Layout>
  )
}

export default Work
