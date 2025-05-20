'use client'

import { APIProvider } from '@vis.gl/react-google-maps'
import { ReactNode } from 'react'

export const GoogleMapProvider = ({ children }: { children: ReactNode }) => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''

  return <APIProvider apiKey={apiKey}>{children}</APIProvider>
}
