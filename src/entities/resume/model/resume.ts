export type Resume = {
  id: number
  title: string
  personalIntroduction: string
  firstName: string
  lastName: string
  email: string
  degree: string
  major: string
  genderType: 'MALE' | 'FEMALE'
  birthDate: string
  hasVisa: boolean
  visaType: 'E7' | 'E2' | 'Others'
  isRepresentative: boolean
  forKindergarten: boolean
  forElementary: boolean
  forMiddleSchool: boolean
  forHighSchool: boolean
  forAdult: boolean
  countryId: number
  residenceCountryId: number
  createdAt: string
  updatedAt: string
  profileImagePath?: string
  filePath?: string
}

export type CreateResume = Omit<
  Resume,
  'id' | 'createdAt' | 'updatedAt' | 'profileImagePath' | 'filePath'
>

export type ResumeSummary = Omit<
  Resume,
  | 'countryId'
  | 'residenceCountryId'
  | 'forKindergarten'
  | 'forElementary'
  | 'forMiddleSchool'
  | 'forHighSchool'
  | 'forAdult'
  | 'profileImagePath'
  | 'filePath'
  | 'birthDate'
  | 'genderType'
  | 'degree'
  | 'major'
  | 'personalIntroduction'
> & {
  id: number
  hasFile: boolean
}
