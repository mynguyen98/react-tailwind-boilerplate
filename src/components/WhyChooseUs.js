import React, { useRef, useState } from 'react'
import SwiperCore from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import { WHY_CHOOSE_US } from '../common/languages'
import { useSelector } from 'react-redux'
import Slider from 'react-slick'
import ArrowRight from './button/ArrowRight'
import ArrowLeft from './button/ArrowLeft'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
const WhyChooseUs = () => {
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
    <div className='bg-bgMain h-screen pt-1/2 px-10'>
      <AnimationOnScroll
        className={`max-w-7xl m-auto h-full flex flex-col justify-center`}
        animateIn='animate__fadeInUp'
        offset={50}
        initiallyVisible={false}
        animatePreScroll={false}
      >
        <div className='  '>
          <h2 className='text-6xl text-white mb-20'>
            Why choose Cross<span className='text-p500'>Docker</span>
          </h2>
        </div>
        <div className=' asset-slider-list relative '>
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
            spaceBetween={40}
            breakpoints={{
              // when window width is >= 576px
              990: {
                spaceBetween: 80,
              },
              // when window width is >= 1024px
              1440: {
                spaceBetween: 120,
              },
            }}
          >
            {WHY_CHOOSE_US.map((items, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className='flex flex-col gap-16'>
                    {items.map((item, index) => {
                      return (
                        <div className='flex h-full gap-5 md:gap-10 mb-5 text-white'>
                          <img
                            src={item.icon}
                            alt='icon desc'
                            className='border border-white p-10'
                          />

                          <div>
                            <h3 className='text-2xl font-semibold'>
                              {item.title[lang]}
                            </h3>
                            <p>{item.desc[lang]}</p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
          {isPrev ? (
            <div
              className='absolute top-1/2 left-0 z-20 w-10 h-10'
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <ArrowLeft />
            </div>
          ) : (
            ''
          )}
          {isNext ? (
            <div
              className='absolute top-1/2 right-0 w-10 h-10'
              onClick={() => swiperRef.current?.slideNext()}
            >
              <ArrowRight />
            </div>
          ) : (
            ''
          )}
        </div>
      </AnimationOnScroll>
    </div>
  )
}

export default WhyChooseUs
