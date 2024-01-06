import { Metadata, NextPage } from 'next'
import { Component } from './component'

export const metadata: Metadata = {
  title: 'Mobile & Others',
  openGraph: {
    url: 'https://myuu.dev/env/mobile',
  },
}

const Mobile: NextPage = () => {
  return <Component />
}

export default Mobile
