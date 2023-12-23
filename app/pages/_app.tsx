import { ChakraProvider } from '@chakra-ui/react'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { AnimatePresence } from 'framer-motion'
import { AppProps } from 'next/app'
import Layout from '../components/layouts/main'
import theme from '../lib/theme'

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Layout router={router}>
          <AnimatePresence mode="wait" initial={true}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </ChakraProvider>
      <SpeedInsights />
      <Analytics />
    </>
  )
}

export default App
