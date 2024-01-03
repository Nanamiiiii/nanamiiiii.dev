import type { Metadata, NextPage } from 'next'
import Layout from '../../components/layouts/article'
import { Component } from './component'

export const metadata: Metadata = {
  title: 'Skills',
  description: "Myuu's Skills",
}

const Skill: NextPage = () => {
  return (
    <Layout>
      <Component />
    </Layout>
  )
}

export default Skill
