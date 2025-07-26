'use client'

import { isEmpty } from 'lodash-es'

import { Spinner } from 'shared/ui'

import { FeedItem } from './feed-item'
import { useGetFeeds } from '../api/get-feeds'

const EmptyFeeds = () => {
  const { feeds } = useGetFeeds({ keyword: '' })

  return (
    <>
      <div className="title-large mb-[100px] pt-5 text-center font-medium text-gray-700">
        There are no posts yet,
        <br />
        Create a post and share it!
      </div>
      {feeds?.map(feed => <FeedItem key={feed.id} {...feed} />)}
    </>
  )
}

export const FeedList = () => {
  const { feeds, isLoading } = useGetFeeds()

  return (
    <div className="mx-auto w-[530px]">
      {(() => {
        if (isLoading) {
          return (
            <div className="relative mt-[80px] flex justify-center">
              <Spinner />
            </div>
          )
        }

        if (isEmpty(feeds)) {
          return <EmptyFeeds />
        }

        return feeds?.map(feed => <FeedItem key={feed.id} {...feed} />)
      })()}
    </div>
  )
}
