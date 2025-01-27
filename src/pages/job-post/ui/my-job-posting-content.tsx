'use client'

import { useState } from 'react'

import {
  Status,
  StatusPanel,
  StatusSummary,
} from 'entities/job-post-resume-relation'

type Props = {
  summary: StatusSummary
}

const MyJobPostingContent = ({ summary }: Props) => {
  const [active] = useState<Status>('total')

  return (
    <>
      <StatusPanel active={active} summary={summary} />
      <div>Table</div>
    </>
  )
}

export default MyJobPostingContent
