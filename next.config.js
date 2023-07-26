/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['./src'],
    prependData: `
      @import "@/styles/variables.scss";
      @import "@/styles/breakpoints.scss";
    `,
  },
  images: {
    domains: ['cloud.codesupply.co'],
    formats: ['image/avif', 'image/webp']
  }
}

module.exports = nextConfig
