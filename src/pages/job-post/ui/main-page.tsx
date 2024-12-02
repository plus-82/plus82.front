'use client'

import Image from 'next/image'
import { Suspense } from 'react'

import { EmptyBoundary } from 'shared/api'
import { Layout } from 'shared/ui'

import { JobPostFilters } from 'features/job-post-filter/ui/job-post-filters'

import { useFilter } from '../lib/use-filter'

import { ClosingSoon } from './closing-soon'
import { JobPosting } from './job-posting'
import { NoClosingJob } from './no-closing-job'
import { NoJobPosting } from './no-job-posting'

export const MainPage = () => {
  const { filters, setFilters } = useFilter({ syncWithURL: false })

  return (
    <Layout wide>
      <div className="mb-10 w-full">
        <Image
          src="/images/banner.svg"
          width={1060}
          height={400}
          alt="Plus 82 Banner"
        />
      </div>
      <section className="mb-20">
        <h2 className="display-small mb-6 text-gray-900">Closing soon</h2>
        <EmptyBoundary fallback={<NoClosingJob />}>
          <Suspense fallback={<div>Loading</div>}>
            <ClosingSoon />
          </Suspense>
        </EmptyBoundary>
      </section>
      <section>
        <h2 className="display-small mb-4 text-gray-900">Job posting</h2>
        <JobPostFilters onChange={setFilters} />
        <EmptyBoundary trigger={filters} fallback={<NoJobPosting />}>
          <Suspense fallback={<div>Loading</div>}>
            <JobPosting filters={filters} />
          </Suspense>
        </EmptyBoundary>
      </section>
    </Layout>
  )
}
