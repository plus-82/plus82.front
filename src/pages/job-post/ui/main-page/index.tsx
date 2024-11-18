'use client'

import Image from 'next/image'
import { Suspense, useState } from 'react'

import { Layout } from 'shared/ui'

import { Card } from 'entities/job-post'

import { JobPostFilter } from 'features/job-post-filter/model/filter'
import { JobPostFilters } from 'features/job-post-filter/ui/job-post-filters'

import { useJobPosts } from '../../api/use-job-posts'

const ClosingSoon = () => {
  const { data } = useJobPosts()

  return (
    <div className="flex flex-wrap gap-x-5 gap-y-8">
      {data?.slice(0, 4).map((post, index) => <Card key={index} {...post} />)}
    </div>
  )
}

const JobPosts = ({ filters }: { filters: JobPostFilter | null }) => {
  const { data } = useJobPosts(filters)

  return (
    <div className="flex flex-wrap gap-x-5 gap-y-8">
      {data?.map((post, index) => <Card key={index} {...post} />)}
    </div>
  )
}

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
          <JobPosts filters={filters} />
        </Suspense>
      </section>
    </Layout>
  )
}
