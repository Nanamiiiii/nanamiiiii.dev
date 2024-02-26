declare module 'next/config' {
  type ConfigTypes = () => {
    publicRuntimeConfig: {
      pagenation: number
    }
  }

  declare const getConfig: ConfigTypes

  export default getConfig
}
