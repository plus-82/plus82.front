type Props = {
  jobPostTitle: string
  submittedDate: string
}

export const Header = ({ jobPostTitle, submittedDate }: Props) => {
  return (
    <div className="mb-4">
      <h2 className="title-medium mb-1 font-bold text-gray-900">
        {jobPostTitle}
      </h2>
      <div className="flex items-center justify-between">
        <p className="title-small font-medium text-gray-700">
          <span>지원 일자: </span>
          <span>{submittedDate}</span>
        </p>
      </div>
    </div>
  )
}
