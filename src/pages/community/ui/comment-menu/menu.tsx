import { ComponentProps } from 'react'

import { cn } from 'shared/lib'
import { Dropdown } from 'shared/ui'

import { EditButton } from './edit-button'

type Props = ComponentProps<typeof Dropdown> & {
  isUserMe: boolean
  onClick: () => void
  openEditForm: () => void
  openDeleteDialog: () => void
  openReportCommentModal: () => void
  openReportUserModal: () => void
}

export const CommentMenu = ({
  isUserMe,
  onClick,
  openEditForm,
  openDeleteDialog,
  openReportCommentModal,
  openReportUserModal,
  className,
  ...props
}: Props) => {
  const handleEditButtonClick = () => {
    openEditForm()
    onClick()
  }

  const handleDeleteButtonClick = () => {
    openDeleteDialog()
    onClick()
  }

  const handleReportCommentButtonClick = () => {
    openReportCommentModal()
    onClick()
  }

  const handleReportUserButtonClick = () => {
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
            onClick={handleReportCommentButtonClick}
          >
            Report Comment
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
