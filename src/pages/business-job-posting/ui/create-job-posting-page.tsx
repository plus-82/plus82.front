'use client'

import { useQuery } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'

import { academyQueries } from 'entities/academy'
import { JobPostingForm, SidePanel } from 'features/job-posting-form'
import {
  convertToCreateJobPostDTO,
  convertToJobDetail,
  FormValues,
} from 'features/job-posting-form'
import { PreviewJobPostingButton } from 'features/preview-job-posting'
import { Form } from 'shared/form'
import { Layout } from 'shared/ui'

export const CreateJobPostingPage = () => {
  const { data: academyMe } = useQuery(academyQueries.me())

  const form = useForm<FormValues>()

  const getJobPosting = async () => {
    const values = form.getValues()
    const createJobPost = convertToCreateJobPostDTO(values)

    return convertToJobDetail(createJobPost, academyMe!)
  }

  return (
    <Layout wide>
      <h1 className="display-small mb-10 text-center font-bold text-gray-900">
        공고 등록
      </h1>
      <Form {...form} className="flex gap-[20px]">
        <JobPostingForm className="flex-grow" />
        <div className="space-y-2">
          <SidePanel type="register" />
          <PreviewJobPostingButton
            type="text-button"
            className="ml-auto block"
            onLoad={getJobPosting}
          />
        </div>
      </Form>
    </Layout>
  )
}
