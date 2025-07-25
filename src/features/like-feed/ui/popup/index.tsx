import { linkVariants, Modal, AnimatedCount } from 'shared/ui'

import { LikedPeopleList } from './list'

type Props = {
  feedId: number
  likeCount: number
}

export const LikedPeopleButton = ({ feedId, likeCount }: Props) => {
  return (
    <Modal>
      <Modal.Trigger asChild>
        <button className={linkVariants({ variant: 'secondary' })}>
          <AnimatedCount count={likeCount} /> Likes
        </button>
      </Modal.Trigger>
      <Modal.Content className="flex h-[540px] w-[500px] flex-col gap-0">
        <Modal.Title className="title-large mb-2 text-center font-bold text-gray-900">
          People who like this post
        </Modal.Title>
        <LikedPeopleList feedId={feedId} />
      </Modal.Content>
    </Modal>
  )
}
