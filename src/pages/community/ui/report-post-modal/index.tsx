import { Modal } from 'shared/ui'

import { ReportPostForm } from './form'

type Props = {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
  feedId: number
}

export const ReportPostModal = ({ isOpen, onOpenChange, feedId }: Props) => {
  const handleSuccess = () => {
    onOpenChange(false)
  }

  return (
    <Modal open={isOpen} onOpenChange={onOpenChange}>
      <Modal.Content className="h-[492px] w-[500px] gap-0">
        <Modal.Title className="title-large mb-8 mt-3 h-7 text-center font-bold text-gray-900">
          Report Post
        </Modal.Title>
        <Modal.Description className="hidden">Report post</Modal.Description>
        <ReportPostForm onSuccess={handleSuccess} feedId={feedId} />
      </Modal.Content>
    </Modal>
  )
}
