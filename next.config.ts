import path from 'path'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
}

export default nextConfig
