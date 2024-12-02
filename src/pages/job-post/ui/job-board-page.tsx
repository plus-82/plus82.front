'use client'

import { Suspense } from 'react'

import { EmptyBoundary } from 'shared/api'
import { Layout } from 'shared/ui'

import { JobPostFilters } from 'features/job-post-filter/ui/job-post-filters'

import { useFilter } from '../lib/use-filter'

import { JobPosting } from './job-posting'
import { NoJobPosting } from './no-job-posting'

export const JobBoardPage = () => {
  const { filters, setFilters } = useFilter({
    syncWithURL: true,
    url: '/job-board',
  })

  return (
    <Layout wide>
      <JobPostFilters
        defaultFilters={filters}
        useSearchField
        onChange={setFilters}
      />
      <EmptyBoundary trigger={filters} fallback={<NoJobPosting />}>
        <Suspense fallback={<div>Loading</div>}>
          <JobPosting filters={filters} />
        </Suspense>
      </EmptyBoundary>
    </Layout>
  )
}
