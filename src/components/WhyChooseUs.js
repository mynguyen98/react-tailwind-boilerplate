import React from 'react'
import { WHY_CHOOSE_US } from '../common/languages'
import { useSelector } from 'react-redux'
import Slider from 'react-slick'
const WhyChooseUs = () => {
  const { lang } = useSelector((store) => store.global)
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className='bg-bgMain'>
      <div className='max-w-7xl mx-auto h-screen pt-[120px] '>
        <h2 className='text-6xl text-white'>
          Why choose Cross<span className='text-p500'>Docker</span>
        </h2>
        <div className='text-white why-choose-us--slider'>
          <Slider {...sliderSettings}>
            {WHY_CHOOSE_US.map((items, index) => {
              return (
                <div className='flex flex-col '>
                  {items.map((item, index) => {
                    return (
                      <div className='flex'>
                        <div>
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
    </div>
  )
}

export default WhyChooseUs
