import { Feed } from 'entities/feed'

import { FormValues } from './form-values'

export const convertFormValuesToAddFeedValues = (data: FormValues) => {
  return {
    content: data.content,
    ...(data.image.image && { image: data.image.image }),
    feedVisibility: data.feedVisibility,
  }
}

export const convertFeedToFormValues = (data: Feed) => {
  return {
    content: data.content,
    image: {
      imageId: data.imagePath ? 1 : null, // TODO: 이미지 ID 수정 필요
      image: null,
      url: data.imagePath,
    },
    feedVisibility: data.feedVisibility,
  }
}

export const convertFormValuesToUpdateFeedValues = (data: FormValues) => {
  return {
    content: data.content,
    ...(data.image.image && { newImage: data.image.image }),
    ...(data.image.imageId && { oldImageId: data.image.imageId }),
    feedVisibility: data.feedVisibility,
  }
}
