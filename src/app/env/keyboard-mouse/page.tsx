import { Metadata, NextPage, ResolvingMetadata } from 'next'
import { Component } from './component'

export const generateMetadata = async (
  props: any,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  return {
    title: 'Keyboard & Mouse',
    openGraph: {
      ...(await parent).openGraph,
      url: 'https://myuu.dev/env/keyboard-mouse',
    },
  }
}

const KeyMouse: NextPage = () => {
  return <Component />
}

export default KeyMouse
