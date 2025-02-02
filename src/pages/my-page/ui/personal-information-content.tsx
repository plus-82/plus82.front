'use client'

import { useForm } from 'react-hook-form'

import { Form } from 'shared/form'
import { Button } from 'shared/ui'

import { User } from 'entities/user'

import { PersonalInformationForm } from 'widgets/my-account'

import { convertToFormValues, type FormValues } from '../model/form-values'

type Props = {
  user: User
}

export const PersonalInformationContent = ({ user }: Props) => {
  const form = useForm<FormValues>({
    defaultValues: convertToFormValues(user),
    reValidateMode: 'onSubmit',
  })

  return (
    <div>
      <h2 className="title-large mb-10 text-center font-bold text-gray-900">
        Personal Information
      </h2>
      <Form {...form} className="mb-6 w-fit">
        <PersonalInformationForm className="mb-10" />
        <Button size="large" fullWidth>
          Save
        </Button>
      </Form>
      <button className="body-large ml-auto block text-gray-400 transition-all hover:text-gray-500">
        Delete Account
      </button>
    </div>
  )
}
