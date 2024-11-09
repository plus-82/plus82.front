import { colors } from 'shared/config'
import { Icon } from 'shared/ui'

export const Card = () => {
  return (
    <div className="w-[250px]">
      <div className="mb-2 flex h-[150px] w-full items-center justify-center rounded-xl border border-gray-200 bg-gray-200">
        Image
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-0.5">
          <h3 className="title-medium text-gray-900">ESL Teaching</h3>
          <p className="body-large font-normal text-gray-500">학원명</p>
        </div>
        <ul className="flex flex-col gap-1">
          <li className="body-large flex items-center gap-0.5 font-normal text-gray-700">
            <Icon name="LocationFilled" color={colors.gray[500]} size="small" />
            <span>Seoul</span>
          </li>
          <li className="body-large flex items-center gap-0.5 font-normal text-gray-700">
            <Icon name="User" color={colors.gray[500]} size="small" />
            <span>Middleschool</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
