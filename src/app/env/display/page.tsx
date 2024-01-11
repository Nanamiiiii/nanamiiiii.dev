import { Metadata, NextPage, ResolvingMetadata } from 'next'
import { Component } from './component'

export const generateMetadata = async (
  props: any,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  return {
    title: 'Display',
    openGraph: {
      ...(await parent).openGraph,
      url: 'https://myuu.dev/env/display',
    },
  }
}

const Display: NextPage = () => {
  return <Component />
}

export default Display
