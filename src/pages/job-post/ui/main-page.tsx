'use client'

import Image from 'next/image'
import { Suspense, useState } from 'react'

import { Layout } from 'shared/ui'

import { JobPostFilter } from 'features/job-post-filter/model/filter'
import { JobPostFilters } from 'features/job-post-filter/ui/job-post-filters'

import { ClosingSoon } from './closing-soon'
import { JobPosting } from './job-posting'

export const MainPage = () => {
  const [filters, setFilters] = useState<JobPostFilter | null>(null)

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
        <Suspense fallback={<div>Loading</div>}>
          <ClosingSoon />
        </Suspense>
      </section>
      <section>
        <h2 className="display-small mb-4 text-gray-900">Job posting</h2>
        <JobPostFilters onChange={setFilters} />
        <Suspense fallback={<div>Loading</div>}>
          <JobPosting filters={filters} />
        </Suspense>
      </section>
    </Layout>
  )
}
