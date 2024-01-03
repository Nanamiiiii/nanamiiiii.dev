import { Metadata, NextPage } from 'next'
import { Component } from './component'

export const metadata: Metadata = {
  title: 'Computer',
}

const Pc: NextPage = () => {
  return <Component />
}

export default Pc
