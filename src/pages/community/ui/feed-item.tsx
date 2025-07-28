'use client'

import { useState } from 'react'

import { Feed } from 'entities/feed'
import { FeedFormDialog } from 'features/feed-form'
import { LikeButton, LikedPeopleButton } from 'features/like-feed'
import { colors } from 'shared/config'
import { Image, Icon, linkVariants } from 'shared/ui'

import { AnimatedCount } from './animated-count'
import { DeleteFeedModal } from './delete-feed-modal'
import { ExpandableText } from './expandable-text'
import { OpenMenuButton } from './menu/open-menu-button'
import { formatDateFromNow } from '../lib/date'

type Props = Feed & {
  isPublic: boolean
}

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
  isPublic,
}: Props) => {
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)

  const openEditDialog = () => {
    setIsEditDialogOpen(true)
  }

  const openDeleteDialog = () => {
    setIsDeleteDialogOpen(true)
  }

  return (
    <>
      <div className="pb-10 not-last:border-b not-last:border-gray-200 not-first:pt-10">
        <div className="mb-3 flex items-center gap-3">
          <Image
            src={creatorProfileImagePath ?? ''}
            alt={`${creatorName} profile image`}
            className="h-12 w-12 rounded-full"
            fallback={
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-300">
                <Icon
                  name="User"
                  size="custom"
                  className="h-10 w-10"
                  color={colors.gray[700]}
                />
              </div>
            }
          />
          <div className="grow">
            <p className="title-small font-medium text-gray-900">
              {creatorName}
            </p>
            <p className="body-large font-normal text-gray-500">
              {formatDateFromNow(createdAt)}
            </p>
          </div>
          <OpenMenuButton
            isPublic={isPublic}
            creatorId={5}
            openEditDialog={openEditDialog}
            openDeleteDialog={openDeleteDialog}
          />
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
            <LikedPeopleButton feedId={id} likeCount={likeCount} />
            <span className="h-[3px] w-[3px] rounded-full bg-gray-500" />
            <button className={linkVariants({ variant: 'secondary' })}>
              <AnimatedCount count={commentCount} /> Comments
            </button>
          </div>
        </div>
      </div>

      <FeedFormDialog
        feedId={id}
        isOpen={isEditDialogOpen}
        onOpenChange={setIsEditDialogOpen}
      />

      <DeleteFeedModal
        feedId={id}
        isOpen={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
      />
    </>
  )
}
