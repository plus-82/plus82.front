import { useQueryClient } from '@tanstack/react-query'
import { ComponentProps, useEffect, useState } from 'react'

import { feedQueries, likeComment, unlikeComment } from 'entities/feed'
import { isServerError, useServerErrorHandler } from 'shared/api'
import { colors } from 'shared/config'
import { AnimatedCount, Icon } from 'shared/ui'

type Props = {
  isLiked: boolean
  count: number
  commentId: number
  feedId: number
}

const FILLED_HEART_COLOR = '#F44336'

export const LikeCommentButton = ({
  isLiked: isLikedProp = false,
  count,
  commentId,
  feedId,
}: Props) => {
  const queryClient = useQueryClient()

  const [isLiked, setIsLiked] = useState(isLikedProp)

  const { handleServerError } = useServerErrorHandler()

  const handleSuccess = () => {
    queryClient.invalidateQueries({
      queryKey: feedQueries.item(feedId).queryKey,
    })
  }

  const handleClick = async () => {
    const prevLiked = isLiked
    setIsLiked(!isLiked)

    let response

    if (isLiked) {
      response = await unlikeComment({ commentId, feedId })
    } else {
      response = await likeComment({ commentId, feedId })
    }

    if (isServerError(response)) {
      setIsLiked(prevLiked)
      handleServerError(response)
    } else {
      handleSuccess()
    }
  }

  useEffect(() => {
    setIsLiked(isLikedProp)
  }, [isLikedProp])

  return (
    <div className="flex items-center">
      <button
        className="flex h-6 w-6 items-center justify-center rounded-full transition-colors hover:bg-gray-100"
        onClick={handleClick}
      >
        <Icon
          name={isLiked ? 'HeartFilled' : 'Heart'}
          size="custom"
          color={
            isLiked
              ? (FILLED_HEART_COLOR as keyof ComponentProps<
                  typeof Icon
                >['color'])
              : colors.gray[700]
          }
          className="h-4 w-4"
        />
      </button>
      <AnimatedCount
        count={count}
        className="body-large font-normal text-gray-700"
      />
    </div>
  )
}
