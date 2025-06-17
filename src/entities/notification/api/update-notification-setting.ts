'use server'

import { getTeacherSession, getBusinessSession } from 'entities/auth'
import { apiClient, HttpError, errorHandler } from 'shared/api'

import { NotificationSetting } from '../model/setting'

type UpdateNotificationSettingRequest = NotificationSetting

const handleError = (error: Error) => {
  const isHttpError = error instanceof HttpError
  if (!isHttpError) throw error

  return errorHandler.toast('notification-setting.error.update', {
    error,
    translate: true,
  })
}

export const updateTeacherNotificationSetting = async ({
  allowEmail,
}: UpdateNotificationSettingRequest) => {
  const { accessToken } = await getTeacherSession()

  try {
    await apiClient.put<null, null>({
      endpoint: `/notifications/setting/me`,
      queryParams: {
        allowEmail,
      },
      option: {
        authorization: `Bearer ${accessToken}`,
      },
      body: null,
    })
  } catch (error) {
    return handleError(error as Error)
  }
}

export const updateBusinessNotificationSetting = async ({
  allowEmail,
}: UpdateNotificationSettingRequest) => {
  const { accessToken } = await getBusinessSession()

  try {
    await apiClient.put<null, null>({
      endpoint: `/notifications/setting/me`,
      queryParams: {
        allowEmail,
      },
      option: {
        authorization: `Bearer ${accessToken}`,
      },
      body: null,
    })
  } catch (error) {
    return handleError(error as Error)
  }
}
