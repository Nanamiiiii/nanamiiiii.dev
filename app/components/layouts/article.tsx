import { motion } from 'framer-motion'
import Head from 'next/head'
import { ContentsGridStyle } from '../contents-grid'
import CommonMeta from '../metadata'

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
}

const Layout = ({ children, title, desc, path }: { children: any, title?: string, desc?: string, path?: string }) => {
  const formedTitle =
    title == undefined || title == '' ? 'Myuu.dev' : `${title} - Myuu.dev`
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      <>
        <Head>
          <title>{formedTitle}</title>
        </Head>
        <CommonMeta title={formedTitle} description={desc == undefined ? 'Myuu\'s Website' : desc} url={path == undefined ? 'https://myuu.dev' : 'https://myuu.dev' + path} imageUrl='https://myuu.dev/profile_icon.webp' type='website' />
        {children}
        <ContentsGridStyle />
      </>
    </motion.article>
  )
}

export default Layout
