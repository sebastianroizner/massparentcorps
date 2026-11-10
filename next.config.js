/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{ source: '/for-agencies', destination: '/for-organizations', permanent: true }]
  },
}
module.exports = nextConfig
