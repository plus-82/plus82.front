'use client'

import Image from 'next/image'
import { Suspense } from 'react'

import { Chip, Filter, Layout } from 'shared/ui'

import { Card } from 'entities/job-post'

import { useJobPosts } from '../../api/use-job-posts'
import { useJobPostFilter } from '../../lib/use-job-post-filter'
import { ResetButton } from '../reset-button'

const ClosingSoon = () => {
  const { data } = useJobPosts({ pageNumber: 0, rowCount: 20 })

  return (
    <div className="flex flex-wrap gap-x-5 gap-y-8">
      {data?.slice(0, 4).map((post, index) => <Card key={index} {...post} />)}
    </div>
  )
}

const JobPosts = () => {
  const { data } = useJobPosts({ pageNumber: 0, rowCount: 20 })

  return (
    <div className="flex flex-wrap gap-x-5 gap-y-8">
      {data?.map((post, index) => <Card key={index} {...post} />)}
    </div>
  )
}

export const MainPage = () => {
  const {
    filters,
    isFilterExist,
    updateLocationFilter,
    updateStudentTypeFilter,
    removeLocationFilter,
    removeStudentTypeFilter,
    resetFilters,
  } = useJobPostFilter()

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
        <div className="mb-6 flex flex-col gap-4">
          <div className="flex gap-2">
            <Filter
              name="location"
              value={filters.locations}
              onChange={updateLocationFilter}
            >
              <Filter.Item value="seoul">Seoul</Filter.Item>
              <Filter.Item value="gyeonggi-do">Gyeonggi-do</Filter.Item>
            </Filter>
            <Filter
              name="studentType"
              value={filters.studentTypes}
              onChange={updateStudentTypeFilter}
            >
              <Filter.Item value="adult">Adult</Filter.Item>
              <Filter.Item value="element">ElementSchool</Filter.Item>
            </Filter>
            {isFilterExist && <ResetButton onClick={resetFilters} />}
          </div>
          {isFilterExist && (
            <div className="flex gap-2">
              {filters.locations.map(location => (
                <Chip key={location} selected>
                  <Chip.Label>{location}</Chip.Label>
                  <Chip.RemoveButton
                    onClick={() => removeLocationFilter(location)}
                  />
                </Chip>
              ))}
              {filters.studentTypes.map(item => (
                <Chip key={item} selected>
                  <Chip.Label>{item}</Chip.Label>
                  <Chip.RemoveButton
                    onClick={() => removeStudentTypeFilter(item)}
                  />
                </Chip>
              ))}
            </div>
          )}
        </div>
        <Suspense fallback={<div>Loading</div>}>
          <JobPosts />
        </Suspense>
      </section>
    </Layout>
  )
}
