// @ts-check
import withPlaiceholder from '@plaiceholder/next'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    pagenation: 20,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "myuu-dev.assets.newt.so",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
      },
    ],
  }
}

export default withPlaiceholder(nextConfig)
