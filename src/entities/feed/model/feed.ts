export type Comment = {
  id: number
  comment: string
  createdAt: string
  likeCount: number
  userId: number
  userName: string
  isLiked: boolean
}

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

export type FeedDetail = Feed & {
  feedVisibility: 'PUBLIC' | 'PRIVATE'
  comments: Comment[]
}

export type FeedLike = {
  id: number
  createdAt: string
  userId: number
  name: string
  profileImagePath: string
}
