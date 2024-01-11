import type { Metadata, NextPage, ResolvingMetadata } from 'next'
import Layout from '../../components/layouts/article'
import { Component } from './component'

export const generateMetadata = async (
  props: any,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  return {
    title: 'Skills',
    description: "Myuu's Skills",
    openGraph: {
      ...(await parent).openGraph,
      url: 'https://myuu.dev/skill',
    },
  }
}

const Skill: NextPage = () => {
  return (
    <Layout>
      <Component />
    </Layout>
  )
}

export default Skill
