import { ReactNode } from 'react'

import { MSWProvider } from './msw-provider'
import { QueryProvider } from './query-provider'

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <MSWProvider>
      <QueryProvider>{children}</QueryProvider>
    </MSWProvider>
  )
}
