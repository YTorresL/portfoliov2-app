/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
}

module.exports = nextConfig
