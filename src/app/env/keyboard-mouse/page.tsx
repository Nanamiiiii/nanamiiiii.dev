import { Metadata, NextPage } from 'next'
import { Component } from './component'

export const metadata: Metadata = {
  title: 'Keyboard & Mouse',
  openGraph: {
    url: 'https://myuu.dev/env/keyboard-mouse',
  },
}

const KeyMouse: NextPage = () => {
  return <Component />
}

export default KeyMouse
