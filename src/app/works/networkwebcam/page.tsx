import { Metadata, NextPage } from 'next'
import Layout from '../../../components/layouts/article'
import { Component } from './component'

export const metadata: Metadata = {
  title: 'NetworkWebCamera',
  description:
    'Applications to use Android Smartphone as WebCamera on Multi-Platform Computer.',
  openGraph: {
    url: 'https://myuu.dev/works/networkwebcam',
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
