import { useFormContext, useWatch } from 'react-hook-form'

import { Button } from 'shared/ui'

import { type FormValues } from '../model/form-values'

export const PostButton = () => {
  const { control } = useFormContext<FormValues>()

  const content = useWatch({
    control,
    name: 'content',
  })

  const isDisabled = content.length === 0

  return (
    <Button size="large" className="w-[93px]" disabled={isDisabled}>
      Post
    </Button>
  )
}
