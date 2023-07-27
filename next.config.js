/** @type {import('next').NextConfig} */
const nextConfig = {}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
})

module.exports = nextConfig


  
module.exports = withBundleAnalyzer({
    images: {
        // domains: ...,
        path: `${basePath}/_next/image`,
      },
    env: {
        NEXT_PUBLIC_ENV: 'PRODUCTION', //your next configs goes here
    },
    
})
