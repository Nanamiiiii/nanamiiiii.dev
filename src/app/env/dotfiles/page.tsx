import { Metadata, NextPage } from 'next'
import { Component } from './component'

export const metadata: Metadata = {
  title: 'dotfiles',
}

const Dotfiles: NextPage = () => {
  return <Component />
}

export default Dotfiles
