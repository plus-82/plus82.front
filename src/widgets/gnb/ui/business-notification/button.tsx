import { useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'

import { notificationQueries } from 'entities/notification'
import { EmptyBoundary } from 'shared/api'
import { colors } from 'shared/config'
import { useDropdown } from 'shared/lib'
import { Dropdown, Icon } from 'shared/ui'

import { BusinessNotificationList, NoNotification } from './list'

export const NotificationButton = () => {
  const queryClient = useQueryClient()

  const { isOpen, toggleIsOpen, close, dropdownRef } = useDropdown()

  const handleClick = () => {
    toggleIsOpen()
  }

  useEffect(() => {
    if (!isOpen) {
      void queryClient.resetQueries({
        queryKey: notificationQueries.businessList().queryKey,
      })
    }
  }, [isOpen, queryClient])

  return (
    <div
      ref={dropdownRef}
      className="relative flex items-center justify-center"
    >
      <button onClick={handleClick}>
        <Icon name="Bell" size="large" color={colors.gray[900]} />
      </button>
      {isOpen && (
        <Dropdown
          className="w-[360px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)]"
          scrollable
          align="right"
          displayLimit={15}
        >
          <EmptyBoundary trigger={isOpen} fallback={<NoNotification />}>
            <BusinessNotificationList close={close} />
          </EmptyBoundary>
        </Dropdown>
      )}
    </div>
  )
}
