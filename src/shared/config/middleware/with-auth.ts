import { NextRequest, NextResponse, NextFetchEvent } from 'next/server'
import { match } from 'path-to-regexp'

import { auth } from 'auth'

import { MiddlewareFactory } from './type'
import { locales, fallbackLng, type LocaleType } from '../localization/setting'

// 언어 코드를 포함한 경로 패턴 생성
const matchersForAuth = locales.flatMap(locale => [
  `/${locale}/setting/*path`,
  '/setting/*path',
])

const matchersForSignIn = locales.flatMap(locale => [
  `/${locale}/sign-up`,
  `/${locale}/sign-in`,
  '/sign-up',
  '/sign-in',
])

const isLocale = (locale: string): locale is LocaleType => {
  return locales.includes(locale as LocaleType)
}

// locale 추출 함수 추가
const getLocale = (pathname: string): LocaleType => {
  const segments = pathname.split('/')
  const [, firstSegment] = segments

  return isLocale(firstSegment) ? firstSegment : fallbackLng
}

export const withAuth: MiddlewareFactory = next => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    const locale = getLocale(request.nextUrl.pathname)

    // 인증이 필요한 페이지
    if (isMatch(request.nextUrl.pathname, matchersForAuth)) {
      return (await auth())
        ? next(request, _next)
        : NextResponse.redirect(new URL(`/${locale}/sign-in`, request.url))
    }

    // 인증 후 회원가입 및 로그인 접근 제어
    if (isMatch(request.nextUrl.pathname, matchersForSignIn)) {
      return (await auth())
        ? NextResponse.redirect(new URL(`/${locale}`, request.url))
        : next(request, _next)
    }

    return next(request, _next)
  }
}

const isMatch = (pathname: string, urls: string[]) => {
  return urls.some(url => !!match(url)(pathname))
}
