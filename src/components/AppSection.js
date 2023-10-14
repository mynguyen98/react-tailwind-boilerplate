import React from 'react'
import { APP_SECTION } from '../common/languages'
import Button from './button/Button'
import proof1 from '../assets/images/proof-1.png'
import longArrow from '../assets/control/long-arrow.svg'
import proofTopRight from '../assets/control/proof-top-right.svg'
import { AnimationOnScroll } from 'react-animation-on-scroll'
const AppSection = () => {
  return (
    <div className='relative py-[128px] my-auto  h-screen flex  px-10 mb-3'>
      <div className='absolute top-0 right-0'>
        <img src={proofTopRight} alt='' />
      </div>
      <AnimationOnScroll
        className={``}
        animateIn='animate__fadeInUp'
        offset={100}
        initiallyVisible={true}
        animatePreScroll={false}
        animateOnce={true}
      >
        <div className='max-w-7xl flex my-auto'>
          <div className='w-1/2 flex gap-10 flex-col  h-full'>
            <div>
              <h1 className='text-4xl font-semibold'>Proof of delivery</h1>
              <h2 className='text-4xl font-semibold'>
                <span className=' text-black200'>App</span>
                <span className='text-p500'>Section</span>
              </h2>
            </div>
            <div className='flex flex-col gap-1'>
              {APP_SECTION.LIST_FEATURES.map((feature) => {
                return (
                  <div className='flex items-center gap-2 text-base font-semibold'>
                    <img src={longArrow} alt='' />
                    <p>{feature.en}</p>
                  </div>
                )
              })}
            </div>
            <p className=' text-black200'>{APP_SECTION.DESCRIPTION.en}</p>
            <div>
              <Button type='secondary' text='Download Now' />
            </div>
          </div>
          <div className='w-1/2'>
            <div>
              <img src={proof1} alt='' />
            </div>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  )
}

export default AppSection
