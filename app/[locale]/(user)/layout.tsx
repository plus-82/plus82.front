import type { Metadata } from 'next'
import { ReactNode } from 'react'

import { AppProviders } from 'app/providers'
import { SpoqaHanSansNeo } from 'app/styles'
import { LocaleType } from 'shared/config/localization/setting'
import { cn } from 'shared/lib'
import { GNB } from 'shared/ui'

import '../../globals.css'

export const metadata: Metadata = {
  title: 'Plus82',
  description: '',
}

const RootLayout = ({
  params: { locale },
  children,
}: {
  params: { locale: LocaleType }
  children: ReactNode
}) => {
  return (
    <html lang={locale} className={SpoqaHanSansNeo.variable}>
      <body
        className={cn(
          'font-spoqa-han-sans-neo',
          'flex min-h-dvh w-full flex-col',
        )}
      >
        <AppProviders>
          <GNB />
          {children}
        </AppProviders>
      </body>
    </html>
  )
}

export default RootLayout
