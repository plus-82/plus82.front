import Image from 'next/image'

import { JobPost } from '../../model/job-post'
import { PostingTitle } from '../posting-title'

export const Card = (jobPost: JobPost) => {
  const { imageUrls, title } = jobPost

  return (
    <div className="w-[250px]">
      <div className="relative mb-2 h-[150px] overflow-hidden rounded-xl border border-gray-200">
        <Image
          src={`${process.env.NEXT_PUBLIC_CDN_URL}${imageUrls[0]}`}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <PostingTitle jobPost={jobPost} size="small" />
    </div>
  )
}
