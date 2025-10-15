import { getBusinessJobPostResumeRelation } from 'entities/job-post-resume-relation'
import { Layout } from 'shared/ui'

import { FileResume } from './file-resume'
import { FormResume } from './form-resume'

type Params = {
  resumeId: string
}

export const ResumeDetailPage = async ({
  params,
}: {
  params: Promise<Params>
}) => {
  const { resumeId } = await params

  const jobPostResumeRelation = await getBusinessJobPostResumeRelation({
    jobPostResumeRelationId: Number(resumeId),
  })

  const isFileResume = jobPostResumeRelation.filePath !== null

  return (
    <Layout wide>
      {isFileResume ? (
        <FileResume jobPostResumeRelation={jobPostResumeRelation} />
      ) : (
        <FormResume jobPostResumeRelation={jobPostResumeRelation} />
      )}
    </Layout>
  )
}
