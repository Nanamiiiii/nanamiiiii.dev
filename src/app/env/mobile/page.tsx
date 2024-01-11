import { Metadata, NextPage, ResolvingMetadata } from 'next'
import { Component } from './component'

export const generateMetadata = async (
  props: any,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  return {
    title: 'Mobile & Others',
    openGraph: {
      ...(await parent).openGraph,
      url: 'https://myuu.dev/env/mobile',
    },
  }
}

const Mobile: NextPage = () => {
  return <Component />
}

export default Mobile
