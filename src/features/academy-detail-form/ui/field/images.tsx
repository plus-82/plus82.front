import { useFieldArray, useFormContext } from 'react-hook-form'

import { Label } from 'shared/ui'

import { FormValues } from '../../model/form-values'
import { ImageUploader } from '../image-uploader'

export const Images = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormValues>()

  const { fields, append, remove, update } = useFieldArray<FormValues>({
    control,
    name: 'images',
  })

  const handleImageChange = (index: number) => (image: File, url: string) => {
    update(index, { image, url })

    const canAddImage = index < 5

    if (canAddImage) {
      append({ image: null, url: null })
    }
  }

  const handleImageDelete = (id: number) => () => {
    const lastImage = fields.at(-1)?.image
    const maxLength = fields.length === 6

    if (lastImage && maxLength) {
      append({ image: null, url: null })
    }

    remove(id)
  }

  return (
    <div>
      <Label required>소개 이미지</Label>
      <p className="body-large mb-4 mt-0.5 font-normal text-gray-500">
        소개 이미지는 최소 1장 이상 등록해 주세요.
      </p>
      <ul className="flex flex-wrap justify-between gap-y-5">
        {fields.map((field, index) => (
          <li key={field.id}>
            <ImageUploader
              src={field.url}
              onChange={handleImageChange(index)}
              onDelete={handleImageDelete(index)}
              className={errors.images && 'border-red-500'}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
