import { Comment } from 'entities/feed'

import { CommentItem } from './item'

export type Props = {
  feedId: number
  comments: Comment[]
}

export const CommentList = ({ feedId, comments }: Props) => {
  if (comments.length === 0) {
    return null
  }

  return (
    <ul className="mt-5 space-y-5">
      {comments.map(comment => (
        <li key={comment.id} className="flex gap-3">
          <CommentItem
            key={comment.id}
            feedId={feedId}
            {...comment}
            isPublic={false}
          />
        </li>
      ))}
    </ul>
  )
}
