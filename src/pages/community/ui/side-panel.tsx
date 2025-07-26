'use client'

import { useQuery } from '@tanstack/react-query'

import { userQueries } from 'entities/user'
import { colors } from 'shared/config'
import { Button, Icon, Image } from 'shared/ui'

type Props = {
  isPublic: boolean
}

export const SidePanel = ({ isPublic }: Props) => {
  const { data: userMe } = useQuery({
    ...userQueries.teacherMe(),
    enabled: !isPublic,
  })

  if (isPublic) {
    return (
      <div className="sticky top-10 h-fit w-[270px] shrink-0 space-y-4 rounded-xl border border-gray-300 p-5">
        <p className="body-large text-center font-medium text-gray-900">
          Sign in for Plus 82
          <br />
          and enjoy more features
        </p>
        <div className="space-y-2">
          <Button
            variant="primary"
            size="large"
            fullWidth
            as="a"
            href="/sign-in"
          >
            Sign In
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="sticky top-10 h-fit w-[270px] shrink-0 space-y-3 rounded-xl border border-gray-300 p-5">
      <div className="flex items-start gap-3">
        <Image
          src={userMe?.profileImagePath ?? ''}
          alt={`${userMe?.firstName} ${userMe?.lastName} profile image`}
          className="h-14 w-14 rounded-full"
          fallback={
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-300">
              <Icon
                name="User"
                size="custom"
                className="h-12 w-12"
                color={colors.gray[700]}
              />
            </div>
          }
        />
        <div className="grow">
          <p className="title-small font-medium text-gray-900">
            {userMe?.firstName} {userMe?.lastName}
          </p>
        </div>
      </div>
      <Button variant="tonal" size="large" fullWidth>
        Write a post
      </Button>
    </div>
  )
}
