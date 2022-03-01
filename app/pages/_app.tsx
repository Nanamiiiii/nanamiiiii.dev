import { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import Layout from "../components/layouts/main"

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <ChakraProvider>
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
