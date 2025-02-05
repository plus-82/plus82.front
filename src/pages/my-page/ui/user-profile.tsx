import { colors } from 'shared/config'
import { isNilOrEmptyString } from 'shared/lib'
import { Button, Icon, Image } from 'shared/ui'

import { getUserMe } from 'entities/user'

export const UserProfile = async () => {
  const user = await getUserMe()

  const hasImage = !isNilOrEmptyString(user.profileImagePath)

  return (
    <div className="mb-10 flex gap-6 border-b border-gray-300 pb-4">
      <div className="flex flex-col items-center gap-3">
        <div className="overflow-hidden rounded-full">
          <Image
            src={user.profileImagePath}
            alt={`${user.firstName} ${user.lastName} profile image`}
            className="h-[110px] w-[110px]"
            fallback={
              <div className="flex h-[110px] w-[110px] items-center justify-center rounded-full bg-gray-300">
                <Icon
                  name="User"
                  size="custom"
                  className="h-[100px] w-[100px]"
                  color={colors.gray[700]}
                />
              </div>
            }
          />
        </div>
        <div className="flex gap-2">
          <Button variant="lined" size="small">
            <Icon name="Plus" size="small" color={colors.gray[700]} />
            Upload
          </Button>
          <Button variant="lined" size="small" disabled={!hasImage}>
            <Icon name="Delete" size="small" color={colors.gray[700]} />
            Delete
          </Button>
        </div>
      </div>
      <div>
        <h2 className="title-large mb-2 font-bold text-gray-900">{`${user.firstName} ${user.lastName}`}</h2>
        <div className="body-large mb-1 flex items-center gap-1 font-normal text-gray-700">
          <Icon name="Message" size="large" color={colors.gray[500]} />
          <span>{user.email}</span>
        </div>
        <div className="body-large flex items-center gap-1 font-normal text-gray-700">
          <Icon name="Earth" size="large" color={colors.gray[500]} />
          <span>{`(+${user.countryCallingCode}) ${user.countryNameEn}`}</span>
        </div>
      </div>
    </div>
  )
}
