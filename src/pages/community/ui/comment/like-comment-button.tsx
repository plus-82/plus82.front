import { ComponentProps, useState } from 'react'

import { colors } from 'shared/config'
import { Icon } from 'shared/ui'

type Props = {
  isLiked: boolean
  count: number
}

const FILLED_HEART_COLOR = '#F44336'

export const LikeCommentButton = ({
  isLiked: isLikedProp = false,
  count,
}: Props) => {
  const [isLiked, setIsLiked] = useState(isLikedProp)

  const handleClick = () => {
    setIsLiked(!isLiked)
  }

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
      <span className="body-large font-normal text-gray-700">{count}</span>
    </div>
  )
}
