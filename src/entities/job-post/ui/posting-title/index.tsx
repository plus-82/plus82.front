import { capitalize } from 'lodash-es'

import { colors } from 'shared/config'
import { cn } from 'shared/lib'
import { Icon } from 'shared/ui'

import { convertStudentType } from '../../model/convertStudentType'
import { JobPost } from '../../model/job-post'

import * as css from './variants'

type Props = {
  jobPost: JobPost
  size: 'small' | 'medium'
}

export const PostingTitle = ({ jobPost, size }: Props) => {
  const studentType = convertStudentType({
    forKindergarten: jobPost.forKindergarten,
    forElementary: jobPost.forElementary,
    forMiddleSchool: jobPost.forMiddleSchool,
    forHighSchool: jobPost.forHighSchool,
    forAdult: jobPost.forAdult,
  })

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-0.5">
        <h3 className={cn(css.title({ size }))}>{jobPost.title}</h3>
        <p className={cn(css.academyName({ size }))}>{jobPost.academyName}</p>
      </div>
      <ul className="flex flex-col gap-1">
        <li className={cn(css.description({ size }))}>
          <Icon name="LocationFilled" color={colors.gray[500]} size="small" />
          <span>{capitalize(jobPost.locationType)}</span>
        </li>
        <li className={cn(css.description({ size }))}>
          <Icon name="User" color={colors.gray[500]} size="small" />
          <span>{studentType}</span>
        </li>
        {size === 'medium' && (
          <li className={cn(css.description({ size }))}>
            <Icon name="Date" color={colors.gray[500]} size="small" />
            <span>~{jobPost.dueDate}</span>
          </li>
        )}
      </ul>
    </div>
  )
}
