import { useQuery, useQueryClient } from '@tanstack/react-query'

import { addFeedComment, feedQueries } from 'entities/feed'
import { isServerError, useServerErrorHandler } from 'shared/api'
import { Spinner } from 'shared/ui'

import { CommentForm } from './comment-form'
import { CommentList } from './list'

type Props = {
  feedId: number
  commentCount: number
}

export const Comment = ({ feedId, commentCount }: Props) => {
  const queryClient = useQueryClient()
  const { handleServerError } = useServerErrorHandler()

  const { data: comments, isLoading } = useQuery({
    ...feedQueries.item(feedId),
    select: data => data?.comments,
  })

  const handleSuccess = () => {
    queryClient.invalidateQueries({
      queryKey: feedQueries.item(feedId).queryKey,
    })
  }

  const addComment = async (comment: string) => {
    const response = await addFeedComment({ feedId, comment })

    if (isServerError(response)) {
      handleServerError(response)
    } else {
      handleSuccess()
    }
  }

  return (
    <div className="mt-5">
      <CommentForm onSubmit={addComment} />
      {isLoading && commentCount > 0 ? (
        <div className="relative mt-10 flex justify-center">
          <Spinner size="medium" />
        </div>
      ) : (
        comments && <CommentList comments={comments} />
      )}
    </div>
  )
}
