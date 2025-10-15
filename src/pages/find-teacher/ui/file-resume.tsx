import { JobPostRelationDetail } from 'entities/job-post-resume-relation'
import { PDFViewer } from 'features/show-resume-file'
import { CoverLetter } from 'widgets/application-resume'

import { PdfDownloadButton } from './pdf-download-button'

export const FileResume = ({
  jobPostResumeRelation,
}: {
  jobPostResumeRelation: JobPostRelationDetail
}) => {
  return (
    <div>
      <PdfDownloadButton resumeRelation={jobPostResumeRelation} />
      <PDFViewer
        filePath={jobPostResumeRelation.filePath!}
        className="mb-8 h-fit"
      />
      {jobPostResumeRelation.coverLetter && (
        <CoverLetter coverLetter={jobPostResumeRelation.coverLetter} />
      )}
    </div>
  )
}
