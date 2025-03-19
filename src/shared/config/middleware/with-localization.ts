import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

import { MiddlewareFactory } from './type'
import { fallbackLng, locales } from '../localization/setting'

export const withLocalization: MiddlewareFactory = next => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    const { pathname } = request.nextUrl

    // 기본 언어 리다이렉션
    if (
      pathname.startsWith(`/${fallbackLng}/`) ||
      pathname === `/${fallbackLng}`
    ) {
      return NextResponse.redirect(
        new URL(
          pathname.replace(
            `/${fallbackLng}`,
            pathname === `/${fallbackLng}` ? '/' : '',
          ),
          request.url,
        ),
      )
    }

    const pathnameIsMissingLocale = locales.every(
      locale =>
        !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
    )

    // 언어 코드가 없는 경우 기본 언어로 리라이트
    if (pathnameIsMissingLocale) {
      return NextResponse.rewrite(
        new URL(`/${fallbackLng}${pathname}`, request.url),
      )
    }

    // 다른 미들웨어로 계속 진행
    return next(request, _next)
  }
}
