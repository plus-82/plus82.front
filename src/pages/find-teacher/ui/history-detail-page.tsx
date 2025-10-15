import { getBusinessJobPostResumeRelation } from 'entities/job-post-resume-relation'
import { Layout } from 'shared/ui'

import { ContactForm } from './contact-form'
import { FileResume } from './file-resume'
import { FormResume } from './form-resume'

type Params = {
  historyId: string
}

export const HistoryDetailPage = async ({
  params,
}: {
  params: Promise<Params>
}) => {
  const { historyId } = await params

  const jobPostResumeRelation = await getBusinessJobPostResumeRelation({
    jobPostResumeRelationId: Number(historyId),
  })

  const isFileResume = jobPostResumeRelation.filePath !== null

  return (
    <Layout wide>
      {isFileResume ? (
        <FileResume jobPostResumeRelation={jobPostResumeRelation} />
      ) : (
        <FormResume jobPostResumeRelation={jobPostResumeRelation} />
      )}
      <div className="pt-20">
        <h2 className="title-large mb-4 font-medium text-gray-900">
          선생님한테 보낸 메시지
        </h2>
        <ContactForm
          teacherName={`${jobPostResumeRelation.firstName} ${jobPostResumeRelation.lastName}`}
          academyName="학원"
          readOnly
        />
      </div>
    </Layout>
  )
}
