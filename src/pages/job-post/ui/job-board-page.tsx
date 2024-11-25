'use client'

import { Suspense, useState } from 'react'

import { EmptyBoundary } from 'shared/api'
import { Layout } from 'shared/ui'

import { JobPostFilter } from 'features/job-post-filter/model/filter'
import { JobPostFilters } from 'features/job-post-filter/ui/job-post-filters'

import { JobPosting } from './job-posting'
import { NoJobPosting } from './no-job-posting'

export const JobBoardPage = () => {
  const [filters, setFilters] = useState<JobPostFilter | null>(null)

  return (
    <Layout wide>
      <JobPostFilters onChange={setFilters} />
      <EmptyBoundary fallback={<NoJobPosting />}>
        <Suspense fallback={<div>Loading</div>}>
          <JobPosting filters={filters} />
        </Suspense>
      </EmptyBoundary>
    </Layout>
  )
}
