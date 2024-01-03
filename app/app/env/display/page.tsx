import { Metadata, NextPage } from 'next'
import { Component } from './component'

export const metadata: Metadata = {
  title: 'Display',
}

const Display: NextPage = () => {
  return <Component />
}

export default Display
