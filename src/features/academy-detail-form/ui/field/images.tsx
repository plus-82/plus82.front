import { useTranslations } from 'next-intl'
import { useFieldArray, useFormContext } from 'react-hook-form'

import { Label } from 'shared/ui'

import { FormValues } from '../../model/form-values'
import { ImageUploader } from '../image-uploader'

export const Images = () => {
  const t = useTranslations('field')

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
      <Label required>{t('introduction-image.label')}</Label>
      <p className="body-large mb-4 mt-0.5 font-normal text-gray-500">
        {t('introduction-image.description')}
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
