import { getResume } from 'entities/resume'
import { ResumeForm } from 'features/resume-form'

export const UpdateResumePage = async ({
  params,
}: {
  params: { resumeId: string }
}) => {
  const resume = await getResume(params.resumeId)

  return <ResumeForm resume={resume} />
}
