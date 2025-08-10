import { ComponentProps } from 'react'
import { toast } from 'react-toastify'

import { cn } from 'shared/lib'
import { Dropdown } from 'shared/ui'

import { EditButton } from './edit-button'

type Props = ComponentProps<typeof Dropdown> & {
  isUserMe: boolean
  isPublic: boolean
  onClick: () => void
  openEditDialog: () => void
  openDeleteDialog: () => void
  openReportPostModal: () => void
  openReportUserModal: () => void
}

export const FeedMenu = ({
  isUserMe,
  isPublic,
  onClick,
  openEditDialog,
  openDeleteDialog,
  openReportPostModal,
  openReportUserModal,
  className,
  ...props
}: Props) => {
  const checkPublicUser = () => {
    if (isPublic) {
      toast.error('You have to sign in')
    }

    return isPublic
  }

  const handleEditButtonClick = () => {
    if (checkPublicUser()) {
      return
    }

    openEditDialog()
    onClick()
  }

  const handleDeleteButtonClick = () => {
    if (checkPublicUser()) {
      return
    }

    openDeleteDialog()
    onClick()
  }

  const handleReportPostButtonClick = () => {
    if (checkPublicUser()) {
      return
    }

    openReportPostModal()
    onClick()
  }

  const handleReportUserButtonClick = () => {
    if (checkPublicUser()) {
      return
    }

    openReportUserModal()
    onClick()
  }

  if (!isUserMe) {
    return (
      <Dropdown {...props} className={cn('w-[144px]', className)}>
        <Dropdown.Item className="p-0">
          <button
            type="button"
            className="body-large w-full px-3 py-3.5 text-left font-medium text-error"
            onClick={handleReportPostButtonClick}
          >
            Report Post
          </button>
        </Dropdown.Item>
        <Dropdown.Item className="p-0">
          <button
            type="button"
            className="body-large w-full px-3 py-3.5 text-left font-medium text-error"
            onClick={handleReportUserButtonClick}
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
        <EditButton onClick={handleEditButtonClick} />
      </Dropdown.Item>
      <Dropdown.Item className="p-0">
        <button
          type="button"
          className="body-large w-full px-3 py-3.5 text-left font-medium text-error"
          onClick={handleDeleteButtonClick}
        >
          Delete
        </button>
      </Dropdown.Item>
    </Dropdown>
  )
}
