import { useInfiniteQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'

import { feedQueries } from 'entities/feed'

type Props = {
  keyword?: string
}

export const useGetFeeds = ({ keyword: keywordProp }: Props = {}) => {
  const searchParams = useSearchParams()
  const keyword = searchParams?.get('search') ?? ''

  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      ...feedQueries.list({ keyword: keywordProp ?? keyword }),
      select: data => data.pages.flatMap(page => page.content),
    })

  return {
    feeds: data,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  }
}
