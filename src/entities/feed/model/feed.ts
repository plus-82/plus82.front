export type Feed = {
  id: number
  content: string
  createdAt: string
  creatorName: string
  creatorProfileImagePath: string | null
  imagePath: string | null
  commentCount: number
  likeCount: number
  isLiked: boolean
  isCommented: boolean
}

export type FeedLike = {
  id: number
  createdAt: string
  userId: number
  name: string
  profileImagePath: string
}
