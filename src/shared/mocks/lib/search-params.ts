import { isArray } from 'lodash-es'
import type { DefaultBodyType, StrictRequest } from 'msw'

type GetAPISearchParamsType = {
  (request: StrictRequest<DefaultBodyType>, params: string): string
  (request: StrictRequest<DefaultBodyType>, params: string[]): string[]
}

// API Request URL 상의 searchParam
export const getAPISearchParams = ((
  request: StrictRequest<DefaultBodyType>,
  params: string | string[],
) => {
  const url = new URL(request.url)

  if (isArray(params)) return params.map(param => url.searchParams.get(param))

  return url.searchParams.get(params)
}) as GetAPISearchParamsType

type GetBrowserSearchParamsType = {
  (params: string): string | string[] | null
  (params: string[]): (string | null)[]
}

// 브라우저 URL 상의 searchParam
export const getBrowserSearchParams = ((params: string | string[]) => {
  const searchParams = new URLSearchParams(window.location.search)

  if (isArray(params))
    return params.map(param => Array.from(searchParams.getAll(param)))

  return Array.from(searchParams.getAll(params))
}) as GetBrowserSearchParamsType
