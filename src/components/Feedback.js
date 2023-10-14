import React, { useRef, useState } from 'react'

import { AnimationOnScroll } from 'react-animation-on-scroll'

import { Navigation } from 'swiper/modules'
import { CUSTOMERS_REVIEWED, WHY_CHOOSE_US } from '../common/languages'
import { useSelector } from 'react-redux'
import Slider from 'react-slick'
import ArrowRight from './button/ArrowRight'
import ArrowLeft from './button/ArrowLeft'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import iconDisablePrev from '../assets/control/icon-disable-reviewed.png'
import iconNext from '../assets/control/icon-next-reviewed.svg'

const Feedback = () => {
  const { lang } = useSelector((store) => store.global)
  const swiperRef = useRef()
  const [isPrev, setIsPrev] = useState(false)
  const [isNext, setIsNext] = useState(true)

  const handleHideShowNavigation = (event) => {
    const { isBeginning, isEnd } = event
    setIsPrev(!isBeginning)
    setIsNext(!isEnd)
  }
  return (
    <div className='bg-p50 h-screen pt-1/2 px-10'>
      <div className='max-w-7xl m-auto h-full flex flex-col justify-center'>
        <AnimationOnScroll
          className={``}
          animateIn='animate__fadeInUp'
          offset={100}
          initiallyVisible={true}
          animatePreScroll={false}
          animateOnce={true}
        >
          <div className='mb-9'>
            <h1 className='text-4xl font-semibold'>What Our Customers</h1>
            <h2 className='text-4xl font-semibold'>
              <span className='text-p500'>Reviewed</span>
            </h2>
          </div>

          <div className=' custommer-review-swiper relative '>
            <Swiper
              // onSlideNextTransitionStart={() => setHide(true)}
              // onSlidePrevTransitionStart={() => setHide(false)}
              onSlideChange={(e) => handleHideShowNavigation(e)}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper
              }}
              className=''
              slidesPerView={1}
              speed={700}
              slidesPerGroup={1}
              navigation={false}
              modules={[Navigation]}
              allowTouchMove={true}
              spaceBetween={20}
              breakpoints={{
                // when window width is >= 576px
                768: {
                  spaceBetween: 40,
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                },
                990: {
                  spaceBetween: 40,
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                },
                // when window width is >= 1024px
                1440: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                  spaceBetween: 120,
                },
              }}
            >
              {CUSTOMERS_REVIEWED.map((items, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className='bg-white p-9 rounded-md'>
                      <p className='mb-9'>{items.COMMENT[lang]}</p>
                      <div className='flex items-center'>
                        <div className='w-16 h-16 rounded-full bg-p500'>
                          {/* <img src="" alt="" /> */}
                        </div>
                        <div className='flex flex-col ml-4'>
                          <span className='font-semibold'>{items.NAME}</span>
                          <span className=' text-sm text-black200'>
                            {items.TITLE}
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
            {isPrev ? (
              <div
                className='absolute -top-16 right-12 z-20 w-8 h-8 cursor-pointer'
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <img src={iconNext} alt='' className=' rotate-180 w-7' />
              </div>
            ) : (
              <div className='absolute -top-16 right-12 z-20 w-8 h-8'>
                <img src={iconDisablePrev} alt='' className=' w-7' />
              </div>
            )}
            {isNext ? (
              <div
                className='absolute -top-16 right-0 w-8 h-8 cursor-pointer'
                onClick={() => swiperRef.current?.slideNext()}
              >
                <img src={iconNext} alt='' className='w-7' />
              </div>
            ) : (
              <div
                className='absolute -top-16 right-0 w-8 h-8'
                onClick={() => swiperRef.current?.slideNext()}
              >
                <img src={iconDisablePrev} alt='' className='rotate-180 w-7' />
              </div>
            )}
          </div>
        </AnimationOnScroll>
      </div>
    </div>
  )
}

export default Feedback
