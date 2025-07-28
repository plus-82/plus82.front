import { useRouter } from 'next/navigation'
import { useFormContext, useWatch } from 'react-hook-form'
import { toast } from 'react-toastify'

import { addFeed } from 'entities/feed'
import { isServerError, useServerErrorHandler } from 'shared/api'
import { Button } from 'shared/ui'

import { convertFormValuesToAddFeedValues } from '../model/converter'
import { type FormValues } from '../model/form-values'

type Props = {
  onSuccess: () => void
}

export const PostButton = ({ onSuccess }: Props) => {
  const router = useRouter()
  const { control, handleSubmit } = useFormContext<FormValues>()

  const { handleServerError } = useServerErrorHandler()

  const content = useWatch({
    control,
    name: 'content',
  })

  const isDisabled = content.length === 0

  const handleSuccess = () => {
    onSuccess()
    toast.success('Post added successfully')
    router.refresh()
  }

  const submitForm = async (data: FormValues) => {
    const convertedValues = convertFormValuesToAddFeedValues(data)
    const response = await addFeed(convertedValues)

    if (isServerError(response)) {
      handleServerError(response)
    } else {
      handleSuccess()
    }
  }

  return (
    <Button
      size="large"
      className="w-[93px]"
      disabled={isDisabled}
      onClick={handleSubmit(submitForm)}
    >
      Post
    </Button>
  )
}
