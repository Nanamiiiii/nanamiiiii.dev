'use client'
import { ChakraProvider } from '@chakra-ui/react'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Main from '../components/layouts/main'
import theme from '../lib/theme'

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const routerPath = usePathname() || ''
  return (
    <>
      <ChakraProvider theme={theme}>
        <Main router={routerPath}>
          <AnimatePresence mode="wait" initial={true}>
            {children}
          </AnimatePresence>
        </Main>
      </ChakraProvider>
      <SpeedInsights />
      <Analytics />
    </>
  )
}
