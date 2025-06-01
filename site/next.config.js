/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Norosm Technologies',
    description: 'The official place for things.',
    icon: '/img/logo.svg',
    listUrl: 'https://sepzilla.github.io/basic',
    contactUrl: 'https://kasmnet.com/support',
  },
  reactStrictMode: true,
  basePath: '/basic/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
