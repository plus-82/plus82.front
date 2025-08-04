import { Comment } from 'entities/feed'
import { colors } from 'shared/config'
import { Image, Icon } from 'shared/ui'

import { LikeCommentButton } from './like-comment-button'
import { formatDateFromNow } from '../../lib/date'

export type Props = {
  comments: Comment[]
}

export const CommentList = ({ comments }: Props) => {
  if (comments.length === 0) {
    return null
  }

  return (
    <ul className="mt-5 space-y-5">
      {comments.map(comment => (
        <li key={comment.id} className="flex gap-3">
          <Image
            src=""
            alt={`${comment.userName} profile image`}
            className="h-[38px] w-[38px] rounded-full"
            fallback={
              <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-gray-300">
                <Icon
                  name="User"
                  size="custom"
                  className="h-[32px] w-[32px]"
                  color={colors.gray[700]}
                />
              </div>
            }
          />
          <div className="flex-grow space-y-2">
            <div className="flex flex-grow justify-between">
              <div className="flex flex-col">
                <strong className="body-large font-medium text-gray-900">
                  {comment.userName}
                </strong>
                <span className="body-medium font-normal text-gray-500">
                  {formatDateFromNow(comment.createdAt)}
                </span>
              </div>
              <button className="flex h-[32px] w-[32px] items-center justify-center">
                <Icon
                  name="Dot"
                  size="custom"
                  color={colors.gray[700]}
                  className="h-5 w-5 rotate-90"
                />
              </button>
            </div>
            <p className="body-large font-normal text-gray-900">
              {comment.comment}
            </p>
            <LikeCommentButton
              isLiked={comment.isLiked}
              count={comment.likeCount}
            />
          </div>
        </li>
      ))}
    </ul>
  )
}
