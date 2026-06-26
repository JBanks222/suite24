import type {NextConfig} from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL('https://cdn.sanity.io/**'),
      {protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**'},
    ],
  },
}

export default nextConfig
