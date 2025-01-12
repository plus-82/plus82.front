'use client'

import { isEmpty, isNil } from 'lodash-es'
import { useState } from 'react'
import { Navigation, A11y } from 'swiper/modules'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

import { colors } from 'shared/config'
import { Icon, Image } from 'shared/ui'

export const PostingImageSwiper = ({ images }: { images: string[] }) => {
  const [swiper, setSwiper] = useState<SwiperClass>()
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(images.length <= 1)

  const handlePrevButtonClick = () => {
    swiper?.slidePrev()
  }

  const handleNextButtonClick = () => {
    swiper?.slideNext()
  }

  return (
    <div className="swiper-about relative">
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        className="w-[720px]"
        onSlideChange={e => {
          setIsBeginning(e.isBeginning)
          setIsEnd(e.isEnd)
        }}
        onSwiper={e => {
          setSwiper(e)
        }}
      >
        {isEmpty(images) || isNil(images) ? (
          <SwiperSlide>
            <Image
              src=""
              alt="job post image"
              className="mb-6 h-[410px] w-full rounded-2xl"
            />
          </SwiperSlide>
        ) : (
          images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                src={image}
                alt="job post image"
                className="mb-6 h-[410px] w-full rounded-2xl"
              />
            </SwiperSlide>
          ))
        )}
      </Swiper>
      <div className="swiper-navigation">
        <button
          className="absolute left-4 top-1/2 z-10 flex !h-9 !w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white shadow-md disabled:cursor-default disabled:opacity-50"
          onClick={handlePrevButtonClick}
          disabled={isBeginning}
        >
          <span className="sr-only">이전</span>
          <Icon name="ChevronLeft" size="medium" color={colors.gray[700]} />
        </button>
        <button
          className="absolute right-4 top-1/2 z-10 flex !h-9 !w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white shadow-md disabled:cursor-default disabled:opacity-50"
          onClick={handleNextButtonClick}
          disabled={isEnd}
        >
          <span className="sr-only">다음</span>
          <Icon name="ChevronRight" size="medium" color={colors.gray[700]} />
        </button>
      </div>
    </div>
  )
}
