import { Location } from '../config/location'

export type JobPostDetail = {
  id: number
  title: string
  jobDescription: string
  requiredQualification: string
  preferredQualification: string
  benefits: string
  salary: number
  salaryNegotiable: boolean
  jobStartDate: string
  dueDate: string
  academyId: number
  academyName: string
  academyNameEn: string
  academyRepresentativeName: string
  academyDescription: string
  academyLocationType: Location
  academyDetailedAddress: string
  detailedAddress: string
  lat: number
  lng: number
  forKindergarten: boolean
  forElementary: boolean
  forMiddleSchool: boolean
  forHighSchool: boolean
  forAdult: boolean
  academyImageUrls: string[]
}
