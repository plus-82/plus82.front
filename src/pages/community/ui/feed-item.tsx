import { Feed } from 'entities/feed'
import { LikeButton } from 'features/like-feed'
import { colors } from 'shared/config'
import { Image, Icon, linkVariants } from 'shared/ui'

import { ExpandableText } from './expandable-text'
import { formatDateFromNow } from '../lib/date'

type Props = Feed

export const FeedItem = ({
  id,
  content,
  createdAt,
  creatorName,
  creatorProfileImagePath,
  imagePath,
  commentCount,
  likeCount,
  isLiked,
}: Props) => {
  return (
    <div className="pb-10 not-last:border-b not-last:border-gray-200 not-first:pt-10">
      <div className="mb-3 flex items-center gap-3">
        <Image
          src={creatorProfileImagePath ?? ''}
          alt="community"
          className="h-12 w-12 rounded-full"
        />
        <div className="grow">
          <p className="title-small font-medium text-gray-900">{creatorName}</p>
          <p className="body-large font-normal text-gray-500">
            {formatDateFromNow(createdAt)}
          </p>
        </div>
        <button className="flex h-12 w-12 items-center justify-center">
          <Icon
            name="Dot"
            size="custom"
            color={colors.gray[700]}
            className="h-8 w-8 rotate-90"
          />
        </button>
      </div>

      <div className="mb-3 space-y-3">
        {imagePath && (
          <div className="h-[500px] w-full rounded-xl">
            <Image
              src={imagePath ?? ''}
              alt="community"
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
        )}
        <div>
          <ExpandableText lineClamp={10} content={content} />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <LikeButton feedId={id} isLiked={isLiked} />
          <button className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-gray-100">
            <Icon
              name="Comment"
              size="custom"
              color={colors.gray[700]}
              className="h-6 w-6"
            />
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-gray-100">
            <Icon
              name="Share"
              size="custom"
              color={colors.gray[700]}
              className="h-6 w-6"
            />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button className={linkVariants({ variant: 'secondary' })}>
            {likeCount} Likes
          </button>
          <span className="h-[3px] w-[3px] rounded-full bg-gray-500" />
          <button className={linkVariants({ variant: 'secondary' })}>
            {commentCount} Comments
          </button>
        </div>
      </div>
    </div>
  )
}
