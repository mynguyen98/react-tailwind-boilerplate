import React from 'react'
import { MAIN_CONTENT } from '../common/languages'
import { useSelector } from 'react-redux'
import heroMapImg from '../assets/heroMapImg.svg'
import Type from './TypeWriter'
import Button from './button/Button'
const Hero = () => {
  const { lang } = useSelector((store) => store.global)

  return (
    <div className=' pt-[90px] bg-bgMain h-screen flex items-center px-10'>
      <div className='max-w-7xl m-auto '>
        <div className='flex gap-x-5'>
          <div className='w-1/2'>
            <div>
              <h1 className=' text-[48px] font-bold text-white mb-5'>
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
          </div>
          <div className='w-1/2'>
            <img src={heroMapImg} alt='hero map img' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
