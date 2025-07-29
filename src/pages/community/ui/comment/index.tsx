import { useQuery } from '@tanstack/react-query'

import { feedQueries } from 'entities/feed'
import { Spinner } from 'shared/ui'

import { CommentForm } from './comment-form'
import { CommentList } from './list'

type Props = {
  feedId: number
  commentCount: number
}

export const Comment = ({ feedId, commentCount }: Props) => {
  const { data: comments, isLoading } = useQuery({
    ...feedQueries.item(feedId),
    select: data => data?.comments,
  })

  return (
    <div className="mt-5">
      <CommentForm />
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
