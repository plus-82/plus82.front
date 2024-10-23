import { SuccessResponse } from 'shared/api/common-response'

import { HttpError } from './http-error'

const API_URL = process.env.NEXT_PUBLIC_API_URL || ''

const DEFAULT_ERROR_MESSAGE = '기술팀에 문의해주세요'

const ERROR_MESSAGES: { [key: number]: string } = {
  500: '기술팀에 문의해주세요',
}

export class ApiClient {
  private baseUrl: string

  constructor(url: string) {
    this.baseUrl = url
  }

  private async handleResponse<TResult>(response: Response): Promise<TResult> {
    const body = await response.json()
    const { status } = response

    if (status >= 400 && status < 500) {
      const { code, data, message } = body
      throw new HttpError({ code, data, message, status })
    }

    if (status >= 500) {
      throw new HttpError({
        code: status,
        message: ERROR_MESSAGES[status] ?? DEFAULT_ERROR_MESSAGE,
        status,
      })
    }

    return (body as SuccessResponse<TResult>).data
  }

  public async get<TResult = unknown>(
    endpoint: string,
    queryParams?: Record<string, string | number>,
  ): Promise<TResult> {
    const url = new URL(`${this.baseUrl}${endpoint}`)

    if (queryParams) {
      Object.entries(queryParams).forEach(([key, value]) => {
        url.searchParams.append(key, value.toString())
      })
    }

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    return this.handleResponse<TResult>(response)
  }

  public async post<TResult = unknown, TData = Record<string, unknown>>(
    endpoint: string,
    body: TData,
  ): Promise<TResult> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    return this.handleResponse<TResult>(response)
  }

  public async put<TResult = unknown, TData = Record<string, unknown>>(
    endpoint: string,
    body: TData,
  ): Promise<TResult> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    return this.handleResponse<TResult>(response)
  }

  public async delete<TResult = unknown, TData = Record<string, unknown>>(
    endpoint: string,
    body: TData,
  ): Promise<TResult> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    return this.handleResponse<TResult>(response)
  }
}

export const apiClient = new ApiClient(API_URL)
