import { Image } from 'shared/ui'

import { JobPost } from '../../model/job-post'
import { PostingTitle } from '../posting-title'

export const Card = (jobPost: JobPost) => {
  const { imageUrls, title } = jobPost

  return (
    <div className="w-[250px]">
      <Image
        src={imageUrls[0]}
        alt={title}
        fill
        className="mb-2 h-[150px] rounded-xl"
      />
      <PostingTitle jobPost={jobPost} size="small" />
    </div>
  )
}
