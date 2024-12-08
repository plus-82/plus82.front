import { Location } from '../config/location'

export type JobPost = {
  id: number
  title: string
  dueDate: string
  academyId: number
  academyName: string
  locationType: Location
  forKindergarten: boolean
  forElementary: boolean
  forMiddleSchool: boolean
  forHighSchool: boolean
  forAdult: boolean
  imageUrls: string[]
}
