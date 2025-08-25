'use server'

import {
  getNullableBusinessSession,
  getNullableTeacherSession,
} from 'entities/auth'
import { apiClient, Pagination } from 'shared/api'

import { Feed } from '../model/feed'

export type GetFeedsRequest = {
  keyword?: string
}

type GetFeedsResponse = Pagination<Feed>

export const getFeeds = async ({ keyword }: GetFeedsRequest) => {
  const session = await getNullableTeacherSession()
  const hasSession = !!session
  const endpoint = hasSession ? '/feeds' : '/feeds/public'

  const response = await apiClient.get<GetFeedsResponse>({
    endpoint,
    queryParams: {
      keyword,
    },
    ...(hasSession
      ? { option: { authorization: `Bearer ${session.accessToken}` } }
      : {}),
  })

  return response
}

export const getBusinessFeeds = async ({ keyword }: GetFeedsRequest) => {
  const session = await getNullableBusinessSession()
  const hasSession = !!session
  const endpoint = hasSession ? '/feeds' : '/feeds/public'

  const response = await apiClient.get<GetFeedsResponse>({
    endpoint,
    queryParams: {
      keyword,
    },
    ...(hasSession
      ? { option: { authorization: `Bearer ${session.accessToken}` } }
      : {}),
  })

  return response
}
