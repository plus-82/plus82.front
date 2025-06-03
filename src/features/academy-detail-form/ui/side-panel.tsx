import { useFormContext, useWatch } from 'react-hook-form'
import { toast } from 'react-toastify'

import { updateAcademyMe } from 'entities/academy'
import { isServerError, useServerErrorHandler } from 'shared/api'
import { Button } from 'shared/ui'

import {
  canRegisterForm,
  convertToUpdateAcademyDetail,
  FormValues,
} from '../model/form-values'

export const SidePanel = () => {
  const { handleSubmit, control } = useFormContext<FormValues>()

  const { handleServerError } = useServerErrorHandler()

  const [
    representativeName,
    name,
    nameEn,
    address,
    detailedAddress,
    description,
    studentType,
    images,
  ] = useWatch({
    control,
    name: [
      'representativeName',
      'name',
      'nameEn',
      'address',
      'detailedAddress',
      'description',
      'studentType',
      'images',
    ],
  })

  const handleRegisterSuccess = () => {
    toast.success('정보를 저장했어요')
  }

  const submitForm = async (data: FormValues) => {
    const response = await updateAcademyMe(convertToUpdateAcademyDetail(data))

    if (isServerError(response)) {
      handleServerError(response)
    } else {
      handleRegisterSuccess()
    }
  }

  return (
    <div className="h-fit w-[340px] shrink-0 rounded-2xl border border-gray-300 p-6">
      <p className="body-large mb-2 text-blue-800">작성에 유의해 주세요</p>
      <div className="mb-6">
        <p className="body-medium text-gray-700">
          입력한 정보는 검색에 반영돼요.
        </p>
        <p className="body-medium text-gray-700">
          중요한 정보를 빠뜨리지 않았는지 확인해 주세요.
        </p>
      </div>
      <div className="space-y-2">
        <Button
          variant="primary"
          size="large"
          fullWidth
          onClick={handleSubmit(submitForm)}
          disabled={
            !canRegisterForm({
              representativeName,
              name,
              nameEn,
              address,
              detailedAddress,
              description,
              studentType,
              images,
            })
          }
        >
          저장하기
        </Button>
      </div>
    </div>
  )
}
