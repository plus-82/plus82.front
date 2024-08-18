import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { ReactNode } from 'react'

import './globals.css'

const spoqaHanSansNeo = localFont({
  src: [
    {
      path: '../public/fonts/SpoqaHanSansNeo-Thin.woff2',
      weight: '100',
    },
    {
      path: '../public/fonts/SpoqaHanSansNeo-Light.woff2',
      weight: '300',
    },
    {
      path: '../public/fonts/SpoqaHanSansNeo-Regular.woff2',
      weight: '400',
    },
    {
      path: '../public/fonts/SpoqaHanSansNeo-Medium.woff2',
      weight: '500',
    },
    {
      path: '../public/fonts/SpoqaHanSansNeo-Bold.woff2',
      weight: '700',
    },
  ],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Plus82',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={spoqaHanSansNeo.className}>{children}</body>
    </html>
  )
}
