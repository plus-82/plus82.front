import { passthrough, ResponseResolver } from 'msw'

import { getBrowserSearchParams } from './search-params'

export const resolver = (callback: ResponseResolver) =>
  (async args => {
    const useMsw = getBrowserSearchParams('msw') ?? []

    if (!useMsw.includes('true')) {
      return passthrough()
    }

    return callback(args)
  }) as ResponseResolver
