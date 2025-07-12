'use client'

import { FeedItem } from './feed-item'
import { useGetFeeds } from '../api/get-feeds'

export const FeedList = () => {
  const { feeds } = useGetFeeds()

  return (
    <div className="mx-auto w-[530px]">
      {feeds?.map(feed => <FeedItem key={feed.id} {...feed} />)}
    </div>
  )
}
