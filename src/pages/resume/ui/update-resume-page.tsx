import { getResume } from 'entities/resume'
import { updateResume } from 'entities/resume/api/update-resume'
import { ResumeForm } from 'features/resume-form'

export const UpdateResumePage = async ({
  params,
}: {
  params: { resumeId: string }
}) => {
  const resume = await getResume(params.resumeId)

  return <ResumeForm resume={resume} submit={updateResume} />
}
