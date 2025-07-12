import { infiniteQueryOptions } from '@tanstack/react-query'

import { getFeeds, GetFeedsRequest } from './get-feeds'

export const feedQueries = {
  all: () => ['feed'],
  lists: () => [...feedQueries.all(), 'list'],
  list: (params: GetFeedsRequest) =>
    infiniteQueryOptions({
      queryKey: [...feedQueries.lists(), params],
      queryFn: () => getFeeds(params),
      initialPageParam: 0,
      getNextPageParam: lastPage => {
        if (lastPage.last) return undefined

        return lastPage.pageable.pageNumber + 1
      },
    }),
}
