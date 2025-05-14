import { isArray, isNil } from 'lodash-es'

import { AcademyDetail } from 'entities/academy'
import {
  convertStudentTypeToArray,
  CreateJobPost,
  JobPostDetail,
} from 'entities/job-post'

export type FormValues = {
  title: string
  jobDescription: string
  requiredQualification: string
  preferredQualification: string
  benefits: string
  salary: number | null
  salaryNegotiable: string[]
  jobStartDate: string
  dueDate?: string | null
  studentType: string[] | null
}

export const defaultValues: FormValues = {
  title: '',
  jobDescription: '',
  requiredQualification: '',
  preferredQualification: '',
  benefits: '',
  salary: null,
  salaryNegotiable: [],
  jobStartDate: '',
  dueDate: '',
  studentType: null,
}

export const convertToFormValues = (jobPost?: CreateJobPost): FormValues => {
  if (isNil(jobPost)) return defaultValues

  return {
    ...jobPost,
    studentType: convertStudentTypeToArray({
      forKindergarten: jobPost.forKindergarten,
      forElementary: jobPost.forElementary,
      forMiddleSchool: jobPost.forMiddleSchool,
      forHighSchool: jobPost.forHighSchool,
      forAdult: jobPost.forAdult,
    }),
    salaryNegotiable: jobPost.salaryNegotiable ? ['true'] : [],
  }
}

export const convertToCreateJobPostDTO = ({
  studentType,
  ...formValues
}: FormValues): CreateJobPost => {
  return {
    ...formValues,
    salary: Number(formValues.salary),
    forKindergarten: studentType?.includes('Kindergarten') ?? false,
    forElementary: studentType?.includes('Elementary') ?? false,
    forMiddleSchool: studentType?.includes('MiddleSchool') ?? false,
    forHighSchool: studentType?.includes('HighSchool') ?? false,
    forAdult: studentType?.includes('Adult') ?? false,
    dueDate: formValues.dueDate || null,
    jobStartDate: formValues.jobStartDate || '',
    salaryNegotiable:
      isArray(formValues.salaryNegotiable) &&
      formValues.salaryNegotiable.includes('true'),
  }
}

export const convertToJobDetail = (
  jobPost: CreateJobPost,
  academy: AcademyDetail,
): JobPostDetail => {
  return {
    ...jobPost,
    academyId: academy.id,
    academyName: academy.name,
    academyNameEn: academy.nameEn,
    academyRepresentativeName: academy.representativeName,
    academyDescription: academy.description,
    academyLocationType: academy.locationType,
    academyDetailedAddress: academy.detailedAddress,
    lat: academy.lat,
    lng: academy.lng,
    academyImageUrls: academy.imageUrls,
    id: academy.id,
  }
}
