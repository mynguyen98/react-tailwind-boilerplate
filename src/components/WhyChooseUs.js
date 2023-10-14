import React, { useState } from 'react'
import { WHY_CHOOSE_US } from '../common/languages'
import { useSelector } from 'react-redux'
import Slider from 'react-slick'
import ArrowRight from './button/ArrowRight'
import ArrowLeft from './button/ArrowLeft'
import { AnimationOnScroll } from 'react-animation-on-scroll'
const WhyChooseUs = () => {
  const { lang } = useSelector((store) => store.global)
  const [isLeftShow, setIsLeftShow] = useState(false)
  const [isRightShow, setIsRightShow] = useState(true)

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: isRightShow && <ArrowRight />,
    prevArrow: isLeftShow && <ArrowLeft />,
    beforeChange: (e) => {
      // console.log(e)
      // if (e === 0) setIsRightShow(false)
      // if (e > 0) setIsRightShow(true)
    },
    afterChange: (e) => {
      console.log(e)
      // if (e === 0) setIsLeftShow(false)
      // if (e > 0) setIsLeftShow(true)
    },
  }
  return (
    <div className='bg-bgMain px-10 m-auto flex items-center my-auto flex items-center'>
      <AnimationOnScroll
        className={``}
        animateIn='animate__fadeInUp'
        offset={100}
        initiallyVisible={true}
        animatePreScroll={false}
      >
        <div className='max-w-7xl my-auto overflow-hidden  -w h-screen pt-[120px] '>
          <h2 className='text-6xl text-white mb-10'>
            Why choose Cross<span className='text-p500'>Docker</span>
          </h2>
          <div className='text-white why-choose-us--slider'>
            <Slider {...sliderSettings}>
              {WHY_CHOOSE_US.map((items, index) => {
                return (
                  <div className='flex flex-col gap-10'>
                    {items.map((item, index) => {
                      return (
                        <div className='flex gap-5 mb-5'>
                          <div className=' w-20 h-full border border-white'>
                            <img src={item.icon} alt='icon desc' />
                          </div>
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
                )
              })}
            </Slider>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  )
}

export default WhyChooseUs
