import { FormValues } from './form-values'

export const convertFormValuesToAddFeedValues = (data: FormValues) => {
  return {
    content: data.content,
    ...(data.image.image && { image: data.image.image }),
    feedVisibility: data.feedVisibility,
  }
}
