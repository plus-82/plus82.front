import { useQueryClient } from '@tanstack/react-query'
import { isNil } from 'lodash-es'
import { useState } from 'react'

import { Comment, feedQueries, updateComment } from 'entities/feed'
import { isServerError, useServerErrorHandler } from 'shared/api'
import { colors } from 'shared/config'
import { Icon, Image } from 'shared/ui'

import { LikeCommentButton } from './like-comment-button'
import { formatDateFromNow } from '../../lib/date'
import { OpenMenuButton } from '../comment-menu/open-menu-button'
import { DeleteCommentModal } from '../delete-comment-modal'
import { CommentForm } from './comment-form'
import { ReportCommentModal } from '../report-comment-modal'
import { ReportUserModal } from '../report-user-modal'

type Props = Comment & {
  feedId: number
  isPublic: boolean
}

export const CommentItem = ({
  feedId,
  id,
  comment,
  isLiked,
  likeCount,
  userName,
  createdAt,
  isPublic,
}: Props) => {
  const queryClient = useQueryClient()

  const [isEditMode, setIsEditMode] = useState(false)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [isReportCommentModalOpen, setIsReportCommentModalOpen] =
    useState(false)
  const [isReportUserModalOpen, setIsReportUserModalOpen] = useState(false)

  const { handleServerError } = useServerErrorHandler()

  const openEditForm = () => {
    setIsEditMode(true)
  }

  const openDeleteDialog = () => {
    setIsDeleteDialogOpen(true)
  }

  const openReportCommentModal = () => {
    setIsReportCommentModalOpen(true)
  }

  const openReportUserModal = () => {
    setIsReportUserModalOpen(true)
  }

  const handleCommentUpdateCancel = () => {
    setIsEditMode(false)
  }

  const handleSuccess = () => {
    setIsEditMode(false)
    queryClient.invalidateQueries({
      queryKey: feedQueries.item(feedId!).queryKey,
    })
    queryClient.invalidateQueries({
      queryKey: feedQueries.lists(),
    })
  }

  const submitForm = async (comment: string) => {
    if (isNil(feedId) || isNil(id)) return

    const response = await updateComment({
      feedId,
      commentId: id,
      comment,
    })

    if (isServerError(response)) {
      handleServerError(response)
    } else {
      handleSuccess()
    }
  }

  return (
    <>
      <Image
        src=""
        alt={`${userName} profile image`}
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
              {userName}
            </strong>
            <span className="body-medium font-normal text-gray-500">
              {formatDateFromNow(createdAt)}
            </span>
          </div>
          <OpenMenuButton
            isPublic={isPublic}
            creatorId={21}
            openEditForm={openEditForm}
            openDeleteDialog={openDeleteDialog}
            openReportCommentModal={openReportCommentModal}
            openReportUserModal={openReportUserModal}
          />
        </div>
        {isEditMode ? (
          <CommentForm
            defaultValue={comment}
            onCancel={handleCommentUpdateCancel}
            onSubmit={submitForm}
          />
        ) : (
          <p className="body-large font-normal text-gray-900">{comment}</p>
        )}
        <LikeCommentButton
          isLiked={isLiked}
          count={likeCount}
          commentId={id}
          feedId={feedId}
        />
      </div>

      <DeleteCommentModal
        feedId={feedId}
        commentId={id}
        isOpen={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
      />

      <ReportCommentModal
        commentId={id}
        isOpen={isReportCommentModalOpen}
        onOpenChange={setIsReportCommentModalOpen}
      />

      <ReportUserModal
        userId={21}
        isOpen={isReportUserModalOpen}
        onOpenChange={setIsReportUserModalOpen}
      />
    </>
  )
}
