import { Metadata, NextPage, ResolvingMetadata } from 'next'
import { Component } from './component'

export const generateMetadata = async (
  props: any,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  return {
    title: 'Computers',
    openGraph: {
      ...(await parent).openGraph,
      url: 'https://myuu.dev/env/pc',
    },
  }
}

const Pc: NextPage = () => {
  return <Component />
}

export default Pc
