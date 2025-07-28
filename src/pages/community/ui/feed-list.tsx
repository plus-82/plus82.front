'use client'

import { isEmpty } from 'lodash-es'

import { useObserver } from 'shared/lib'
import { Spinner } from 'shared/ui'

import { FeedItem } from './feed-item'
import { useGetFeeds } from '../api/get-feeds'

type Props = {
  isPublic: boolean
}

const EmptyFeeds = ({ isPublic }: Props) => {
  const { feeds, isFetchingNextPage, fetchNextPage, hasNextPage } = useGetFeeds(
    { keyword: '' },
  )

  const handleIntersect = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }

  const targetRef = useObserver({
    callback: handleIntersect,
  })

  return (
    <>
      <div className="title-large mb-[100px] pt-5 text-center font-medium text-gray-700">
        There are no posts yet,
        <br />
        Create a post and share it!
      </div>
      {feeds?.map(feed => (
        <FeedItem key={feed.id} {...feed} isPublic={isPublic} />
      ))}
      {isFetchingNextPage ? <Loading /> : <div ref={targetRef} />}
    </>
  )
}

const Loading = () => {
  return (
    <div className="relative mt-[80px] flex justify-center">
      <Spinner />
    </div>
  )
}

export const FeedList = ({ isPublic }: Props) => {
  const { feeds, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useGetFeeds()

  const handleIntersect = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }

  const targetRef = useObserver({
    callback: handleIntersect,
  })

  return (
    <div className="mx-auto w-[530px]">
      {(() => {
        if (isLoading) {
          return <Loading />
        }

        if (isEmpty(feeds)) {
          return <EmptyFeeds isPublic={isPublic} />
        }

        return (
          <>
            {feeds?.map(feed => (
              <FeedItem key={feed.id} {...feed} isPublic={isPublic} />
            ))}
            {isFetchingNextPage ? <Loading /> : <div ref={targetRef} />}
          </>
        )
      })()}
    </div>
  )
}
