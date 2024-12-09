import { isNilOrEmptyString } from './helper'

export const toDisplayValue = <T>(value?: T | null) => {
  if (isNilOrEmptyString(value)) return '-'

  return value
}

export const formatDate = (dateString?: string | null) => {
  if (!dateString) return '-'

  const date = new Date(dateString)

  return new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
    .format(date)
    .replace(/\s/g, '')
    .replace(/\.$/g, '')
}
