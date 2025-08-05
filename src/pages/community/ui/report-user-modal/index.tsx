import { Modal } from 'shared/ui'

import { ReportUserForm } from './form'

type Props = {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
  userId: number
}

export const ReportUserModal = ({ isOpen, onOpenChange, userId }: Props) => {
  const handleSuccess = () => {
    onOpenChange(false)
  }

  return (
    <Modal open={isOpen} onOpenChange={onOpenChange}>
      <Modal.Content className="h-[492px] w-[500px] gap-0">
        <Modal.Title className="title-large mb-8 mt-3 h-7 text-center font-bold text-gray-900">
          Report User
        </Modal.Title>
        <Modal.Description className="hidden">Report user</Modal.Description>
        <ReportUserForm onSuccess={handleSuccess} userId={userId} />
      </Modal.Content>
    </Modal>
  )
}
