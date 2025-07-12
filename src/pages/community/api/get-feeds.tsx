import { useInfiniteQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'

import { feedQueries } from 'entities/feed'

export const useGetFeeds = () => {
  const searchParams = useSearchParams()
  const keyword = searchParams?.get('keyword') ?? ''

  const { data } = useInfiniteQuery({
    ...feedQueries.list({ keyword }),
    select: data => data.pages.flatMap(page => page.content),
  })

  return {
    feeds: data,
  }
}
