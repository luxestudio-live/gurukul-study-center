/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/gurukul-study-center',
  assetPrefix: '/gurukul-study-center',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
