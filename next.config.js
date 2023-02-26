/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  build: {
    transpile: ['gsap'],
},
}

module.exports = nextConfig
