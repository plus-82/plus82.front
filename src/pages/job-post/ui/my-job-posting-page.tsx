import { getJobPostResumeSummary } from 'entities/job-post-resume-relation'

import MyJobPostingContent from './my-job-posting-content'

export const MyJobPostingPage = async () => {
  const summary = await getJobPostResumeSummary()

  return (
    <div className="flex-grow px-[46px] py-10">
      <MyJobPostingContent summary={summary} />
    </div>
  )
}
