import { getJobPost } from 'entities/job-post'
import { JobPostApplicantManagementListPage } from 'pages/business-job-posting'

type Params = {
  jobPostId: string
}

const Page = async ({ params }: { params: Promise<Params> }) => {
  const { jobPostId } = await params

  const jobPost = await getJobPost({ jobPostId: Number(jobPostId) })

  return (
    <JobPostApplicantManagementListPage
      title={jobPost.title}
      jobPostId={Number(jobPostId)}
    />
  )
}

export default Page
