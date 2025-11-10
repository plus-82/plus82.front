'use server'

import { getBusinessSession } from 'entities/auth'
import { apiClient, Pagination, PaginationParams } from 'shared/api'

import { ResumeContactSummary } from '../model/resume'

export type GetResumeContactListRequest = PaginationParams<{
  genderType?: 'MALE' | 'FEMALE'
  fromBirthDate?: string
  toBirthDate?: string
  countryIdList?: string[]
  visaTypeList?: string[]
  forKindergarten?: boolean
  forElementary?: boolean
  forMiddleSchool?: boolean
  forHighSchool?: boolean
  forAdult?: boolean
}>

type GetResumeContactListResponse = Pagination<ResumeContactSummary>

export const getResumeContactList = async (
  queryParams: GetResumeContactListRequest,
) => {
  const { accessToken } = await getBusinessSession()

  const response = await apiClient.get<GetResumeContactListResponse>({
    endpoint: '/resume-contacts',
    queryParams,
    option: {
      authorization: `Bearer ${accessToken}`,
    },
  })

  return response
}
