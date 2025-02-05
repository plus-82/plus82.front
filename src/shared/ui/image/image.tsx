'use client'

import NextImage, { type ImageProps } from 'next/image'
import { ReactNode, useState } from 'react'

import { cn, isNilOrEmptyString } from 'shared/lib'

type Props = ImageProps & {
  fallback?: ReactNode
}

export const Image = ({
  src,
  alt,
  className,
  fallback,
  ...restProps
}: Props) => {
  const [error, setError] = useState(false)

  const handleError = () => {
    setError(true)
  }

  if (error || isNilOrEmptyString(src)) {
    if (fallback) {
      return fallback
    }

    return (
      <div className={cn('border border-gray-200 bg-gray-200', className)} />
    )
  }

  return (
    <div
      className={cn(
        'relative overflow-hidden border border-gray-200',
        className,
      )}
    >
      <NextImage
        src={`${process.env.NEXT_PUBLIC_CDN_URL}${src}`}
        alt={alt}
        fill
        className="object-cover"
        onError={handleError}
        {...restProps}
      />
    </div>
  )
}
