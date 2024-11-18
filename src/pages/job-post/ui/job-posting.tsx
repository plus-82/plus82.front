import { Card } from 'entities/job-post'

import { JobPostFilter } from 'features/job-post-filter/model/filter'

import { useJobPosts } from '../api/use-job-posts'
import { transformFiltersToParams } from '../model/transformFiltersToParams'

type Props = {
  filters: JobPostFilter | null
}

export const JobPosting = ({ filters }: Props) => {
  const params = transformFiltersToParams(filters)

  const { data } = useJobPosts({ pageNumber: 0, rowCount: 20, ...params })

  return (
    <div className="flex flex-wrap gap-x-5 gap-y-8">
      {data?.map((post, index) => <Card key={index} {...post} />)}
    </div>
  )
}
