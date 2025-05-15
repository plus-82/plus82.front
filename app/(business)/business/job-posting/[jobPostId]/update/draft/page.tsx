import { getJobPost } from 'entities/job-post'
import { UpdateJobPostingDraftPage } from 'pages/business-job-posting'

type Params = {
  jobPostId: string
}

const Page = async ({ params }: { params: Promise<Params> }) => {
  const { jobPostId } = await params

  const jobPost = await getJobPost({ jobPostId: Number(jobPostId) })

  return (
    <UpdateJobPostingDraftPage
      jobPostId={Number(jobPostId)}
      jobPostDetail={jobPost}
    />
  )
}

export default Page
