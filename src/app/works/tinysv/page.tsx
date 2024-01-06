import { Metadata, NextPage } from 'next'
import Layout from '../../../components/layouts/article'
import { Component } from './component'

export const metadata: Metadata = {
  title: 'tinysv',
  description: 'A minimal & extensive web server application for Linux',
  openGraph: {
    url: 'https://myuu.dev/works/tinysv',
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
