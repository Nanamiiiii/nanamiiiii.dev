// @ts-check
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    pagenation: 20,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'myuu-dev.assets.newt.so',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
      },
    ],
  },
  redirects: async () => {
    return [
      {
        source: '/blogs',
        destination: 'https://notes.myuu.dev',
        permanent: true,
      }
    ]
  }
}

export default nextConfig
