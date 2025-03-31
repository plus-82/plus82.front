'use server'

import { cookies } from 'next/headers'

import {
  Locale,
  defaultTeacherLocale,
  defaultBusinessLocale,
} from 'shared/config/internationalization'

const TEACHER_COOKIE_NAME = 'NEXT_TEACHER_LOCALE'
const BUSINESS_COOKIE_NAME = 'NEXT_BUSINESS_LOCALE'

export async function getTeacherLocale() {
  return (
    (await cookies()).get(TEACHER_COOKIE_NAME)?.value || defaultTeacherLocale
  )
}

export async function setTeacherLocale(locale: Locale) {
  ;(await cookies()).set(TEACHER_COOKIE_NAME, locale)
}

export async function getBusinessLocale() {
  return (
    (await cookies()).get(BUSINESS_COOKIE_NAME)?.value || defaultBusinessLocale
  )
}

export async function setBusinessLocale(locale: Locale) {
  ;(await cookies()).set(BUSINESS_COOKIE_NAME, locale)
}
