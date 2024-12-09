import { JobPost } from './job-post'
import { JobPostDetail } from './job-post-detail'

export const convertToJobPost = (data: JobPostDetail): JobPost => {
  return {
    id: data.id,
    title: data.title,
    dueDate: data.dueDate,
    academyId: data.academyId,
    academyName: data.academyName,
    locationType: data.academyLocationType,
    forKindergarten: data.forKindergarten,
    forElementary: data.forElementary,
    forMiddleSchool: data.forMiddleSchool,
    forHighSchool: data.forHighSchool,
    forAdult: data.forAdult,
    imageUrls: data.academyImageUrls,
  }
}
