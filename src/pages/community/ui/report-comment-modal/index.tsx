import { Modal } from 'shared/ui'

import { ReportCommentForm } from './form'

type Props = {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
  commentId: number
}

export const ReportCommentModal = ({
  isOpen,
  onOpenChange,
  commentId,
}: Props) => {
  const handleSuccess = () => {
    onOpenChange(false)
  }

  return (
    <Modal open={isOpen} onOpenChange={onOpenChange}>
      <Modal.Content className="h-[492px] w-[500px] gap-0">
        <Modal.Title className="title-large mb-8 mt-3 h-7 text-center font-bold text-gray-900">
          Report Comment
        </Modal.Title>
        <Modal.Description className="hidden">Report comment</Modal.Description>
        <ReportCommentForm onSuccess={handleSuccess} commentId={commentId} />
      </Modal.Content>
    </Modal>
  )
}
