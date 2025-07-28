import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

import { deleteFeed } from 'entities/feed'
import { isServerError, useServerErrorHandler } from 'shared/api'
import { Button, Modal } from 'shared/ui'

type Props = {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
  feedId: number
}

export const DeleteFeedModal = ({ isOpen, onOpenChange, feedId }: Props) => {
  const router = useRouter()
  const { handleServerError } = useServerErrorHandler()

  const handleSuccess = () => {
    onOpenChange(false)
    toast.success('Post deleted successfully')
    router.refresh()
  }

  const handleDeleteButtonClick = async () => {
    const response = await deleteFeed(feedId)

    if (isServerError(response)) {
      handleServerError(response)
    } else {
      handleSuccess()
    }
  }

  return (
    <Modal open={isOpen} onOpenChange={onOpenChange}>
      <Modal.Content className="h-[256px] w-[500px] gap-0">
        <Modal.Title className="title-large mb-2 mt-3 h-7 text-center font-bold text-gray-900">
          Delete Post
        </Modal.Title>
        <Modal.Description className="title-small mb-10 text-center font-medium text-gray-900">
          Do you really want to delete this post?
          <br />
          Once deleted, it can&apos;t be undone.
        </Modal.Description>
        <Modal.Footer>
          <Modal.Close asChild>
            <Button variant="lined" size="large" className="w-[93px]">
              Cancel
            </Button>
          </Modal.Close>
          <Button
            variant="primary"
            size="large"
            className="w-[93px]"
            onClick={handleDeleteButtonClick}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  )
}
