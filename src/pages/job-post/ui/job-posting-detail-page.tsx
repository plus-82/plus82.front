'use client'

import { useParams } from 'next/navigation'
import { Suspense } from 'react'

import { Button, Layout } from 'shared/ui'

import {
  convertToJobPost,
  PostingDetail,
  PostingTitle,
} from 'entities/job-post'

import { useJobPost } from '../api/use-job-post'

type Params = {
  jobPostId: string
}

const JobPostingDetail = () => {
  const params = useParams<Params>()

  const { data } = useJobPost(Number(params?.jobPostId))

  const jobPost = convertToJobPost(data)

  return (
    <Layout wide className="flex gap-5">
      <div className="flex-grow">
        <div className="mb-6 h-[410px] w-full rounded-2xl bg-gray-200" />
        <PostingDetail jobPost={data} />
      </div>
      <div>
        <div className="sticky top-6 flex w-[340px] flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-6">
          <PostingTitle jobPost={jobPost} size="medium" />
          <Button>Apply Now</Button>
        </div>
      </div>
    </Layout>
  )
}

export const JobPostingDetailPage = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <JobPostingDetail />
    </Suspense>
  )
}
