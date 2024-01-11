import { Metadata, NextPage, ResolvingMetadata } from 'next'
import { Component } from './component'

export const generateMetadata = async (
  props: any,
  parent: ResolvingMetadata,
): Promise<Metadata> => {
  return {
    title: 'dotfiles',
    openGraph: {
      ...(await parent).openGraph,
      url: 'https://myuu.dev/env/dotfiles',
    },
  }
}

const Dotfiles: NextPage = () => {
  return <Component />
}

export default Dotfiles
