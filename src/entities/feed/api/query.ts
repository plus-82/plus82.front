import { infiniteQueryOptions, queryOptions } from '@tanstack/react-query'

import { getFeed } from './get-feed'
import { getFeedLike, GetFeedLikeRequest } from './get-feed-like'
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
  items: () => [...feedQueries.all(), 'item'],
  item: (feedId: number) =>
    queryOptions({
      queryKey: [...feedQueries.items(), feedId],
      queryFn: () => getFeed({ feedId }),
    }),
  likes: () => [...feedQueries.all(), 'like'],
  like: (params: GetFeedLikeRequest) =>
    queryOptions({
      queryKey: [...feedQueries.likes(), params],
      queryFn: () => getFeedLike(params),
    }),
}
