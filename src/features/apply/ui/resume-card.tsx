import Link from 'next/link'
import { PropsWithChildren } from 'react'

import { Card } from 'entities/resume'
import type { Resume } from 'entities/resume'
import { colors } from 'shared/config'
import { Checkbox, Icon } from 'shared/ui'


type Props = {
  resume: Resume
  checked: boolean
  onCheckboxChange: (id: number) => void
}

export const ResumeCard = ({
  resume,
  checked,
  onCheckboxChange,
}: PropsWithChildren<Props>) => {
  const handleCheckboxChange = () => {
    onCheckboxChange(resume.id)
  }

  return (
    <Card size="small">
      <Card.Header>
        <Checkbox checked={checked} onChange={handleCheckboxChange} />
        {resume.hasFile && <Card.FileBadge />}
        {resume.isRepresentative && <Card.RepresentativeBadge />}
      </Card.Header>
      <Card.Title>{resume.title}</Card.Title>
      <Card.Footer>
        <p className="body-medium text-gray-700">{resume.updatedAt}</p>
        <Link
          href={`/resumes/${resume.id}`}
          target="_blank"
          className="flex items-center"
        >
          <Icon name="ChevronRight" size="medium" color={colors.gray[500]} />
        </Link>
      </Card.Footer>
    </Card>
  )
}
