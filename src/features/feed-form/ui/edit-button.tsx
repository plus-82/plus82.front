import { useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useFormContext, useWatch } from 'react-hook-form'
import { toast } from 'react-toastify'

import { feedQueries, updateFeed } from 'entities/feed'
import { isServerError, useServerErrorHandler } from 'shared/api'
import { Button } from 'shared/ui'

import { convertFormValuesToUpdateFeedValues } from '../model/converter'
import { type FormValues } from '../model/form-values'

type Props = {
  feedId?: number
  onSuccess: () => void
}

export const EditButton = ({ feedId, onSuccess }: Props) => {
  const queryClient = useQueryClient()

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
    toast.success('Post updated successfully')
    queryClient.invalidateQueries({
      queryKey: feedQueries.item(feedId!).queryKey,
    })
    router.refresh()
  }

  const submitForm = async (data: FormValues) => {
    if (!feedId) return

    const convertedValues = convertFormValuesToUpdateFeedValues(data)
    const response = await updateFeed({
      feedId,
      ...convertedValues,
    })

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
      Edit
    </Button>
  )
}
