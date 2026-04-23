/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/restaurant',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
