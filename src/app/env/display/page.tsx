import { Metadata, NextPage } from 'next'
import { Component } from './component'

export const metadata: Metadata = {
  title: 'Display',
  openGraph: {
    url: 'https://myuu.dev/env/display',
  },
}

const Display: NextPage = () => {
  return <Component />
}

export default Display
