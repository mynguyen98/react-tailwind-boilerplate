import React from 'react'
import { MAIN_CONTENT } from '../common/languages'
import { useSelector } from 'react-redux'
import heroMapImg from '../assets/heroMapImg.svg'
import Type from './TypeWriter'
import Button from './button/Button'
import { AnimationOnScroll } from 'react-animation-on-scroll'
const Hero = () => {
  const { lang } = useSelector((store) => store.global)

  return (
    <div className=' pt-[120px] bg-bgMain h-screen  flex items-center px-10 py-20'>
      <div className='max-w-7xl m-auto '>
        <div className='grid grid-cols-2 gap-x-5'>
          {/* <AnimationOnScroll
            className={`w-1/2`}
            animateIn='animate__fadeInUp'
            offset={50}
            initiallyVisible={false}
            animatePreScroll={true}
          > */}
          <div>
            <h1 className=' text-[48px] font-bold text-white mb-5 whitespace-nowrap'>
              Wellcome to
            </h1>
            <div className='type-container mb-5'>
              <div>
                {/* <span className=' text-6xl'>Cross</span>
                <span className='text-6xl text-p500'>Docker</span> */}
                <Type />
              </div>
            </div>
            <p className='text-white font-bold text-base'>
              {MAIN_CONTENT.HOME_DISCRIPTION[lang]}
            </p>
            <div className='mt-16'>
              <Button type='secondary' text='Get started' />
            </div>
          </div>
          {/* </AnimationOnScroll> */}

          <div className='flex justify-center items-center'>
            <img src={heroMapImg} alt='hero map img' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
