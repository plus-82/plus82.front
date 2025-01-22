import { Location } from '../config/location'

export type JobPostDetail = {
  id: number
  title: string
  description: string
  salary: number
  salaryNegotiable: boolean
  jobStartDate: string
  dueDate: string
  academyId: number
  academyName: string
  academyDescription: string
  academyLocationType: Location
  academyDetailedAddress: string
  forKindergarten: boolean
  forElementary: boolean
  forMiddleSchool: boolean
  forHighSchool: boolean
  forAdult: boolean
  academyImageUrls: string[]
}
