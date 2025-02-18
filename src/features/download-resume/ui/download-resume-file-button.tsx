'use client'

import { useState, MouseEvent } from 'react'

type Props = {
  filePath: string
  fileName: string
}

export const DownloadResumeFileButton = ({ filePath, fileName }: Props) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleDownloadFile = async (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    event.preventDefault()

    setIsLoading(true)
    try {
      const response = await fetch(`/cdn/${filePath}`)

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)

      const link = document.createElement('a')

      link.href = url
      link.download = fileName

      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('파일 다운로드 중 오류 발생:', error)
      setIsLoading(false)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <button
      type="button"
      onClick={handleDownloadFile}
      disabled={isLoading}
      className="w-full p-3 text-left disabled:bg-gray-100 disabled:text-gray-500"
    >
      {isLoading ? 'Downloading...' : 'Download'}
    </button>
  )
}
