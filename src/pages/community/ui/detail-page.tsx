'use client'

import { useQuery } from '@tanstack/react-query'

import { feedQueries } from 'entities/feed'
import { Layout } from 'shared/ui'

import { FeedItem } from './feed-item'

type Props = {
  feedId: number
  isPublic: boolean
}

export const CommunityDetailPage = ({ feedId, isPublic }: Props) => {
  const { data: feed } = useQuery(feedQueries.item(feedId))

  if (!feed) {
    throw new Error('Feed not found')
  }

  return (
    <Layout wide className="w-[530px] min-w-[530px]">
      <FeedItem {...feed} isPublic={isPublic} />
    </Layout>
  )
}
