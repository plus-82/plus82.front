import { format } from 'date-fns'
import Link from 'next/link'

import { Card } from 'entities/job-post'

import { useJobPosts } from '../api/use-job-posts'

export const ClosingSoon = () => {
  const { data } = useJobPosts({
    pageNumber: 0,
    rowCount: 4,
    orderType: 'ASC',
    sortBy: 'dueDate',
    fromDueDate: format(new Date(), 'yyyy-MM-dd'),
  })

  return (
    <ul className="flex flex-wrap gap-x-5 gap-y-8">
      {data?.map((post, index) => (
        <li key={index}>
          <Link href={`/job-board/${post.id}`}>
            <Card {...post} />
          </Link>
        </li>
      ))}
    </ul>
  )
}
