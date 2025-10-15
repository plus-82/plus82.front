import { JobPostRelationDetail } from 'entities/job-post-resume-relation'
import {
  DownloadFileResumeRelationButton,
  DownloadResumeRelationButton,
} from 'features/download-resume'

type Props = {
  resumeRelation: JobPostRelationDetail
}

export const PdfDownloadButton = ({ resumeRelation }: Props) => {
  const hasFile = resumeRelation.filePath !== null

  return (
    <div className="flex justify-end">
      {hasFile ? (
        <DownloadFileResumeRelationButton resumeRelation={resumeRelation} />
      ) : (
        <DownloadResumeRelationButton resumeRelation={resumeRelation} />
      )}
    </div>
  )
}
