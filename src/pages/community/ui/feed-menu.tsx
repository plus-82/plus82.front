'use client'

import { useQuery } from '@tanstack/react-query'
import { ComponentProps, MouseEvent, useState } from 'react'
import { usePopper } from 'react-popper'

import { userQueries } from 'entities/user'
import { colors } from 'shared/config'
import { cn, useDropdown } from 'shared/lib'
import { Dropdown, Icon } from 'shared/ui'

type MenuProps = ComponentProps<typeof Dropdown> & {
  isUserMe: boolean
}

export const FeedMenu = ({
  isUserMe,
  onClick,
  className,
  ...props
}: MenuProps) => {
  if (!isUserMe) {
    return (
      <Dropdown {...props} className={cn('w-[144px]', className)}>
        <Dropdown.Item className="p-0">
          <button
            type="button"
            className="body-large w-full px-3 py-3.5 text-left font-medium text-error"
          >
            Report Post
          </button>
        </Dropdown.Item>
        <Dropdown.Item className="p-0">
          <button
            type="button"
            className="body-large w-full px-3 py-3.5 text-left font-medium text-error"
          >
            Report User
          </button>
        </Dropdown.Item>
      </Dropdown>
    )
  }

  return (
    <Dropdown {...props} className={cn('w-[144px]', className)}>
      <Dropdown.Item className="p-0">
        <button
          type="button"
          className="body-large w-full px-3 py-3.5 text-left font-medium"
        >
          Edit
        </button>
      </Dropdown.Item>
      <Dropdown.Item className="p-0">
        <button
          type="button"
          className="body-large w-full px-3 py-3.5 text-left font-medium text-error"
        >
          Delete
        </button>
      </Dropdown.Item>
    </Dropdown>
  )
}

type MenuButtonProps = {
  isPublic: boolean
  creatorId: number
}

export const MenuButton = ({ isPublic, creatorId }: MenuButtonProps) => {
  const { data: userMe } = useQuery({
    ...userQueries.teacherMe(),
    enabled: !isPublic,
  })

  const [targetElement, setTargetElement] = useState<HTMLButtonElement | null>(
    null,
  )
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null,
  )
  const { styles, attributes } = usePopper(targetElement, popperElement, {
    placement: 'bottom-start',
  })

  const { isOpen, toggleIsOpen, dropdownRef } = useDropdown()

  const isUserMe = userMe?.id === creatorId

  const handleMenuClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    toggleIsOpen()
  }

  const handleDropdownItemClick = () => {
    toggleIsOpen()
  }

  return (
    <div ref={dropdownRef}>
      <button
        className="flex h-12 w-12 items-center justify-center"
        ref={setTargetElement}
        onClick={handleMenuClick}
      >
        <Icon
          name="Dot"
          size="custom"
          color={colors.gray[700]}
          className="h-8 w-8 rotate-90"
        />
      </button>
      {isOpen && (
        <FeedMenu
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
          isUserMe={isUserMe}
          onClick={handleDropdownItemClick}
        />
      )}
    </div>
  )
}
