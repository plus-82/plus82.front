/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin(
  './src/shared/config/internationalization/request.ts',
)

const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '5mb',
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd1zl1w0yhwh5x4.cloudfront.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/v1/:path*',
        destination: `https://back.plus82.co/api/v1/:path*`,
      },
      {
        source: '/cdn/:path*',
        destination: `${process.env.NEXT_PUBLIC_CDN_URL}/:path*`,
      },
    ]
  },
}

export default withNextIntl(nextConfig)
