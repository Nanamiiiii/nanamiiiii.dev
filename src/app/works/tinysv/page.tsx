import { Metadata, NextPage } from 'next'
import Layout from '../../../components/layouts/article'
import { Component } from './component'

export const metadata: Metadata = {
  title: 'tinysv',
  description: 'A minimal & extensive web server application for Linux',
}

const Work: NextPage = () => {
  return (
    <Layout>
      <Component />
    </Layout>
  )
}

export default Work
