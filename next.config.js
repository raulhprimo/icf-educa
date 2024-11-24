/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/icf-educa',
  assetPrefix: '/icf-educa'
}

module.exports = nextConfig 