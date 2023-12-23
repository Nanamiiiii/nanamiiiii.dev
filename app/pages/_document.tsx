import { ColorModeScript } from '@chakra-ui/react'
import { SpeedInsights } from "@vercel/speed-insights/next"
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../lib/theme'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link rel="stylesheet" href="https://use.typekit.net/uhz5aqh.css" />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
          <SpeedInsights />
        </body>
      </Html>
    )
  }
}
