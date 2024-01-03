import { Metadata, NextPage } from 'next'
import Layout from '../../../components/layouts/article'
import { Component } from './component'

export const metadata: Metadata = {
  title: 'Birdol',
  description: 'A game of bringing up bishoujo based on wild birds',
}

const Work: NextPage = () => {
  return (
    <Layout>
      <Component />
    </Layout>
  )
}

export default Work
