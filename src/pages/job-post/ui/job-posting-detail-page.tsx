import { Layout, Image } from 'shared/ui'

import {
  convertToJobPost,
  PostingDetail,
  PostingTitle,
} from 'entities/job-post'
import { getJobPost } from 'entities/job-post/api/get-job-post'

import { ApplyToJobButton } from 'features/apply'

type Params = {
  jobPostId: string
}

export const JobPostingDetailPage = async ({ params }: { params: Params }) => {
  const { jobPostId } = await params

  const data = await getJobPost({ jobPostId: Number(jobPostId) })

  const jobPost = convertToJobPost(data)

  return (
    <Layout wide className="flex gap-5">
      <div className="flex-grow">
        <Image
          src={data.academyImageUrls[0]}
          alt={data.title}
          className="mb-6 h-[410px] w-full rounded-2xl"
        />
        <PostingDetail jobPost={data} />
      </div>
      <div>
        <div className="sticky top-6 flex w-[340px] flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-6">
          <PostingTitle jobPost={jobPost} size="medium" />
          <ApplyToJobButton />
        </div>
      </div>
    </Layout>
  )
}
