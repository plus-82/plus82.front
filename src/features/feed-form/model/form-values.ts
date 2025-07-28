export type FormValues = {
  content: string
  image: {
    imageId: string | null
    image: File | null
    url: string | null
  }
  feedVisibility: 'PUBLIC' | 'PRIVATE'
}

export const defaultValues: FormValues = {
  content: '',
  image: {
    imageId: null,
    image: null,
    url: null,
  },
  feedVisibility: 'PUBLIC',
}
