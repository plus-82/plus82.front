import { getJobPostResumeByCode } from 'entities/job-post-resume-relation'
import { Resume } from 'features/download-resume/ui/resume'
import { PDFViewer } from 'features/show-resume-file'
import { Layout } from 'shared/ui'

import { convertToResume } from '../model/convert-to-resume'

export const ResumeViewerPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ code: string }>
}) => {
  const { code } = await searchParams

  const jobPostResume = await getJobPostResumeByCode({ code })

  if (jobPostResume.filePath) {
    return (
      <Layout wide>
        <PDFViewer filePath={jobPostResume.filePath} />
      </Layout>
    )
  }

  return (
    <Layout wide>
      <div className="flex justify-center">
        <Resume resume={convertToResume(jobPostResume)} />
      </div>
    </Layout>
  )
}
