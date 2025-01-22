import { ChangeEvent } from 'react'

import { TextArea } from 'shared/ui'

const PLACEHOLDER =
  'Introduction\n' +
  '•  Expression of interest in the position\n' +
  '•  Brief overview of qualifications\n\n' +
  'Why I Want to Work at [Academy]\n' +
  "•  Alignment with academy's values and methods\n" +
  '•  Specific aspects that appeal to the applicant\n\n' +
  'Why I Want to Work in Korea\n' +
  '•  Interest in Korean culture and education\n' +
  '•  Desire for cultural immersion and contribution\n\n' +
  'Relevant Experience and Skills\n' +
  '•  Previous teaching experience\n' +
  '•  Teaching philosophy and accomplishments'

type Props = {
  coverLetter: string
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

export const CoverLetterForm = ({ coverLetter, onChange }: Props) => {
  return (
    <div className="w-full">
      <div className="flex h-11 items-center">
        <h2 className="title-medium font-bold text-gray-900">Cover letter</h2>
      </div>
      <TextArea
        value={coverLetter}
        onChange={onChange}
        placeholder={PLACEHOLDER}
        fullWidth
        className="h-[336px]"
      />
    </div>
  )
}
