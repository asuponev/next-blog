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
}

module.exports = nextConfig
