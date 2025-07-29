'use server'

import { getNullableTeacherSession } from 'entities/auth'
import { apiClient } from 'shared/api'

import { FeedDetail } from '../model/feed'

export type GetFeedsRequest = {
  feedId: number
}

type GetFeedsResponse = FeedDetail

export const getFeed = async ({ feedId }: GetFeedsRequest) => {
  const session = await getNullableTeacherSession()

  const hasSession = !!session
  const endpoint = hasSession ? `/feeds/${feedId}` : `/feeds/public/${feedId}`

  const response = await apiClient.get<GetFeedsResponse>({
    endpoint,
    ...(hasSession
      ? { option: { authorization: `Bearer ${session.accessToken}` } }
      : {}),
  })

  return response
}
